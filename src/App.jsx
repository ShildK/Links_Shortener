import "./global.css"
import Container from "./components/Container/Container";

import { useState } from "react";

import Title from "./components/Title/Title";
import Form from "./components/Form/Form";
import ShortLinkCard from "./components/ShortLinkCard/ShortLinkCard";

function App() {
  const [shortLink, setShortLink] = useState("");

  return (
    <Container>
      <Title />
      <Form setShortLink={setShortLink} />
      <ShortLinkCard shortLink={shortLink} />
    </Container>
  )
}

export default App;