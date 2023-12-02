import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
// import { alldata } from "./components/alldata";

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [account, setAccount] = useState([]);

  //Create Account

  const handleCreateAccount = (formValues) => {
    const newAccount = {
      ...formValues,
    };
    setAccount([...account, newAccount]);
  };

  //Deposit
  const updateBalanceDeposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { type: "Deposit", amount: amount, date: new Date() },
    ]);
  };

  const handleDepositSubmit = (amount) => {
    if (amount <= 0) {
      return;
    }
    updateBalanceDeposit(amount); // Update the balance in App.js
    alert(
      `Success! You deposited $${amount}. Your balance is now $${
        balance + amount
      }.`
    );
  };

  //Withdrawal
  const updateBalanceWithdraw = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { type: "Withdrawal", amount: amount, date: new Date() },
    ]);
  };

  const handleWithdrawSubmit = (amount) => {
    if (amount >= balance) {
      return;
    }
    updateBalanceWithdraw(amount); // Update the balance in App.js
    alert(
      `Success! You withdrew $${amount}. Your balance is now $${
        balance - amount
      }.`
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="alldata"
          element={<alldata transactions={transactions} account={account} />}
        />
        <Route path="Account" element={<login />} /> */}
      </Routes>
    </>
  );
}

export default App;
