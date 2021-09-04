import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Car Insurance",
        amount: 220.57,
        date: new Date(2021, 2, 20),
    },
    {
        id: "e2",
        title: "Bike Insurance",
        amount: 167.67,
        date: new Date(2022, 4, 11),
    },
    {
        id: "e3",
        title: "Plane Insurance",
        amount: 500.98,
        date: new Date(2020, 7, 17),
    },
    {
        id: "e4",
        title: "Train Insurance",
        amount: 478.23,
        date: new Date(2021, 10, 28),
    },
    {
        id: "e5",
        title: "TV",
        amount: 478.23,
        date: new Date(2021, 10, 28),
    },
];

//arrow function
const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
