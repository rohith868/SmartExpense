// import React, { useState, useEffect } from "react";
// import Chart from "chart.js/auto";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [plannedSavingPercentage, setPlannedSavingPercentage] = useState("");
//   const [plannedExpenses, setPlannedExpenses] = useState("");
//   const [plannedSavingAmount, setPlannedSavingAmount] = useState("");
//   const [actualExpenses, setActualExpenses] = useState([]);

//   useEffect(() => {
//     const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     setActualExpenses(storedExpenses);

//     if (monthlyIncome && plannedSavingPercentage) {
//       const amountToSave = (monthlyIncome * plannedSavingPercentage) / 100;
//       setPlannedSavingAmount(amountToSave);
//     }
//   }, [monthlyIncome, plannedSavingPercentage]);

//   useEffect(() => {
//     const ctx = document.getElementById("expenseGraph");
//     new Chart(ctx, {
//       type: "doughnut",
//       data: {
//         labels: ["Needs", "Wants", "Savings"],
//         datasets: [
//           {
//             data: [
//               monthlyIncome * 0.5,
//               monthlyIncome * 0.3,
//               monthlyIncome * 0.2,
//             ],
//             backgroundColor: ["#ff6347", "#4169e1", "#32cd32"],
//           },
//         ],
//       },
//     });
//   }, [monthlyIncome]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const newExpense = { plannedExpenses, plannedSavingAmount };
//     const updatedExpenses = [...actualExpenses, newExpense];
//     localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
//     setActualExpenses(updatedExpenses);
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-semibold mb-4">Expense Planning</h2>
//       <form onSubmit={handleFormSubmit} className="mb-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block mb-2">Monthly Income:</label>
//             <input
//               type="number"
//               value={monthlyIncome}
//               onChange={(e) => setMonthlyIncome(parseFloat(e.target.value))}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block mb-2">Planning to Save %:</label>
//             <input
//               type="number"
//               value={plannedSavingPercentage}
//               onChange={(e) =>
//                 setPlannedSavingPercentage(parseFloat(e.target.value))
//               }
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="col-span-2">
//             <label className="block mb-2">Planned Expenses:</label>
//             <input
//               type="number"
//               value={plannedExpenses}
//               onChange={(e) => setPlannedExpenses(parseFloat(e.target.value))}
//               className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//       <div className="mb-8">
//         <canvas id="expenseGraph" width="400" height="400"></canvas>
//       </div>
//       <div>
//         <h3 className="text-2xl font-semibold mb-4">Actual Expenses</h3>
//         <ul>
//           {actualExpenses.map((expense, index) => (
//             <li key={index} className="mb-2">
//               <strong>Planned Expenses:</strong> {expense.plannedExpenses},{" "}
//               <strong>Planned Saving Amount:</strong>{" "}
//               {expense.plannedSavingAmount}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState, useEffect } from "react";
// import Chart from "chart.js/auto";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [plannedSavingsPercentage, setPlannedSavingsPercentage] = useState("");
//   const [plannedExpenses, setPlannedExpenses] = useState("");
//   const [actualExpenses, setActualExpenses] = useState([]);
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     // Calculate planned savings amount based on monthly income and percentage
//     const plannedSavingsAmount =
//       (monthlyIncome * plannedSavingsPercentage) / 100;
//     const essentialExpenses = monthlyIncome * 0.5;
//     const discretionaryExpenses = monthlyIncome * 0.3;
//     const savings = monthlyIncome * 0.2;

//     // Chart data
//     const ctx = document.getElementById("expenseChart");
//     if (ctx) {
//       const myChart = new Chart(ctx, {
//         type: "pie",
//         data: {
//           labels: ["Essential Expenses", "Discretionary Expenses", "Savings"],
//           datasets: [
//             {
//               label: "50/30/20 Rule",
//               data: [essentialExpenses, discretionaryExpenses, savings],
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.6)",
//                 "rgba(54, 162, 235, 0.6)",
//                 "rgba(255, 206, 86, 0.6)",
//               ],
//               borderWidth: 1,
//             },
//           ],
//         },
//       });
//       setChartData(myChart);
//     }

//     // Cleanup function to destroy the chart
//     return () => {
//       if (chartData) {
//         chartData.destroy();
//       }
//     };
//   }, [monthlyIncome, plannedSavingsPercentage]);

//   const handleAddExpense = () => {
//     // Logic to add expenses
//     // Make sure to update actualExpenses state
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-2">Monthly Income:</label>
//           <input
//             type="number"
//             className="w-full px-3 py-2 border rounded"
//             value={monthlyIncome}
//             onChange={(e) => setMonthlyIncome(parseFloat(e.target.value))}
//           />
//         </div>
//         <div>
//           <label className="block mb-2">Planned Savings Percentage:</label>
//           <input
//             type="number"
//             className="w-full px-3 py-2 border rounded"
//             value={plannedSavingsPercentage}
//             onChange={(e) =>
//               setPlannedSavingsPercentage(parseFloat(e.target.value))
//             }
//           />
//         </div>
//       </div>
//       <div className="mt-4">
//         <label className="block mb-2">Planned Expenses:</label>
//         <textarea
//           className="w-full px-3 py-2 border rounded"
//           value={plannedExpenses}
//           onChange={(e) => setPlannedExpenses(e.target.value)}
//         />
//       </div>
//       <button
//         className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
//         onClick={handleAddExpense}
//       >
//         Add Expense
//       </button>
//       <div className="mt-8">
//         <h3 className="text-lg font-semibold mb-4">50/30/20 Rule</h3>
//         <canvas id="expenseChart" width="400" height="400"></canvas>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState, useEffect } from "react";
// import Chart from "chart.js/auto";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [plannedSavingsPercentage, setPlannedSavingsPercentage] = useState("");
//   const [plannedExpenses, setPlannedExpenses] = useState("");
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     // eslint-disable-next-line
//     const plannedSavingsAmount =
//       (monthlyIncome * plannedSavingsPercentage) / 100;

//     // Your chart rendering logic here
//     // Make sure to use the chartData state
//     const ctx = document.getElementById("myChart");
//     if (ctx && chartData === null) {
//       const myChart = new Chart(ctx, {
//         type: "bar",
//         data: {
//           labels: ["50%", "30%", "20%"],
//           datasets: [
//             {
//               label: "Planned Expenses",
//               data: [50, 30, 20],
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.2)",
//                 "rgba(54, 162, 235, 0.2)",
//                 "rgba(255, 206, 86, 0.2)",
//               ],
//               borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//               ],
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });
//       setChartData(myChart);
//     }

//     // Cleanup function to destroy the chart
//     return () => {
//       if (chartData) {
//         chartData.destroy();
//       }
//     };
//   }, [monthlyIncome, plannedSavingsPercentage, chartData]);

//   const handleAddExpense = () => {
//     // Logic to add expenses
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="monthlyIncome">Monthly Income:</label>
//         <input
//           type="number"
//           id="monthlyIncome"
//           value={monthlyIncome}
//           onChange={(e) => setMonthlyIncome(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="plannedSavingsPercentage">Planning to Save %:</label>
//         <input
//           type="number"
//           id="plannedSavingsPercentage"
//           value={plannedSavingsPercentage}
//           onChange={(e) => setPlannedSavingsPercentage(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="plannedExpenses">Planned Expenses:</label>
//         <input
//           type="number"
//           id="plannedExpenses"
//           value={plannedExpenses}
//           onChange={(e) => setPlannedExpenses(e.target.value)}
//         />
//       </div>
//       <button onClick={handleAddExpense}>Add Expense</button>
//       <div>
//         <canvas id="myChart" width="400" height="400"></canvas>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState, useEffect } from "react";
// import Chart from "chart.js/auto";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [plannedSavingsPercentage, setPlannedSavingsPercentage] = useState("");
//   const [plannedExpenses, setPlannedExpenses] = useState("");
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     // eslint-disable-next-line
//     const plannedSavingsAmount =
//       (monthlyIncome * plannedSavingsPercentage) / 100;

//     const ctx = document.getElementById("myChart");
//     let myChart = null;

//     if (ctx) {
//       // Destroy the previous chart instance if it exists
//       if (chartData) {
//         chartData.destroy();
//       }

//       // Create a new chart instance
//       myChart = new Chart(ctx, {
//         type: "bar",
//         data: {
//           labels: ["50%", "30%", "20%"],
//           datasets: [
//             {
//               label: "Planned Expenses",
//               data: [50, 30, 20],
//               backgroundColor: [
//                 "rgba(255, 99, 132, 0.2)",
//                 "rgba(54, 162, 235, 0.2)",
//                 "rgba(255, 206, 86, 0.2)",
//               ],
//               borderColor: [
//                 "rgba(255, 99, 132, 1)",
//                 "rgba(54, 162, 235, 1)",
//                 "rgba(255, 206, 86, 1)",
//               ],
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: true,
//             },
//           },
//         },
//       });

//       // Set the chartData state after successful creation
//       setChartData(myChart);
//     }

//     // Cleanup function to destroy the chart
//     return () => {
//       if (myChart) {
//         myChart.destroy();
//       }
//     };
//   }, [monthlyIncome, plannedSavingsPercentage, chartData]);

//   const handleAddExpense = () => {
//     // Logic to add expenses
//   };

//   return (
//     <div>
//       <div>
//         <label htmlFor="monthlyIncome">Monthly Income:</label>
//         <input
//           type="number"
//           id="monthlyIncome"
//           value={monthlyIncome}
//           onChange={(e) => setMonthlyIncome(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="plannedSavingsPercentage">Planning to Save %:</label>
//         <input
//           type="number"
//           id="plannedSavingsPercentage"
//           value={plannedSavingsPercentage}
//           onChange={(e) => setPlannedSavingsPercentage(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="plannedExpenses">Planned Expenses:</label>
//         <input
//           type="number"
//           id="plannedExpenses"
//           value={plannedExpenses}
//           onChange={(e) => setPlannedExpenses(e.target.value)}
//         />
//       </div>
//       <button onClick={handleAddExpense}>Add Expense</button>
//       <div>
//         <canvas id="myChart" width="400" height="400"></canvas>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [investmentPlannedPercentage, setInvestmentPlannedPercentage] =
//     useState("");
//   const [plannedInvestment, setPlannedInvestment] = useState("");

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(e.target.value);
//   };

//   const handleInvestmentPlannedPercentageChange = (e) => {
//     setInvestmentPlannedPercentage(e.target.value);
//   };

//   const calculatePlannedInvestment = () => {
//     const plannedInvestmentAmount =
//       (monthlyIncome * investmentPlannedPercentage) / 100;
//     setPlannedInvestment(plannedInvestmentAmount);
//   };

//   return (
//     <div>
//       <h2>Expense Planning</h2>
//       <div>
//         <label htmlFor="monthlyIncome">Monthly Income:</label>
//         <input
//           type="number"
//           id="monthlyIncome"
//           value={monthlyIncome}
//           onChange={handleMonthlyIncomeChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="investmentPlannedPercentage">
//           Investment Planned Percentage:
//         </label>
//         <input
//           type="number"
//           id="investmentPlannedPercentage"
//           value={investmentPlannedPercentage}
//           onChange={handleInvestmentPlannedPercentageChange}
//         />
//       </div>
//       <button onClick={calculatePlannedInvestment}>
//         Calculate Planned Investment
//       </button>
//       {plannedInvestment && (
//         <div>
//           <p>Planned Investment Amount: ${plannedInvestment}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [investmentPlannedPercentage, setInvestmentPlannedPercentage] =
//     useState("");
//   const [plannedInvestment, setPlannedInvestment] = useState("");

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(e.target.value);
//   };

//   const handleInvestmentPlannedPercentageChange = (e) => {
//     setInvestmentPlannedPercentage(e.target.value);
//   };

//   const calculatePlannedInvestment = () => {
//     const plannedInvestmentAmount =
//       (monthlyIncome * investmentPlannedPercentage) / 100;
//     setPlannedInvestment(plannedInvestmentAmount);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-600">
//       <div className="bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Expense Planning</h2>
//         <div className="mb-4">
//           <label htmlFor="monthlyIncome" className="block text-gray-700">
//             Monthly Income:
//           </label>
//           <input
//             type="number"
//             id="monthlyIncome"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="w-full border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="investmentPlannedPercentage"
//             className="block text-gray-700"
//           >
//             Investment Planned Percentage:
//           </label>
//           <input
//             type="number"
//             id="investmentPlannedPercentage"
//             value={investmentPlannedPercentage}
//             onChange={handleInvestmentPlannedPercentageChange}
//             className="w-full border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>
//         <button
//           onClick={calculatePlannedInvestment}
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//         >
//           Calculate Planned Investment
//         </button>
//         {plannedInvestment && (
//           <div className="mt-4">
//             <p className="text-lg font-semibold">
//               Planned Investment Amount: ${plannedInvestment}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [investmentPercentage, setInvestmentPercentage] = useState("");
//   const [plannedInvestment, setPlannedInvestment] = useState(0);
//   const [expenses, setExpenses] = useState([]);

//   useEffect(() => {
//     // Retrieve expenses data from local storage
//     const savedExpenses = localStorage.getItem("expenses");
//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }
//   }, []);

//   // Function to calculate planned investment
//   const calculatePlannedInvestment = () => {
//     const investmentAmount = (monthlyIncome * investmentPercentage) / 100;
//     setPlannedInvestment(investmentAmount);
//   };

//   return (
//     <div className="bg-blue-500 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-bold mb-2"
//             htmlFor="monthlyIncome"
//           >
//             Monthly Income
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="monthlyIncome"
//             type="number"
//             value={monthlyIncome}
//             onChange={(e) => setMonthlyIncome(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-bold mb-2"
//             htmlFor="investmentPercentage"
//           >
//             Investment Percentage
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="investmentPercentage"
//             type="number"
//             value={investmentPercentage}
//             onChange={(e) => setInvestmentPercentage(e.target.value)}
//           />
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={calculatePlannedInvestment}
//         >
//           Calculate Planned Investment
//         </button>
//         <p className="mt-4">Planned Investment: ${plannedInvestment}</p>
//         <div className="mt-8">
//           <h2 className="text-2xl font-bold mb-4">Expenses</h2>
//           <ul>
//             {expenses.map((expense, index) => (
//               <li key={index}>{`Expense ${index + 1}: $${expense}`}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState("");
//   const [investmentPercentage, setInvestmentPercentage] = useState("");
//   const [plannedInvestment, setPlannedInvestment] = useState(0);
//   const [totalExpenses, setTotalExpenses] = useState(0);

//   useEffect(() => {
//     // Retrieve expenses data from local storage
//     const savedExpenses = localStorage.getItem("expenses");
//     if (savedExpenses) {
//       const expenses = JSON.parse(savedExpenses);
//       // Calculate total expenses amount
//       const total = expenses.reduce(
//         (acc, expense) => acc + parseFloat(expense.amount),
//         0
//       );
//       setTotalExpenses(total);
//     }
//   }, []);

//   // Function to calculate planned investment
//   const calculatePlannedInvestment = () => {
//     const investmentAmount = (monthlyIncome * investmentPercentage) / 100;
//     setPlannedInvestment(investmentAmount);
//   };

//   return (
//     <div className="bg-blue-500 min-h-screen flex items-center justify-center">
//       <div className="bg-white p-8 rounded shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Expenses</h2>
//         <p>Total Expenses: ${totalExpenses}</p>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-bold mb-2"
//             htmlFor="monthlyIncome"
//           >
//             Monthly Income
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="monthlyIncome"
//             type="number"
//             value={monthlyIncome}
//             onChange={(e) => setMonthlyIncome(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-gray-700 font-bold mb-2"
//             htmlFor="investmentPercentage"
//           >
//             Investment Percentage
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="investmentPercentage"
//             type="number"
//             value={investmentPercentage}
//             onChange={(e) => setInvestmentPercentage(e.target.value)}
//           />
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={calculatePlannedInvestment}
//         >
//           Calculate Planned Investment
//         </button>
//         <p className="mt-4">Planned Investment: ${plannedInvestment}</p>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpensePlanning = () => {
//   // State for the first section
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);

//   // State for the second section
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);
//   const [balance, setBalance] = useState(0);

//   //   const data = [
//   //     { value: 30, color: "#FF6384", title: "Expenses" },
//   //     { value: 40, color: "#36A2EB", title: "Planned Investment" },
//   //     { value: 30, color: "#FFCE56", title: "Income" },
//   //   ];

//   // Fetch expenses and investments from local storage
//   useEffect(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }

//     if (savedInvestments) {
//       setInvestments(JSON.parse(savedInvestments));
//     }
//   }, []);

//   // Calculate balance whenever monthlyIncome, expenses, or investments change
//   useEffect(() => {
//     const totalExpenses = expenses.reduce(
//       (acc, expense) => acc + expense.amount,
//       0
//     );
//     const totalInvestments = investments.reduce(
//       (acc, investment) => acc + investment.amount,
//       0
//     );
//     setBalance(monthlyIncome - totalExpenses - totalInvestments);
//   }, [monthlyIncome, expenses, investments]);

//   // Handler for changing monthly income
//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   // Handler for changing planned investment percentage
//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       {/* First section: Monthly Income and Planned Investment Percentage */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="mt-4">
//           {/* Pie chart showing distribution of Income, Planned Investment, and Expenses */}
//           <PieChart
//             data={[
//               { title: "Income", value: monthlyIncome, color: "#4caf50" },
//               {
//                 title: "Planned Investment",
//                 value: (monthlyIncome * plannedInvestmentPercentage) / 100,
//                 color: "#2196f3",
//               },
//               {
//                 title: "Expenses",
//                 value: expenses.reduce(
//                   (acc, expense) => acc + expense.amount,
//                   0
//                 ),
//                 color: "#f44336",
//               },
//             ]}
//             label={({ dataEntry }) =>
//               `${dataEntry.title}: $${dataEntry.value.toFixed(2)}`
//             }
//             labelStyle={{
//               fontSize: "5px",
//               fill: "#fff",
//             }}
//             radius={PieChart.defaultProps.radius - 6}
//             segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//           />
//         </div>
//       </div>
//       {/* Second section: Expenses, Investments, and Balance */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income, Expenses, Investments, and Balance
//         </h3>
//         <div className="mb-4">
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>
//             Total Expenses: $
//             {expenses
//               .reduce((acc, expense) => acc + expense.amount, 0)
//               .toFixed(2)}
//           </p>
//           <p>
//             Total Investments: $
//             {investments
//               .reduce((acc, investment) => acc + investment.amount, 0)
//               .toFixed(2)}
//           </p>
//           <p>Balance: ${balance.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }

//     if (savedInvestments) {
//       setInvestments(JSON.parse(savedInvestments));
//     }
//   }, []);

//   useEffect(() => {
//     const totalExpenses = expenses.reduce(
//       (acc, expense) => acc + expense.amount,
//       0
//     );
//     const totalInvestments = investments.reduce(
//       (acc, investment) => acc + investment.amount,
//       0
//     );
//     setBalance(monthlyIncome - totalExpenses - totalInvestments);
//   }, [monthlyIncome, expenses, investments]);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income, Expenses, Investments, and Balance
//         </h3>
//         <div className="mb-4">
//           <p className="mb-2">Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p className="mb-2">
//             Total Expenses: $
//             {expenses
//               .reduce((acc, expense) => acc + expense.amount, 0)
//               .toFixed(2)}
//           </p>
//           <p className="mb-2">
//             Total Investments: $
//             {investments
//               .reduce((acc, investment) => acc + investment.amount, 0)
//               .toFixed(2)}
//           </p>
//           <p className="mb-2">Balance: ${balance.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }

//     if (savedInvestments) {
//       setInvestments(JSON.parse(savedInvestments));
//     }
//   }, []);

//   useEffect(() => {
//     const totalExpenses = expenses.length
//       ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
//       : 0;
//     const totalInvestments = investments.reduce(
//       (acc, investment) => acc + investment.amount,
//       0
//     );
//     setBalance(monthlyIncome - totalExpenses - totalInvestments);
//   }, [monthlyIncome, expenses, investments]);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income, Expenses, Investments, and Balance
//         </h3>
//         <div className="mb-4">
//           <p className="mb-2">Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p className="mb-2">Total Expenses: ${totalExpenses.toFixed(2)}</p>
//           <p className="mb-2">
//             Total Investments: $
//             {investments
//               .reduce((acc, investment) => acc + investment.amount, 0)
//               .toFixed(2)}
//           </p>
//           <p className="mb-2">Balance: ${balance.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }

//     if (savedInvestments) {
//       setInvestments(JSON.parse(savedInvestments));
//     }
//   }, []);

//   useEffect(() => {
//     const totalExpenses = expenses.length
//       ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
//       : 0;
//     const totalInvestments = investments.reduce(
//       (acc, investment) => acc + investment.amount,
//       0
//     );
//     setBalance(monthlyIncome - totalExpenses - totalInvestments);
//   }, [monthlyIncome, expenses, investments]);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income, Expenses, Investments, and Balance
//         </h3>
//         <div className="mb-4">
//           <p className="mb-2">Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p className="mb-2">
//             Total Expenses: $
//             {expenses.length
//               ? expenses
//                   .reduce((acc, expense) => acc + expense.amount, 0)
//                   .toFixed(2)
//               : 0}
//           </p>
//           <p className="mb-2">
//             Total Investments: $
//             {investments
//               .reduce((acc, investment) => acc + investment.amount, 0)
//               .toFixed(2)}
//           </p>
//           <p className="mb-2">Balance: ${balance.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }

//     if (savedInvestments) {
//       setInvestments(JSON.parse(savedInvestments));
//     }
//   }, []);

//   useEffect(() => {
//     const totalExpenses = expenses.length
//       ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
//       : 0;
//     const totalInvestments = investments.reduce(
//       (acc, investment) => acc + investment.amount,
//       0
//     );
//     setBalance(monthlyIncome - totalExpenses - totalInvestments);
//   }, [monthlyIncome, expenses, investments]);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income, Expenses, Investments, and Balance
//         </h3>
//         <div className="mb-4">
//           <p className="mb-2">Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p className="mb-2">
//             Total Expenses: $
//             {expenses.length
//               ? expenses
//                   .reduce((acc, expense) => acc + expense.amount, 0)
//                   .toFixed(2)
//               : 0}
//           </p>
//           <p className="mb-2">
//             Total Investments: $
//             {investments.length
//               ? investments
//                   .reduce((acc, investment) => acc + investment.amount, 0)
//                   .toFixed(2)
//               : 0}
//           </p>
//           <p className="mb-2">Balance: ${balance.toFixed(2)}</p>
//           {balance < 0 && (
//             <p className="text-red-500">Warning: Balance is negative!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }

//     if (savedInvestments) {
//       setInvestments(JSON.parse(savedInvestments));
//     }
//   }, []);

//   useEffect(() => {
//     const totalExpenses = expenses.length
//       ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
//       : 0;
//     const totalInvestments = investments.reduce(
//       (acc, investment) => acc + investment.amount,
//       0
//     );
//     setBalance(monthlyIncome - totalExpenses - totalInvestments);
//   }, [monthlyIncome, expenses, investments]);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income, Expenses, Investments, and Balance
//         </h3>
//         <div className="mb-4">
//           <p className="mb-2">Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p className="mb-2">
//             Total Expenses: $
//             {Array.isArray(expenses) && expenses.length > 0
//               ? expenses
//                   .reduce((acc, expense) => acc + expense.amount, 0)
//                   .toFixed(2)
//               : 0}
//           </p>
//           <p className="mb-2">
//             Total Investments: $
//             {investments.length
//               ? investments
//                   .reduce((acc, investment) => acc + investment.amount, 0)
//                   .toFixed(2)
//               : 0}
//           </p>
//           <p className="mb-2">Balance: ${balance.toFixed(2)}</p>
//           {balance < 0 && (
//             <p className="text-red-500">Warning: Balance is negative!</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }

//     if (savedInvestments) {
//       setInvestments(JSON.parse(savedInvestments));
//     }
//   }, []);

//   useEffect(() => {
//     const totalExpenses =
//       Array.isArray(expenses) && expenses.length > 0
//         ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
//         : 0;
//     const totalInvestments = investments.reduce(
//       (acc, investment) => acc + investment.amount,
//       0
//     );
//     setBalance(monthlyIncome - totalExpenses - totalInvestments);
//   }, [monthlyIncome, expenses, investments]);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income, Expenses, Investments, and Balance
//         </h3>
//         <div className="mb-4">
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
//           <p>
//             Total Investments: $
//             {investments
//               .reduce((acc, investment) => acc + investment.amount, 0)
//               .toFixed(2)}
//           </p>
//           <p>Balance: ${balance.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState, useEffect } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);
//   const [balance, setBalance] = useState(0);

//   useEffect(() => {
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedExpenses) {
//       setExpenses(JSON.parse(savedExpenses));
//     }

//     if (savedInvestments) {
//       setInvestments(JSON.parse(savedInvestments));
//     }
//   }, []);

//   useEffect(() => {
//     const totalExpenses =
//       Array.isArray(expenses) && expenses.length > 0
//         ? expenses.reduce((acc, expense) => acc + expense.amount, 0)
//         : 0;
//       const totalInvestments = Array.isArray(expenses) && expenses.length > 0 ? investments.reduce(
//           (acc, investment) => acc + investment.amount, 0)
//           : 0;
//     );
//     setBalance(monthlyIncome - totalExpenses - totalInvestments);
//   }, [monthlyIncome, expenses, investments]);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income, Expenses, Investments, and Balance
//         </h3>
//         <div className="mb-4">
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>
//             Total Expenses: $
//             {/* {expenses
//               ? expenses
//                   .reduce((acc, expense) => acc + expense.amount, 0)
//                   .toFixed(2)
//               : "0.00"} */}
//           </p>
//           <p>
//             Total Investments: $
//             {/* {investments
//               .reduce((acc, investment) => acc + investment.amount, 0)
//               .toFixed(2)} */}
//           </p>
//           <p>Balance: ${balance.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);

//   const calculatePlannedInvestment = () => {
//     return (monthlyIncome * plannedInvestmentPercentage) / 100;
//   };

//   const handleMonthlyIncomeChange = (e) => {
//     const income = parseFloat(e.target.value);
//     setMonthlyIncome(income);
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     let percentage = parseFloat(e.target.value);
//     // Ensure percentage is between 0 and 100
//     if (percentage < 0) {
//       percentage = 0;
//     } else if (percentage > 100) {
//       percentage = 100;
//     }
//     setPlannedInvestmentPercentage(percentage);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold mb-2">
//           Monthly Income and Planned Investment
//         </h3>
//         <div className="flex mb-4">
//           <label className="mr-2">Monthly Income:</label>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="flex">
//           <label className="mr-2">Planned Investment Percentage:</label>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//           <span className="ml-2">%</span>
//         </div>
//       </div>
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Planned Investment</h3>
//         <p className="mb-4">
//           Planned Investment: ${calculatePlannedInvestment().toFixed(2)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;
// import React, { useState } from "react";
// import { FaMoneyBillAlt, FaPercentage } from "react-icons/fa";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);

//   const calculatePlannedInvestment = () => {
//     return (monthlyIncome * plannedInvestmentPercentage) / 100;
//   };

//   const handleMonthlyIncomeChange = (e) => {
//     const income = parseFloat(e.target.value);
//     setMonthlyIncome(income);
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     let percentage = parseFloat(e.target.value);
//     // Ensure percentage is between 0 and 100
//     if (percentage < 0) {
//       percentage = 0;
//     } else if (percentage > 100) {
//       percentage = 100;
//     }
//     setPlannedInvestmentPercentage(percentage);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="rounded-lg bg-white shadow-md p-6">
//         <h3 className="text-lg font-semibold mb-2">Monthly Income</h3>
//         <div className="flex items-center mb-4">
//           <FaMoneyBillAlt className="text-blue-500 mr-2" />
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400 flex-grow"
//           />
//         </div>
//         <h3 className="text-lg font-semibold mb-2">
//           Planned Investment Percentage
//         </h3>
//         <div className="flex items-center mb-4">
//           <FaPercentage className="text-blue-500 mr-2" />
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400 flex-grow"
//           />
//           <span className="ml-2">%</span>
//         </div>
//       </div>
//       <div className="mt-6">
//         <h3 className="text-lg font-semibold mb-2">Planned Investment</h3>
//         <p className="rounded-lg bg-white shadow-md p-4">
//           Planned Investment: ${calculatePlannedInvestment().toFixed(2)}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { FaMoneyBillAlt } from "react-icons/fa";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//         <div className="flex items-center justify-center bg-blue-400 rounded-full w-12 h-12 mr-4">
//           <FaMoneyBillAlt className="text-white text-lg" />
//         </div>
//         <div>
//           <p className="text-sm font-semibold">Monthly Income</p>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="ml-auto">
//           <p className="text-sm font-semibold">Planned Investment</p>
//           <p className="text-lg font-bold">{plannedInvestment}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { FaMoneyBillAlt } from "react-icons/fa";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//         <div className="flex items-center justify-center bg-blue-400 rounded-full w-12 h-12 mr-4">
//           <FaMoneyBillAlt className="text-white text-lg" />
//         </div>
//         <div>
//           <p className="text-sm font-semibold">Monthly Income</p>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="ml-auto">
//           <p className="text-sm font-semibold">Planned Investment</p>
//           <p className="text-lg font-bold">{plannedInvestment}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { FaMoneyBillAlt } from "react-icons/fa";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const plannedInvestment = (monthlyIncome * 0) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//         <div className="flex items-center justify-center bg-blue-400 rounded-full w-12 h-12 mr-4">
//           <FaMoneyBillAlt className="text-white text-lg" />
//         </div>
//         <div>
//           <p className="text-sm font-semibold">Monthly Income</p>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="ml-auto">
//           <p className="text-sm font-semibold">Planned Investment</p>
//           <p className="text-lg font-bold">{plannedInvestment}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { FaMoneyBillAlt } from "react-icons/fa";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     setPlannedInvestmentPercentage(parseFloat(e.target.value));
//   };

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//       <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//         <div className="flex items-center justify-center bg-blue-400 rounded-full w-12 h-12 mr-4">
//           <FaMoneyBillAlt className="text-white text-lg" />
//         </div>
//         <div>
//           <p className="text-sm font-semibold">Monthly Income</p>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//         <div className="ml-4">
//           <p className="text-sm font-semibold">Planned Investment Percentage</p>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400"
//           />
//         </div>
//       </div>
//       <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//         <div className="ml-auto">
//           <p className="text-sm font-semibold">Planned Investment</p>
//           <p className="text-lg font-bold">{plannedInvestment}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { FaMoneyBillAlt } from "react-icons/fa";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value > 100) {
//       value = 100; // Ensure maximum value is 100
//     }
//     setPlannedInvestmentPercentage(value);
//   };

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const remainingIncome = monthlyIncome - plannedInvestment;

//   return (
//     <div className="container mx-auto p-4 flex">
//       <div className="w-3/4 mr-8">
//         <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//         <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//           <div className="flex items-center justify-center bg-blue-400 rounded-full w-12 h-12 mr-4">
//             <FaMoneyBillAlt className="text-white text-lg" />
//           </div>
//           <div>
//             <p className="text-sm font-semibold">Monthly Income</p>
//             <input
//               type="number"
//               value={monthlyIncome}
//               onChange={handleMonthlyIncomeChange}
//               className="p-2 border border-blue-400"
//             />
//           </div>
//         </div>
//         <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//           <div>
//             <p className="text-sm font-semibold">
//               Planned Investment Percentage
//             </p>
//             <input
//               type="number"
//               value={plannedInvestmentPercentage}
//               onChange={handlePlannedInvestmentPercentageChange}
//               className="p-2 border border-blue-400"
//             />
//           </div>
//         </div>
//         <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//           <div className="ml-auto">
//             <p className="text-sm font-semibold">Planned Investment</p>
//             <p className="text-lg font-bold">{plannedInvestment}</p>
//           </div>
//         </div>
//       </div>
//       <div className="w-1/4">
//         <PieChart
//           data={[
//             { title: "Monthly Income", value: monthlyIncome, color: "#4caf50" },
//             {
//               title: "Planned Investment",
//               value: plannedInvestment,
//               color: "#f44336",
//             },
//             {
//               title: "Remaining Income",
//               value: remainingIncome,
//               color: "#2196f3",
//             },
//           ]}
//           radius={PieChart.defaultProps.radius - 6}
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//         />
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { FaMoneyBillAlt } from "react-icons/fa";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value > 100) {
//       value = 100; // Ensure maximum value is 100
//     }
//     setPlannedInvestmentPercentage(value);
//   };

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const remainingIncome = monthlyIncome - plannedInvestment;

//   return (
//     <div className="container mx-auto p-4 flex">
//       <div className="w-3/4 mr-8">
//         <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//         <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//           <div className="flex items-center justify-center bg-blue-400 rounded-full w-12 h-12 mr-4">
//             <FaMoneyBillAlt className="text-white text-lg" />
//           </div>
//           <div>
//             <p className="text-sm font-semibold">Monthly Income</p>
//             <input
//               type="number"
//               value={monthlyIncome}
//               onChange={handleMonthlyIncomeChange}
//               className="p-2 border border-blue-400"
//             />
//           </div>
//         </div>
//         <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//           <div>
//             <p className="text-sm font-semibold">
//               Planned Investment Percentage
//             </p>
//             <input
//               type="number"
//               value={plannedInvestmentPercentage}
//               onChange={handlePlannedInvestmentPercentageChange}
//               className="p-2 border border-blue-400"
//             />
//           </div>
//         </div>
//         <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//           <div className="ml-auto">
//             <p className="text-sm font-semibold">Planned Investment</p>
//             <p className="text-lg font-bold">{plannedInvestment}</p>
//           </div>
//         </div>
//       </div>
//       <div className="w-1/4">
//         <PieChart
//           data={[
//             { title: "Monthly Income", value: monthlyIncome, color: "#4caf50" },
//             {
//               title: "Planned Investment",
//               value: plannedInvestment,
//               color: "#f44336",
//             },
//             {
//               title: "Remaining Income",
//               value: remainingIncome,
//               color: "#2196f3",
//             },
//           ]}
//           radius={35} // Adjust the radius as needed
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//         />
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { FaMoneyBillAlt } from "react-icons/fa";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpenses, setExpectedExpenses] = useState(0);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value > 100) {
//       value = 100; // Ensure maximum value is 100
//     }
//     setPlannedInvestmentPercentage(value);
//   };

//   const handleExpectedExpensesChange = (e) => {
//     setExpectedExpenses(parseFloat(e.target.value));
//   };

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const remainingIncome = monthlyIncome - plannedInvestment - expectedExpenses;

//   return (
//     <div className="container mx-auto p-4 flex">
//       <div className="w-3/4 mr-8">
//         <h2 className="text-2xl font-semibold mb-4">Expense Planning</h2>
//         <div className="bg-blue-100 rounded-md p-4 mb-4 flex items-center">
//           <div className="flex items-center justify-center bg-blue-400 rounded-full w-12 h-12 mr-4">
//             <FaMoneyBillAlt className="text-white text-lg" />
//           </div>
//           <div>
//             <p className="text-sm font-semibold">Monthly Income</p>
//             <input
//               type="number"
//               value={monthlyIncome}
//               onChange={handleMonthlyIncomeChange}
//               className="p-2 border border-blue-400 mr-4"
//             />
//             <p className="text-sm font-semibold">
//               Planned Investment Percentage
//             </p>
//             <input
//               type="number"
//               value={plannedInvestmentPercentage}
//               onChange={handlePlannedInvestmentPercentageChange}
//               className="p-2 border border-blue-400 mr-4"
//             />
//             <p className="text-sm font-semibold">Expected Expenses</p>
//             <input
//               type="number"
//               value={expectedExpenses}
//               onChange={handleExpectedExpensesChange}
//               className="p-2 border border-blue-400"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="w-1/4">
//         <PieChart
//           data={[
//             { title: "Monthly Income", value: monthlyIncome, color: "#4caf50" },
//             {
//               title: "Planned Investment",
//               value: plannedInvestment,
//               color: "#f44336",
//             },
//             {
//               title: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#2196f3",
//             },
//             {
//               title: "Remaining Income",
//               value: remainingIncome,
//               color: "#9c27b0",
//             },
//           ]}
//           radius={35} // Adjust the radius as needed
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//         />
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value + expectedExpensesPercentage > 100) {
//       value = 100 - expectedExpensesPercentage; // Ensure total percentage doesn't exceed 100
//     }
//     setPlannedInvestmentPercentage(value);
//   };

//   const handleExpectedExpensesPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value + plannedInvestmentPercentage > 100) {
//       value = 100 - plannedInvestmentPercentage; // Ensure total percentage doesn't exceed 100
//     }
//     setExpectedExpensesPercentage(value);
//   };

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;
//   const remainingIncome = monthlyIncome - plannedInvestment - expectedExpenses;

//   return (
//     <div className="container mx-auto p-4 flex items-center justify-center">
//       <div className="w-1/2">
//         <h2 className="text-2xl font-semibold mb-4 text-center">
//           Expense Planning
//         </h2>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Monthly Income</p>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Planned Investment Percentage</p>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Expected Expenses Percentage</p>
//           <input
//             type="number"
//             value={expectedExpensesPercentage}
//             onChange={handleExpectedExpensesPercentageChange}
//             className="p-2 border border-blue-400 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Planned Investment</p>
//           <p className="text-lg font-bold">{plannedInvestment.toFixed(2)}</p>
//         </div>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Expected Expenses</p>
//           <p className="text-lg font-bold">{expectedExpenses.toFixed(2)}</p>
//         </div>
//       </div>
//       <div className="w-1/2">
//         <PieChart
//           data={[
//             {
//               title: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4caf50",
//             },
//             {
//               title: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#f44336",
//             },
//             {
//               title: "Remaining Income",
//               value: remainingIncome,
//               color: "#2196f3",
//             },
//           ]}
//           radius={35}
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//           label={({ dataEntry }) =>
//             `${dataEntry.title}: ${dataEntry.value.toFixed(2)}`
//           }
//           labelStyle={{
//             fontSize: "5px",
//             fill: "#fff",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value + expectedExpensesPercentage > 100) {
//       value = 100 - expectedExpensesPercentage; // Ensure total percentage doesn't exceed 100
//     }
//     setPlannedInvestmentPercentage(value);
//   };

//   const handleExpectedExpensesPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value + plannedInvestmentPercentage > 100) {
//       value = 100 - plannedInvestmentPercentage; // Ensure total percentage doesn't exceed 100
//     }
//     setExpectedExpensesPercentage(value);
//   };

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;
//   const remainingIncome = monthlyIncome - plannedInvestment - expectedExpenses;

//   const legendItems = [
//     {
//       title: "Planned Investment",
//       color: "#4caf50",
//       value: plannedInvestment.toFixed(2),
//     },
//     {
//       title: "Expected Expenses",
//       color: "#f44336",
//       value: expectedExpenses.toFixed(2),
//     },
//     {
//       title: "Remaining Income",
//       color: "#2196f3",
//       value: remainingIncome.toFixed(2),
//     },
//   ];

//   return (
//     <div className="container mx-auto p-4 flex items-center justify-center">
//       <div className="w-1/2">
//         <h2 className="text-2xl font-semibold mb-4 text-center">
//           Expense Planning
//         </h2>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Monthly Income</p>
//           <input
//             type="number"
//             value={monthlyIncome}
//             onChange={handleMonthlyIncomeChange}
//             className="p-2 border border-blue-400 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Planned Investment Percentage</p>
//           <input
//             type="number"
//             value={plannedInvestmentPercentage}
//             onChange={handlePlannedInvestmentPercentageChange}
//             className="p-2 border border-blue-400 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Expected Expenses Percentage</p>
//           <input
//             type="number"
//             value={expectedExpensesPercentage}
//             onChange={handleExpectedExpensesPercentageChange}
//             className="p-2 border border-blue-400 w-full"
//           />
//         </div>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Planned Investment</p>
//           <p className="text-lg font-bold">{plannedInvestment.toFixed(2)}</p>
//         </div>
//         <div className="mb-4">
//           <p className="text-sm font-semibold">Expected Expenses</p>
//           <p className="text-lg font-bold">{expectedExpenses.toFixed(2)}</p>
//         </div>
//       </div>
//       <div className="w-1/2">
//         <PieChart
//           data={[
//             { value: plannedInvestment, color: "#4caf50" },
//             { value: expectedExpenses, color: "#f44336" },
//             { value: remainingIncome, color: "#2196f3" },
//           ]}
//           radius={35}
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//           label={({ dataEntry }) =>
//             `${dataEntry.title}: ${dataEntry.value.toFixed(2)}`
//           }
//           labelStyle={{
//             fontSize: "5px",
//             fill: "#fff",
//           }}
//         />
//         <div className="flex justify-center">
//           {legendItems.map((item, index) => (
//             <div key={index} className="flex items-center mr-4">
//               <div
//                 className="w-4 h-4 mr-2"
//                 style={{ backgroundColor: item.color }}
//               />
//               <p className="text-sm">{item.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpensePlanning;

// import React, { useState } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);

//   const handleMonthlyIncomeChange = (e) => {
//     setMonthlyIncome(parseFloat(e.target.value));
//   };

//   const handlePlannedInvestmentPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value + expectedExpensesPercentage > 100) {
//       value = 100 - expectedExpensesPercentage; // Ensure total percentage doesn't exceed 100
//     }
//     setPlannedInvestmentPercentage(value);
//   };

//   const handleExpectedExpensesPercentageChange = (e) => {
//     let value = parseFloat(e.target.value);
//     if (value < 0) {
//       value = 0; // Ensure minimum value is 0
//     } else if (value + plannedInvestmentPercentage > 100) {
//       value = 100 - plannedInvestmentPercentage; // Ensure total percentage doesn't exceed 100
//     }
//     setExpectedExpensesPercentage(value);
//   };

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;
//   const remainingIncome = monthlyIncome - plannedInvestment - expectedExpenses;

//   const legendItems = [
//     {
//       title: "Planned Investment",
//       color: "#4caf50",
//       value: plannedInvestment.toFixed(2),
//     },
//     {
//       title: "Expected Expenses",
//       color: "#f44336",
//       value: expectedExpenses.toFixed(2),
//     },
//     {
//       title: "Remaining Income",
//       color: "#2196f3",
//       value: remainingIncome.toFixed(2),
//     },
//   ];
import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

const ExpensePlanning = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(() => {
    const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
    return savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0;
  });

  const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
    useState(() => {
      const savedPlannedInvestmentPercentage = localStorage.getItem(
        "plannedInvestmentPercentage"
      );
      return savedPlannedInvestmentPercentage
        ? parseFloat(savedPlannedInvestmentPercentage)
        : 0;
    });

  const [expectedExpensesPercentage, setExpectedExpensesPercentage] = useState(
    () => {
      const savedExpectedExpensesPercentage = localStorage.getItem(
        "expectedExpensesPercentage"
      );
      return savedExpectedExpensesPercentage
        ? parseFloat(savedExpectedExpensesPercentage)
        : 0;
    }
  );

  useEffect(() => {
    localStorage.setItem("monthlyIncome", monthlyIncome);
    localStorage.setItem(
      "plannedInvestmentPercentage",
      plannedInvestmentPercentage
    );
    localStorage.setItem(
      "expectedExpensesPercentage",
      expectedExpensesPercentage
    );
  }, [monthlyIncome, plannedInvestmentPercentage, expectedExpensesPercentage]);

  const handleMonthlyIncomeChange = (e) => {
    setMonthlyIncome(parseFloat(e.target.value));
  };

  const handlePlannedInvestmentPercentageChange = (e) => {
    let value = parseFloat(e.target.value);
    if (value < 0) {
      value = 0; // Ensure minimum value is 0
    } else if (value + expectedExpensesPercentage > 100) {
      value = 100 - expectedExpensesPercentage; // Ensure total percentage doesn't exceed 100
    }
    setPlannedInvestmentPercentage(value);
  };

  const handleExpectedExpensesPercentageChange = (e) => {
    let value = parseFloat(e.target.value);
    if (value < 0) {
      value = 0; // Ensure minimum value is 0
    } else if (value + plannedInvestmentPercentage > 100) {
      value = 100 - plannedInvestmentPercentage; // Ensure total percentage doesn't exceed 100
    }
    setExpectedExpensesPercentage(value);
  };

  const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
  const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;
  const remainingIncome = monthlyIncome - plannedInvestment - expectedExpenses;

  const legendItems = [
    {
      title: "Planned Investment",
      color: "#4caf50",
      value: plannedInvestment.toFixed(2),
    },
    {
      title: "Expected Expenses",
      color: "#f44336",
      value: expectedExpenses.toFixed(2),
    },
    {
      title: "Remaining Income",
      color: "#2196f3",
      value: remainingIncome.toFixed(2),
    },
  ];

  return (
    <div className="container mx-auto p-4 flex items-center justify-center">
      <div className="w-1/2">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Expense Planning
        </h2>
        <div className="mb-4">
          <p className="text-sm font-semibold">Monthly Income</p>
          <input
            type="number"
            value={monthlyIncome}
            onChange={handleMonthlyIncomeChange}
            className="p-2 border border-blue-400 w-full"
          />
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold">Planned Investment Percentage</p>
          <input
            type="number"
            value={plannedInvestmentPercentage}
            onChange={handlePlannedInvestmentPercentageChange}
            className="p-2 border border-blue-400 w-full"
          />
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold">Expected Expenses Percentage</p>
          <input
            type="number"
            value={expectedExpensesPercentage}
            onChange={handleExpectedExpensesPercentageChange}
            className="p-2 border border-blue-400 w-full"
          />
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold">Planned Investment</p>
          <p className="text-lg font-bold">{plannedInvestment.toFixed(2)}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-semibold">Expected Expenses</p>
          <p className="text-lg font-bold">{expectedExpenses.toFixed(2)}</p>
        </div>
      </div>
      <div className="w-1/2">
        <PieChart
          data={[
            { value: plannedInvestment, color: "#4caf50" },
            { value: expectedExpenses, color: "#f44336" },
            { value: remainingIncome, color: "#2196f3" },
          ]}
          radius={35}
          segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
        />
        <div className="flex justify-center mt-4">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center mr-4">
              <div
                className="w-4 h-4 mr-2"
                style={{ backgroundColor: item.color }}
              />
              <p className="text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpensePlanning;
