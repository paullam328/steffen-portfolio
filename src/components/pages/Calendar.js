import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Calendar = () => {
  return (
    <div className="blogpost">
      <Row className="navArea" />

      <Row className="mainArea" style={{ height: '70vh' }}>
        <Col xs="12">
          <Row>
            <Col xs="12">
              <h3
                className="blogHeader"
                style={{ fontSize: '40px', paddingTop: '20px' }}
              >
                My Calendar
              </h3>
            </Col>
          </Row>

          <Row style={{ height: '100%' }}>
            <Col sm="1" />
            <Col sm="10" style={{ height: '100%' }}>
              <iframe
                title="My Google Calendar"
                className="calendar img-responsive"
                src="https://calendar.google.com/calendar/embed?src=paullam328%40gmail.com&ctz=America%2FVancouver"
                style={{
                  border: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </Col>
            <Col sm="1" />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Calendar;
