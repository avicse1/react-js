import Expenses from "./components/Expenses/Expenses";

//arrow function
const App = () => {
    const expenses = [
        {
            title: "Car Insurance",
            amount: 220.57,
            date: new Date(2021, 2, 20),
        },
        {
            title: "Bike Insurance",
            amount: 167.67,
            date: new Date(2021, 4, 11),
        },
        {
            title: "Plane Insurance",
            amount: 500.98,
            date: new Date(2021, 7, 17),
        },
        {
            title: "Train Insurance",
            amount: 478.23,
            date: new Date(2021, 10, 28),
        },
    ];
    return (
        <div>
            <h2>Let's get stared!</h2>
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
