import React, { useState } from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
// import Label from "react-bootstrap/FormLabel";

import "./HomeCocktailName.css";

const HomeCocktailName = () => {

    const [cocktail, setCocktail] = useState('');
    const [allCocktails, setAllCocktails] = useState([]);

    const getDrinksByName = async (cocktail) => {
        // Search by name
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
        // Returns a json respone
        const cocktails = await apiResponse.json();

        return null
   }


    return (
        <div>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Jumbotron className="col-12 col-md-10">
                        <h1 className="text-center">Search Cocktails by Name</h1>
                        <Row>
                            <Col xs={12}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Cocktail Name:</Form.Label>
                                        <input value={cocktail} onChange={e => setCocktail(e.target.value)}type="text" placeholder="Eg. Margarita" className="form-control" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button className="btn btn-success d-block" onClick={getDrinksByName}>Get Cocktails</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>

                    </Jumbotron>
                </Row>
            </Container>

        </div>
    )
}

export default HomeCocktailName
