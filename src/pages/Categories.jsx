import React from 'react';
import { useCategories } from '../states/CategoriesProvider';

import { Link } from 'react-router-dom';
import { Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const Categories = () => {

    const {loading, categories, methods } = useCategories();
    return (
        <div>
                        {
                loading 
                ? <Spinner>Loading...</Spinner>
                : categories.map((item, index) => 
                    <div key={index}>
                    <Card
                    >
                        <CardBody>
                        <CardTitle tag="h5">
                            {item.id}{item.title}
                        </CardTitle>
                        <Button>
                            <Link to={`/categories/${item.id}`}> View products</Link>
                        </Button>
                        </CardBody>
                    </Card>
                    </div>
                )
                
            }
        </div>
    );
};

export default Categories;