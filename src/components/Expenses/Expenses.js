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
    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={filteredYear}
                onFilterChange={filterChangeHandler}
            />
            {filterExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </Card>
    );
};

export default Expenses;
