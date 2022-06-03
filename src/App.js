import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id:1, title: "Car Insurance", amount: "450,21$", date: new Date(2021, 8, 28) },
    { id:2, title: "Electricity", amount: "230,99$", date: new Date(2021, 2, 8) },
    { id:3, title: "Ethernet", amount: "78,49$", date: new Date(2021, 1, 18) },
    { id:4, title: "Kitchen", amount: "29,99$", date: new Date(2021, 1, 18) },
  ];

  return (
    <div>
      <div className="App-header">
        <h2>Getting Started</h2>
        <ExpenseItem
        title ={expenses[0].title}
        amount={expenses[0].amount}
        date = {expenses[0].date}
        />
           <ExpenseItem
        title ={expenses[1].title}
        amount={expenses[1].amount}
        date = {expenses[1].date}
        />
           <ExpenseItem
        title ={expenses[2].title}
        amount={expenses[2].amount}
        date = {expenses[2].date}
        />
           <ExpenseItem
        title ={expenses[3].title}
        amount={expenses[3].amount}
        date = {expenses[3].date}
        />
      
      </div>
    </div>
  );
}

export default App;
