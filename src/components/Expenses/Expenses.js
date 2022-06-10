import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filtredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filtredYear;
  });

  let expensesContent = <p>No Expenses Found</p>;

  if(filtredExpenses.length > 0 ){
    expensesContent = filtredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filtredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
