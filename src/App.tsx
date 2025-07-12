import { useState } from "react";
import SeachAnime from "./components/Contetnts/SeachAnime";
import Header from "./components/Header/Header";

function App() {
  const [keyword, setKeyword] = useState("");
  console.log(keyword);

  return (
    <>
    <Header/>
    <SeachAnime keyword={keyword} setKeyword={setKeyword}/>
    </>
  );
}

export default App;
