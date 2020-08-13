import React from "react";

const Operation = ({ addTransation, addDescription, addAmount, description, amount }) => (
  <section className="operation">
    <h3>Новая операция</h3>
    <form id="form">
      <label>
        <input
          type="text"
          className="operation__fields operation__name"
          placeholder="Наименование операции"
          onChange={addDescription}
          value={description}
        />
      </label>
      <label>
        <input
          type="number"
          className="operation__fields operation__amount"
          placeholder="Введите сумму"
          onChange={addAmount}
          value={amount}
        />
      </label>
      <div className="operation__btns">
        <button
          onClick={() => addTransation(false)}
          type="button"
          className="operation__btn operation__btn-subtract"
        >
          РАСХОД
        </button>
        <button
          onClick={() => addTransation(true)}
          type="button"
          className="operation__btn operation__btn-add"
        >
          ДОХОД
        </button>
      </div>
    </form>
  </section>
);

export default Operation;
