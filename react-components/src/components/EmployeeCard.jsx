import React from 'react'

const EmployeeCard = ({ name, role, salary }) => {
    return (
        <div className='emplyeeCard'>
            <h2>Employee Name: {name}</h2>
            <p>Role: {role}</p>
            <p>Salary: {salary}</p>
        </div>
    )
}

export default EmployeeCard
