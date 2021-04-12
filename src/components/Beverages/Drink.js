import React from 'react'
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";


const Drink = ({drink}) => {

    const getRecipe = () => {
        console.log('clcik get recipe');
    }


    return (
        <>
            <Col className="col-md-6">
                <Card className="my-3">
                    <Card.Img src={drink.strDrinkThumb} />
                    <Card.Body>
                        <Card.Title className="text-center">{drink.strDrink}</Card.Title>
                        <Button variant="success" onClick={getRecipe}>Get Recipe</Button>
                    </Card.Body>
                </Card>
            
            </Col>
            
            {/* drink.idDrink   */}
        </>
    )
}

export default Drink
