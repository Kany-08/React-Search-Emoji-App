import React from "react";
import ReactClipboard from 'react-clipboard-simple'

export default function EmojiItem(props) {
  return (
    <ReactClipboard keyword={props.symbol}>
      <div
        style={{
          width: "200px",
          height: "200px",
          textAlign: "center",
          lineHeight: "150px",
          boxShadow: "5px 5px 5px gray",
          borderRadius: "20px",
          margin: "10px",
          border: "1px solid lightgray",
          fontSize: "25px",
        }}
      >
        <h1> {props.symbol} </h1>
      </div>
    </ReactClipboard>
  );
}
