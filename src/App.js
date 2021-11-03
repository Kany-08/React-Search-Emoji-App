import React, { useState } from "react";
import EmojiContainer from "./components/EmojiContainer";
import Header from "./components/Header";
import data from './json/emoji.json'

function App() {

  const [emojis, setEmojis] = useState(data);

  const SearchEmojis=(e)=>{
    let searchedEmojis=data.filter(emoji=> emoji.keywords.includes(e.target.value))

    setEmojis(searchedEmojis)
  }

  return (
    <div className="App">
      <Header />
      <div style={{ textAlign: "center" }}>
        <input type="text" name="search" onChange={SearchEmojis} style={{display:'inline-block', width:'30%', padding:'5px',borderRadius:'5px'}} />
        <EmojiContainer emojiList={emojis} />
      </div>
    </div>
  );
}

export default App;
