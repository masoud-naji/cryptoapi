import React, { useState } from "react";
import style from "../Styles/about.module.css";
import { AllContent } from "./AllContent";

export default function ReadmeBtns({ setContent }) {
  return (
    <div className={style.ReadmeBtn}>
      {Object.entries(AllContent).map(([key, value], index) => {
        return (
          <div >
            <button
              className={(style.watermatkchilds, style.languagebtn)}
              onClick={() => setContent(value)}
              style={{ color: "white" }}
            >
              {[key]}
            </button>
          </div>
        );
      })}
    </div>
  );
}
