import React, { useState, useEffect, useRef } from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Drink from "../components/Beverages/Drink";
import "./Category.css";

const setStorage = (category) => {
    localStorage.setItem('category', category);
}

const Category = () => {

    const [categories, setCategories] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [category, setCategory] = useState('');
    const selectRef = useRef();
    
    const fetchCategories = async () => {
        const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const data = await res.json();
        setCategories(data.drinks);
    }

    const fetchDrinksByCategories = async (category) => {
        setStorage(category);
        setCategory(category);
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await res.json();
        setDrinks(data.drinks);
    }

    const fetchDrinksByCategoriesOnLoad = async (category) => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        const data = await res.json();
        setDrinks(data.drinks);
    }
        
    useEffect(() => {
        fetchCategories();        
        let searchCategory = localStorage.getItem('category');
        
        if (searchCategory !== null){
            setCategory(searchCategory);
            fetchDrinksByCategoriesOnLoad(searchCategory);
        }

    }, [])

    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Jumbotron className="jumbotron col-12 col-md-10">
                        <h1 className="text-center">Search Cocktails by Category</h1>
                    <Row>
                        <Col className="col-12">
                            <Form>
                                <Form.Group>
                                    <Form.Label>
                                        Category: 
                                    </Form.Label>
                                    <Form.Control value={category} ref={selectRef} className="categorySelect" as="select" onChange={(evt) => fetchDrinksByCategories(evt.target.value)}>
                                        <option> - Select - </option>
                                        {
                                            categories.map((category, index) => (
                                                <option value ={category.strCategory} key={index}>{category.strCategory}</option>
                                            ))
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col className="col-12 mt-5 results-wrapper">
                            {drinks.length !== 0 ? <h1 className="text-center">Results: </h1> : null }
                            <Row className="mt-5">
                                {drinks?.map(drink => (
                                    <Drink key={drink.idDrink} drink={drink} />
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

export default Category
