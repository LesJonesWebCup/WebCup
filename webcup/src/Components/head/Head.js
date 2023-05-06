import React from "react"
import { Helmet } from "react-helmet"

function Head() {
  return (
	<Helmet>
	  <meta charSet="utf-8" />
	  <title>React App</title>
	  <link rel="canonical" href="http://mysite.com/example" />
	  <meta name="viewport" content="initial-scale=1, width=device-width" />
	  <link
	    rel="stylesheet"
	    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

	</Helmet>

  )
}

export default Head;
