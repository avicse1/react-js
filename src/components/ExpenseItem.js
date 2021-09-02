import "./ExpenseItem.css";

function ExpenseItem() {
    const expensDate = new Date(2021, 9, 2);
    const expenseTitle = "Car Insurance";
    const expensePrice = 294.28;
    return (
        <div className="expense-item">
            <div>{expensDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expensePrice}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
