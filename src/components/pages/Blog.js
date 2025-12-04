import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('jsons/blogposts.json');
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error('Failed to load blogposts.json', err);
      }
    };

    fetchPosts();
  }, []);

  const renderBlogRows = () =>
    blogPosts.map((blogItem, index) => (
      <Row
        className="blogRow mb-20"
        style={{ height: '200px' }}
        key={index}
      >
        <Col xs="2" />
        <Col
          xs="2"
          style={{
            backgroundImage: `url('${blogItem.image}')`,
            backgroundSize: 'contain',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Col xs="7">
          <Card>
            <Card.Title>
            <Link 
                to={`/blogpost/${encodeURIComponent(JSON.stringify(blogItem))}`}
                state={{ blogObj: blogItem }}
                >
                {blogItem.title}
              </Link>
            </Card.Title>
            <Card.Subtitle>
              <FontAwesomeIcon icon={faCalendar} /> {blogItem.date}
            </Card.Subtitle>
            <div style={{ flex: 1, flexShrink: 1, flexWrap: 'wrap' }}>
              <Card.Text style={{ flex: 1, flexShrink: 1, flexWrap: 'wrap' }}>
                {blogItem.text.length > 245
                  ? blogItem.text.substring(0, 244)
                  : blogItem.text}
                ...
              </Card.Text>
            </div>
            <Card.Text>
                <Link 
                    to={`/blogpost/${encodeURIComponent(JSON.stringify(blogItem))}`}
                    state={{ blogObj: blogItem }}
                    >
                Continue Reading...
              </Link>
            </Card.Text>
          </Card>
        </Col>
        <Col xs="1" />
      </Row>
    ));

  return (
    <div className="blog">
      <Row className="navArea" />
      <Row className="mainArea blogsTitle">
        <Col xs="12">
          <h3 className="blogHeader" style={{ fontSize: '40px' }}>
            My Blogs
          </h3>
        </Col>
      </Row>
      <div>{renderBlogRows()}</div>
    </div>
  );
};

export default Blog;
