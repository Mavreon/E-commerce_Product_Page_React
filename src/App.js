import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/UI/Container";
import Preview from "./components/Preview/Preview";
import Lightbox from "./components/Lightbox/Lightbox";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-commerce Product Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Navbar/>
      <Lightbox/>
      <Container>
        <Preview/>
        <Preview/>
      </Container>
    </React.Fragment>
  );
}

export default App;
