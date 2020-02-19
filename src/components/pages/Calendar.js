import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogObj: {}
        }
    }

    render() {
      return (
          <div className="blogpost">
            <Row className="navArea">

            </Row>

            <Row className="mainArea" style={{height:"70vh"}}>
                <Col xs="12">
                    <Row>
                        <Col xs="12">
                            <h3 className="blogHeader" style={{fontSize:"40px"}}>
                                My Calendar
                            </h3>
                        </Col>
                    </Row>
                    <Row style={{height:"100%"}}>
                        <Col sm="1"></Col>
                        <Col sm="10" style={{height:"100%"}}>
                            <iframe class="calendar img-responsive" src="https://calendar.google.com/calendar/embed?src=paullam328%40gmail.com&ctz=America%2FVancouver"></iframe>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                </Col>
            </Row>
          </div>
      );
  }
}
//https://calendar.google.com/calendar/embed?src=paullam328%40gmail.com&ctz=America%2FVancouver

export default Calendar;