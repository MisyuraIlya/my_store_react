import React, { useEffect } from 'react';
import { useProducts } from '../states/ProductsProvider';
import { useParams } from 'react-router-dom';
import { CardGroup, Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import CardSale from '../components/CardSale'
import MyPagination from '../components/MyPagination';

const ManufacturerProduct = () => {

    const {loading, total, productsManufacturer, methods} = useProducts();
    let paramsURL = useParams();

    useEffect(() => {
        methods.loadProductsManufacturer(paramsURL.id);
    },[])

    const totalNumber = total / 10;
    
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
            <MyPagination totalNumber={totalNumber}/>
        </div>
    );
};

export default ManufacturerProduct;