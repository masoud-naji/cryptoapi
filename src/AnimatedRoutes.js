import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./Home";
import Details from "./Components/SubPages/Details";
import Compare from "./Components/SubPages/Compare";
import Whatif from "./Components/SubPages/Whatif";
import Coins from "./Components/SubPages/Coins";
import Twittespl from "./Components/SubPages/Twittespl";
import DocumentView from "./Components/SubPages/DocumentView";
import Regextest from "./Components/SubPages/Regextest";
import CompareText from "./Components/SubPages/CompareText";
import CompareImage from "./Components/SubPages/CompareImage";
import SimplePaint from "./Components/SubPages/SimplePaint";
import Other_projects from "./Components/SubPages/Other_projects";
import NotFound from "./Components/UI/NotFound";
import Chart from "./Chart/News";
import About from "./About";
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
        <Route path="/needs/*" element={<NotFound />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
