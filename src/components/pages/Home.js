import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import $ from 'jquery';
import {Animate} from 'react-simple-animate';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            aboutHeaderStyle: 5,
            opacityStartWord: false,
            opacityStartAnimPic: false,
            backgroundColorAbout: [256, 256, 256]
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    //Handler for callback/context binding:
    handleScroll = () => {

        var scrollVal = window.scrollY/window.innerWidth;

        var aboutPageVal = (Math.round(scrollVal*100) - 50) * 5;
        console.log(aboutPageVal);
        if (aboutPageVal < -20)
        {
            this.setState({aboutHeaderStyle: aboutPageVal});
        }
        else 
        {
            if (aboutPageVal < 5) {
                this.setState({aboutHeaderStyle: aboutPageVal});
            }
            this.setState({opacityStartWord: true,
                opacityStartAnimPic: true}
                );
           // this.setState({opacityStartAnimPic: true});
        }

        //lerp from white to gray:
        const wrgb = 255;
        if (aboutPageVal > -200 && aboutPageVal < -100) {
            var lerpLength = 200 - 100;
            var progress = aboutPageVal + 200; //start from 0 -150 + 150 = 0
            var proportion = progress / lerpLength;
            this.setState({backgroundColorAbout:[
                256 - (proportion * (256 - 230)),
                256 - (proportion * (256 - 230)),
                256 - (proportion * (256 - 230))]});
        }
        //this.aboutHeaderStyle = {paddingRight:`${scrollVal}px`};

    }



    AnimateTitle() {
        if (this.state.opacityStartWord) {
            return(
                <div>
            <Animate play start={{ opacity: 0}} end={{opacity: 1}} duration={0.5}>
                <div className="aboutHeader" style={{marginRight:"-5%", marginTop:"-5%"}}>
                    <h3>Me</h3>
                </div>
            </Animate>
            <Animate play start={{ opacity: 0}} end={{opacity: 1}} duration={0.5} delay={0.8}>
                <div style={{marginRight:"5%",  fontSize: "1.5vw"}}>
                    <p style={{color:"#661714"}}>
                    "However, that article is still the best article I've ever written. Not because the article was so good, obviously, but because there is no single article or even book that taught me more than that article. The article was about some object-oriented programming (OOP) concepts, which may sound interesting, except I didn't know what object-oriented programming was."
                     "However, that article is still the best article I've ever written. Not because the article was so good, obviously, but because there is no single article or even book that taught me more than that article. The article was about some object-oriented programming (OOP) concepts, which may sound interesting, except I didn't know what object-oriented programming was."
                                 
                    </p>
                </div>
            </Animate>
            </div>
            )
        }
        return <div></div>;
    }

    animatePicture() {
        if (this.state.opacityStartAnimPic) {
            return (
                <Col xs="4" style={{paddingRight:"0"}}>
                    <Animate play start={{ opacity: 0}} end={{opacity: 1}} delay={0.5} duration={0.5}
                        >
                        <div style={{backgroundImage:"url('images/steffen2.jpg')", 
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"top",
                        backgroundSize:"cover",
                        height: "100vh"}}
                        >

                        </div>
                    </Animate>

                </Col>
            )
        }
        return (
            <Col xs="4">

            </Col>
            )
    }

    render() {
      return (
          <div className="home">
            <div className="block0">
            </div>
            <Row style={{height:"108vh"}} className="banner">
                <Col xs="6" className="introText">
                    <div className="introTextMain">
                        <h1>Steffen Waite</h1>
                    </div>
                    <div className="introTextSub">
                        <h3>Your-title-You-Want</h3>
                    </div>
                </Col>
                <Col xs="6" className="backgroundCol mx-0 px-0">
                    <Image src="./images/steffen.png" className="steffenImg"></Image>
                    <div className="block1">
                    </div>
                </Col>
            </Row>
            <Row style={{marginTop: "-10vh", height: "100vh"}} className="about">
                {this.animatePicture()}
                <Col xs="8"
                style={{
                    backgroundColor:
                    `rgb(${this.state.backgroundColorAbout[0]},
                    ${this.state.backgroundColorAbout[1]},
                    ${this.state.backgroundColorAbout[2]})`}}>
                    <div className="laptopAbout aboutHeader" style={{
                        marginRight:`${this.state.aboutHeaderStyle}%`,
                    marginTop: "5%"}}>
                        <h1>About</h1>
                    </div>
                    <h1 class="mobileAbout">About</h1>
                    {this.AnimateTitle()}

                </Col>
            </Row>
            {/* <Row style={{height:'100vh'}} className="professionalPursuits">
                <Col xs="12">
                    <div className="professionalPursuitsHeader">
                    </div>
                </Col>
            </Row> */}
            <Row className="overlayBackground">
                <Col xs="7" className="overlayCol">
                </Col>
            </Row>

          </div>

      );
  }
}

export default Home;