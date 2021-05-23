import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Drink from "../components/Beverages/Drink";

const setStorage = (alcoholic) => {
    localStorage.setItem('alcoholic', alcoholic);
}

const Alcohol = () => {

    const [drinks, setDrinks] = useState([]);

    const fetchDrinksByAlcohol = async (term) => {
        
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);
        const data = await res.json();
        setDrinks(data.drinks);

    }

    const fetchDrinksByAlcoholOnLoad = async (term) => {
        
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);
        const data = await res.json();
        setDrinks(data.drinks);

    }

    const handleChange = e => {
        console.log("handleChange");
        fetchDrinksByAlcohol(e.target.value);
        console.log("e.target.value: ", e.target.value);
        setStorage(e.target.value);
    }

    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Jumbotron className="col-12 col-md-10">
                        <h1 className="text-center">Search Cocktails by Alcohol / Non Alcohol</h1>
                        <Row>
                            <Col className="col-12">
                                <Form>
                                    <Form.Group>
                                        <Form.Control as="select" onChange={handleChange}>
                                            <option value="none">- Select -</option>
                                            <option value="Alcoholic">Alcoholic</option>
                                            <option value="Non_Alcoholic">Non Alcoholic</option>
                                        </Form.Control>
                                    </Form.Group>

                                </Form>
                            </Col>
                            <Col className="col-12 mt-5 results-wrapper">
                                {drinks.length !== 0? <h1 className="text-center">Results: </h1>: null}
                                <Row className="mt-5">
                                    {drinks?.map(drink => (
                                        <Drink key={drink.idDrink} drink={drink}></Drink>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Row>
            </Container>
        </>
    )
}

export default Alcohol
