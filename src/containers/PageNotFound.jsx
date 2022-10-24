import React from 'react';
import '../../styles/PagesNotFound.css'

function PageNotFound(props){
    return(
        <div className='notFound'>
            <h2 color="white">Sorry {props.userName}, error 404 Pages Not Found</h2>
        </div>
    );
}

export { PageNotFound };