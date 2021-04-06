import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <Container>
                    <Row className="justify-content-between my-row">
                        <Col>
                            <h4 className="sitename">PERFECT<span>COCKTAIL</span></h4>
                        </Col>
                        <Col>
                            <p className="text-right">All Wrongs Reversed</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
            
        </>
    )
}

export default Footer;