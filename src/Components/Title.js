import React from 'react';

function Title(props) {
    console.log('title funtion')
    return (
        <div>
            <h1>Title of the document</h1>
        </div>
    );
}

export default React.memo(Title);