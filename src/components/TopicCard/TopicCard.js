import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
import SubscriptionModal from "./SubscriptionModal"; 
import "./topicCard.css";

export default function TopicCard({ questionData, isSubscribed }) {
  const dark = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false); 

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleTabClick = (tab) => {
    if (!isSubscribed && tab !== "all") {
      handleShowModal(); 
    } else {
      setActiveTab(tab); 
    }
  };

  const findPercentage = (doneQuestions, totalQuestions) => {
    return Math.round((doneQuestions / totalQuestions) * 100);
  };

  let totalSolved = 0;
  let totalQuestions = 0;

  const getQuestionsForTab = (questions) => {
    switch (activeTab) {
      case "75-blind":
        return questions.slice(0, 5);
      case "university":
        return questions.slice(0, 10);
      case "core-problems":
        return questions.slice(0, 15);
      default:
        return questions;
    }
  };

  let topicCard = questionData.map((topic, index) => {
    let { topicName, doneQuestions, questions, started } = topic;
    let filteredQuestions = getQuestionsForTab(questions);
    let percentDone = findPercentage(doneQuestions, filteredQuestions.length);
    let questionsRemainig = filteredQuestions.length - doneQuestions;

    totalSolved += doneQuestions;
    totalQuestions += filteredQuestions.length;

    const isLocked = index >= 9 && !isSubscribed;

    if (started && !isLocked) {
      return (
        <Fade duration={500 + index * 0.4} key={index}>
          <div className="col mb-4">
            <Link
              to={`/${topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className={`mb-3 inprogress-card animate__slideInDown hvr-grow ${
                  dark ? "darkCard" : ""
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
    } else if (!isLocked) {
      return (
        <Fade duration={500 + index * 50} key={index}>
          <div className="col mb-4">
            <Link
              to={`/${topic.topicName.replace(/[^A-Z0-9]+/gi, "_").toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className={`mb-3 notstarted-card hvr-grow ${dark ? "darkCard" : ""}`}
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="topicName">{topicName}</Card.Title>
                    </Col>
                    <Col>
                      <h4>
                        <Badge
                          pill
                          variant="primary"
                          className="float-right"
                          style={{ fontWeight: "500", cursor: "pointer" }}
                        >
                          Start Now
                        </Badge>
                      </h4>
                    </Col>
                  </Row>
                  <Card.Text className="totalQuestion">
                    Total Questions {filteredQuestions.length}
                  </Card.Text>
                  <p className="percentDone mb-1">
                    <b>
                      <i>Not yet started</i>
                    </b>
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </Fade>
      );
    } else {
      return (
        <Fade duration={500 + index * 50} key={index}>
          <div className="col mb-4">
            <Card className={`mb-3 locked-card hvr-grow ${dark ? "darkCard" : ""}`}>
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title className="topicName">
                      {topicName} <Badge variant="danger">Locked 🔒</Badge>
                    </Card.Title>
                  </Col>
                  <Col>
                    <h4>
                      <Badge
                        pill
                        variant="warning"
                        className="float-right"
                        style={{ fontWeight: "500", cursor: "pointer" }}
                        onClick={handleShowModal} 
                      >
                        Unlock Now
                      </Badge>
                    </h4>
                  </Col>
                </Row>
                <Card.Text className="totalQuestion">
                  Subscribe to unlock this topic
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Fade>
      );
    }
  });

  return (
    <>
      <h3 className="app-heading2 text-center mb-3">
        Your Gateway to crack DSA{" "}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </h3>

      <h4 className="text-center mb-4">
        {totalSolved
          ? `Total Questions Solved : ${totalSolved} (${((totalSolved / totalQuestions) * 100).toFixed(
              2
            )}% Done)`
          : "Start Solving"}
        <p className="percentDone container mt-1">
          {totalSolved ? (
            <ProgressBar
              animated={((totalSolved / totalQuestions) * 100).toFixed(2) === "100" ? false : true}
              variant="success"
              now={((totalSolved / totalQuestions) * 100).toFixed(2)}
              style={{ margin: "0.2em 5em" }}
            />
          ) : null}
        </p>
      </h4>

      {}
      <Nav
        fill
        variant="tabs"
        defaultActiveKey="/all"
        activeKey={activeTab}
        onSelect={(selectedKey) => handleTabClick(selectedKey)} 
      >
        <Nav.Item>
          <Nav.Link eventKey="all" as="span" style ={{ cursor: !isSubscribed ? "not-allowed" : "pointer" }}>
            All Questions
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="75-blind"
            as="span" 
            style={{ cursor: !isSubscribed ? "not-allowed" : "pointer" }}
          >
            75 Blind
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="university"
            as="span" 
            style={{ cursor: !isSubscribed ? "not-allowed" : "pointer" }}
          >
            University
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="core-problems"
            as="span" 
            style={{ cursor: !isSubscribed ? "not-allowed" : "pointer" }}
          >
            Core Problems
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="container container-custom">
        <div className="row row-cols-1 row-cols-md-3 mt-3 grids">{topicCard}</div>
      </div>

      {}
      <SubscriptionModal show={showModal} handleClose={handleCloseModal} />
    </>
  );
}
