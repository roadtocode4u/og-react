import { useEffect } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async"

// build svg image for og:image
const svgImage = `
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
    <rect width="400" height="400" fill="red" />
    <circle cx="200" cy="200" r="100" fill="blue" />
    <text x="200" y="200" font-size="100" fill="white" text-anchor="middle" alignment-baseline="middle">SVG</text>
  </svg>
`

function App() {
  useEffect(() => {

  }, [])

  return (
   <HelmetProvider>
      <Helmet>
        <title>Hello World</title>
        {/* og image */}
        <meta property="og:image" content={`data:image/svg+xml;utf8,${encodeURIComponent(svgImage)}`} />
        {/* og image type */}
        <meta property="og:image:type" content="image/svg+xml" />
        {/* og image width */}
        <meta property="og:image:width" content="400" />
        {/* og image height */}
        <meta property="og:image:height" content="400" />
        {/* og image alt */}
      </Helmet>
      <div className="App">
        <h1>Test OG</h1>
      </div>
   </HelmetProvider>
  )
}

export default App
