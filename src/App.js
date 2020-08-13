import React, { Component } from "react";
import Total from "./components/total/Total";
import History from "./components/history/History";
import Operation from "./components/operation/Operation";

class App extends Component {
  state = {
    transactions: [],
    description: "",
    amount: "",
    balance: 0,
    income: 0,
    expenses: 0,
  };

  addTransation = (add) => {
    const transactions = [...this.state.transactions];

    transactions.push({
      id: `cmr${(+new Date()).toString(16)}`,
      description: this.state.description,
      amount: this.state.amount,
      add,
    });

    this.setState({
      transactions,
      description: "",
      amount: "",
    });

    this.getBalance(add);
  };

  addDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  addAmount = (e) => {
    this.setState({ amount: e.target.value });
  };

  getTotalBalance = () => {
    this.setState({ balance: this.state.income - this.state.expenses });
  };

  getBalance = (add) => {
    add
      ? this.setState(
          { income: +this.state.amount + this.state.income },
          this.getTotalBalance
        )
      : this.setState(
          { expenses: +this.state.amount + this.state.expenses },
          this.getTotalBalance
        );
  };

  render() {
    return (
      <>
        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>

        <main>
          <div className="container">
            <Total
              balance={this.state.balance}
              income={this.state.income}
              expenses={this.state.expenses}
            />
            <History transactions={this.state.transactions} />
            <Operation
              addTransation={this.addTransation}
              addAmount={this.addAmount}
              addDescription={this.addDescription}
              description={this.state.description}
              amount={this.state.amount}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
