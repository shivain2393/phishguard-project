from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import re

app = Flask(__name__)


CORS(app)

model = joblib.load('url_classification_model.pkl')

def is_valid_url(url):
    return re.match(r'^(https?://)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+$', url) is not None

def extract_features(url):
    features = []
    features.append(len(url))
    features.append(len(url.split('//')[0]))
    features.append(url.count('.'))
    features.append(url.count('-'))
    features.append(url.count('@'))
    features.append(url.count('?'))
    features.append(url.count('&'))
    features.append(url.count('='))
    features.append(url.count('_'))
    features.append(url.count('~'))
    features.append(url.count('%'))
    features.append(url.count('/'))
    features.append(url.count(':'))
    features.append(url.count(','))
    features.append(url.count(';'))
    features.append(url.count('$'))
    features.append(url.count(' '))

    features.append(1 if 'www' in url else 0)
    features.append(1 if 'com' in url else 0)
    features.append(1 if 'http' in url else 0)
    features.append(1 if 'https' in url else 0)

    domain = re.findall(r"https?://([^/]+)", url)
    domain = domain[0] if domain else url
    domain_parts = domain.split('.')
    features.append(1 if len(domain_parts) < 2 else 0)
    features.append(len(domain_parts[0]))  
    features.append(len(domain))  

    features.append(len(domain_parts[-1]) < 2)  
    features.append(len(domain_parts[0]) < 3)  

    suspicious_keywords = ['login', 'secure', 'account', 'update', 'bank', 'verify']
    features.append(1 if any(keyword in url.lower() for keyword in suspicious_keywords) else 0)

    digit_count = sum(c.isdigit() for c in url)
    letter_count = sum(c.isalpha() for c in url)
    features.append(digit_count)
    features.append(digit_count / len(url) if len(url) > 0 else 0)

    features.append(len(domain) / len(url) if len(url) > 0 else 0)

    common_tlds = ['com', 'net', 'org', 'edu']
    features.append(1 if any(domain.endswith(tld) for tld in common_tlds) else 0)

    uncommon_tlds = ['cm', 'top', 'xyz', 'c2m']
    features.append(1 if any(domain.endswith(tld) for tld in uncommon_tlds) else 0)

    features.append(1 if letter_count == 0 else 0)
    features.append(1 if digit_count > len(url) / 2 else 0)

    features.append(1 if len(url) < 10 else 0)
    features.append(len(domain_parts) - 1)

    features.extend([0] * (87 - len(features)))

    return features

def predict_url(url):
    if not is_valid_url(url):
        return 'Phishing'  
    
    features_array = np.array(extract_features(url)).reshape(1, -1)
    prediction = model.predict(features_array)
    return 'Phishing' if prediction[0] == 1 else 'Legitimate'

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    url = data.get('url')
    print(url)

    if not url:
        return jsonify({'error': 'URL not provided'}), 400
    
    result = predict_url(url)
    return jsonify({'url': url, 'prediction': result})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
