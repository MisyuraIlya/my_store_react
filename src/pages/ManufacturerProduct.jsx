import React, { useEffect } from 'react';
import { useProducts } from '../states/ProductsProvider';
import { useParams } from 'react-router-dom';
import { CardGroup, Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import CardSale from '../components/CardSale'

const ManufacturerProduct = () => {

    const {loading,  productsManufacturer, methods} = useProducts();
    let paramsURL = useParams();

    useEffect(() => {
        methods.loadProductsManufacturer(paramsURL.id);
    },[])
    return (
        <div>
            prodcut page
            {
            loading ? <Spinner>Loading...</Spinner>
            : 
            <CardGroup className='container_gorup_card'>
                {productsManufacturer.map((item, index) => 
                <div key={index}>
                    <CardSale item={item}/>
                </div>
                )}
            </CardGroup>
            }
        </div>
    );
};

export default ManufacturerProduct;