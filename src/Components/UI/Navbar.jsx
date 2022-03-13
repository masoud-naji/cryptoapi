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
    <header center>
      {/* <Link className="fancy_link" to="/">
        <h1 style={{ marginLeft: "1rem" }}>Masoud Naji</h1>
      </Link> */}

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./">Masoud Naji</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">
                <Link to="./">Home</Link>
              </Nav.Link>
              <NavDropdown title="Cryptocurrency" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">
                  <Link className="navlink" to="./Coins">
                  Cryptocurrency
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#">
                  <Link className="navlink" to="./Details">
                    Details
                  </Link>
                </NavDropdown.Item>
             
           
              <NavDropdown.Item href="#">
                  <Link className="navlink" to="./Compare">
                  Compare
                  </Link>
                </NavDropdown.Item>
              <NavDropdown.Item href="#">
                  <Link className="navlink" to="./Whatif">
                  What if
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Projrcts" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">
                  <Link className="navlink" to="./Twittespl">
                    Twitte Splitter
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#">
                  <Link className="navlink" to="./Inventory">
                  Document Viewer
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#">
                  <Link className="navlink" to="./Regextest">
                    Regex Test
                  </Link>
                </NavDropdown.Item>
               
                <NavDropdown.Item href="#">
                  <Link className="navlink" to="./CompareText">
                  Compare Text
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="About" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">
                  <Link className="navlink" to="./About">
                    About
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2">
                  <a
                    href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                    download=""
                  >
                    <button class="about_cta__RaiiB">Pdf Resume</button>
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2">
                  <a
                    href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                    download=""
                  >
                    <button class="about_cta__RaiiB">Doc Resume</button>
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=...">
                  <img
                    src={Emails}
                    style={{ width: "2rem", height: "100%", padding: "0" }}
                    alt="Emails"
                  />
                  &nbsp;
                  <a href="mailto:info@masoudnaji.com?subject=Mail From WebSite&body=...">
                    Email
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/in/masoud-naji/">
                  <img
                    src={linkedin}
                    style={{ width: "2rem", height: "100%", padding: "0" }}
                    alt="linkedin"
                  />
                  &nbsp;
                  <a href="https://www.linkedin.com/in/masoud-naji/">
                    linkedin
                  </a>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/masoud-naji">
                  <img
                    src={Github}
                    style={{ width: "2rem", height: "100%", padding: "0" }}
                    alt="Github"
                  />
                  &nbsp;
                  <a href="https://github.com/masoud-naji">Github</a>
                </NavDropdown.Item>
                <NavDropdown.Item href="https://codesandbox.io/u/masoud-naji">
                  <img
                    src={sandbox}
                    style={{ width: "2rem", height: "100%", padding: "0" }}
                    alt="sandbox"
                  />
                  &nbsp;
                  <a href="https://codesandbox.io/u/masoud-naji">sandbox</a>
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
            <Link className="navlink" to="./">
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
        <span></span>
      </label>
    </header>
  );
};

export default MyNavbar;
