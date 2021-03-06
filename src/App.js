import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐ฎ": "Litter in Bin Sign",
  "๐ฐ": "Potable Water",
  "โฟ": "Wheelchair Symbol",
  "๐น": "Menโs Room",
  "๐บ": "Womenโs Room",
  "๐ป": "Restroom",
  "๐ผ": "Baby Symbol",
  "๐พ": "Water Closet",
  "โ ๏ธ": "Warning",
  "๐ธ": "Children Crossing",
  "โ": "No Entry",
  "๐ซ": "Prohibited",
  "๐ณ": "No Bicycles",
  "๐ต": "No Mobile Phones",
  "๐": "No One Under Eighteen",
  "โข๏ธ": "Radioactive",
  "โฃ๏ธ": "Biohazard",
  "โฌ๏ธ": "Up Arrow",
  "โ๏ธ": "Up-Right Arrow",
  "โก๏ธ": "Right Arrow",
  "โ๏ธ": "Down-Right Arrow",
  "โฌ๏ธ": "Down Arrow",
  "โ๏ธ": "Down-Left Arrow",
  "โฌ๏ธ": "Left Arrow",
  "โ๏ธ": "Up-Left Arrow",
  "โ๏ธ": "Up-Down Arrow",
  "โ๏ธ": "Left-Right Arrow",
  "โฉ๏ธ": "Right Arrow Curving Left",
  "โช๏ธ": "Left Arrow Curving Right",
  "โคด๏ธ": "Right Arrow Curving Up",
  "โคต๏ธ": "Right Arrow Curving Down",
  "๐": "Clockwise Vertical Arrows",
  "๐": "Counterclockwise Arrows Button",
  "๐": "Back Arrow",
  "๐": "End Arrow",
  "๐": "On! Arrow",
  "๐": "Soon Arrow",
  "๐": "Top Arrow"
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
