import React from 'react';
import { Pagination, PaginationItem, PaginationLink} from 'reactstrap';
const MyPagination = ({currentPage, setCurrentPage, totalNumber}) => {

    const number = totalNumber
    let num = [];
    if(number){
        for (let i = 0; i < number; i++){
            num.push(i)
        }
    }

    const paginationHandler = (number) => {
        console.log(number)
        setCurrentPage(number)
    }

    return (
        <div>
            <Pagination
            aria-label="Page navigation example"
            size="lg"
            >
            <PaginationItem>
                <PaginationLink
                first
                href="#"
                />
            </PaginationItem>
            {num.map((number, index ) => 
                <PaginationItem key={index} onClick={() => paginationHandler(number+1)}>
                    <PaginationLink >
                    {number+1}
                    </PaginationLink>
                </PaginationItem>
            )}

            <PaginationItem>
                <PaginationLink
                href="#"
                last
                />
            </PaginationItem>
            </Pagination>
        </div>
    );
};

export default MyPagination;