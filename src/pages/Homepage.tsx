'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Info, Loader2 } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Homepage = () => {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState<null | 'safe' | 'phishing' | 'invalid-url'>(null)
  const [isLoading, setIsLoading] = useState(false)
  const urlPattern =
    /^(https?:\/\/)?((([a-zA-Z0-9\-_\.]+)\.)+[a-zA-Z]{2,6})(:[0-9]{1,5})?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      if (!urlPattern.test(url)) {
        setResult('invalid-url');
        setIsLoading(false);
        return;
      }
      const response = await fetch('http://localhost:3000/api/url/predict-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })
      const data = await response.json()
      setTimeout(() => {
        setResult(data.result)
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error('Error checking URL:', error)
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-growcontainer mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Check for Phishing URLs</CardTitle>
            <CardDescription className="text-center">
              Enter a URL below to check if it's a potential phishing site. Stay safe online!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Enter URL to check (e.g., https://example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="flex-grow"
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button type="button" variant="outline" size="icon">
                        <Info className="h-4 w-4" />
                        <span className="sr-only">URL format info</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Enter a complete URL including http:// or https://</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                  Checking
                  <Loader2 className='w-4 h-4 animate-spin'/>
                  </>
                ): 'Check URL'}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            {result && (
              <div className={`p-4 rounded-lg w-full ${result === 'safe' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'}`}>
                {result === 'safe' ? (
                  <div className="flex items-center justify-center text-green-800 dark:text-green-200">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    <span>This URL appears to be safe.</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-red-800 dark:text-red-200">
                    <AlertCircle className="h-6 w-6 mr-2" />
                    <span>{result === 'phishing' ? (
                      'Warning: This URL may be a phishing attempt.'
                    ) : (
                      'Please enter a valid URL'
                    )}</span>
                  </div>
                )}
              </div>
            )}
          </CardFooter>
        </Card>

        <section id="how-it-works" className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Enter the URL you want to check in the input field above.</li>
            <li>Click the "Check URL" button to initiate the analysis.</li>
            <li>Our system will evaluate the URL for potential phishing indicators.</li>
            <li>You'll receive a result indicating whether the URL appears safe or suspicious.</li>
          </ol>
        </section>

        <section id="stay-safe" className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Stay Safe Online</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Be cautious of unexpected emails or messages asking you to click on links.</li>
            <li>Check the URL carefully before entering any sensitive information.</li>
            <li>Use strong, unique passwords for each of your online accounts.</li>
            <li>Keep your software and operating systems up to date.</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Homepage;