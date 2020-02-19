import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

class Blogpost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogObj: {}
        }
    }

    componentDidMount() {
        var bo = JSON.parse(this.props.location.pathname.substring(10, this.props.location.pathname.length));
        console.log(bo);
        this.setState({blogObj: bo}, () => {
            console.log("Done");
        });
    }

    getImgPathThenRender() {

//./ <- . continues from the prev url, so no dot pls..., and dont forget doublebrackets for url...
        if (this.state.blogObj.image){
            console.log("RENDER:");
            console.log(process.env.PUBLIC_URL)
            console.log(this.state.blogObj.image);
            return (
                <div>
            <Row className="blogPostPic" 
            style={{backgroundImage:`url("${this.state.blogObj.image}")`,
            backgroundPosition:"50% 30%"}}>
                <Col xs="12" >
                <div className="fadeInBg"
                style={{
                backgroundColor:"white",
                opacity:"0.7",
                width:"100%",
                height:"100%"
                }}
                >
                </div>

                <div className="fadeInTitle"
                style={{position:"relative",
                verticalAlign: "bottom", 
                left: "50px", 
                bottom:"150px"}}>
                    <h1>{this.state.blogObj.title}</h1>
                    <h3>{this.state.blogObj.date}</h3></div>
                    </Col>
            </Row>
            <Row className="blogPostContent" height="100vh">
                <Col xs="1" ></Col>
                <Col xs="10" >
                    <p>
                        {this.state.blogObj.text}
                    </p>
                </Col>
                <Col xs="1" ></Col>
            </Row>
            </div>
            );
        }
        else {
            return(<div></div>);
        }
    }

    render() {
      return (
          <div className="blogpost">
            <Row className="navArea">

            </Row>
            <Row className="mainArea">
                {this.getImgPathThenRender()}
            </Row>
          </div>
      );
  }
}

export default Blogpost;