import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
			};
        case 'EDIT_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			};
		default:
			return state;
	}
};

const initialState = {
	budget: 5000,
	expenses: [
		{ id: 1, name: 'Entrata Farms', description: 'Rent', cost: 1734.50 },
		{ id: 2, name: 'Toyota Financial Services', description: 'Rav4 Auto Payment', cost: 419.80 },
		{ id: 3, name: 'Verizon', description: 'Phone Bill', cost: 244.04 },
	],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};