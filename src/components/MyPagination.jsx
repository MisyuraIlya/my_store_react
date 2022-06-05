import React from 'react';
import { Pagination,PaginationItem, PaginationLink} from 'reactstrap';
const MyPagination = ({totalNumber}) => {

    const number = totalNumber
    let num = [];
    if(number){
        for (let i = 0; i < number; i++){
            num.push(i)
        }
    }
    console.log(num)
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
            {num.map((number) => 
                <PaginationItem>
                    <PaginationLink href="#">
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