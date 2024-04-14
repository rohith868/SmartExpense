// import React from "react";

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard Component</h1>
//       {/* Add your dashboard content here */}
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";

// const Dashboard = () => {
//   const [plannedExpenses, setPlannedExpenses] = useState(0);
//   const [expectedExpenses, setExpectedExpenses] = useState(0);
//   const [plannedInvestments, setPlannedInvestments] = useState(0);
//   const [expectedInvestments, setExpectedInvestments] = useState(0);

//   useEffect(() => {
//     // Retrieve planned and expected expenses from local storage
//     const plannedExpensesFromLocalStorage = localStorage.getItem(
//       "plannedExpenses"
//     );
//     const expectedExpensesFromLocalStorage = localStorage.getItem(
//       "expectedExpenses"
//     );

//     // Retrieve planned and expected investments from local storage
//     const plannedInvestmentsFromLocalStorage = localStorage.getItem(
//       "plannedInvestments"
//     );
//     const expectedInvestmentsFromLocalStorage = localStorage.getItem(
//       "expectedInvestments"
//     );

//     // Parse the retrieved values or set default values if not available
//     setPlannedExpenses(
//       plannedExpensesFromLocalStorage
//         ? parseFloat(plannedExpensesFromLocalStorage)
//         : 0
//     );
//     setExpectedExpenses(
//       expectedExpensesFromLocalStorage
//         ? parseFloat(expectedExpensesFromLocalStorage)
//         : 0
//     );
//     setPlannedInvestments(
//       plannedInvestmentsFromLocalStorage
//         ? parseFloat(plannedInvestmentsFromLocalStorage)
//         : 0
//     );
//     setExpectedInvestments(
//       expectedInvestmentsFromLocalStorage
//         ? parseFloat(expectedInvestmentsFromLocalStorage)
//         : 0
//     );
//   }, []);

//   // Calculate the differences between planned and expected expenses and investments
//   const expenseDifference = plannedExpenses - expectedExpenses;
//   const investmentDifference = plannedInvestments - expectedInvestments;

//   // Chart data
//   const data = {
//     labels: ["Planned Expenses", "Expected Expenses", "Planned Investments", "Expected Investments"],
//     datasets: [
//       {
//         label: "Difference",
//         data: [expenseDifference, 0, investmentDifference, 0],
//         backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)"],
//         borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Chart options
//   const options = {
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div style={{ height: "400px", width: "600px" }}>
//         <Line data={data} options={options} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

// const Dashboard = () => {
//   const [expenseDifferences, setExpenseDifferences] = useState([]);
//   const [investmentDifferences, setInvestmentDifferences] = useState([]);

//   useEffect(() => {
//     // Retrieve planned and expected expenses from local storage
//     const plannedExpenses =
//       JSON.parse(localStorage.getItem("plannedExpenses")) || [];
//     const expectedExpenses =
//       JSON.parse(localStorage.getItem("expectedExpenses")) || [];

//     // Retrieve planned and expected investments from local storage
//     const plannedInvestments =
//       JSON.parse(localStorage.getItem("plannedInvestments")) || [];
//     const expectedInvestments =
//       JSON.parse(localStorage.getItem("expectedInvestments")) || [];

//     // Calculate differences between planned and expected expenses
//     const expenseDifferencesData = plannedExpenses.map(
//       (plannedExpense, index) => ({
//         category: plannedExpense.category,
//         difference: expectedExpenses[index]
//           ? expectedExpenses[index].amount - plannedExpense.amount
//           : 0,
//       })
//     );

//     // Calculate differences between planned and expected investments
//     const investmentDifferencesData = plannedInvestments.map(
//       (plannedInvestment, index) => ({
//         type: plannedInvestment.type,
//         difference: expectedInvestments[index]
//           ? expectedInvestments[index].amount - plannedInvestment.amount
//           : 0,
//       })
//     );

//     setExpenseDifferences(expenseDifferencesData);
//     setInvestmentDifferences(investmentDifferencesData);
//   }, []);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <h3>Expense Differences</h3>
//       <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
//         <VictoryAxis tickValues={expenseDifferences.map((d) => d.category)} />
//         <VictoryAxis dependentAxis />
//         <VictoryBar data={expenseDifferences} x="category" y="difference" />
//       </VictoryChart>

//       <h3>Investment Differences</h3>
//       <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
//         <VictoryAxis tickValues={investmentDifferences.map((d) => d.type)} />
//         <VictoryAxis dependentAxis />
//         <VictoryBar data={investmentDifferences} x="type" y="difference" />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={600}
//         height={400}
//       >
//         <VictoryAxis tickValues={["Planned Investment", "Expected Expenses"]} />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             { category: "Planned Investment", value: plannedInvestment },
//             { category: "Expected Expenses", value: expectedExpenses },
//           ]}
//           x="category"
//           y="value"
//           style={{ data: { fill: "blue" } }}
//         />
//         <VictoryBar
//           data={[
//             { category: "Actual Expenses", value: expenses },
//             { category: "Actual Investments", value: investments },
//           ]}
//           x="category"
//           y="value"
//           style={{ data: { fill: "red" } }}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={400}
//         height={300}
//       >
//         <VictoryAxis tickValues={["Planned Investment", "Expected Expenses"]} />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             { category: "Planned Investment", value: plannedInvestment },
//             { category: "Actual Investments", value: investments },
//             { category: "", value: 0 }, // Empty bar for spacing
//             { category: "Expected Expenses", value: expectedExpenses },
//             { category: "Actual Expenses", value: expenses },
//           ]}
//           x="category"
//           y="value"
//           style={{ data: { fill: "#3182CE" } }}
//           barWidth={20}
//           cornerRadius={4}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={400}
//         height={300}
//       >
//         <VictoryAxis tickValues={["Planned Investment", "Expected Expenses"]} />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             { category: "Planned Investment", value: plannedInvestment },
//             { category: "Actual Investments", value: investments },
//             { category: "", value: 0 }, // Empty bar for spacing
//             { category: "Expected Expenses", value: expectedExpenses },
//             { category: "Actual Expenses", value: expenses },
//           ]}
//           x="category"
//           y="value"
//           style={{ data: { fill: "#60A5FA" } }}
//           barWidth={20}
//           cornerRadius={4}
//           labels={({ datum }) => `${datum.category}: ${datum.value.toFixed(2)}`} // Show value labels on bars
//           labelComponent={<VictoryAxis dependentAxis />} // Place labels above bars
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={600}
//         height={300}
//       >
//         <VictoryAxis />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             { category: "Actual Expenses", value: expenses, color: "#FBBF24" },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `${datum.category}: ${datum.value.toFixed(2)}`} // Show value labels on bars
//           labelComponent={<VictoryAxis dependentAxis />} // Place labels above bars
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   // Determine the maximum value for y-axis ticks
//   const maxYValue = Math.max(
//     plannedInvestment,
//     expectedExpenses,
//     expenses,
//     investments
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={600}
//         height={300}
//       >
//         <VictoryAxis />
//         <VictoryAxis dependentAxis tickValues={[0, maxYValue]} />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             { category: "Actual Expenses", value: expenses, color: "#FBBF24" },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `${datum.category}: ${datum.value.toFixed(2)}`} // Show value labels on bars
//           labelComponent={<VictoryAxis dependentAxis />} // Place labels above bars
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   // Determine the maximum value for y-axis ticks
//   const maxYValue = Math.max(
//     plannedInvestment,
//     expectedExpenses,
//     expenses,
//     investments
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={600}
//         height={300}
//       >
//         <VictoryAxis />
//         <VictoryAxis
//           dependentAxis
//           tickValues={[
//             0,
//             plannedInvestment,
//             expectedExpenses,
//             expenses,
//             investments,
//           ]}
//         />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             { category: "Actual Expenses", value: expenses, color: "#FBBF24" },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `${datum.category}: ${datum.value.toFixed(2)}`} // Show value labels on bars
//           labelComponent={<VictoryAxis dependentAxis />} // Place labels above bars
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState([]);
//   const [investments, setInvestments] = useState([]);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={600}
//         height={300}
//       >
//         <VictoryAxis />
//         <VictoryAxis
//           dependentAxis
//           tickValues={[
//             0,
//             plannedInvestment,
//             expectedExpenses,
//             expenses,
//             investments,
//           ]}
//         />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             { category: "Actual Expenses", value: expenses, color: "#FBBF24" },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `${datum.category}: ${datum.value.toFixed(2)}`} // Show value labels on bars
//           labelComponent={<VictoryAxis dependentAxis />} // Place labels above bars
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState(0);
//   const [investments, setInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={600}
//         height={300}
//       >
//         <VictoryAxis />
//         <VictoryAxis
//           dependentAxis
//           tickValues={[
//             0,
//             plannedInvestment,
//             expectedExpenses,
//             expenses,
//             investments,
//           ]}
//         />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             { category: "Actual Expenses", value: expenses, color: "#FBBF24" },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `${datum.category}: ${datum.value.toFixed(2)}`} // Show value labels on bars
//           labelComponent={<VictoryAxis dependentAxis />} // Place labels above bars
//         />
//       </VictoryChart>
//       <div className="flex justify-between mt-4">
//         <div>
//           <p>Monthly Income: {monthlyIncome.toFixed(2)}</p>
//           <p>
//             Planned Investment Percentage:{" "}
//             {plannedInvestmentPercentage.toFixed(2)}
//           </p>
//           <p>
//             Expected Expenses Percentage:{" "}
//             {expectedExpensesPercentage.toFixed(2)}
//           </p>
//         </div>
//         <div>
//           <p>Planned Investment: {plannedInvestment.toFixed(2)}</p>
//           <p>Actual Investments: {investments}</p>
//           <p>Expected Expenses: {expectedExpenses.toFixed(2)}</p>
//           <p>Actual Expenses: {expenses.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState(0);
//   const [investments, setInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={600}
//         height={300}
//       >
//         <VictoryAxis
//           dependentAxis
//           tickValues={[
//             0,
//             plannedInvestment,
//             expectedExpenses,
//             expenses,
//             investments,
//           ]}
//           tickFormat={(t) => `$${t}`}
//         />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: isNaN(investments) ? 0 : investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: isNaN(expenses) ? 0 : expenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`} // Show value labels on bars
//         />
//       </VictoryChart>
//       <div className="flex justify-between mt-4">
//         <div>
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>
//             Planned Investment Percentage:{" "}
//             {plannedInvestmentPercentage.toFixed(2)}
//           </p>
//           <p>
//             Expected Expenses Percentage:{" "}
//             {expectedExpensesPercentage.toFixed(2)}
//           </p>
//         </div>
//         <div>
//           <p>Planned Investment: ${plannedInvestment.toFixed(2)}</p>
//           <p>
//             Actual Investments: $
//             {isNaN(investments) ? 0 : investments.toFixed(2)}
//           </p>
//           <p>Expected Expenses: ${expectedExpenses.toFixed(2)}</p>
//           <p>Actual Expenses: ${isNaN(expenses) ? 0 : expenses.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryChart, VictoryBar, VictoryTheme, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [expenses, setExpenses] = useState(null);
//   const [investments, setInvestments] = useState(null);

//   useEffect(() => {
//     // Fetch monthly income, planned investment percentage, and expected expenses percentage from local storage
//     const savedMonthlyIncome =
//       parseFloat(localStorage.getItem("monthlyIncome")) || 0;
//     const savedPlannedInvestmentPercentage =
//       parseFloat(localStorage.getItem("plannedInvestmentPercentage")) || 0;
//     const savedExpectedExpensesPercentage =
//       parseFloat(localStorage.getItem("expectedExpensesPercentage")) || 0;

//     setMonthlyIncome(savedMonthlyIncome);
//     setPlannedInvestmentPercentage(savedPlannedInvestmentPercentage);
//     setExpectedExpensesPercentage(savedExpectedExpensesPercentage);

//     // Fetch expenses and investments from local storage
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate actual expenses and actual investments
//     const actualExpenses = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     const actualInvestments = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Set the state
//     setExpenses(actualExpenses);
//     setInvestments(actualInvestments);
//   }, []);

//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4 text-center">Dashboard</h2>
//       <VictoryChart
//         domainPadding={20}
//         theme={VictoryTheme.material}
//         width={600}
//         height={300}
//       >
//         <VictoryAxis
//           dependentAxis
//           tickValues={[
//             0,
//             plannedInvestment,
//             expectedExpenses,
//             expenses || 0,
//             investments || 0,
//           ]}
//           tickFormat={(t) => `$${t}`}
//         />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: isNaN(investments) ? 0 : investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: isNaN(expenses) ? 0 : expenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`} // Show value labels on bars
//         />
//       </VictoryChart>
//       <div className="flex justify-between mt-4">
//         <div>
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>
//             Planned Investment Percentage:{" "}
//             {plannedInvestmentPercentage.toFixed(2)}
//           </p>
//           <p>
//             Expected Expenses Percentage:{" "}
//             {expectedExpensesPercentage.toFixed(2)}
//           </p>
//         </div>
//         <div>
//           {typeof plannedInvestment === "number" && (
//             <p>Planned Investment: ${plannedInvestment.toFixed(2)}</p>
//           )}
//           {investments !== null && (
//             <p>
//               Actual Investments: $
//               {isNaN(investments) ? 0 : investments.toFixed(2)}
//             </p>
//           )}
//           <p>Expected Expenses: ${expectedExpenses.toFixed(2)}</p>
//           {expenses !== null && (
//             <p>Actual Expenses: ${isNaN(expenses) ? 0 : expenses.toFixed(2)}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [expenses, setExpenses] = useState(0);
//   const [investments, setInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setExpenses(savedExpenses ? parseFloat(savedExpenses) : 0);
//     setInvestments(savedInvestments ? parseFloat(savedInvestments) : 0);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <p>Planned Investment: ${plannedInvestment.toFixed(2)}</p>
//         <p>Actual Investments: ${investments.toFixed(2)}</p>
//         <p>Expected Expenses: ${expectedExpenses.toFixed(2)}</p>
//         <p>Actual Expenses: ${expenses.toFixed(2)}</p>
//       </div>
//       <VictoryChart domainPadding={20}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//         />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: isNaN(investments) ? 0 : investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: isNaN(expenses) ? 0 : expenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [expenses, setExpenses] = useState(0);
//   const [investments, setInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setExpenses(savedExpenses ? parseFloat(savedExpenses) : 0);
//     setInvestments(savedInvestments ? parseFloat(savedInvestments) : 0);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <p>Planned Investment: ${plannedInvestment.toFixed(2)}</p>
//         <p>
//           Actual Investments: $
//           {isNaN(investments) ? "N/A" : investments.toFixed(2)}
//         </p>
//         <p>Expected Expenses: ${expectedExpenses.toFixed(2)}</p>
//         <p>Actual Expenses: ${isNaN(expenses) ? "N/A" : expenses.toFixed(2)}</p>
//       </div>
//       <VictoryChart domainPadding={20}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//         />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: isNaN(investments) ? 0 : investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: isNaN(expenses) ? 0 : expenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [expenses, setExpenses] = useState(0);
//   const [investments, setInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setExpenses(savedExpenses ? parseFloat(savedExpenses) : 0);
//     setInvestments(savedInvestments ? parseFloat(savedInvestments) : 0);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <p>Planned Investment: ${plannedInvestment.toFixed(2)}</p>
//         <p>
//           Actual Investments: $
//           {!isNaN(investments) ? investments.toFixed(2) : "N/A"}
//         </p>
//         <p>Expected Expenses: ${expectedExpenses.toFixed(2)}</p>
//         <p>
//           Actual Expenses: ${!isNaN(expenses) ? expenses.toFixed(2) : "N/A"}
//         </p>
//       </div>
//       <VictoryChart domainPadding={20}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//         />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: isNaN(investments) ? 0 : investments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: isNaN(expenses) ? 0 : expenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <p>Planned Investment: ${plannedInvestment.toFixed(2)}</p>
//         <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
//         <p>Expected Expenses: ${expectedExpenses.toFixed(2)}</p>
//         <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
//       </div>
//       <VictoryChart domainPadding={20}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//         />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: actualInvestments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: actualExpenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     console.log(
//       "savedPlannedInvestmentPercentage:",
//       savedPlannedInvestmentPercentage
//     );
//     console.log(
//       "savedExpectedExpensesPercentage:",
//       savedExpectedExpensesPercentage
//     );
//     console.log("savedMonthlyIncome:", savedMonthlyIncome);
//     console.log("savedExpenses:", savedExpenses);
//     console.log("savedInvestments:", savedInvestments);
//     savedInvestments.forEach((investment, index) => {
//       console.log(`Investment ${index + 1}:`, investment);
//     });
//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + expense.amount,
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + investment.amount,
//       0
//     );

//     console.log("expensesSum:", expensesSum);
//     console.log("investmentsSum:", investmentsSum);

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   console.log("plannedInvestment:", plannedInvestment);
//   console.log("expectedExpenses:", expectedExpenses);

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <p>Planned Investment: ${plannedInvestment.toFixed(2)}</p>
//         <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
//         <p>Expected Expenses: ${expectedExpenses.toFixed(2)}</p>
//         <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
//       </div>
//       <VictoryChart domainPadding={20}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//         />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: actualInvestments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: actualExpenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <div>
//         <p>Planned Investment: ${plannedInvestment.toFixed(2)}</p>
//         <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
//         <p>Expected Expenses: ${expectedExpenses.toFixed(2)}</p>
//         <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
//       </div>
//       <VictoryChart domainPadding={20}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//         />
//         <VictoryAxis dependentAxis />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: actualInvestments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: actualExpenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//           style={{
//             labels: { fontSize: 8 }, // Adjust font size here
//           }}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div>
//       <VictoryChart domainPadding={20}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//           style={{
//             tickLabels: { fontSize: 12 }, // Adjust font size here
//           }}
//         />
//         <VictoryAxis
//           dependentAxis
//           style={{
//             tickLabels: { fontSize: 12 }, // Adjust font size here
//           }}
//         />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: actualInvestments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: actualExpenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//           style={{
//             labels: { fontSize: 8 }, // Adjust font size here
//           }}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div style={{ width: "25%", float: "left" }}>
//       <VictoryChart domainPadding={20} width={300}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//           style={{
//             tickLabels: { fontSize: 8 }, // Adjust font size here
//           }}
//         />
//         <VictoryAxis
//           dependentAxis
//           style={{
//             tickLabels: { fontSize: 8 }, // Adjust font size here
//           }}
//         />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: actualInvestments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: actualExpenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//           style={{
//             labels: { fontSize: 8 }, // Adjust font size here
//           }}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div style={{ width: "25%", float: "left" }}>
//       <VictoryChart domainPadding={20} width={300}>
//         <VictoryAxis
//           tickValues={[
//             "Planned Investment",
//             "Actual Investments",
//             "Expected Expenses",
//             "Actual Expenses",
//           ]}
//           style={{
//             tickLabels: {
//               fontSize: 8, // Adjust font size here
//               angle: -90, // Rotate labels vertically
//               textAnchor: "end", // Align labels to the end
//             },
//           }}
//         />
//         <VictoryAxis
//           dependentAxis
//           style={{
//             tickLabels: { fontSize: 8 }, // Adjust font size here
//           }}
//         />
//         <VictoryBar
//           data={[
//             {
//               category: "Planned Investment",
//               value: plannedInvestment,
//               color: "#4CAF50",
//             },
//             {
//               category: "Actual Investments",
//               value: actualInvestments,
//               color: "#60A5FA",
//             },
//             {
//               category: "Expected Expenses",
//               value: expectedExpenses,
//               color: "#F44336",
//             },
//             {
//               category: "Actual Expenses",
//               value: actualExpenses,
//               color: "#FBBF24",
//             },
//           ]}
//           x="category"
//           y="value"
//           labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//           style={{
//             labels: { fontSize: 8 }, // Adjust font size here
//           }}
//         />
//       </VictoryChart>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ width: "100%", height: "50%" }}>
//         <VictoryChart
//           domainPadding={20}
//           width={300}
//           height={200}
//           padding={{ top: 30, bottom: 30, left: 50, right: 50 }}
//         >
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -90,
//                 textAnchor: "end",
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ width: "100%", height: "50%" }}>
//         {/* Add more charts here */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ width: "100%", height: "50%" }}>
//         <VictoryChart
//           domainPadding={20}
//           width={400}
//           height={250}
//           padding={{ top: 30, bottom: 30, left: 50, right: 50 }}
//         >
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -90,
//                 textAnchor: "end",
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ width: "100%", height: "50%" }}>
//         {/* Add more charts here */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ width: "100%", height: "50%" }}>
//         <VictoryChart
//           domainPadding={20}
//           width={300}
//           height={200}
//           padding={{ top: 30, bottom: 30, left: 50, right: 50 }}
//         >
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -90,
//                 textAnchor: "end",
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ width: "100%", height: "50%" }}>
//         {/* Add more charts here */}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} width={400} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>{/* Add more charts here */}</div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState, useEffect } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
// import { PieChart } from "react-minimal-pie-chart";

// const Dashboard = () => {
//   const [
//     dashboardPlannedInvestmentPercentage,
//     setDashboardPlannedInvestmentPercentage,
//   ] = useState(0);
//   const [
//     dashboardExpectedExpensesPercentage,
//     setDashboardExpectedExpensesPercentage,
//   ] = useState(0);
//   const [dashboardMonthlyIncome, setDashboardMonthlyIncome] = useState(0);
//   const [dashboardActualExpenses, setDashboardActualExpenses] = useState(0);
//   const [dashboardActualInvestments, setDashboardActualInvestments] =
//     useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setDashboardPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setDashboardExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setDashboardMonthlyIncome(
//       savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0
//     );
//     setDashboardActualExpenses(expensesSum);
//     setDashboardActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const dashboardPlannedInvestment =
//     (dashboardMonthlyIncome * dashboardPlannedInvestmentPercentage) / 100;
//   const dashboardExpectedExpenses =
//     (dashboardMonthlyIncome * dashboardExpectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} width={400} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: dashboardPlannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: dashboardActualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: dashboardExpectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: dashboardActualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>
//         <ExpensePlanning />
//       </div>
//     </div>
//   );
// };

// const ExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(() => {
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     return savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0;
//   });

//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(() => {
//       const savedPlannedInvestmentPercentage = localStorage.getItem(
//         "plannedInvestmentPercentage"
//       );
//       return savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0;
//     });

//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] = useState(
//     () => {
//       const savedExpectedExpensesPercentage = localStorage.getItem(
//         "expectedExpensesPercentage"
//       );
//       return savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0;
//     }
//   );

//   useEffect(() => {
//     localStorage.setItem("monthlyIncome", monthlyIncome);
//     localStorage.setItem(
//       "plannedInvestmentPercentage",
//       plannedInvestmentPercentage
//     );
//     localStorage.setItem(
//       "expectedExpensesPercentage",
//       expectedExpensesPercentage
//     );
//   }, [monthlyIncome, plannedInvestmentPercentage, expectedExpensesPercentage]);

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
//         />
//         <div className="flex justify-center mt-4">
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

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
// import { PieChart } from "react-minimal-pie-chart";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} width={400} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>
//         <PieChartFromExpensePlanning />
//       </div>
//     </div>
//   );
// };

// const PieChartFromExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(() => {
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     return savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0;
//   });

//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(() => {
//       const savedPlannedInvestmentPercentage = localStorage.getItem(
//         "plannedInvestmentPercentage"
//       );
//       return savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0;
//     });

//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] = useState(
//     () => {
//       const savedExpectedExpensesPercentage = localStorage.getItem(
//         "expectedExpensesPercentage"
//       );
//       return savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0;
//     }
//   );

//   useEffect(() => {
//     localStorage.setItem("monthlyIncome", monthlyIncome);
//     localStorage.setItem(
//       "plannedInvestmentPercentage",
//       plannedInvestmentPercentage
//     );
//     localStorage.setItem(
//       "expectedExpensesPercentage",
//       expectedExpensesPercentage
//     );
//   }, [monthlyIncome, plannedInvestmentPercentage, expectedExpensesPercentage]);

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
//     <div className="w-1/2">
//       <PieChart
//         data={[
//           { value: plannedInvestment, color: "#4caf50" },
//           { value: expectedExpenses, color: "#f44336" },
//           { value: remainingIncome, color: "#2196f3" },
//         ]}
//         radius={35}
//         segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//       />
//       <div className="flex justify-center mt-4">
//         {legendItems.map((item, index) => (
//           <div key={index} className="flex items-center mr-4">
//             <div
//               className="w-4 h-4 mr-2"
//               style={{ backgroundColor: item.color }}
//             />
//             <p className="text-sm">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
// import { PieChart } from "react-minimal-pie-chart";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} width={400} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>
//         <PieChartFromExpensePlanning />
//       </div>
//     </div>
//   );
// };

// const PieChartFromExpensePlanning = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(() => {
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     return savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0;
//   });

//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(() => {
//       const savedPlannedInvestmentPercentage = localStorage.getItem(
//         "plannedInvestmentPercentage"
//       );
//       return savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0;
//     });

//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] = useState(
//     () => {
//       const savedExpectedExpensesPercentage = localStorage.getItem(
//         "expectedExpensesPercentage"
//       );
//       return savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0;
//     }
//   );

//   useEffect(() => {
//     localStorage.setItem("monthlyIncome", monthlyIncome);
//     localStorage.setItem(
//       "plannedInvestmentPercentage",
//       plannedInvestmentPercentage
//     );
//     localStorage.setItem(
//       "expectedExpensesPercentage",
//       expectedExpensesPercentage
//     );
//   }, [monthlyIncome, plannedInvestmentPercentage, expectedExpensesPercentage]);

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
//     <div className="w-1/2">
//       <PieChart
//         data={[
//           { value: plannedInvestment, color: "#4caf50" },
//           { value: expectedExpenses, color: "#f44336" },
//           { value: remainingIncome, color: "#2196f3" },
//         ]}
//         radius={35}
//         segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//       />
//       <div className="flex justify-center mt-4">
//         {legendItems.map((item, index) => (
//           <div key={index} className="flex items-center mr-4">
//             <div
//               className="w-4 h-4 mr-2"
//               style={{ backgroundColor: item.color }}
//             />
//             <p className="text-sm">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage] = useState(0);
//   const [expectedExpensesPercentage] = useState(0);
//   const [monthlyIncome] = useState(0);
//   const [actualExpenses] = useState(0);
//   const [actualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} width={400} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>{/* Add more charts here */}</div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis } from "victory";
// import { PieChart } from "react-minimal-pie-chart";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} width={400} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>
//         <PieChart
//           data={[
//             { value: plannedInvestment, color: "#4caf50" },
//             { value: expectedExpenses, color: "#f44336" },
//             {
//               value: monthlyIncome - plannedInvestment - expectedExpenses,
//               color: "#2196f3",
//             },
//           ]}
//           radius={35}
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
// import { PieChart } from "react-minimal-pie-chart";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "row",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//           <VictoryLabel
//             text="Expense Overview"
//             x={225}
//             y={30}
//             textAnchor="middle"
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>
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
//               value: monthlyIncome - plannedInvestment - expectedExpenses,
//               color: "#2196f3",
//             },
//           ]}
//           radius={35}
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//           label={({ dataEntry }) =>
//             `${dataEntry.title}: ${dataEntry.value.toFixed(2)}`
//           }
//         />
//         <VictoryLabel
//           text="Expense Allocation"
//           x={225}
//           y={30}
//           textAnchor="middle"
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
// import { PieChart } from "react-minimal-pie-chart";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "row",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//           <VictoryLabel
//             text="Expense Overview"
//             x={225}
//             y={30}
//             textAnchor="middle"
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>
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
//               value: monthlyIncome - plannedInvestment - expectedExpenses,
//               color: "#2196f3",
//             },
//           ]}
//           radius={35}
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//           label={({ dataEntry }) =>
//             `${dataEntry.title}: ${dataEntry.value.toFixed(2)}`
//           }
//           labelPosition={65}
//           labelStyle={{
//             fontSize: "5px",
//             fontFamily: "sans-serif",
//             fill: "#121212",
//             fontWeight: "bold",
//           }}
//           style={{ legend: { fontSize: "10px" } }}
//         />
//         <VictoryLabel
//           text="Expense Allocation"
//           x={225}
//           y={30}
//           textAnchor="middle"
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useEffect, useState } from "react";
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
// import { PieChart } from "react-minimal-pie-chart";

// const Dashboard = () => {
//   const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
//     useState(0);
//   const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
//     useState(0);
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     // Fetch data from local storage
//     const savedPlannedInvestmentPercentage = localStorage.getItem(
//       "plannedInvestmentPercentage"
//     );
//     const savedExpectedExpensesPercentage = localStorage.getItem(
//       "expectedExpensesPercentage"
//     );
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
//     const savedInvestments =
//       JSON.parse(localStorage.getItem("investments")) || [];

//     // Calculate sum of expenses
//     const expensesSum = savedExpenses.reduce(
//       (total, expense) => total + parseFloat(expense.amount),
//       0
//     );
//     // Calculate sum of investments
//     const investmentsSum = savedInvestments.reduce(
//       (total, investment) => total + parseFloat(investment.amount),
//       0
//     );

//     // Update state variables
//     setPlannedInvestmentPercentage(
//       savedPlannedInvestmentPercentage
//         ? parseFloat(savedPlannedInvestmentPercentage)
//         : 0
//     );
//     setExpectedExpensesPercentage(
//       savedExpectedExpensesPercentage
//         ? parseFloat(savedExpectedExpensesPercentage)
//         : 0
//     );
//     setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
//     setActualExpenses(expensesSum);
//     setActualInvestments(investmentsSum);
//   }, []);

//   // Calculate values
//   const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
//   const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

//   return (
//     <div
//       style={{
//         width: "100%",
//         height: "100%",
//         display: "flex",
//         flexDirection: "row",
//       }}
//     >
//       <div style={{ flex: 1 }}>
//         <VictoryChart domainPadding={20} height={300}>
//           <VictoryAxis
//             tickValues={[
//               "Planned Investment",
//               "Actual Investments",
//               "Expected Expenses",
//               "Actual Expenses",
//             ]}
//             style={{
//               tickLabels: {
//                 fontSize: 8,
//                 angle: -45,
//                 textAnchor: "end",
//                 padding: 5,
//               },
//             }}
//           />
//           <VictoryAxis
//             dependentAxis
//             style={{
//               tickLabels: { fontSize: 8 },
//             }}
//           />
//           <VictoryBar
//             data={[
//               {
//                 category: "Planned Investment",
//                 value: plannedInvestment,
//                 color: "#4CAF50",
//               },
//               {
//                 category: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#60A5FA",
//               },
//               {
//                 category: "Expected Expenses",
//                 value: expectedExpenses,
//                 color: "#F44336",
//               },
//               {
//                 category: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#FBBF24",
//               },
//             ]}
//             x="category"
//             y="value"
//             labels={({ datum }) => `$${datum.value.toFixed(2)}`}
//             style={{
//               labels: { fontSize: 8 },
//             }}
//           />
//           <VictoryLabel
//             text="Expense Overview"
//             x={225}
//             y={30}
//             textAnchor="middle"
//           />
//         </VictoryChart>
//       </div>
//       <div style={{ flex: 1 }}>
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
//               value: monthlyIncome - plannedInvestment - expectedExpenses,
//               color: "#2196f3",
//             },
//           ]}
//           radius={35}
//           segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//           label={() => ""}
//           style={{ legend: { fontSize: "10px" } }}
//         />
//         <VictoryLabel
//           text="Expense Allocation"
//           x={225}
//           y={30}
//           textAnchor="middle"
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from "victory";
import { PieChart } from "react-minimal-pie-chart";

const Dashboard = () => {
  const [plannedInvestmentPercentage, setPlannedInvestmentPercentage] =
    useState(0);
  const [expectedExpensesPercentage, setExpectedExpensesPercentage] =
    useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [actualExpenses, setActualExpenses] = useState(0);
  const [actualInvestments, setActualInvestments] = useState(0);

  useEffect(() => {
    // Fetch data from local storage
    const savedPlannedInvestmentPercentage = localStorage.getItem(
      "plannedInvestmentPercentage"
    );
    const savedExpectedExpensesPercentage = localStorage.getItem(
      "expectedExpensesPercentage"
    );
    const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const savedInvestments =
      JSON.parse(localStorage.getItem("investments")) || [];

    // Calculate sum of expenses
    const expensesSum = savedExpenses.reduce(
      (total, expense) => total + parseFloat(expense.amount),
      0
    );
    // Calculate sum of investments
    const investmentsSum = savedInvestments.reduce(
      (total, investment) => total + parseFloat(investment.amount),
      0
    );

    // Update state variables
    setPlannedInvestmentPercentage(
      savedPlannedInvestmentPercentage
        ? parseFloat(savedPlannedInvestmentPercentage)
        : 0
    );
    setExpectedExpensesPercentage(
      savedExpectedExpensesPercentage
        ? parseFloat(savedExpectedExpensesPercentage)
        : 0
    );
    setMonthlyIncome(savedMonthlyIncome ? parseFloat(savedMonthlyIncome) : 0);
    setActualExpenses(expensesSum);
    setActualInvestments(investmentsSum);
  }, []);

  // Calculate values
  const plannedInvestment = (monthlyIncome * plannedInvestmentPercentage) / 100;
  const expectedExpenses = (monthlyIncome * expectedExpensesPercentage) / 100;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ flex: 1 }}>
        <VictoryChart domainPadding={20} height={300}>
          <VictoryAxis
            tickValues={[
              "Planned Investment",
              "Actual Investments",
              "Expected Expenses",
              "Actual Expenses",
            ]}
            style={{
              tickLabels: {
                fontSize: 8,
                angle: -45,
                textAnchor: "end",
                padding: 5,
              },
            }}
          />
          <VictoryAxis
            dependentAxis
            style={{
              tickLabels: { fontSize: 8 },
            }}
          />
          <VictoryBar
            data={[
              {
                category: "Planned Investment",
                value: plannedInvestment,
                color: "#4CAF50",
              },
              {
                category: "Actual Investments",
                value: actualInvestments,
                color: "#60A5FA",
              },
              {
                category: "Expected Expenses",
                value: expectedExpenses,
                color: "#F44336",
              },
              {
                category: "Actual Expenses",
                value: actualExpenses,
                color: "#FBBF24",
              },
            ]}
            x="category"
            y="value"
            labels={({ datum }) => `$${datum.value.toFixed(2)}`}
            style={{
              labels: { fontSize: 8 },
            }}
          />
          <VictoryLabel
            text="Expense Overview"
            x={225}
            y={30}
            textAnchor="middle"
          />
        </VictoryChart>
      </div>
      <div style={{ flex: 1, position: "relative" }}>
        <PieChart
          data={[
            {
              title: "Planned Investment",
              value: plannedInvestment,
              color: "#4caf50",
            },
            {
              title: "Expected Expenses",
              value: expectedExpenses,
              color: "#f44336",
            },
            {
              title: "Remaining Income",
              value: monthlyIncome - plannedInvestment - expectedExpenses,
              color: "#2196f3",
            },
          ]}
          radius={35}
          segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
          label={() => ""}
          style={{ legend: { fontSize: "10px" } }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#4caf50",
                  marginRight: 5,
                }}
              ></div>
              <span style={{ fontSize: 12, marginRight: 10 }}>
                Planned Investment
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#f44336",
                  marginRight: 5,
                }}
              ></div>
              <span style={{ fontSize: 12, marginRight: 10 }}>
                Expected Expenses
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#2196f3",
                  marginRight: 5,
                }}
              ></div>
              <span style={{ fontSize: 12, marginRight: 10 }}>
                Remaining Income
              </span>
            </div>
          </div>
        </div>
        <VictoryLabel
          text="Expense Allocation"
          x={225}
          y={30}
          textAnchor="middle"
        />
      </div>
    </div>
  );
};

export default Dashboard;
