import React, { useState, useEffect } from 'react'
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { getIngredients } from "../../Utilities/Utilities";
import ListGroup from "react-bootstrap/ListGroup";


const Drink = ({drink}) => {

    const [show, setShow] = useState(false);
    const [fullDetailsCocktail, setFullDetailsCocktails] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let lesIngredients;   

    const fetchCocktailDetailsById = async () => {
        const res = await fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`);
        const data = await res.json();
        console.log("dans fetchcocktail data.drinks: ", data.drinks);
        setFullDetailsCocktails(data.drinks);
        // console.log("full cocktail details: ", fullDetailsCocktail);
        //console.log("full cocktail ingredients: ", getIngredients(fullDetailsCocktail) )
        
        lesIngredients = await getIngredients(data.drinks).map((ingredient, index) => (
            <ListGroup.Item key={index}>{ingredient.ingredient} {ingredient.measure}</ListGroup.Item>
        ));
    }

    useEffect (() => {
        fetchCocktailDetailsById();
        // lesIngredients = getIngredients(fullDetailsCocktail).map((ingredient, index) => (
        //     <ListGroup.Item key={index}>{ingredient.ingredient} {ingredient.measure}</ListGroup.Item>
        // ));
    }, [])

    //console.log("full cocktail details ici: ", fullDetailsCocktail);
    return (
        <>
            <Col className="col-md-4">
                <Card className="my-3">
                    <Card.Img src={drink.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title className="text-center">{drink.strDrink}</Card.Title>
                        <Button variant="success" onClick={handleShow}>Get Recipe</Button>
                    </Card.Body>
                </Card>
            
            </Col>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{drink.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        {lesIngredients}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Drink
