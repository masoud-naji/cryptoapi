import React, { useState, useEffect } from "react";
import classes from "./Components/UI/Card.module.css";
import Card from "./Components/UI/Card";
import cardStyle from "./Components/SubPages/infoCard.module.css";
import style from "./about.module.css";
import pdficon from "./Images/PDF.png";
// import { Link } from "react-router-dom";

const About = () => {
  const initialURL =
    "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2";
  const [urlSrc, seturlSrc] = useState(initialURL);
  const allCertificates = [
    {
      React_Web_Developer:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397105&authkey=AAPFt0zLCz42hGE&em=2",
    },
    {
      Modern_React_Redux:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397112&authkey=ALUpDIIHbEHIXCw&em=2",
    },
    {
      Java_Web_Developer:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136440&authkey=ABNpSdn-QNs6XIg&em=2",
    },
    {
      SQL_Server_1:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2130513&authkey=APd1Fe3Lcx_OiCc&em=2",
    },
    {
      SQL_Server_2:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2130512&authkey=ADp3j8qThTsxKq4&em=2",
    },
    {
      Google_Analytics:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2138218&authkey=AHibj4epIWsLs4o&em=2",
    },
    {
      Spring_Boot:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136439&authkey=AK5GVpVlvNMlfqc&em=2",
    },
    {
      Data_Science_R_Basics:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128735&authkey=AE5AoFaVNESSQ6Y&em=2",
    },
    {
      Power_BI_with_DAX:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131449&authkey=ABPNdzZ6ACFZtfc&em=2",
    },
    {
      Power_BI:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2111466&authkey=ANbywV0XKnRcT6E&em=2",
    },
    {
      Excel_VBA_Macro:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128751&authkey=AGq4Y_3xkaKmN5g&em=2",
    },
    {
      Excel_Accountants:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131451&authkey=ANImj8gtXIbtrNQ&em=2",
    },
    {
      Excel_Awesome_Charts:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2129099&authkey=ALTAnsz9mT6svQ0&em=2",
    },
    {
      Technical_Support:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2132887&authkey=ANvmtoHbhqLcb1M&em=2",
    },
    {
      BitcoinCryptocurrency:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2136559&authkey=AKvrxkgYKRQTWkM&em=2",
    },
    {
      Storytelling_with_Data:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128760&authkey=APvgyJXhp0MBw9U&em=2",
    },
    {
      QuickBooks_Online:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2128761&authkey=ADwSJ4UdG5rI4wM&em=2",
    },
    {
      Financial_Stmnts_Per:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2132757&authkey=AJXMTI6tvMJoXaM&em=2",
    },
    {
      Financial_Stmnts_Pos:
        "https://onedrive.live.com/embed?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%2131919&authkey=AE9Y_-9BEA-KtrA&em=2",
    },
  ];

  const IFrame = () => {
    return (
      <iframe
        title="Document Review"
        src={urlSrc}
        width="100%"
        height="700"
        frameborder="0"
        scrolling="no"
        name="pageshow"
      ></iframe>
    );
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  console.log(Object.keys(allCertificates));
  console.log(Object.values(allCertificates));
  return (
    <div className={style.container}>
      <Card
        style={{ height: "18rem" }}
        className={`${classes.clipboardinside} ${classes.topchart}`}
        // className={`${classes.clipboardinside} ${classes.topchart}`}
      >
        <div
          className={classes.clipboardinsidetext}
          style={{ padding: "1rem" }}
        >
          <div className={cardStyle.container}>
            <div className={cardStyle.tableContainer}>
              <strong>
                <a href="mailto:Masoud.Naji@outlook.com?subject=Resume from webSite">
                  Masoud.Naji@outlook.com
                </a>
                <br />
                <a href="https://www.linkedin.com/in/masoud-naji/">linkedin</a>
                <br />
                California – Los Angeles
                <br />
                747-333-2870
                <br />
                <a
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397104&authkey=AA1uxVivZIR3duU&em=2"
                  download
                >
                  <button className={style.cta}>
                    Download PDF Resume&nbsp;&nbsp;
                  </button>
                </a>
                <a
                  href="https://onedrive.live.com/download?cid=4CA8BFEFFFE61AB8&resid=4CA8BFEFFFE61AB8%21397100&authkey=ABpz3ESHdwNSzEQ&em=2"
                  download
                >
                  <br />
                  <button className={style.cta}>Download Word Resume</button>
                </a>
              </strong>
            </div>

            {/* //////////////////////////////////////// */}

            {/* <div className={cardStyle.tableContainer}>
              <div className={style.flextbtn}></div>
                
              <div>
                <Link className={style.nvbbtn} to="../Twittespl">
                  <button className={style.cta}>Twitte Splitter</button>
                </Link>
                <br />
                <Link className={style.nvbbtn} to="../inventory">
                  <button className={style.cta}>inventory</button>
                </Link>
                <br />
                <a className={style.nvbbtn} to="https://github.com/masoud-naji">
                  <button
                    className={style.cta}
                    onClick={() =>
                      window.open(
                        "https://github.com/masoud-naji?tab=repositories"
                      )
                    }
                  >
                    GitHub
                  </button>
                </a>
              </div>
            </div> */}

            <div>
              {/* List Of Sample Projects ➡️ */}
              <div
                className="github-card"
                data-github="masoud-naji"
                data-width="400"
                data-height=""
                data-theme="default"
              ></div>
            </div>
            {/* //////////////////////////////////////// */}
            {/* <div className={cardStyle.tableContainer}>
              <div
                className="github-card"
                data-github="masoud-naji"
                data-width="400"
                data-height=""
                data-theme="default"
              ></div>
            </div> */}
            {/* /////////////////////////////////////// */}
          </div>
        </div>
      </Card>
      <IFrame />
      <hr />
      <button
        onClick={() => seturlSrc(initialURL)}
        className={style.cta}
        style={{ width: "20rem", textAlign: "left" }}
      >
        <img src={pdficon} style={{ width: "2rem" }} alt="PDF icon" />
        &nbsp; View Resume
      </button>
      <hr />
      {/* //////////////////////////////////////////////certificates */}
      <details style={{ color: "#CCC" }}>
        <summary className={cardStyle.infotext}>
          - View Other Certificates
        </summary>
        <div className={cardStyle.container}>
          <div className={cardStyle.tableContainer}>
            <br />

            {/* //////////////// */}
            {allCertificates.map((urls) => (
              <button
                onClick={() => seturlSrc(Object.values(urls))}
                className={style.cta}
                style={{ width: "20rem", textAlign: "left" }}
              >
                <img src={pdficon} style={{ width: "2rem" }} alt="PDF icon" />
                &nbsp;
                {Object.keys(urls)}
              </button>
            ))}
          </div>
        </div>
      </details>

      {/* <section>
        <h2>
          <strong>Front End Developer</strong>
        </h2>

        <ul className={style.ulabout}>
          <li>
            <strong>Overall 8+</strong> years of Information Technology
            experience in Web design and development of ERP application.
          </li>
          <li>
            <strong>Overall 4+ years</strong>of extensive experience as a
            <strong>Front-End UI Developer</strong> with solid understanding of
            database designing, development, and installation of different
            modules.
          </li>
          <li>
            Extensive experience in designing professional UI web applications
            using front-end technologies like HTML5, CSS3, JavaScript, reactJS,
            XML, DHTML, XHTML, JSON
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
              {" "}
              UI Development, Web UI analysis, Web design, coding, testing,
              implementation{" "}
            </strong>
            and Support working with various projects.
          </li>
          <li>
            Professional in creating Templates, Mockups and Prototypes, Web
            Interfaces, Layouts and Flow of Future Pages.
          </li>
          <li>
            Experience in designing <strong>UI</strong>
            <strong>patterns</strong> and <strong>UI applications</strong> with
            the help of Adobe products like{" "}
            <strong>Adobe Photoshop, Adobe XD and Adobe Illustrator.</strong>
          </li>
          <li>
            Expertise in creating Templates, Web Interfaces, Layouts, and Flow
            of Future Pages.
          </li>
          <li>
            Optimized the page load time for the pages that had heavy traffic
            and improvised those pages using CSS3
          </li>
          <li>
            Experience in Version Control tools like <strong>GIT</strong>
          </li>
          <li>
            Experience in using Mgmt. Software like JIRA Agile, Scrum works and
            bug tracking system - JIRA, Asana, Slack.
          </li>
          <li>
            Experience on various Charting/UI tools like High Charts, Google
            API,
          </li>
          <li>
            Experience on monitoring, and analyzing machine-generated data via a
            Web-style interface with <strong>Splunk</strong>
          </li>
          <li>
            Experience with Object Oriented Concepts, Object Oriented
            JavaScript, Object Oriented Design, and Implementation.
          </li>
          <li>
            Experience in quality assurance and unit testing, acceptance, and
            integration testing.
          </li>
          <li>
            Involved in working the Google <strong>Firebase</strong> and{" "}
            <strong>IBM watson</strong>
          </li>
          <li>
            Experienced in using Video Sharing and video subscription service
            with a Video API like YouTube and Vimeo.
          </li>
          <li>
            Optimized the page load time for the pages that had heavy traffic
            and improvised those pages
          </li>
          <li>
            Skilled at analyzing and solving browser compatibility challenges
            and possesses ability to maintain consistency and well commented
            HTML and CSS markup.
          </li>
          <li>
            Experience of working on Data Modeling applications{" "}
            <strong>Excel, Power Bi , Tableau Software and Dax </strong>
          </li>
        </ul>
        <br />
        <p></p>
        <strong>
          <h2>Education</h2>
          <h4> </h4>
          <h4>
            Azad University -<em> Bachelor </em>
          </h4>
          <h4>
            Udacity Java Web Developer – <em>nanodegree</em>
          </h4>
          <h4>Experience</h4>
          <h4>Mar2020 - Present</h4>
          <h4>LDFY-Lets Design For You. LLC - Frontend Developer</h4>
        </strong>
        <ul>
          <li>
            Perform as a Frontend Software Engineer developing enterprise scale
            React solutions.
          </li>
          <li>Analyze and identify gaps in the website content.</li>
          <li>
            Optimize pages for improved search results and supervise content
            creation (SEO).
          </li>
          <li>
            Used GitHub UI, Git bash to commit, changes to the repository for
            maintaining various versions of the agile process.
          </li>
          <li>
            Experience in using Mgmt. Software like JIRA Agile, Scrum works and
            bug tracking system - JIRA, Asana, Slack.
          </li>
          <li>Worked content management system like WordPress, Shopify.</li>
          <li>
            Responsible for creating efficient design and developing User
            Interaction using HTML, CSS, SASS, JavaScript, React.JS, js and JSON
          </li>
          <li>
            Created UI designs using Web standards developed prototypes for
            various new account proposals
          </li>
          <li>
            Built the Responsive UI/UX screen using HTML, CSS, and Bootstrap.
          </li>
          <li>
            Migrated the template as a layout page for the application for
            reusability.
          </li>
          <li>
            Completed UI/UX design with Photoshop and illustrator for both
            transaction system and website.
          </li>
          <li>
            Used CSS to develop rich UI Components such as Accordions and Modal
            Windows using pure HTML and CSS
          </li>
          <li>
            Execute all visual design stages from concept, wireframes, and
            mockups through development/coding and publish.
          </li>
          <li>
            Work with clients to develop the overall look and design of a
            website.
          </li>
          <li>
            Test websites routinely for ease of use, speed, and other quality
            factors.
          </li>
          <li>Fix any website issues or bugs that arise.</li>
        </ul>
        <h2>Jan 2015 - Dec 2019</h2>
        <h3>Pars Hayan - Web Developer/Designer</h3>
        <ul>
          <li>
            More than 5 Years of enterprise level Experience in the design,
            development, and production deployment of a comprehensive supply
            chain management software system. inventory management system and
            Management information system
          </li>
          <li>
            Performed as a member of the development team for a state-of-the-art
            microservice- based enterprise application. The application was
            composed of more than 20 microservices, each responsible for a
            modularized functionality of a holistic enterprise resource planning
            (ERP) platform.
          </li>
          <li>
            The ERP application developed was used by the senior managerial
            accountants in the supply chain department in order to manage
            distribution and logistics, labor costs, personnel productivity,
            inventory levels, data accuracy and stocking strategies
          </li>
          <li>
            Designed the Web application layout and forms using HTML5, CSS3,
            JavaScript and ASP.net
          </li>
          <li>
            Used GitHub UI, Git bash to commit, changes to the repository for
            maintaining various versions of the agile process.
          </li>
          <li>
            Involved in testing the application like system integration testing,
            User Acceptance Testing, and unit testing
          </li>
          <li>
            Developed data formatted web applications and deploy the script
            using HTML5, CSS and Client-side scripting using JavaScript.
          </li>
          <li>
            Involved in building flexible UI, more user interactive and
            user-friendly web pages, reusable classes, functions using ASP.NET,
            C#, AJAX and JavaScript for client-side validation.
          </li>
          <li>Involved in implementation of Annually, Weekly BI Reports</li>
          <li>
            Developing an application for creating BI reports on Tableau
            Software and Power Bi with DAX and power
          </li>
        </ul>
        <h2>Feb 2014 - Jan 2015</h2>
        <h3>Samsung (Techmart)- Software Developer</h3>
        <ul>
          <li>
            Performed as a member of the development team for a state-of-the-art
            microservice- based enterprise application. The application was
            composed of more than 10 microservices, each responsible for a
            modularized functionality of a holistic IT platform. Utilize
            business intelligence tools to provide sales insights to marketing
            and sales staff.
          </li>
          <li>
            The application developed was used by area sales managers in order
            to provide insights about the top performing and underperforming
            products and services, selling and market opportunities, sales
            forecasting, and sales activities that generate revenue.
          </li>
          <li>
            Involved in gathering the requirements from the Business Team and
            creation of technical, functional specification documents
          </li>
          <li>Involved in implementation of Annually, Weekly BI Reports</li>
          <li>
            Used JavaScript DOM manipulation and JavaScript event to generate
            the data result in UI.
          </li>
          <li>
            Gathered and analyzed the requirements and converted them into User
            Requirement Specifications and Functional Requirement Specifications
            for the designers and developers to understand them as per their
            perspective.
          </li>
          <li>
            Involved in web designing using HTML 4/5, XHTML, CSS 2/3,
            JavaScript, Ajax, JSON, and jQuery
          </li>
          <li>
            Involved with cross browser testing and compatibility using chrome,
            Firefox, Safari, and IE. Mobile/Tablet Views
          </li>
          <li>
            Co-ordinate with QA for testing, Production releases, Application
            deployment and integration.
          </li>
          <li>
            Involved in Production Support and minor enhancements as per
            application requirements.
          </li>
        </ul>
        <h2>Sep 2008 – Feb 2014</h2>
        <h3>Solico Group - Area Sales Analyst</h3>
        <ul>
          <li>
            Performed as an Area Sales Analyst in mining sales data to evaluate
            the performance of the sales team against its goals; providing
            insights about the top performing and underperforming
            products/services, selling and market opportunities, sales
            forecasting, and sales activities that generate revenue.
          </li>
        </ul>
        <h2>Apr 2002 – Jul 2008</h2>
        <h3>Choco Parastoo - Senior Managerial Accountant</h3>
        <ul>
          <li>
            Performed as a Senior Managerial Accountant in the supply chain
            department, distribution, and logistics solutions. Managed labor
            costs, personnel productivity, inventory levels, data accuracy and
            stocking strategies.
          </li>
        </ul>
      </section> */}
    </div>
  );
};

export default About;
