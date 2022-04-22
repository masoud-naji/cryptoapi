import React, { useEffect, useState, useRef, useCallback } from "react";
import classes from "../UI/Card.module.css";
import cardStyle from "../Styles/infoCard.module.css";
import tablestyle from "../Styles/UsersList.module.css";
import style from "../Styles/about.module.css";
import Card from "../UI/Card";
import "../Styles/progressbar.css";
import { Helmet } from "react-helmet";

const SimplePaint =
  () => {
  const canvasRef = useRef(null);
  const ctx = useRef(null);
  const [Color, setColor] = useState("#ffffff");
  const [mouseDown, setMouseDown] = useState(false);
  const canvasStartX = useRef(0);
  const canvasStartY = useRef(0);
  const [lastPosition, setPosition] = useState({
    x:  canvasStartX||0,
    y:  canvasStartY||0,
  });

  useEffect(() => {
    if (canvasRef.current) {
      canvasStartX.current = canvasRef.current.getBoundingClientRect().x;
      canvasStartY.current = canvasRef.current.getBoundingClientRect().y;
      ctx.current = canvasRef.current.getContext("2d");
    }
  }, [canvasStartX, canvasStartY]);

  const draw = useCallback(
    (x, y) => {
      if (mouseDown) {
        console.log(x, y);
        console.log(canvasStartX.current, canvasStartY.current);
        x = x - canvasStartX.current;
        y = y - canvasStartY.current;
        ctx.current.beginPath();
        ctx.current.strokeStyle = Color;
        ctx.current.lineWidth = 10;
        ctx.current.lineJoin = "round";
        ctx.current.moveTo(
          lastPosition.x,
          lastPosition.y
        );
        ctx.current.lineTo(x, y);
        ctx.current.closePath();
        ctx.current.stroke();

        setPosition({
          x,
          y,
        });
      }
    },
    [lastPosition, mouseDown, setColor, setPosition]
  );

  const download = async () => {
    const image = canvasRef.current.toDataURL("image/png");
    const blob = await (await fetch(image)).blob();
    const blobURL = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobURL;
    link.download = "image.png";
    link.click();
  };

  const clear = () => {
    ctx.current.clearRect(
      0,
      0,
      ctx.current.canvas.width,
      ctx.current.canvas.height
    );
  };

  const onMouseDown = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
    setMouseDown(true);
  };

  const onMouseUp = (e) => {
    setMouseDown(false);
  };

  const onMouseMove = (e) => {
    draw(e.pageX, e.pageY);
  };

  console.log(mouseDown, lastPosition, Color);
  console.log(canvasStartX, canvasStartY);
  return (
    <div>
      <canvas
        style={{
          border: "1px solid red",
        }}
        width={500}
        height={500}
        ref={canvasRef}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
      />
      <br />
      <div
        className={classes.HeroPlace}
        style={{
          height: "fit-content",
          maxHeight: "fit-content",
          minHeight: "fit-content",
        }}
      >
        <input
          style={{ padding: "10px" }}
          className={style.languagebtn}
          type="color"
          value={Color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="anchorBtn" onClick={clear}>
          Clear
        </button>
        <button className="anchorBtn" onClick={download}>
          Download
        </button>
      </div>
    </div>
  );
};

export default SimplePaint;
