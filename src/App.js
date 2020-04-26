import React, { useState } from "react";
import classes from "./App.module.css";
import Item from "./component/item/index";

function App() {
  const [dark, setDark] = useState(false);
  const classApp = [classes.App];
  if (dark) {
    classApp.push(classes.BackgroundBlack);
  } else {
    classApp.push(classes.BackgroundWhite);
  }

  return (
    <div className={classApp.join(" ")}>
      <Item dark={dark} setDark={setDark} />
      <p>
        <strong>
          Sumber:{" "}
          <a
            rel="noopener noreferrer"
            href="https://drive.google.com/open?id=1eBCEvome5tzCt2zz3YJNzN4-tf6lqrmg"
            target="_blank"
          >
            24 Jam Ramadhan karya Ust Muhammad Abduh Tuasikal
          </a>
        </strong>
      </p>
    </div>
  );
}

export default App;
