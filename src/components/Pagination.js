import React from "react";
import { PaginationContainer } from "../styles";

const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props

    return (
        <PaginationContainer>
            <button onClick={onLeftClick}>⬅️</button>
            <div>{page} de {totalPages}</div>
            <button onClick={onRightClick}>➡️</button>
        </PaginationContainer>
    )
}

export default Pagination;