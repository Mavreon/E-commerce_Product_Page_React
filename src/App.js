import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/UI/Container";
import Preview from "./components/Preview/Preview";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>E-commerce Product Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Navbar/>

      <Container>
        <Preview/>
      </Container>
    </React.Fragment>
  );
}

export default App;
