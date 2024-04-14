// import React from "react";

// const Plannings = () => {
//   return (
//     <div>
//       <h1>Plannings Component</h1>
//       {/* Add your News content here */}
//     </div>
//   );
// };

// export default Plannings;
import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AddTransaction from "./components/AddTransaction";
import IncomeList from "./components/IncomeList";
import ExpenseList from "./components/ExpenseList";
import { GlobalContextProvider } from "./context/GlobalState";
// import "./components/Styles.css";

const Plannings = () => {
  return (
    <GlobalContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header />
          <Balance />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default Plannings;
