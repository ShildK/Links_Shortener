import "./global.css"
import Container from "./components/Container/Container";

import { useState } from "react";

import Title from "./components/Title/Title";
import InputPart from "./components/InputPart/InputPart";
import OutputPart from "./components/OutputPart/OutputPart";

function App() {
  const [shortLink, setShortLink] = useState("");

  return (
    <Container>
      <Title />
      <InputPart setShortLink={setShortLink} />
      <OutputPart shortLink={shortLink} />
    </Container>
  )
}

export default App;