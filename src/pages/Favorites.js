import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import "./Favorites.css";
import { getIngredients } from "../Utilities/Utilities";

import { useSelector, useDispatch } from "react-redux";

import { removeFromFavorites, selectFavorites } from "../features/favorites/favoriteSlice";

const Favorites = () => {

    const [show, setShow] = useState(false);
    const [fullDetailsCocktail, setFullDetailsCocktails] = useState([]);
    const favorites = useSelector(selectFavorites)
    const dispatch = useDispatch();
    const [ingredients, setIngredients] = useState([]);
    
    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        e.preventDefault();        
        fetchCocktailDetailsById(e.target.value);        
        setShow(true);
    }

    const handleRemove = (e) => {        
        dispatch(removeFromFavorites(e.target.value))
    }

    const fetchCocktailDetailsById = async (id) => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        setFullDetailsCocktails(data.drinks[0]);
        setIngredients(getIngredients(data.drinks[0]));
    }
    const allFavs = favorites?.map(favorite => (
        <tr key={favorite.idDrink}>
            <td><img src={favorite.strDrinkThumb} width="80px"alt="problem"/></td>
            <td>{favorite.strDrink}</td>
            <td><Button variant="success" onClick={handleShow} value={favorite.idDrink}>View</Button></td>
            <td><Button variant="danger" onClick={handleRemove} value={favorite.idDrink}>Remove</Button></td>
        </tr>
    ))

    return (
        <>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    <Jumbotron className="col-12 col-md-10">
                        <h1 className="text-center mb-4">My Favorites</h1>
                        <Row>
                            <Col className="col-12">
                                <Table>
                                    <thead className="bg-danger">
                                        <tr>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">View</th>
                                            <th scope="col">Remove</th>
                                        </tr>
                                    </thead>                                        
                                    <tbody>
                                        {allFavs}
                                    </tbody>

                                </Table>
                            </Col>
                        </Row>
                    </Jumbotron>
                </Row>
            </Container>

           <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{fullDetailsCocktail.strDrink}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item variant="success">Preparation</ListGroup.Item>
                        <ListGroup.Item>{fullDetailsCocktail.strInstructions}</ListGroup.Item>
                        <ListGroup.Item variant="success">Ingredients</ListGroup.Item>
                        {ingredients?.map((ingredient, index) =>(
                            <ListGroup.Item key={index}>{ingredient.ingredient} - {ingredient.measure}</ListGroup.Item>
                        ) )}
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    )
}

export default Favorites;