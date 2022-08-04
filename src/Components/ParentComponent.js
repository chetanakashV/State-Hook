import React,{useCallback, useState} from 'react';
import Salary from './Salary';
import Title from './Title';
import Button from './Button';

function ParentComponent(props) {
    const [salary,setSalary] = useState(25000)
    const [age,setAge] = useState(25)
    const incrementAge = useCallback(() => {
        setAge(age+1)
    },[age])
    const incrementSalary = useCallback(() => {
        setSalary(salary+1)
    },[salary])
    return (
        <div>
            <Title/>
            <Salary salary = {age}  text = "age"/>
            <Button handleClick = {incrementAge} text = "age"/>
            <Salary salary = {salary}  text ="salary"/>
            <Button handleClick = {incrementSalary} text ="salary" />
        </div>
    );
}

export default ParentComponent;