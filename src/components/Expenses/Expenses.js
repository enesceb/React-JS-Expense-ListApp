import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filtredYear, setFiltredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFiltredYear(selectedYear);
  };

  const filtredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filtredYear;
  });
 

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filtredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filtredExpenses}/>
       <ExpensesList items={filtredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
