import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

// Arrow function
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filterExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    let expneseContent = <p>No expense found</p>;
    if (filterExpenses.length > 0) {
        expneseContent = filterExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }
    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            {expneseContent}
        </Card>
    );
};

export default Expenses;
