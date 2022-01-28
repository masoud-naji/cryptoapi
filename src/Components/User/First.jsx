import style from "./UsersList.module.css";
// import classes from "../UI/Card.module.css";
// import Card from "../UI/Card";
// import GoogleTrends from "../GoogleTrend/GoogleTrends";
// import Script from "react-load-script";

// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
import "../UI/Custombootstrap.scss";
import { Carousel } from "react-bootstrap";

import cam from "../../Images/cam.webp";
import social from "../../Images/social.webp";
import cryptocurrency from "../../Images/cryptocurrency.webp";
import music from "../../Images/music.webp";
import Coding from "../../Images/Coding.webp";
import Light from "../../Images/light.webp";

function Coins() {
  return (
    <div className={style.cover}>
      <div className={style.homebackground}>
        <div className={style.grid}>
          <div className={`${style.gridInside} , ${style.gridColSpan2}`}>
            
          </div>
          <div className={style.gridInside}>
            Some Sources For Start
            <br />
            <br />
            <ul
              style={{ textTransform: "uppercase" }}
              className={style.minilist}
            >
              <li>
                <a href="https://reactjs.org/docs/getting-started.html">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="https://reactresources.com/">REACT RESOURCES</a>
              </li>
              <li>
                <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources">
                  developer.mozilla
                </a>
              </li>
              <li>
                <a href="https://dev.to/hulyakarakaya/ultimate-react-resources-obl">
                  Ultimate React Resources
                </a>
              </li>
              <li>
                <a href="https://x-team.com/blog/essential-react-resources/">
                  ESSENTIAL RESOURCES
                </a>
              </li>
              <li>
                <a href="https://reactforbeginners.com/">React for beginners</a>
              </li>
              <li>
                <a href="https://advancedreact.com/">Advanced react</a>
              </li>
              <li>
                <a href="https://linguinecode.com/">Linguine code</a>
              </li>
            </ul>
          </div>
          <div className={style.gridInside}>
            Libraries Used In This Site <br />
            <br />
            <ol>
              <li> react-confirm-alert</li>
              <li> bootstrap react-bootstrap</li>
              <li> lodash</li>
              <li> react-chartjs-2 chart.js</li>
              <li> react-router</li>
              <li> react-router-dom</li>
              <li> react-select</li>
              <li> html-to-text</li>
              <li> react-load-script</li>
              <li> react-scripts</li>
              <li> react-input-emoji</li>
              <li> browser-image-compression</li>
              <li> xlsx</li>
              <li> json-as-xlsx</li>
              <li> react-lorem-ipsum</li>
              <li> react-alice-carousel</li>
              <li> sass node-sass</li>
            </ol>
          </div>
          <div className={`${style.gridInside} , ${style.gridColSpan2}`}>
            {/* ///////////////////////////////////////////////////// */}

            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100 " src={cam} alt="First slide" />
                <Carousel.Caption>
                  <h3>Front-End</h3>
                  <p>
                    years of Information Technology experience in Web design and
                    development of ERP application.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src={social}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3> UI Developer</h3>
                  <p>
                    database designing, development, and installation of
                    different modules.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src={cryptocurrency}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>API</h3>
                  <p>
                    Experience on various Charting/UI tools - High Charts,
                    Google API , IBM Watson , YouTube , Spotify
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100 " src={music} alt="Third slide" />
                <Carousel.Caption>
                  <h3>UI web applications</h3>
                  <p>
                    technologies like HTML5, CSS3, JavaScript, reactJS, XML,
                    DHTML, XHTML, JSON
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 "
                  src={Coding}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Document Object Model (DOM)</h3>
                  <p>
                    Excellent Understanding ofDocument Object Model (DOM) andDOM
                    Functions.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <img className="d-block w-100 " src={Light} alt="Third slide" />
                <Carousel.Caption>
                  <h3>UIpatterns and UI applications</h3>
                  <p>
                    Experience in designing UIpatterns and UI applications with
                    the help of Adobe products like Adobe Photoshop, Adobe XD
                    and Adobe Illustrator.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className={style.gridInside}>
            {/* <h2>
              <strong>Front End Developer</strong>
            </h2> */}

            <ul className={style.ulabout}>
              <li>
                <strong>Overall 8+</strong> years of Information Technology
                experience in Web design and development of ERP application.
              </li>
              <li>
                <strong>Overall 4+ years</strong>of extensive experience as a
                <strong>Front-End UI Developer</strong> with solid understanding
                of database designing, development, and installation of
                different modules.
              </li>
              <li>
                Extensive experience in designing professional UI web
                applications using front-end technologies like HTML5, CSS3,
                JavaScript, reactJS, XML, DHTML, XHTML, JSON
              </li>
              <li>
                Excellent Understanding of
                <strong>Document Object Model (DOM) </strong>and
                <strong>DOM Functions.</strong>
              </li>
              <li>
                Excellent experience in developing web pages complying with
                <strong>W3C web standards. </strong>
              </li>
              <li>
                Extensive experiences in
                <strong>
                  UI Development, Web UI analysis, Web design, coding, testing,
                  implementation
                </strong>
                and Support working with various projects.
              </li>
              <li>
                Professional in creating Templates, Mockups and Prototypes, Web
                Interfaces, Layouts and Flow of Future Pages.
              </li>
              <li>
                Experience in designing <strong>UI</strong>
                <strong>patterns</strong> and <strong>UI applications</strong>{" "}
                with the help of Adobe products like{" "}
                <strong>
                  Adobe Photoshop, Adobe XD and Adobe Illustrator.
                </strong>
              </li>
              <li>
                Expertise in creating Templates, Web Interfaces, Layouts, and
                Flow of Future Pages.
              </li>
              <li>
                Optimized the page load time for the pages that had heavy
                traffic and improvised those pages using CSS3
              </li>
              <li>
                Experience in Version Control tools like <strong>GIT</strong>
              </li>
              <li>
                Experience in using Mgmt. Software like JIRA Agile, Scrum works
                and bug tracking system - JIRA, Asana, Slack.
              </li>
              <li>
                Experience on various Charting/UI tools like High Charts, Google
                API,
              </li>
              <li>
                Experience on monitoring, and analyzing machine-generated data
                via a Web-style interface with <strong>Splunk</strong>
              </li>
              <li>
                Experience with Object Oriented Concepts, Object Oriented
                JavaScript, Object Oriented Design, and Implementation.
              </li>
              <li>
                Experience in quality assurance and unit testing, acceptance,
                and integration testing.
              </li>
              <li>
                Involved in working the Google <strong>Firebase</strong> and{" "}
                <strong>IBM watson</strong>
              </li>
              <li>
                Experienced in using Video Sharing and video subscription
                service with a Video API like YouTube and Vimeo.
              </li>
              <li>
                Optimized the page load time for the pages that had heavy
                traffic and improvised those pages
              </li>
              <li>
                Skilled at analyzing and solving browser compatibility
                challenges and possesses ability to maintain consistency and
                well commented HTML and CSS markup.
              </li>
              <li>
                Experience of working on Data Modeling applications{" "}
                <strong>Excel, Power Bi , Tableau Software and Dax </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coins;
