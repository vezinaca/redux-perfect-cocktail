import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Cocktail = ({cocktail}) => {

    const getIngredients = () => {
        
        let ingredients = [];
        for(let i = 1; i < 16; i++) {
            const ingredientMeasure = {};
            if( cocktail[`strIngredient${i}`] !== null ) {
                ingredientMeasure.ingredient = cocktail[`strIngredient${i}`];
                ingredientMeasure.measure = cocktail[`strMeasure${i}`];
                ingredients.push(ingredientMeasure);
            }
        }
        return ingredients;
    }



    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img src={cocktail.strDrinkThumb} variant="top"/>
                <Card.Body>
                    <Card.Title className="text-center">{cocktail.strDrink}</Card.Title>
                    <Card.Text className="text-center">Instructions</Card.Text>
                    <Card.Text>{cocktail.strInstructions}</Card.Text>
                    <Card.Text>
                        <ListGroup>
                            <ListGroupItem variant="danger">
                                les ingredients
                            </ListGroupItem>
                        </ListGroup>
                    </Card.Text>
                    <Card.Text>Extra Information</Card.Text>
                    <Card.Text>
                        <span className="badge badge-pill badge-success">
                            {cocktail.strAlcoholic}
                        </span>
                        <span className="badge badge-pill badge-warning">
                            {cocktail.strCategory}
                        </span>
                    </Card.Text>
                

                </Card.Body>
                
            </Card>
        </>
    )
}

export default Cocktail
