import React from 'react';
import { Pagination,PaginationItem, PaginationLink} from 'reactstrap';
const MyPagination = () => {
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
            <PaginationItem>
                <PaginationLink href="#">
                1
                </PaginationLink>
            </PaginationItem>
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