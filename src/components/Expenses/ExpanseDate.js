function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="celendar card">
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenseDate;
