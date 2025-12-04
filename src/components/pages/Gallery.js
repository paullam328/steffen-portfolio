import React, { useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

const Gallery = () => {
  const [imgArray, setImgArray] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);

    const imgs = importAll(
      require.context(
        './../../../public/images/gallery',
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    setImgArray(imgs);
  }, []);

  const renderImageRows = () => {
    const rows = [];

    for (let i = 0; i < imgArray.length; i += 4) {
      const chunk = imgArray.slice(i, i + 4);

      rows.push(
        <Row key={i}>
          {chunk.map((imgSrc, idx) => {
            const globalIndex = i + idx;

            return (
              <Col
                key={globalIndex}
                md="3"
                className="container-fluid"
                style={{
                  backgroundImage: `url("${imgSrc}")`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              >
                <Image
                  className={`galleryImg galleryImg${globalIndex}`}
                  style={{ opacity: 0 }}
                  src={imgSrc}
                  fluid
                />
              </Col>
            );
          })}
        </Row>
      );
    }
    return rows;
  };

  return (
    <div className="gallery">
      <Row className="navArea" />
      <Row className="mainArea galleryArea no-margin">
        <Col xs="12">
          {renderImageRows()}
        </Col>
      </Row>
    </div>
  );
};

export default Gallery;
