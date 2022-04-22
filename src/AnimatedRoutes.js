import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./Components/Styles/App.module.css";
import Home from "./Components/Pages/Home";
import Details from "./Components/Pages/Details";
import Compare from "./Components/Pages/Compare";
import Whatif from "./Components/Pages/Whatif";
import Coins from "./Components/Pages/Coins";
import Twittespl from "./Components/Pages/Twittespl";
import DocumentView from "./Components/Pages/DocumentView";
import Regextest from "./Components/Pages/Regextest";
import CompareText from "./Components/Pages/CompareText";
import CompareImage from "./Components/Pages/CompareImage";
import SimplePaint from "./Components/Pages/SimplePaint";
import Other_projects from "./Components/Pages/Other_projects";
import NotFound from "./Components/UI/NotFound";
import Chart from "./Components/Chart/News";
import About from "./Components/Pages/About";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Details" element={<Details />}></Route>
        <Route path="/Compare" element={<Compare />}></Route>
        <Route path="/Whatif" element={<Whatif />}></Route>
        <Route path="/Coins" element={<Coins />}></Route>
        <Route path="/News" element={<Chart />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Twittespl" element={<Twittespl />}></Route>
        <Route path="/DocumentView" element={<DocumentView />}></Route>
        <Route path="/Regextest" element={<Regextest />}></Route>
        <Route path="/CompareText" element={<CompareText />}></Route>
        <Route path="/CompareImage" element={<CompareImage />}></Route>
        <Route path="/SimplePaint" element={<SimplePaint />}></Route>
        <Route path="/Other_projects" element={<Other_projects />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
