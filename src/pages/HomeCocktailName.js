import React, { useState } from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cocktail from "../components/Beverages/Cocktail";

import "./HomeCocktailName.css";

const HomeCocktailName = () => {

    const [cocktail, setCocktail] = useState('');
    const [allCocktails, setAllCocktails] = useState([]);

    const fetchDrinksByName = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`);
        const data = await response.json();
        setAllCocktails(data.drinks);
   }

   const mappedCocktails = allCocktails?.map(cocktail => (
       <Cocktail key={cocktail.idDrink} cocktail={cocktail}/>
   ))
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
                                        <input value={cocktail} onChange={e => setCocktail(e.target.value)} type="text" placeholder="Eg. Margarita" className="form-control" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button className="btn btn-success d-block" onClick={fetchDrinksByName}>Get Cocktails</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                        <div className="results">
                            {mappedCocktails.length !== 0 ? <h1 className="text-center mt-5">Results</h1> : null }
                            <Row className="mt-5">
                                {mappedCocktails}
                            </Row>
                        </div>
                    
                    </Jumbotron>
                </Row>
            </Container>

        </div>
    )
}

export default HomeCocktailName
