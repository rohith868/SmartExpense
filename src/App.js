// // // // src/App.js

// // // import React from "react";
// // // import ExpenseForm from "./components/ExpenseForm";
// // // import Sidebar from "./components/Sidebar";
// // // import "./App.css"; // You can create this file to add custom styles

// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <header className="App-header">
// // //         <h1>SmartExpense</h1>
// // //       </header>
// // //       <div className="main-container">
// // //         <Sidebar />
// // //         <div className="content">
// // //           <ExpenseForm /> {/* Include the ExpenseForm component */}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import { useState } from "react";
// // const App = () => {
// //   const [open, setOpen] = useState(true);
// //   const Menus = [
// //     { title: "Dashboard", src: "Chart_fill" },
// //     { title: "Inbox", src: "Chat" },
// //     { title: "Accounts", src: "User", gap: true },
// //     { title: "Schedule ", src: "Calendar" },
// //     { title: "Search", src: "Search" },
// //     { title: "Analytics", src: "Chart" },
// //     { title: "Files ", src: "Folder", gap: true },
// //     { title: "Setting", src: "Setting" },
// //   ];

// //   return (
// //     <div className="flex">
// //       <div
// //         className={` ${
// //           open ? "w-72" : "w-20 "
// //         } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
// //       >
// //         <img
// //           alt=" "
// //           src="/src/assets/control.png"
// //           className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
// //            border-2 rounded-full  ${!open && "rotate-180"}`}
// //           onClick={() => setOpen(!open)}
// //         />
// //         <div className="flex gap-x-4 items-center">
// //           <img
// //             alt=" "
// //             src="/src/assets/logo.png"
// //             className={`cursor-pointer duration-500 ${
// //               open && "rotate-[360deg]"
// //             }`}
// //           />
// //           <h1
// //             className={`text-white origin-left font-medium text-xl duration-200 ${
// //               !open && "scale-0"
// //             }`}
// //           >
// //             SmartExpense
// //           </h1>
// //         </div>
// //         <ul className="pt-6">
// //           {Menus.map((Menu, index) => (
// //             <li
// //               key={index}
// //               className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
// //               ${Menu.gap ? "mt-9" : "mt-2"} ${
// //                 index === 0 && "bg-light-white"
// //               } `}
// //             >
// //               <img alt=" " src={`/src/assets/${Menu.src}.png`} />
// //               <span className={`${!open && "hidden"} origin-left duration-200`}>
// //                 {Menu.title}
// //               </span>
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <div className="h-screen flex-1 p-7">
// //         <h1 className="text-2xl font-semibold ">Home Page</h1>
// //       </div>
// //     </div>
// //   );
// // };
// // export default App;

// // import React, { useState } from "react";
// // import Sidebar from "./components/Sidebar";
// // import Accounts from "./components/Accounts";
// // import Dashboard from "./components/Dashboard";
// // import Expenses from "./components/Expenses";
// // import News from "./components/News";
// // import Settings from "./components/Settings";
// // import Plannings from "./components/Plannings";

// // const App = () => {
// //   return (
// //     <div className="flex">
// //       <Sidebar />
// //       <div className="h-screen flex-1 p-7">
// //         <h1 className="text-2xl font-semibold ">Home Page</h1>
// //       </div>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Accounts from "./components/Accounts";
// import Dashboard from "./components/Dashboard";
// import Expenses from "./components/Expenses";
// import News from "./components/News";
// import Settings from "./components/Settings";
// import Plannings from "./components/Plannings";

// const App = () => {
//   const [currentPage, setCurrentPage] = useState("Dashboard");

//   const handleSidebarItemClick = (pageName) => {
//     setCurrentPage(pageName);
//   };

//   const renderCurrentPage = () => {
//     switch (currentPage) {
//       case "Dashboard":
//         return <Dashboard />;
//       case "Accounts":
//         return <Accounts />;
//       case "Expenses":
//         return <Expenses />;
//       case "News":
//         return <News />;
//       case "Settings":
//         return <Settings />;
//       case "Plannings":
//         return <Plannings />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar onSidebarItemClick={handleSidebarItemClick} />
//       <div className="h-screen flex-1 p-7">{renderCurrentPage()}</div>
//     </div>
//   );
// };

// export default App;
// import React from "react";

// const Sidebar = ({ onSidebarItemClick }) => {
//   const handleItemClick = (pageName) => {
//     onSidebarItemClick(pageName); // Call the function provided by the parent component
//   };

//   const Menus = [
//     { title: "Dashboard", src: "Chart_fill" },
//     { title: "Accounts", src: "User", gap: true },
//     { title: "Expenses", src: "Calendar" }, // Update the menu items accordingly
//     { title: "News", src: "Search" },
//     { title: "Settings", src: "Chart" },
//     { title: "Plannings", src: "Folder", gap: true },
//   ];

//   return (
//     <div
//       className={`w-72 bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
//     >
//       <div className="flex gap-x-4 items-center">
//         <h1 className="text-white origin-left font-medium text-xl duration-200">
//           SmartExpense
//         </h1>
//       </div>
//       <ul className="pt-6">
//         {Menus.map((Menu, index) => (
//           <li
//             key={index}
//             onClick={() => handleItemClick(Menu.title)} // Call handleItemClick on click
//             className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
//             ${Menu.gap ? "mt-9" : "mt-2"}`}
//           >
//             <img alt=" " src={`/src/assets/${Menu.src}.png`} />
//             <span>{Menu.title}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Accounts from "./components/Accounts";
// // import PayPalTransactions from "./components/PayPalTransactions.js";
// import Dashboard from "./components/Dashboard";
// import Expenses from "./Expenses";
// import News from "./components/News";
// // import Settings from "./components/Settings";
// import ExpenseAndInvestmentManagement from "./components/ExpenseAndInvestmentManagement";
// import ExpensePlanning from "./components/ExpensePlanning";
// // import sampleData from "./components/sampleData";
// // import "./styles.css"; // Import Tailwind CSS
// import Investments from "./components/Investments.js";
// const App = () => {
//   const [currentPage, setCurrentPage] = useState("Dashboard");

//   const handleSidebarItemClick = (pageName) => {
//     setCurrentPage(pageName);
//   };

//   const renderCurrentPage = () => {
//     switch (currentPage) {
//       case "Dashboard":
//         return <Dashboard />;
//       case "Accounts":
//         return <Accounts />;
//       // return <PayPalTransactions />;
//       case "Expenses":
//         // return <Expenses data={sampleData} />;
//         return <Expenses />;
//       case "News":
//         return <News />;
//       case "Settings":
//         return <Investments />;
//       case "Plannings":
//         return <ExpenseAndInvestmentManagement />;
//       // return <Settings />;
//       case "ExpensePlanning":
//         return <ExpensePlanning />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar onSidebarItemClick={handleSidebarItemClick} />
//       <div className="h-screen flex-1 p-7">{renderCurrentPage()}</div>
//     </div>
//   );
// };

// export default App;
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Accounts from "./components/Accounts";
import Dashboard from "./components/Dashboard";
import Expenses from "./Expenses";
import News from "./components/News";
import ExpenseAndInvestmentManagement from "./components/ExpenseAndInvestmentManagement";
import ExpensePlanning from "./components/ExpensePlanning";
import Investments from "./components/Investments.js";
import Paypal from "./components/Paypal"; // Import PayPal component

const App = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const handleSidebarItemClick = (pageName) => {
    setCurrentPage(pageName);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "Dashboard":
        return <Dashboard />;
      case "MakePayments":
        return <Paypal />;
      case "Expenses":
        return <Expenses />;
      case "News":
        return <News />;
      case "Investments":
        return <Investments />;
      case "MonthlyManagement":
        return <ExpenseAndInvestmentManagement />;
      case "ExpensePlanning":
        return <ExpensePlanning />;
      case "PayPalTransactions":
        return <Paypal />; // Include the PayPal component here
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar onSidebarItemClick={handleSidebarItemClick} />
      <div className="h-screen flex-1 p-7">{renderCurrentPage()}</div>
    </div>
  );
};

export default App;
