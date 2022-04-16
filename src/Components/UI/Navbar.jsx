import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import linkedin from "../../Images/linkedin.png";
import Github from "../../Images/Github.png";
import sandbox from "../../Images/sandbox.png";
import Emails from "../../Images/Emails.png";

import "./Custombootstrap.scss";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

const MyNavbar = () => {
  return (
    <header>
      {/* <Link className="fancy_link" to="/">
        <h1 style={{ marginLeft: "1rem" }}>Masoud Naji</h1>
      </Link> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./">Masoud Naji</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#">
                <Link to="./">Home</Link>
              </Nav.Link> */}
              <NavDropdown title="Cryptocurrency" id="collasible-nav-dropdown">
                <NavDropdown.Item as="li" href="./#/Coins">
                  <Link
                    className="navlink"
                    to="./Coins"
                    style={{ width: "100%", display: "block" }}
                  >
                    Cryptocurrency
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li" href="./#/Details">
                  <Link
                    className="navlink"
                    to="./Details"
                    style={{ width: "100%", display: "block" }}
                  >
                    Details
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li" href="./#/Compare">
                  <Link
                    className="navlink"
                    to="./Compare"
                    style={{ width: "100%", display: "block" }}
                  >
                    Compare
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item as="li" href="./#/Whatif">
                  <Link
                    className="navlink"
                    to="./Whatif"
                    style={{ width: "100%", display: "block" }}
                  >
                    What if
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Projrcts" id="collasible-nav-dropdown">
                <NavDropdown.Item as="li" href="./#/Twittespl">
                  <Link
                    className="navlink"
                    to="./Twittespl"
                    style={{ width: "100%", display: "block" }}
                  >
                    Twitte Splitter
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li" href="./#/DocumentView">
                  <Link
                    className="navlink"
                    to="./DocumentView"
                    style={{ width: "100%", display: "block" }}
                  >
                    Document Viewer
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li" href="./#/Regextest">
                  <Link
                    className="navlink"
                    to="./Regextest"
                    style={{ width: "100%", display: "block" }}
                  >
                    Regex Test
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li" href="./#/CompareText">
                  <Link
                    className="navlink"
                    to="./CompareText"
                    style={{ width: "100%", display: "block" }}
                  >
                    Compare Text
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item as="li" href="./#/CompareImage">
                  <Link
                    className="navlink"
                    to="./CompareImage"
                    style={{ width: "100%", display: "block" }}
                  >
                    Compare Image
                  </Link>
                </NavDropdown.Item>

                {/* <NavDropdown.Item as="li" href="./#/CompareImage">
                  <Link className="navlink" to="./SimplePaint" style={{width:"100%" ,display : "block"}}>
                  Simple Paint
                  </Link>
                </NavDropdown.Item> */}

                <NavDropdown.Item as="li" href="./#/Other_projects">
                  <Link
                    className="navlink"
                    to="./Other_projects"
                    style={{ width: "100%", display: "block" }}
                  >
                    Other Projects
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item as="li" href="./#/About" for="Aboutid">
                  <Link
                    className="navlink"
                    to="./About"
                    id="Aboutid"
                    style={{ width: "100%", display: "block" }}
                  >
                    About
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item
                  as="li"
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                >
                  <a
                    href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                    download=""
                  >
                    <button class="cta" style={{ color: "black", padding: 0 }}>
                      Pdf Resume
                    </button>
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="li"
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                >
                  <a
                    href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                    download=""
                  >
                    <button class="cta" style={{ color: "black", padding: 0 }}>
                      Doc Resume
                    </button>
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as="li"
                  href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
                >
                  <a
                    href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=..."
                    style={{ width: "100%", display: "block" }}
                  >
                    <img
                      src={Emails}
                      style={{ width: "2rem", height: "100%", padding: "0" }}
                      alt="Emails"
                    />
                    &nbsp; Email
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="li"
                  href="https://www.linkedin.com/in/masoud-naji/"
                >
                  <a
                    href="https://www.linkedin.com/in/masoud-naji/"
                    style={{ width: "100%", display: "block" }}
                  >
                    <img
                      src={linkedin}
                      style={{ width: "2rem", height: "100%", padding: "0" }}
                      alt="linkedin"
                    />
                    &nbsp; Linkedin
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item as="li" href="https://github.com/masoud-naji">
                  <a
                    href="https://github.com/masoud-naji"
                    style={{ width: "100%", display: "block" }}
                  >
                    <img
                      src={Github}
                      style={{ width: "2rem", height: "100%", padding: "0" }}
                      alt="Github"
                    />
                    &nbsp; Github
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item
                  as="li"
                  href="https://codesandbox.io/u/masoud-naji"
                >
                  <a
                    href="https://codesandbox.io/u/masoud-naji"
                    style={{ width: "100%", display: "block" }}
                  >
                    <img
                      src={sandbox}
                      style={{ width: "2rem", height: "100%", padding: "0" }}
                      alt="sandbox"
                    />
                    &nbsp; sandbox
                  </a>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* <Nav >
              <Nav.Link href="#deets" >
                <a href="https://www.linkedin.com/in/masoud-naji/">
                  <img src={linkedin} style={{ width: "2rem", padding: "0" }} />
                </a>
              </Nav.Link>
              <Nav.Link href="#deets">
                <a href="https://github.com/masoud-naji">
                  <img src={Github} style={{ width: "2rem", padding: "0" }} />
                </a>
              </Nav.Link>
              <Nav.Link href="#deets">
                <a href="https://codesandbox.io/u/masoud-naji">
                  <img src={sandbox} style={{ width: "2rem", padding: "0" }} />
                </a>
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <input type="checkbox" id="nav-toggle" className="nav-toggle"></input>
      <nav className="mainnavbar">
        <ul className="navul">
          <li key="1" className="navli">
            <Link className="navlink" to="./" style={{width:"100%" ,display : "block"}}>
              Home
            </Link>
          </li>
          <li key="3" className="navli">
            <Link className="navlink" to="./Coins">
              Crypto
            </Link>
          </li>
          <li key="2" className="navli">
            <Link className="navlink" to="./Details">
              Info
            </Link>
          </li>
          <li key="3" className="navli">
            <Link className="navlink" to="./About">
              About
            </Link>
          </li>
          <li key="3" className="navli">
            <a href="https://www.linkedin.com/in/masoud-naji/">
              <img
                src={linkedin}
                style={{ width: "2rem", height: "100%", padding: "0" }}
              />
            </a>
          </li>
          <li key="4" className="navli">
            <a href="https://github.com/masoud-naji">
              <img
                src={Github}
                style={{ width: "2rem", height: "100%", padding: "0" }}
              />
            </a>
          </li>
          <li key="5" className="navli">
            <a href="https://codesandbox.io/u/masoud-naji">
              <img
                src={sandbox}
                style={{ width: "2rem", height: "100%", padding: "0" }}
              />
            </a>
          </li>
        </ul>
      </nav> */}
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        {/* <span>test</span> */}
      </label>
    </header>
  );
};

export default MyNavbar;
