import React from 'react';

function Salary(props) {
    console.log(`count function of ${props.text}`)
    return (
        <div>
        {props.salary}
        </div>
    );
}

export default React.memo(Salary);