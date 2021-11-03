import React from "react";
import EmojiItem from "./EmojiItem";

export default function EmojiContainer(props) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", width:'80%', margin:'0 auto' }}>
      {props.emojiList.map((emoji) => {
        return (
          <EmojiItem
            key={emoji.title}
            symbol={emoji.symbol}
            keywords={emoji.keywords}
            title={emoji.title}
          />
        );
      })}
    </div>
  );
}
