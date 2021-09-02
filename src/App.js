import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {
            title: "Car Insurance",
            amount: 220.57,
            date: new Date(2021, 2, 20),
        },
        {
            title: "Bike Insurance",
            amount: 167.67,
            date: new Date(2021, 2, 20),
        },
        {
            title: "Plane Insurance",
            amount: 500.98,
            date: new Date(2021, 2, 20),
        },
        {
            title: "Train Insurance",
            amount: 478.23,
            date: new Date(2021, 2, 20),
        },
    ];
    return (
        <div>
            <h2>Let's get stared!</h2>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            ></ExpenseItem>
        </div>
    );
}

export default App;
