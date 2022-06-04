import React, { useEffect } from 'react';
import { useProducts } from '../states/ProductsProvider';
import { useParams } from 'react-router-dom';
import { Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Products = () => {

    const {loading, productsManufacturer, methods} = useProducts();
    let paramsURL = useParams();

    useEffect(() => {
        methods.loadProductsManufacturer(paramsURL.id);
    },[])

    console.log(productsManufacturer)
    return (
        <div>
            prodcut page
            {
                loading ? <Spinner>Loading...</Spinner>
                : 
                productsManufacturer.map((item, index) => 
                <div key={index}>
                    <Card
                    >
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
                </div>
                )

            }
        </div>
    );
};

export default Products;