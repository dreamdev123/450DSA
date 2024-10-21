import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './LandingPage.css'; 

export default function LandingPage() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <div className="landing-page">
      {}
      <section className="hero-section">
        <Container fluid className="text-center hero-container animate__animated animate__fadeIn">
          <h1 className="hero-title animate__animated animate__fadeInDown">Master DSA with Confidence</h1>
          <p className="hero-subtitle animate__animated animate__fadeInUp">Practice curated problems and track your progress to ace your next interview</p>
          <Link to="/home">
            <Button className="start-button animate__animated animate__bounceIn">Start Practicing</Button>
          </Link>
        </Container>
      </section>

      {}
      <section className="features-section py-5" data-aos="fade-up">
        <Container>
          <h2 className="section-title text-center mb-4">Why Choose Us?</h2>
          <Row className="text-center">
            <Col md={3}>
              <Card className="feature-card" data-aos="fade-right">
                <Card.Body>
                  <i className="fas fa-list-alt fa-3x feature-icon"></i>
                  <h4>Curated DSA Problems</h4>
                  <p>Handpicked problems designed for mastering algorithms and data structures.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="feature-card" data-aos="fade-up">
                <Card.Body>
                  <i className="fas fa-chart-line fa-3x feature-icon"></i>
                  <h4>Track Your Progress</h4>
                  <p>Monitor your progress and keep yourself motivated to complete more challenges.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="feature-card" data-aos="fade-down">
                <Card.Body>
                  <i className="fas fa-puzzle-piece fa-3x feature-icon"></i>
                  <h4>Real-World Scenarios</h4>
                  <p>Prepare for coding interviews by solving real-world challenges from top companies.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="feature-card" data-aos="fade-left">
                <Card.Body>
                  <i className="fas fa-lock fa-3x feature-icon"></i>
                  <h4>Unlock Advanced Topics</h4>
                  <p>Get full access to premium content by subscribing for lifetime access.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {}
      <section className="how-it-works-section py-5 bg-light" data-aos="fade-up">
        <Container>
          <h2 className="section-title text-center mb-4">How It Works</h2>
          <Row className="text-center">
            <Col md={6}>
              <Card className="step-card" data-aos="fade-right">
                <Card.Body>
                  <i className="fas fa-play-circle fa-3x step-icon"></i>
                  <h4>1. Click "Start Practicing"</h4>
                  <p>Choose from a wide range of problems and begin practicing!</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="step-card" data-aos="fade-left">
                <Card.Body>
                  <i className="fas fa-medal fa-3x step-icon"></i>
                  <h4>2. Check Out Premium Content</h4>
                  <p>Unlock advanced problems with a subscription to get ahead.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {}
      <section className="testimonials-section py-5" data-aos="fade-up">
        <Container>
          <h2 className="section-title text-center mb-4">What Our Users Say</h2>
          <Row className="text-center">
            <Col md={4}>
              <Card className="testimonial-card" data-aos="zoom-in">
                <Card.Body>
                  <h5>John Doe</h5>
                  <p>"This platform helped me ace my Google interview. The problems are spot-on."</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="testimonial-card" data-aos="zoom-in">
                <Card.Body>
                  
                  <h5>Jane Smith</h5>
                  <p>"I love how I can track my progress. It's so motivating and keeps me focused."</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="testimonial-card" data-aos="zoom-in">
                <Card.Body>
                  
                  <h5>Mike Johnson</h5>
                  <p>"Unlocking the advanced problems was totally worth it. This is the best DSA platform!"</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {}
      <section className="advanced-features-section py-5 bg-light" data-aos="fade-up">
        <Container>
          <h2 className="section-title text-center mb-4">Key Features to Help You Succeed</h2>
          <Row className="text-center">
            <Col md={4} data-aos="fade-right">
              
              <h4>Structured Learning</h4>
              <p>Our problem sets are organized to help you progressively improve your skills.</p>
            </Col>
            <Col md={4} data-aos="fade-up">
              
              <h4>Detailed Progress Tracking</h4>
              <p>Track your performance across topics and watch your progress grow.</p>
            </Col>
            <Col md={4} data-aos="fade-left">
              <h4>Hints & Solutions Link</h4>
              <p>Stuck? Use hints or review solutions to learn the best practices.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {}
      <section className="call-to-action-section py-5">
        <Container className="text-center">
          <h2 className="animate__animated animate__fadeInUp">Ready to Ace Your Coding Interviews?</h2>
          <Link to="/home">
            <Button className="cta-button animate__animated animate__pulse animate__infinite">Start Practicing</Button>
          </Link>
        </Container>
      </section>

      {}
      <footer className="footer-section py-4 text-center">
        <Container>
          <p>&copy; 2024 CodePrepPro.</p>
        </Container>
      </footer>
    </div>
  );
}
