import React from "react";
import HistoryItem from "./HistoryItem";

const History = ({ transactions }) => (
  <section className="history">
    <h3>История расходов</h3>
    <ul className="history__list">
      {transactions.map((item) => (
        <HistoryItem key={item.id} transaction={item} />
      ))}
    </ul>
  </section>
);

export default History;
