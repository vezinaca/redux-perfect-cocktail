import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Jumbotron from "react-bootstrap/Jumbotron";

import { useSelector, useDispatch } from "react-redux";

import { addToFavorites, removeFromFavorites, selectFavorites } from "../features/favorites/favoriteSlice";

//export default
const Favorites = () => {

    const favorites = useSelector (selectFavorites)
    //const dispatch = useDispatch();
    console.log("mes favorites redux: ", favorites);

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

                                    </tbody>

                                </Table>
                            </Col>
                        </Row>


                    </Jumbotron>

                </Row>

                
            </Container>
            
        </>
    )
}

export default Favorites;