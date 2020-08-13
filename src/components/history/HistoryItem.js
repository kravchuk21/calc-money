import React from "react";

const HistoryItem = ({ transaction }) => (
  <li
    className={`history__item history__item-${
      transaction.add ? "plus" : "minus"
    }`}
  >
    {transaction.description}
    <span className="history__money">{transaction.amount} ₽</span>
    <button className="history__delete">x</button>
  </li>
  //  <li className="history__item  history__item-minus">
  //    Отдал долг
  //    <span className="history__money">-10000 ₽</span>
  //    <button className="history__delete">x</button>
  //  </li>
);

export default HistoryItem;
