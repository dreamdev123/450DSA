import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom"; 
import { getData, updateDBData, resetDBData, exportDBData, importDBData } from "./services/dbServices";
import { saveAs } from "file-saver";
import Spinner from "react-bootstrap/Spinner";
import SubscribePage from "./components/TopicCard/SubscribePage";
import ThankYouPage from "./components/TopicCard/ThankYouPage"; 
import TopicCard from "./components/TopicCard/TopicCard";
import LandingPage from "./components/TopicCard/LandingPage";
import Topic from "./components/Topic/Topic";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Blind75Page from "./components/TopicCard/75BlindPage"; 
import AllQuestionsPage from "./components/TopicCard/AllQuestionsPage";  
import UniversityPage from "./components/TopicCard/UniversityPage";
import CoreProblemsPage from "./components/TopicCard/CoreProblemsPage";

import "./App.css";

export const ThemeContext = createContext(null);

function App() {
  const [questionData, setquestionData] = useState([]);
  const [dark, setDark] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(
    JSON.parse(sessionStorage.getItem("isSubscribed")) || false
  );
  
  const location = useLocation(); 

  useEffect(() => {
    sessionStorage.removeItem("cid");
    getData((QuestionData) => {
      setquestionData(QuestionData);
    });
    if (!("isDark" in window.sessionStorage)) {
      window.sessionStorage.setItem("isDark", dark);
    } else {
      let temp = window.sessionStorage["isDark"];
      if (temp === "false") {
        setDark(false);
      } else {
        setDark(true);
      }
    }
  }, []);

  function updateData(key, topicData, topicPosition) {
    let reGenerateUpdatedData = questionData.map((topic, index) => {
      if (index === topicPosition) {
        updateDBData(key, topicData);
        return { topicName: topic.topicName, position: topic.position, ...topicData };
      } else {
        return topic;
      }
    });
    setquestionData(reGenerateUpdatedData);
  }

  function resetData() {
    resetDBData((response) => {
      setquestionData([]);
      window.location.replace(window.location.origin);
    });
  }

  function exportData(callback) {
    exportDBData((data) => {
      const fileData = JSON.stringify(data);
      const blob = new Blob([fileData], { type: "text/plain" });
      saveAs(blob, "progress.json");
      callback();
    });
  }

  function importData(data, callback) {
    importDBData(data, (QuestionData) => {
      setquestionData(QuestionData);
      callback();
    });
  }

  return (
    <div className={dark ? "App dark" : "App"}>
      <h1 className="app-heading text-center mt-4" style={{ color: dark ? "white" : "" }}>
        CodePrepPro
      </h1>

      {questionData.length === 0 ? (
       
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="success" />
        </div>
      ) : (
        <>
          <ThemeContext.Provider value={dark}>
            {}
            <Route exact path="/" children={<LandingPage questionData={questionData} />} />
            <Route path="/home" children={<TopicCard questionData={questionData} isSubscribed={isSubscribed} />} /> {}
            <Route
              path="/about"
              children={
                <About resetData={resetData} exportData={exportData} importData={importData} setQuestionData={setquestionData} />
              }
            />

              {}
            <Route
              path="/all"
              children={<AllQuestionsPage questionData={questionData} />}
            />
            <Route
              path="/75-blind"
              children={<Blind75Page questionData={questionData} />}
            />
            <Route
              path="/university"
              children={<UniversityPage questionData={questionData} />}
            />
            <Route
              path="/core-problems"
              children={<CoreProblemsPage questionData={questionData} />}
              />
            <Route
          path="/subscribe"
          children={<SubscribePage setIsSubscribed={setIsSubscribed} />} 
        />
        <Route path="/thankyou" children={<ThankYouPage />} />
              {}
            
            <Route path="/array" children={<Topic data={questionData[0]} updateData={updateData} />} />
            <Route path="/matrix" children={<Topic data={questionData[1]} updateData={updateData} />} />
            <Route path="/string" children={<Topic data={questionData[2]} updateData={updateData} />} />
            <Route path="/search_sort" children={<Topic data={questionData[3]} updateData={updateData} />} />
            <Route path="/linked_list" children={<Topic data={questionData[4]} updateData={updateData} />} />
            <Route path="/binary_trees" children={<Topic data={questionData[5]} updateData={updateData} />} />
            <Route path="/bst" children={<Topic data={questionData[6]} updateData={updateData} />} />
            <Route path="/greedy" children={<Topic data={questionData[7]} updateData={updateData} />} />
            <Route path="/backtracking" children={<Topic data={questionData[8]} updateData={updateData} />} />
            <Route path="/stacks_queues" children={<Topic data={questionData[9]} updateData={updateData} />} />
            <Route path="/heap" children={<Topic data={questionData[10]} updateData={updateData} />} />
            <Route path="/graph" children={<Topic data={questionData[11]} updateData={updateData} />} />
            <Route path="/trie" children={<Topic data={questionData[12]} updateData={updateData} />} />
            <Route path="/dynamic_programming" children={<Topic data={questionData[13]} updateData={updateData} />} />
            <Route path="/bit_manipulation" children={<Topic data={questionData[14]} updateData={updateData} />} />
          </ThemeContext.Provider>
        </>
      )}

      {}
      {location.pathname !== "/" && <Footer dark={dark} setDark={setDark} />} 
    </div>
  );
}

export default App;
