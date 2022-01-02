import React, { useContext } from 'react';
import { TiEdit, TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

    const handleEditExpense = () => {
		dispatch({
			type: 'EDIT_EXPENSE',
			payload: props.id,
		});
	};

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span className='badge badge-primary badge-pill mr-3'>
					£{props.cost}
				</span>
                <TiEdit className='pe-auto' size='1.5em' onClick={handleEditExpense} />
				<TiDelete className='pe-auto' size='1.5em' onClick={handleDeleteExpense} />
			</div>
		</li>
	);
};

export default ExpenseItem;