import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import FormGroup from "react-bootstrap/FormGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getIngredients } from '../Utilities/Utilities';
import Drink from "../components/Beverages/Drink";
import MyModal from "../components/MyModal";

const Ingredient = () => {

    const [ingredient, setIngredient] = useState('');
    const [drinks, setDrinks] = useState([]);

    const getDrinks = async () => {

        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await res.json();
        setDrinks(data.drinks);
        console.log(data.drinks);
    }

    const allDrinks = drinks?.map(drink => (
        <Drink key={drink.idDrink} drink={drink} />
    ))  
    
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
                                        <Button variant="success" onClick={getDrinks}>Get Cocktail</Button>
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
