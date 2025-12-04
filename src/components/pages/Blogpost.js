import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';

const Blogpost = () => {
  const location = useLocation();
  const params = useParams();

  let blogObj = location.state?.blogObj || null;

  if (!blogObj && params.blogObj) {
    try {
      blogObj = JSON.parse(decodeURIComponent(params.blogObj));
    } catch (e) {
      console.error('Failed to parse blogObj from URL param:', e);
    }
  }

  if (!blogObj) {
    return (
      <div className="blogpost">
        <Row className="navArea" />
        <Row className="mainArea">
          <Col xs="12" style={{ padding: '2rem' }}>
            <h2>Blog post not found</h2>
            <p>Try navigating here from the blog list.</p>
          </Col>
        </Row>
      </div>
    );
  }

  const renderContent = () => {
    if (!blogObj.image) return null;

    return (
      <>
        <Row
          className="blogPostPic"
          style={{
            backgroundImage: `url("${blogObj.image}")`,
            backgroundPosition: '50% 30%',
          }}
        >
          <Col xs="12">
            <div
              className="fadeInBg"
              style={{
                backgroundColor: 'white',
                opacity: 0.7,
                width: '100%',
                height: '100%',
              }}
            />
            <div
              className="fadeInTitle"
              style={{
                position: 'relative',
                verticalAlign: 'bottom',
                left: '50px',
                bottom: '150px',
              }}
            >
              <h1>{blogObj.title}</h1>
              <h3>{blogObj.date}</h3>
            </div>
          </Col>
        </Row>

        <Row className="blogPostContent" style={{ minHeight: '100vh' }}>
          <Col xs="1" />
          <Col xs="10">
            <p>{blogObj.text}</p>
          </Col>
          <Col xs="1" />
        </Row>
      </>
    );
  };

  return (
    <div className="blogpost">
      <Row className="navArea" />
      <Row className="mainArea">{renderContent()}</Row>
    </div>
  );
};

export default Blogpost;
