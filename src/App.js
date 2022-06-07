import "./App.css";
import ExpenseGroup  from "./components/Expenses/ExpenseGroup";
import NewExpense from "./components/NewExpense/NewExpense";
import './components/UI/Card.css';


function App() {
  const expenses = [
    { id:1, title: "Car Insurance", amount: "450,21$", date: new Date(2021, 11, 4) },
    { id:2, title: "Electricity", amount: "230,99$", date: new Date(2022, 6, 5) },
    { id:3, title: "Ethernet", amount: "78,49$", date: new Date(2022, 7, 21) },
    { id:4, title: "Kitchen", amount: "29,99$", date: new Date(2022, 8, 1) },
  ];

  return (
    <>
      <div className="App-header">
        <NewExpense/>
        <ExpenseGroup items={expenses} />

      </div>
    </>
  );
}

export default App;
