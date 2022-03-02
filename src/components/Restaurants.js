import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Restaurants({item}){

    return(
        <>
            <Link to={`restaurants/${item.id}`}>
            <Card className ="my-3 p-3 rounded">
                <Card.Img variant='top' src={item.photograph} className="p-3"/>
                <Card.Body>
                    <Card.Title as='div'>
                        {item.name}
                    </Card.Title>
                    <Card.Title as='div'>
                        <p> Cuisine: {item.cuisine_type}</p>
                    </Card.Title>
                    <Card.Title as='div'>
                        <p>{item.neighborhood}</p>
                    </Card.Title>
                </Card.Body>
            </Card>
            </Link>
        </>
    );
}
export default Restaurants