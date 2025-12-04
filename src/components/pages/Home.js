import React, { useState, useEffect } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { Animate } from 'react-simple-animate';

const Home = () => {
  const [aboutHeaderStyle, setAboutHeaderStyle] = useState(5);
  const [opacityStartWord, setOpacityStartWord] = useState(false);
  const [opacityStartAnimPic, setOpacityStartAnimPic] = useState(false);
  const [backgroundColorAbout, setBackgroundColorAbout] = useState([256, 256, 256]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollVal = window.scrollY / window.innerWidth;
      const aboutPageVal = (Math.round(scrollVal * 100) - 50) * 5;

      // About header position
      if (aboutPageVal < -20) {
        setAboutHeaderStyle(aboutPageVal);
      } else {
        if (aboutPageVal < 5) {
          setAboutHeaderStyle(aboutPageVal);
        }
        setOpacityStartWord(true);
        setOpacityStartAnimPic(true);
      }

      // Lerp background color from white to gray
      if (aboutPageVal > -200 && aboutPageVal < -100) {
        const lerpLength = 200 - 100;
        const progress = aboutPageVal + 200; // -200 -> 0, -100 -> 100
        const proportion = progress / lerpLength;

        const base = 256;
        const target = 230;
        const value = base - proportion * (base - target);

        setBackgroundColorAbout([value, value, value]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderTitle = () => {
    if (!opacityStartWord) return <div />;

    return (
      <div>
          <div>
            <h1>About</h1>
            <h3>Me</h3>
          </div>
        <Animate
          play
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          duration={0.5}
          delay={0.8}
        >
          <div style={{ marginRight: '5%', fontSize: '1.5vw' }}>
            <p style={{ color: '#661714' }}>
              "However, that article is still the best article I've ever written. Not because the
              article was so good, obviously, but because there is no single article or even book
              that taught me more than that article. The article was about some object-oriented
              programming (OOP) concepts, which may sound interesting, except I didn't know what
              object-oriented programming was."
              {" "}
              "However, that article is still the best article I've ever written. Not because the
              article was so good, obviously, but because there is no single article or even book
              that taught me more than that article. The article was about some object-oriented
              programming (OOP) concepts, which may sound interesting, except I didn't know what
              object-oriented programming was."
            </p>
          </div>
        </Animate>
      </div>
    );
  };

  const renderPicture = () => {
    if (!opacityStartAnimPic) {
      return <Col xs="4" />;
    }

    return (
      <Col xs="4" style={{ paddingRight: '0' }}>
        <Animate
          play
          start={{ opacity: 0 }}
          end={{ opacity: 1 }}
          delay={0.5}
          duration={0.5}
        >
          <div
            style={{
              backgroundImage:
                "url('images/photo-1579038773867-044c48829161.jpg')",
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              backgroundSize: 'cover',
              height: '100vh',
            }}
          />
        </Animate>
      </Col>
    );
  };

  return (
    <div className="home">
      <div className="block0" />
      <Row style={{ height: '108vh' }} className="banner">
        <Col xs="6" className="introText">
          <div className="introTextMain">
            <h1>Steffen Wilt</h1>
          </div>
          <div className="introTextSub">
            <h3>Your-title-You-Want</h3>
          </div>
        </Col>
        <Col xs="6" className="backgroundCol mx-0 px-0">
          <Image
            src="./images/smiling-young-man-standing-with-hands-in-pockets-standing-front-view-isolate-on-transparent-background-png.png"
            className="steffenImg"
          />
          <div className="block1" />
        </Col>
      </Row>

      <Row style={{ marginTop: '-10vh', height: '100vh' }} className="about">
        {renderPicture()}
        <Col
          xs="8"
          style={{
            backgroundColor: `rgb(${backgroundColorAbout[0]},
              ${backgroundColorAbout[1]},
              ${backgroundColorAbout[2]})`,
          }}
        >
          <div
            className="laptopAbout aboutHeader"
            style={{
              marginRight: `${aboutHeaderStyle}%`,
              marginTop: '5%',
            }}
          >
          </div>
          {renderTitle()}
        </Col>
      </Row>

      <Row className="overlayBackground">
        <Col xs="7" className="overlayCol" />
      </Row>
    </div>
  );
};

export default Home;
