import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🚮": "Litter in Bin Sign",
  "🚰": "Potable Water",
  "♿": "Wheelchair Symbol",
  "🚹": "Men’s Room",
  "🚺": "Women’s Room",
  "🚻": "Restroom",
  "🚼": "Baby Symbol",
  "🚾": "Water Closet",
  "⚠️": "Warning",
  "🚸": "Children Crossing",
  "⛔": "No Entry",
  "🚫": "Prohibited",
  "🚳": "No Bicycles",
  "📵": "No Mobile Phones",
  "🔞": "No One Under Eighteen",
  "☢️": "Radioactive",
  "☣️": "Biohazard",
  "⬆️": "Up Arrow",
  "↗️": "Up-Right Arrow",
  "➡️": "Right Arrow",
  "↘️": "Down-Right Arrow",
  "⬇️": "Down Arrow",
  "↙️": "Down-Left Arrow",
  "⬅️": "Left Arrow",
  "↖️": "Up-Left Arrow",
  "↕️": "Up-Down Arrow",
  "↔️": "Left-Right Arrow",
  "↩️": "Right Arrow Curving Left",
  "↪️": "Left Arrow Curving Right",
  "⤴️": "Right Arrow Curving Up",
  "⤵️": "Right Arrow Curving Down",
  "🔃": "Clockwise Vertical Arrows",
  "🔄": "Counterclockwise Arrows Button",
  "🔙": "Back Arrow",
  "🔚": "End Arrow",
  "🔛": "On! Arrow",
  "🔜": "Soon Arrow",
  "🔝": "Top Arrow"
};

var publicemojisknown = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("Your Meaning will be displayed here.");
  function emojiHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    if (meaning === undefined) {
      meaning =
        "Sorry, We don't have any information about this Public sign or whatever it is!";
    }
    setmeaning(meaning);
  }

  function emojiclickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "40px" }}> Learn these Public Signs</h1>

      <input
        onChange={emojiHandler}
        style={{ backgroundColor: "white", width: "8rem" }}
      ></input>
      <h3>{meaning}</h3>
      <hr />
      <div styel={{ marginBottom: "3rem" }}>
        You can also check the Sign Meaning by clicking on Signs below:
      </div>
      {publicemojisknown.map((emoji) => {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
