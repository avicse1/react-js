import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (pros) => {
    const [title, setTitle] = useState(pros.title);

    function clickHandler() {
        setTitle("Updated!");
        console.log(title);
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={pros.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${pros.amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
};

export default ExpenseItem;
