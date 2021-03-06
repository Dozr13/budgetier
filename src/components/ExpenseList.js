import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext)

    console.log(expenses)
    return (
		<ul className='list-group'>
			{expenses.map((expense) => (
				<ExpenseItem id={expense.id} name={expense.name} description={expense.description} cost={expense.cost} />
			))}
		</ul>
    );
};

export default ExpenseList