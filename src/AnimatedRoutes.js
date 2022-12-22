import React, { lazy, Suspense, useEffect, useContext } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ReactGA from "react-ga4";
import Spinner from "react-bootstrap/Spinner";
import AuthContext from "./contexts/AuthContext";

const Home = lazy(() => import("./Components/Pages/Home"));
const Details = lazy(() => import("./Components/Pages/Details"));
const Compare = lazy(() => import("./Components/Pages/Compare"));
const Coins = lazy(() => import("./Components/Pages/Coins/Coins"));
const Twittespl = lazy(() => import("./Components/Pages/Twittespl"));
const DocumentView = lazy(() => import("./Components/Pages/DocumentView"));
const Regextest = lazy(() => import("./Components/Pages/Regextest"));
const CompareText = lazy(() => import("./Components/Pages/CompareText"));
const CompareImage = lazy(() => import("./Components/Pages/CompareImage"));
const ReadmeCreator = lazy(() => import("./Components/Pages/ReadmeCreator"));
const PictureTexter = lazy(() => import("./Components/Pages/Picturetexter"));
const Other_projects = lazy(() => import("./Components/Pages/Other_projects"));
const NotFound = lazy(() => import("./Components/UI/NotFound"));
const Chart = lazy(() => import("./Components/Chart/News"));
const About = lazy(() => import("./Components/Pages/About"));
const AuthForm = lazy(() => import("./Components/Auth/AuthForm/AuthForm"));
const UserProfile = lazy(() => import("./Components/Auth/Profile/UserProfile"));
const Crypto_fun_facts = lazy(() =>
  import("./Components/Pages/Crypto_fun_facts")
);

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize("G-N4WW6EC0BH");
    ReactGA.set({ page: location.pathname });
    ReactGA.send("pageview");
  }, [location]);
}

function AnimatedRoutes() {
  usePageViews();
  const authCtx = useContext(AuthContext);
  const LoggedIn = authCtx.isLoggedIn;

  return (
    <AnimatePresence>
      <Suspense fallback={<Spinner animation="border" size="sm" />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Details" element={<Details />}></Route>
          <Route path="/Compare" element={<Compare />}></Route>
          <Route
            path="/Crypto_fun_facts"
            element={<Crypto_fun_facts />}
          ></Route>
          <Route path="/Coins" element={<Coins />}></Route>
          <Route path="/News" element={<Chart />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Twittespl" element={<Twittespl />}></Route>
          <Route path="/DocumentView" element={<DocumentView />}></Route>
          <Route path="/Regextest" element={<Regextest />}></Route>
          <Route path="/CompareText" element={<CompareText />}></Route>
          <Route path="/CompareImage" element={<CompareImage />}></Route>
          <Route path="/ReadmeCreator" element={<ReadmeCreator />}></Route>
          <Route path="/PictureTexter" element={<PictureTexter />}></Route>
          <Route path="/Other_projects" element={<Other_projects />}></Route>
          <Route
            path="/AuthForm"
            element={!LoggedIn ? <AuthForm /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/UserProfile"
            element={LoggedIn ? <UserProfile /> : <Navigate to="/AuthForm" />}
          ></Route>

          <Route path="/*" element={<Navigate to="/" />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
