import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  projectinfo,
  background,
  overview,
  questions,
  whyask,
  impact,
  getInTouch,
} from "./editable-stuff/config.js";
import MainBody from "./components/home/MainBody";
import ProjectInfo from "./components/home/ProjectInfo";
import BackgroundInfo from "./components/home/BackgroundInfo";
import Overview from "./components/home/Overview";
import Questions from "./components/home/Questions.jsx";
import WhyAsk from "./components/home/WhyAsk.jsx";
import Impact from "./components/home/Impact.jsx";
import GetInTouch from "./components/home/GetInTouch.jsx";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {projectinfo.show && (
        <ProjectInfo
          heading={projectinfo.heading}
          message={projectinfo.message}
          link={projectinfo.imageLink}
          imgSize={projectinfo.imageSize}
          resume={projectinfo.resume}
        />
      )}
      {background.show && (
        <BackgroundInfo
          heading={background.heading}
          username={background.gitHubUsername}
          length={background.reposLength}
          specfic={background.specificRepos}
        />
      )}
      {overview.show && (
        <Overview
          heading={overview.heading}
          hardSkills={overview.hardSkills}
          softSkills={overview.softSkills}
        />
      )}
      {questions.show && (
        <Questions
          heading={questions.heading}
          message={questions.message}
          img={questions.images}
          imageSize={questions.imageSize}
        />
      )}
      {whyask.show && (
        <WhyAsk
          heading={whyask.heading}
          message={whyask.message}
          img={whyask.images}
          imageSize={whyask.imageSize}
        />
      )}
      {impact.show && (
        <Impact
          heading={impact.heading}
          message={impact.message}
          img={impact.images}
          imageSize={impact.imageSize}
        />
      )}
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      {/* {false && <Route path="/blog" exact component={Blog} />}
      {false && <Route path="/blog/:id" component={BlogPost} />} */}
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
