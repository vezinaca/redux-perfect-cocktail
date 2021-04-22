import React, { useState, useEffect } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./Category.css";

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [drinks, setDrinks] = useState([]);

    const fetchCategories = async () => {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const data = await res.json();
        console.log("data: ", data.drinks);   
        setCategories(data.drinks);
    }

    const fetchDrinks = async (cat) => {
        console.log('click drinks', cat);

    }

    // const handleChange = (e) =>{
    //     console.log('changed', e.target.value);
    // }

    useEffect(() => {
        fetchCategories();
    }, [])

    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Jumbotron className="jumbotron col-12 col-md-10">
                        <h1 className="text-center">Search Cocktails by Category</h1>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        Ingredient: 
                                    </Form.Label>
                                    <Form.Control as="select" onChange={(evt) => fetchDrinks(evt.target.value)}>
                                        <option> - Select - </option>
                                        {
                                            categories.map((category, index) => (
                                                <option key={index}>{category.strCategory}</option>
                                            ))
                                        }

                                    </Form.Control>

                                </Form.Group>

                                <Button variant="success" onClick={fetchDrinks}>Get Cocktails</Button>
                            </Form>
                        </Col>
                    </Row>
                    </Jumbotron>
                </Row>
            </Container>
            
        </>
    )
}

export default Category
