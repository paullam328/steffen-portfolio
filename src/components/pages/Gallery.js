import React from 'react';
import { Row, Col, Card, Image } from 'react-bootstrap';
import listReactFiles from 'list-react-files'
import glob from 'glob';
import * as fs from 'fs';
import $ from 'jquery';
import * as requireContext from 'require-context';
class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgArray: []
        }
    }

    //files are read from the server - ajax
    componentDidMount() {
        //Jesus, finally found a way to import all the pics...
        var imgs = this.importAll(require.context('./../../../public/images/gallery', false,/\.(png|jpe?g|svg)$/));
        this.setState({imgArray: imgs});
    }

    importAll(r) {
        return r.keys().map(r);
    }

    fetchAllImgsDisplay() {
        //console.log(get("/images").then(files => {console.log("file names: "); console.log(files);}))
        var galleryToPage = this.state.imgArray.map( (img1, index) => {
            if (index % 4 == 0) {
                //create new row:

                return (  
                    <Row>
                        {this.state.imgArray.map( (img2, index2) => {
                            console.log("T");
                            if (index2 >= index && index2 < index + 4)
                            {
                                return (
                                <Col md="3" className="container-fluid" style={{
                                    backgroundImage:`url("${img2}")`,
                                    backgroundSize:'cover',
                                    backgroundRepeat:'no-repeat',
                                    backgroundPosition:'center'}}>
                                    <Image className={`galleryImg galleryImg${index2}`} style={{
                                    opacity:'0'}} src={img2} fluid />
                                </Col>);
                            }
                        })}
                    </Row>)
            }
        });
        return galleryToPage;
    }

    render() {
      return (
          <div className="gallery">
            <Row className="navArea">

            </Row>
            <Row className="mainArea galleryArea no-margin">
                <Col mx="12">
                {this.fetchAllImgsDisplay()}
                </Col>
            </Row>
          </div>

      );
  }
}

export default Gallery;