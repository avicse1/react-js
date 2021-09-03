import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (pros) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={pros.date} />
            <div className="expense-item__description">
                <h2>{pros.title}</h2>
                <div className="expense-item__price">${pros.amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;
