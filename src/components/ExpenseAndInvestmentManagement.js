// import React, { useState, useEffect } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpenseAndInvestmentManagement = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedMonthlyIncome) {
//       setMonthlyIncome(parseFloat(savedMonthlyIncome));
//     }

//     if (savedExpenses) {
//       const expenses = JSON.parse(savedExpenses);
//       const totalExpenses = expenses.reduce(
//         (acc, expense) => acc + expense.amount,
//         0
//       );
//       setActualExpenses(totalExpenses);
//     }

//     if (savedInvestments) {
//       const investments = JSON.parse(savedInvestments);
//       const totalInvestments = investments.reduce(
//         (acc, investment) => acc + investment.amount,
//         0
//       );
//       setActualInvestments(totalInvestments);
//     }
//   }, []);

//   const totalRemainingIncome =
//     monthlyIncome - actualExpenses - actualInvestments;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">
//         Expense and Investment Management
//       </h2>
//       <div className="flex">
//         {/* Display pie chart */}
//         <div className="w-1/2">
//           <PieChart
//             data={[
//               {
//                 title: "Monthly Income",
//                 value: monthlyIncome,
//                 color: "#4caf50",
//               },
//               {
//                 title: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#f44336",
//               },
//               {
//                 title: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#2196f3",
//               },
//               {
//                 title: "Remaining Income",
//                 value: totalRemainingIncome,
//                 color: "#9c27b0",
//               },
//             ]}
//             label={({ dataEntry }) =>
//               `${dataEntry.title}: $${dataEntry.value.toFixed(2)}`
//             }
//             radius={PieChart.defaultProps.radius - 6}
//             segmentsShift={(index) => (index === 0 ? 2 : 0.5)}
//             lineWidth={40}
//           />
//         </div>
//         {/* Display summary */}
//         <div className="w-1/2 ml-4">
//           <h3 className="text-lg font-semibold mb-2">Summary</h3>
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
//           <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
//           <p>Remaining Income: ${totalRemainingIncome.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseAndInvestmentManagement;
// import React, { useState, useEffect } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpenseAndInvestmentManagement = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedMonthlyIncome) {
//       setMonthlyIncome(parseFloat(savedMonthlyIncome));
//     }

//     if (savedExpenses) {
//       const expenses = JSON.parse(savedExpenses);
//       const totalExpenses = expenses.reduce(
//         (acc, expense) => acc + expense.amount,
//         0
//       );
//       setActualExpenses(totalExpenses);
//     }

//     if (savedInvestments) {
//       const investments = JSON.parse(savedInvestments);
//       const totalInvestments = investments.reduce(
//         (acc, investment) => acc + investment.amount,
//         0
//       );
//       setActualInvestments(totalInvestments);
//     }
//   }, []);

//   const totalRemainingIncome =
//     monthlyIncome - actualExpenses - actualInvestments;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">
//         Expense and Investment Management
//       </h2>
//       <div className="flex">
//         {/* Display pie chart */}
//         <div className="w-1/2">
//           <PieChart
//             data={[
//               {
//                 title: "Monthly Income",
//                 value: monthlyIncome,
//                 color: "#4caf50",
//               },
//               {
//                 title: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#f44336",
//               },
//               {
//                 title: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#2196f3",
//               },
//               {
//                 title: "Remaining Income",
//                 value: totalRemainingIncome,
//                 color: "#9c27b0",
//               },
//             ]}
//             label={({ dataEntry }) =>
//               `${dataEntry.title}: $${dataEntry.value.toFixed(2)}`
//             }
//             lineWidth={40}
//             animate={{
//               radius: 50, // Adjust the radius here
//             }}
//           />
//         </div>
//         {/* Display summary */}
//         <div className="w-1/2 ml-4">
//           <h3 className="text-lg font-semibold mb-2">Summary</h3>
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
//           <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
//           <p>Remaining Income: ${totalRemainingIncome.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseAndInvestmentManagement;

// import React, { useState, useEffect } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpenseAndInvestmentManagement = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedMonthlyIncome) {
//       setMonthlyIncome(parseFloat(savedMonthlyIncome));
//     }

//     if (savedExpenses) {
//       const expenses = JSON.parse(savedExpenses);
//       const totalExpenses = expenses.reduce(
//         (acc, expense) => acc + parseFloat(expense.amount),
//         0
//       );
//       setActualExpenses(totalExpenses);
//     }

//     if (savedInvestments) {
//       const investments = JSON.parse(savedInvestments);
//       const totalInvestments = investments.reduce(
//         (acc, investment) => acc + parseFloat(investment.amount),
//         0
//       );
//       setActualInvestments(totalInvestments);
//     }
//   }, []);

//   const totalRemainingIncome =
//     monthlyIncome - actualExpenses - actualInvestments;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">
//         Expense and Investment Management
//       </h2>
//       <div className="flex">
//         {/* Display pie chart */}
//         <div className="w-1/2">
//           <PieChart
//             data={[
//               {
//                 title: "Monthly Income",
//                 value: monthlyIncome,
//                 color: "#4caf50",
//               },
//               {
//                 title: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#f44336",
//               },
//               {
//                 title: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#2196f3",
//               },
//               {
//                 title: "Remaining Income",
//                 value: totalRemainingIncome,
//                 color: "#9c27b0",
//               },
//             ]}
//             label={({ dataEntry }) =>
//               `${dataEntry.title}: $${dataEntry.value.toFixed(2)}`
//             }
//             lineWidth={40}
//             animate={{
//               radius: 50, // Adjust the radius here
//             }}
//           />
//         </div>
//         {/* Display summary */}
//         <div className="w-1/2 ml-4">
//           <h3 className="text-lg font-semibold mb-2">Summary</h3>
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
//           <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
//           <p>Remaining Income: ${totalRemainingIncome.toFixed(2)}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseAndInvestmentManagement;
// import React, { useState, useEffect } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpenseAndInvestmentManagement = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedMonthlyIncome) {
//       setMonthlyIncome(parseFloat(savedMonthlyIncome));
//     }

//     if (savedExpenses) {
//       const expenses = JSON.parse(savedExpenses);
//       const totalExpenses = expenses.reduce(
//         (acc, expense) => acc + parseFloat(expense.amount),
//         0
//       );
//       setActualExpenses(totalExpenses);
//     }

//     if (savedInvestments) {
//       const investments = JSON.parse(savedInvestments);
//       const totalInvestments = investments.reduce(
//         (acc, investment) => acc + parseFloat(investment.amount),
//         0
//       );
//       setActualInvestments(totalInvestments);
//     }
//   }, []);

//   const totalRemainingIncome =
//     monthlyIncome - actualExpenses - actualInvestments;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">
//         Expense and Investment Management
//       </h2>
//       <div className="flex">
//         {/* Display summary */}
//         <div className="w-1/2">
//           <h3 className="text-lg font-semibold mb-2">Summary</h3>
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
//           <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
//           <p>Remaining Income: ${totalRemainingIncome.toFixed(2)}</p>
//         </div>
//         {/* Display pie chart */}
//         <div className="w-1/2 ml-4">
//           <PieChart
//             data={[
//               {
//                 title: "Monthly Income",
//                 value: monthlyIncome,
//                 color: "#4caf50",
//               },
//               {
//                 title: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#f44336",
//               },
//               {
//                 title: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#2196f3",
//               },
//               {
//                 title: "Remaining Income",
//                 value: totalRemainingIncome,
//                 color: "#9c27b0",
//               },
//             ]}
//             label={() => null} // Remove the labels
//             lineWidth={40}
//             animate={{
//               radius: 50, // Adjust the radius here
//             }}
//             style={{ fontFamily: "sans-serif" }}
//           />
//           {/* Legends */}
//           <div className="flex flex-wrap mt-4">
//             <div className="flex items-center mr-4">
//               <div className="w-4 h-4 mr-2 rounded-full bg-green-500"></div>
//               <p className="text-sm">Monthly Income</p>
//             </div>
//             <div className="flex items-center mr-4">
//               <div className="w-4 h-4 mr-2 rounded-full bg-red-500"></div>
//               <p className="text-sm">Actual Expenses</p>
//             </div>
//             <div className="flex items-center mr-4">
//               <div className="w-4 h-4 mr-2 rounded-full bg-blue-500"></div>
//               <p className="text-sm">Actual Investments</p>
//             </div>
//             <div className="flex items-center mr-4">
//               <div className="w-4 h-4 mr-2 rounded-full bg-purple-500"></div>
//               <p className="text-sm">Remaining Income</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseAndInvestmentManagement;

// import React, { useState, useEffect } from "react";
// import { PieChart } from "react-minimal-pie-chart";

// const ExpenseAndInvestmentManagement = () => {
//   const [monthlyIncome, setMonthlyIncome] = useState(0);
//   const [actualExpenses, setActualExpenses] = useState(0);
//   const [actualInvestments, setActualInvestments] = useState(0);

//   useEffect(() => {
//     const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
//     const savedExpenses = localStorage.getItem("expenses");
//     const savedInvestments = localStorage.getItem("investments");

//     if (savedMonthlyIncome) {
//       setMonthlyIncome(parseFloat(savedMonthlyIncome));
//     }

//     if (savedExpenses) {
//       const expenses = JSON.parse(savedExpenses);
//       const totalExpenses = expenses.reduce(
//         (acc, expense) => acc + parseFloat(expense.amount),
//         0
//       );
//       setActualExpenses(totalExpenses);
//     }

//     if (savedInvestments) {
//       const investments = JSON.parse(savedInvestments);
//       const totalInvestments = investments.reduce(
//         (acc, investment) => acc + parseFloat(investment.amount),
//         0
//       );
//       setActualInvestments(totalInvestments);
//     }
//   }, []);

//   const totalRemainingIncome =
//     monthlyIncome - actualExpenses - actualInvestments;

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">
//         Expense and Investment Management
//       </h2>
//       <div className="flex">
//         {/* Display summary */}
//         <div className="w-1/2">
//           <h3 className="text-lg font-semibold mb-2">Summary</h3>
//           <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
//           <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
//           <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
//           <p>Remaining Income: ${totalRemainingIncome.toFixed(2)}</p>
//         </div>
//         {/* Display pie chart */}
//         <div className="w-1/2 ml-4">
//           <PieChart
//             data={[
//               {
//                 title: "Monthly Income",
//                 value: monthlyIncome,
//                 color: "#4caf50",
//               },
//               {
//                 title: "Actual Expenses",
//                 value: actualExpenses,
//                 color: "#f44336",
//               },
//               {
//                 title: "Actual Investments",
//                 value: actualInvestments,
//                 color: "#2196f3",
//               },
//               {
//                 title: "Remaining Income",
//                 value: totalRemainingIncome,
//                 color: "#9c27b0",
//               },
//             ]}
//             label={() => null} // Remove the labels
//             lineWidth={100} // Adjust the lineWidth
//             animate={{
//               radius: 50, // Adjust the radius here
//             }}
//             style={{ fontFamily: "sans-serif" }}
//           />
//           {/* Legends */}
//           <div className="flex flex-wrap mt-4">
//             <div className="flex items-center mr-4">
//               <div className="w-4 h-4 mr-2 rounded-full bg-green-500"></div>
//               <p className="text-sm">Monthly Income</p>
//             </div>
//             <div className="flex items-center mr-4">
//               <div className="w-4 h-4 mr-2 rounded-full bg-red-500"></div>
//               <p className="text-sm">Actual Expenses</p>
//             </div>
//             <div className="flex items-center mr-4">
//               <div className="w-4 h-4 mr-2 rounded-full bg-blue-500"></div>
//               <p className="text-sm">Actual Investments</p>
//             </div>
//             <div className="flex items-center mr-4">
//               <div className="w-4 h-4 mr-2 rounded-full bg-purple-500"></div>
//               <p className="text-sm">Remaining Income</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpenseAndInvestmentManagement;

import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";

const ExpenseAndInvestmentManagement = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [actualExpenses, setActualExpenses] = useState(0);
  const [actualInvestments, setActualInvestments] = useState(0);

  useEffect(() => {
    const savedMonthlyIncome = localStorage.getItem("monthlyIncome");
    const savedExpenses = localStorage.getItem("expenses");
    const savedInvestments = localStorage.getItem("investments");

    if (savedMonthlyIncome) {
      setMonthlyIncome(parseFloat(savedMonthlyIncome));
    }

    if (savedExpenses) {
      const expenses = JSON.parse(savedExpenses);
      const totalExpenses = expenses.reduce(
        (acc, expense) => acc + parseFloat(expense.amount),
        0
      );
      setActualExpenses(totalExpenses);
    }

    if (savedInvestments) {
      const investments = JSON.parse(savedInvestments);
      const totalInvestments = investments.reduce(
        (acc, investment) => acc + parseFloat(investment.amount),
        0
      );
      setActualInvestments(totalInvestments);
    }
  }, []);

  const totalRemainingIncome =
    monthlyIncome - actualExpenses - actualInvestments;

  const legendItems = [
    {
      title: "Actual Expenses",
      color: "#f44336",
      value: actualExpenses.toFixed(2),
    },
    {
      title: "Actual Investments",
      color: "#2196f3",
      value: actualInvestments.toFixed(2),
    },
    {
      title: "Remaining Income",
      color: "#9c27b0",
      value: totalRemainingIncome.toFixed(2),
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Expense and Investment Management
      </h2>
      <div className="flex">
        {/* Display summary */}
        <div className="w-1/2">
          <h3 className="text-lg font-semibold mb-2">Summary</h3>
          <p>Monthly Income: ${monthlyIncome.toFixed(2)}</p>
          <p>Actual Expenses: ${actualExpenses.toFixed(2)}</p>
          <p>Actual Investments: ${actualInvestments.toFixed(2)}</p>
          <p>Remaining Income: ${totalRemainingIncome.toFixed(2)}</p>
        </div>
        {/* Display pie chart */}
        <div className="w-1/2 ml-4">
          <PieChart
            data={[
              {
                title: "Actual Expenses",
                value: actualExpenses,
                color: "#f44336",
              },
              {
                title: "Actual Investments",
                value: actualInvestments,
                color: "#2196f3",
              },
              {
                title: "Remaining Income",
                value: totalRemainingIncome,
                color: "#9c27b0",
              },
            ]}
            label={() => null} // Remove the labels
            lineWidth={100} // Adjust the lineWidth
            animate={{
              radius: 50, // Adjust the radius here
            }}
            style={{ fontFamily: "sans-serif" }}
          />
          {/* Legends */}
          <div className="flex flex-wrap mt-4">
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
    </div>
  );
};

export default ExpenseAndInvestmentManagement;
