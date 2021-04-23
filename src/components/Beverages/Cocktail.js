import React from 'react'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { getIngredients } from "../../Utilities/Utilities";

const Cocktail = ({cocktail}) => {
    
    let lesIngredients = getIngredients(cocktail).map((ingredient, index) => (
        <ListGroup.Item key={index}>{ingredient.ingredient} {ingredient.measure}</ListGroup.Item>
    ));

    // ne pas mettre de listGroupItem dans des Card.text
    //console.log("cocktail dans home: ", cocktail);
    return (
        <>
            <Col md="6" >
                <Card style={{ width: '18rem' }} className="my-3 mx-auto">
                    <Card.Img src={cocktail.strDrinkThumb} variant="top"/>
                    <Card.Body>
                        <Card.Title className="text-center">{cocktail.strDrink}</Card.Title>
                        <Card.Text className="text-center">Instructions</Card.Text>
                        <Card.Text>{cocktail.strInstructions}</Card.Text>
                        <ListGroup>
                            <ListGroup.Item variant="danger">
                                les ingredients
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
