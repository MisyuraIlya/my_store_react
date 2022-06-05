import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, CardImg } from 'reactstrap';

const CardSale = ({item}) => {
    return (
        <Card className='card'>
            <CardImg
            alt="Card image cap"
            src={item.img}
            top
            width="25%"
            className='card_img'
            />
            <CardBody>
            <CardTitle tag="h5">
                {item.title}
            </CardTitle>
            <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
            >
                {item.price}
            </CardSubtitle>
            <CardText>
                {item.description}
            </CardText>
            <Button>
                Button
            </Button>
            </CardBody>
        </Card>
    );
};

export default CardSale;