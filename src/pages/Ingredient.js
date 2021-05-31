import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Drink from "../components/Beverages/Drink";

const setStorage = (ingredient) => {
    localStorage.setItem('ingredient', ingredient);
}

const Ingredient = () => {

    const [ingredient, setIngredient] = useState('');
    const [drinks, setDrinks] = useState([]);

    const fetchDrinks = async () => {

        setStorage(ingredient);
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await res.json();
        setDrinks(data.drinks);        
    }

    const fetchDrinksOnLoad = async (search) => {

        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search}`);
        const data = await res.json();
        setDrinks(data.drinks);        
    }

    const allDrinks = drinks?.map(drink => (
        <Drink key={drink.idDrink} drink={drink} />
    ))  

    useEffect(() => {
        let searchTerm = localStorage.getItem('ingredient');
        if (searchTerm !== null){
            fetchDrinksOnLoad(searchTerm)
            setIngredient(searchTerm);
        }

    }, [])
    
    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Jumbotron className="col-12 col-md-10">
                        <h1 className="text-center">Search Cocktails by Ingredient</h1>
                        <Row>
                            <Col xs={12}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Ingredient:</Form.Label>
                                        <input 
                                            type="text" 
                                            value={ingredient} 
                                            placeholder="e.g. Vodka" 
                                            className="form-control" 
                                            onChange={e => setIngredient(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="success" onClick={fetchDrinks}>Get Cocktail</Button>
                                    </Form.Group>
                                </Form>                                
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            {drinks.length !== 0 ? <h1 className="text-center">Results</h1> : null}
                        </Row>
                        <Row>
                            {allDrinks}
                        </Row>
                    </Jumbotron>

                </Row>

            </Container>
            
            
        </>
    )
}

export default Ingredient
