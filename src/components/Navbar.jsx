import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, repos, about, skills } from "../editable-stuff/config.js";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top  ${
        !isTop ? "navbar-white" : "navbar-transparent"
      }`}
      expand="lg"
    >
      <Navbar.Brand className="brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`< Home />`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {projectinfo.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#projectinfo"}
            >
              Project Information
            </Nav.Link>
          )}
          {background.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#background"}
            >
              Background Information
            </Nav.Link>
          )}
          {overview.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#overview"}
            >
              Overview of Wireless Internet 
            </Nav.Link>
          )}
          {questions.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#questions"}
            >
              Analysis 
            </Nav.Link>
          )}
          {whyask.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#whyask"}
            >
              Effects of Analysis 
            </Nav.Link>
          )}
          {impact.show && (
            <Nav.Link
              className="nav-link lead"
              href={process.env.PUBLIC_URL + "/#impact"}
            >
              Impact of Analysis 
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
