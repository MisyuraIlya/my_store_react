import React, { useEffect, useState } from 'react';

import {useManufacturer} from '../states/ManufacturerProvider'
import ManufacturerCard from '../components/ManufacturerCard';
import { Link } from 'react-router-dom';
import { Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';


const Manufacturers = () => {

    const { loading, manufacturer,  methods } = useManufacturer();
    return (
        <div>
            {/* {
                loading 
                ? <h2>loading..</h2> 
                : manufacturer.map((item, index) => {<ManufacturerCard key={index} item={item}/>})
                
            } */}

            {
                loading 
                ? <Spinner>Loading...</Spinner>
                : manufacturer.map((item, index) => 
                    <div key={index}>
                    <Card
                    >
                        <CardBody>
                        <CardTitle tag="h5">
                            {item.id}{item.name}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {item.country}
                        </CardSubtitle>
                        <CardText>
                            {item.description}
                        </CardText>
                        <Button>
                            <Link to={`/manufacturer/${item.id}`}> View products</Link>
                           
                        </Button>
                        </CardBody>
                    </Card>
                    </div>
                )
                
            }
        </div>
    );
};

export default Manufacturers;