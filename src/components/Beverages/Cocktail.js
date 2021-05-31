import React from 'react'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { getIngredients } from "../../Utilities/Utilities";

import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites, selectFavorites } from "../../features/favorites/favoriteSlice";

const Cocktail = ({cocktail}) => {

    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites)
    let isFav;
    let isFavSymbol = '+'; 

    favorites.forEach(favorite => {
        if (cocktail.idDrink === favorite.idDrink){
            isFavSymbol = '-';
            isFav = true;
            return;
        }
    })

    let lesIngredients = getIngredients(cocktail).map((ingredient, index) => (
        <ListGroup.Item key={index}>{ingredient.ingredient} {ingredient.measure}</ListGroup.Item>
    ));

    // ne pas mettre de listGroupItem dans des Card.text
    //console.log("cocktail dans home: ", cocktail);

    const handleClick = () => {
        
        if (!isFav){
            dispatch(addToFavorites(cocktail));
        }
        else {
            dispatch(removeFromFavorites(cocktail.idDrink))
        }
        
    }    
    
    return (
        <>
            <Col md="6" >
                <Card style={{ width: '18rem' }} className="my-3 mx-auto">
                    <button className="favorite-btn btn btn-outline-info" onClick={handleClick}>
                        {isFavSymbol}
                    </button>
                    <Card.Img src={cocktail.strDrinkThumb} variant="top"/>
                    <Card.Body>
                        <Card.Title className="text-center">{cocktail.strDrink}</Card.Title>
                        <Card.Text className="text-center">Instructions</Card.Text>
                        <Card.Text>{cocktail.strInstructions}</Card.Text>
                        <ListGroup>
                            <ListGroup.Item variant="danger">
                                Ingredients
                            </ListGroup.Item>
                            {lesIngredients}
                        </ListGroup>
                        <Card.Text>Extra Information</Card.Text>
                        <Card.Text>
                            <span className="badge badge-pill badge-success">
                                {cocktail.strAlcoholic}
                            </span>
                            <span className="badge badge-pill badge-warning">
                                Category: {cocktail.strCategory}
                            </span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}

export default Cocktail
