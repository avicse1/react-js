import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (pros) => {
    let title = pros.title;
    function clickHandler() {
        title = "updated!";
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
