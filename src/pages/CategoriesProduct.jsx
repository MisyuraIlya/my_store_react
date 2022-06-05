import React, { useEffect } from 'react';
import { useProducts } from '../states/ProductsProvider';
import { useParams } from 'react-router-dom';
import { Spinner,CardGroup} from 'reactstrap';
import CardSale from '../components/CardSale'
import MyPagination from '../components/MyPagination';
const CategoriesProduct = () => {

    const {loading, total,  productCategories, methods} = useProducts();
    let paramsURL = useParams();

    useEffect(() => {
        methods.loadProductsCategories(paramsURL.id)
    }, [])

    console.log(total)
    const totalNumber = total / 10;
    console.log(totalNumber)
    return (
        <div>
            categories product  page
            {
            loading ? <Spinner>Loading...</Spinner>
            : 
            <CardGroup className='container_gorup_card'>
                {productCategories.map((item, index) => 
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

export default CategoriesProduct;