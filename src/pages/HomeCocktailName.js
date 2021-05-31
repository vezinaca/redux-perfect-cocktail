import React, { useState, useEffect } from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Cocktail from "../components/Beverages/Cocktail";

import "./HomeCocktailName.css";

const setStorage = (search) => {
    localStorage.setItem('search', search);
}

const HomeCocktailName = () => {

    const [cocktailQuery, setCocktailQuery] = useState('');
    const [allCocktails, setAllCocktails] = useState([]);
    
    const fetchDrinksByName = async (e) => {
        e.preventDefault();
        setStorage(cocktailQuery);
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailQuery}`);
        const data = await response.json();
        setAllCocktails(data.drinks);
   }

   const fetchDrinksByNameOnLoad = async (search) => {
    
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`);
    const data = await response.json();
    setAllCocktails(data.drinks);
}

   const mappedCocktails = allCocktails?.map(cocktail => (
       <Cocktail key={cocktail.idDrink} cocktail={cocktail}/>
   ))

    useEffect(() => {
        //console.log('useEffect homecocktailname')
        let searchTerm = localStorage.getItem('search');
        if (searchTerm !== null){
            fetchDrinksByNameOnLoad(searchTerm);
            setCocktailQuery(searchTerm);            
        }

    },[])

    
   
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
                                        <input value={cocktailQuery} onChange={e => setCocktailQuery(e.target.value)} type="text" placeholder="Eg. Margarita" className="form-control" />
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
