import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (pros) => {
    return (
        <Card className="expenses">
            <ExpenseItem
                title={pros.items[0].title}
                amount={pros.items[0].amount}
                date={pros.items[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={pros.items[1].title}
                amount={pros.items[1].amount}
                date={pros.items[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={pros.items[2].title}
                amount={pros.items[2].amount}
                date={pros.items[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={pros.items[3].title}
                amount={pros.items[3].amount}
                date={pros.items[3].date}
            ></ExpenseItem>
        </Card>
    );
};

export default Expenses;
