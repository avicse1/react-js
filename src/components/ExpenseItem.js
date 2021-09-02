import "./ExpenseItem.css";

function ExpenseItem(pros) {
    const month = pros.date.toLocaleString("en-US", { month: "long" });
    const day = pros.date.toLocaleString("en-US", { day: "2-digit" });
    const year = pros.date.getFullYear();
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className="expense-item__description">
                <h2>{pros.title}</h2>
                <div className="expense-item__price">${pros.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
