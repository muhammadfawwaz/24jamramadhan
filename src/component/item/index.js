import React, { useState, useEffect } from "react";
import classes from "./index.module.css";
import amalan from "../../json/amalan.json";

const Item = (props) => {
  const [time] = useState(new Date().getHours());
  const [status] = useState(getTime(time));
  useEffect(() => {
    document.getElementsByClassName(status)[0].scrollIntoView();
  }, [time, status]);

  const items = [];
  const classSpan = [classes.slider, classes.round];
  const classItem = [classes.Item];

  if (props.dark) {
    classItem.push(classes.ColorWhite);
  }

  amalan.amalan.map((value, idx) => {
    const description = [];
    if (value.description) {
      value.description.map((val, index) => {
        return description.push(<p key={"desc" + index}>{val}</p>);
      });
    }
    let style = {
      textAlign: "justify",
    };
    if (props.dark) {
      style.backgroundColor = "#B522CF";
    } else {
      style.backgroundColor = "#AA80B2";
      style.color = "#fff";
    }
    return items.push(
      <div key={idx} className={value.time}>
        <h4 className={classes.Title} style={style}>
          {idx + 1 + ". " + value.title}
        </h4>
        <p className={classes.Hadith}>{value.hadith}</p>
        <p className={classes.HadithTr}>{value.hadith_tr}</p>
        <div>{description}</div>
      </div>
    );
  });
  return (
    <div className={classItem.join(" ")}>
      <div className={classes.Toggle}>
        <label className={classes.switch}>
          <input
            type="checkbox"
            onClick={() => {
              props.setDark(!props.dark);
            }}
          />
          <span className={classSpan.join(" ")}></span>
        </label>
      </div>
      <h1 className={classes.Title}>24 Jam Ramadhan</h1>
      {items}
    </div>
  );
};

const getTime = (time) => {
  if (time <= 3) {
    return "sahur";
  } else if (time <= 4) {
    return "subuh";
  } else if (time <= 14) {
    return "pagi";
  } else if (time <= 16) {
    return "ashar";
  } else if (time <= 17) {
    return "buka";
  } else if (time <= 18) {
    return "maghrib";
  } else if (time <= 20) {
    return "isya";
  } else if (time <= 23) {
    return "tidur";
  }
};

export default Item;
