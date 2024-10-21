import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
import Navbar from "./Navbar";
import "./topicCard.css";

export default function Blind75Page({ questionData }) {
  const dark = useContext(ThemeContext);

  const findPercentage = (doneQuestions, totalQuestions) => {
    return Math.round((doneQuestions / totalQuestions) * 100);
  };

  let totalSolved = 0;
  let totalQuestions = 0;

  let topicCard = questionData.map((topic, index) => {
    let { topicName, doneQuestions, questions, started } = topic;
    let filteredQuestions = questions.slice(10, 17); 
    let percentDone = findPercentage(doneQuestions, filteredQuestions.length);
    let questionsRemainig = filteredQuestions.length - doneQuestions;

    totalSolved += doneQuestions;
    totalQuestions += filteredQuestions.length;

    return (
      <Fade duration={500 + index * 0.4} key={index}>
        <div className="col mb-4">
          <Link
            to={`/${topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase()}`}
            style={{ textDecoration: "none" }}
          >
            <Card
              className={`mb-3 inprogress-card animate__slideInDown hvr-grow ${
                dark ? "darkCard" : "blind75Card" 
              }`}
            >
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title className="topicName">{topic.topicName}</Card.Title>
                  </Col>
                  <Col>
                    <h4>
                      <Badge
                        pill
                        variant="success"
                        className="float-right"
                        style={{ fontWeight: "500", cursor: "pointer" }}
                      >
                        {questionsRemainig === 0 ? "Done 👏🏻" : "Solve Now 🙇🏻‍♂️"}
                      </Badge>
                    </h4>
                  </Col>
                </Row>
                <Card.Text className="totalQuestion">
                  Total Questions {filteredQuestions.length} <br />
                  {`${questionsRemainig}`} More to go
                </Card.Text>
                <p className="percentDone mb-1">
                  <b>{percentDone}% Done</b>
                </p>
                <ProgressBar
                  animated={percentDone === 100 ? false : true}
                  variant="success"
                  now={percentDone}
                />
              </Card.Body>
            </Card>
          </Link>
        </div>
      </Fade>
    );
  });

  return (
    <>
      <h3 className="app-heading2 text-center mb-3">
        Blind 75 Questions 🔥
      </h3>
      {}
        <Navbar />
      <div className="container container-custom">
        <div className="row row-cols-1 row-cols-md-3 mt-3 grids">
          {topicCard}
        </div>
      </div>
    </>
  );
}
