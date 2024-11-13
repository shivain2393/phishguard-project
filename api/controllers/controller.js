export const predictUrl = async (req, res) => {
    try {
        const urlFormat = /^https?:\/\//i;
        let { url } = req.body;

        console.log("Received URL: ", url);

        if (!url || typeof url !== 'string') {
            return res.status(400).json({ error: 'URL is required and must be a string' });
        }

        try {
            if (!urlFormat.test(url)) {
                console.log("Protocol missing, adding 'http://'");
                url = 'http://' + url;
            }


            console.log("Processed URL: ", url);

   
            try {
                new URL(url);
            } catch (error) {
                console.log("Invalid URL format:", error.message);
                return res.status(400).json({ error: 'Invalid URL format' });
            }

        } catch (error) {
            console.log("Error while checking protocol: ", error.message);
            return res.status(500).json({ error: 'Error checking URL format' });
        }


        const prediction = await sendToModel(url)
        console.log(prediction)
        let result;

        if(prediction === 'Legitimate'){
            result = 'safe'
        } else {
            result = 'phishing'
        }

        console.log(result)

        return res.status(200).json({
            message: "URL received and processed successfully",
            url,
            result,
        });
    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ error: error.message });
    }
};

const sendToModel = async (url) => {
    try {

        const response = await fetch('http://localhost:5000/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        })

        const data = await response.json();

        if(!data) throw new Error;

        return data.prediction;
        
    } catch (error) {
        console.log("Error sending url to Model : ", error.message)
    }
}