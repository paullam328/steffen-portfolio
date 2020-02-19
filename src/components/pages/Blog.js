import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blogpost from './Blogpost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

class Blog extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            blogPosts: []
        }

    }


    componentDidMount() {
        fetch("jsons/blogposts.json")
        .then(r => r.json())
        .then(data => {
            this.setState({blogPosts: data})
        })
    }

    fetchBlogsJson() {

    }

    blogsToRows() {
        var blogRows = this.state.blogPosts.map(blogItem => {
            return (
              <Row className="blogRow mb-20" height="300px">
                  <Col xs="2"></Col>
                  <Col xs="2" style={{backgroundImage:`url('${blogItem.image}')`, 
                backgroundSize:'contain',
                backgroundPosition: 'center center',
                backgroundRepeat:"no-repeat"}}></Col>
                  <Col xs="7">
                      <Card>
                        <Card.Title> 
                            <Link to={{
                                pathname:`blogpost/${JSON.stringify(blogItem)}`,
                                state: {blogObj: blogItem}
                            }}>{blogItem.title}</Link>
                        </Card.Title>
                        <Card.Subtitle> 
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {blogItem.date} 
                        </Card.Subtitle>
                        <div style={{flex: "1", flexShrink: "1", flexWrap:"wrap"}}>
                        <Card.Text style={{flex: "1", flexShrink: "1", flexWrap:"wrap"}}> 
                            {(blogItem.text.length > 245) ?  
                            blogItem.text.substring(0, 244) : blogItem.text}...
                        </Card.Text>

                        </div>
                        <Card.Text> 
                        <Link to={{
                                pathname:`blogpost/${JSON.stringify(blogItem)}`,
                                state: {blogObj: blogItem}
                            }}>Continue Reading...</Link>
                        </Card.Text>
                      </Card>
                    </Col>
                  <Col xs="1"></Col>
              </Row>
            )}
            );
        
            return blogRows;
    }

    render() {
      return (
          <div className="blog">
            <Row className="navArea">

            </Row>
            <Row className="mainArea blogsTitle">
                <Col xs="12">
                    <h3 className="blogHeader" style={{fontSize:"40px"}}>
                        My Blogs
                    </h3>
                </Col>
            </Row>
            <div>{this.blogsToRows()}</div>


          </div>
      );
  }
}

export default Blog;

// [{
// 	"title": "How to be a great developer",
// 	"text": "Get Good",
// 	"image": "./image/test",
// 	"comments": [{
// 		"name": "Steve",
// 		"comment": "you need more practice"
// 	}, {
// 		"name": "Tom",
// 		"comment": "you need more practice 2"
// 	}, {
// 		"name": "Steve",
// 		"comment": "you need more practice 3"
// 	}]
// }]
