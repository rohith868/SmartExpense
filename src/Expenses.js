// import React from "react";

// const Expenses = () => {
//   return (
//     <div>
//       <h1>Expenses Component</h1>
//       {/* Add your Expenses content here */}
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import { MdSearch } from "react-icons/md";

// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   const data = [
//     { id: 1, date: new Date(), amount: 100, category: "Needs", type: "Manual" },
//     { id: 2, date: new Date(), amount: 200, category: "Wants", type: "Manual" },
//     {
//       id: 3,
//       date: new Date(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//     // Add more data as needed
//   ];

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Clear the form after adding the expense
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={handleAddExpense}
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       <table {...getTableProps()} className="w-full">
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="p-2 border-b border-gray-300 text-left"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-100" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="p-2 border-b border-gray-300"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//       <div className="mt-4">
//         <label className="mr-2">Date:</label>
//         <DatePicker
//           selected={newExpense.date}
//           onChange={handleDateChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Amount:</label>
//         <input
//           type="number"
//           name="amount"
//           value={newExpense.amount}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Category:</label>
//         <input
//           type="text"
//           name="category"
//           value={newExpense.category}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Type:</label>
//         <input
//           type="text"
//           name="type"
//           value={newExpense.type}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useState } from "react";

// const Expenses = () => {
//   // Sample data (replace with your actual data)
//   const sampleData = [
//     {
//       id: 1,
//       date: "2022-03-15",
//       amount: 100,
//       category: "Needs",
//       type: "Manual",
//     },
//     {
//       id: 2,
//       date: "2022-03-16",
//       amount: 200,
//       category: "Wants",
//       type: "Manual",
//     },
//     {
//       id: 3,
//       date: "2022-03-17",
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: "2022-03-18",
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//     // Add more sample data as needed
//   ];

//   // State for search query and pagination
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // Number of items per page

//   // Filtered and paginated data
//   const filteredData = sampleData.filter((item) =>
//     item.category.toLowerCase().includes(searchQuery.toLowerCase())
//   );
//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Handle pagination
//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   // Handle search input change
//   const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//     setCurrentPage(1); // Reset to first page when search query changes
//   };

//   return (
//     <div>
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search by category..."
//           className="border border-gray-300 px-3 py-2 rounded-md w-full"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//         />
//       </div>
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Transaction time
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Amount
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Category
//             </th>
//             <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Type
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {paginatedData.map((item) => (
//             <tr key={item.id}>
//               <td className="px-6 py-4 whitespace-nowrap">{item.date}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{item.amount}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
//               <td className="px-6 py-4 whitespace-nowrap">{item.type}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {/* Pagination */}
//       <div className="mt-4">
//         <nav className="flex justify-between">
//           <div>
//             <button
//               onClick={() => handlePageChange(currentPage - 1)}
//               disabled={currentPage === 1}
//               className="px-4 py-2 mr-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => handlePageChange(currentPage + 1)}
//               disabled={paginatedData.length < itemsPerPage}
//               className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//             >
//               Next
//             </button>
//           </div>
//           <div>
//             <span className="text-gray-500 text-sm">
//               Page {currentPage} of{" "}
//               {Math.ceil(filteredData.length / itemsPerPage)}
//             </span>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// // import { MdSearch } from "react-icons/md";
// import ReactTable from "react-table-6";
// import "react-table-6/react-table.css";
// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   const data = [
//     { id: 1, date: new Date(), amount: 100, category: "Needs", type: "Manual" },
//     { id: 2, date: new Date(), amount: 200, category: "Wants", type: "Manual" },
//     {
//       id: 3,
//       date: new Date(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//     // Add more data as needed
//   ];

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Clear the form after adding the expense
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={handleAddExpense}
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       <table
//         {...getTableProps()}
//         className="w-full bg-white rounded-lg overflow-hidden"
//       >
//         <thead className="bg-gray-100 border-b border-gray-200">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-50" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//       <div className="mt-4 flex">
//         <label className="mr-2">Date:</label>
//         <DatePicker
//           selected={newExpense.date}
//           onChange={handleDateChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Amount:</label>
//         <input
//           type="number"
//           name="amount"
//           value={newExpense.amount}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Category:</label>
//         <input
//           type="text"
//           name="category"
//           value={newExpense.category}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Type:</label>
//         <input
//           type="text"
//           name="type"
//           value={newExpense.type}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   const data = [
//     {
//       id: 1,
//       date: new Date().toString(),
//       amount: 100,
//       category: "Needs",
//       type: "Manual",
//     },
//     {
//       id: 2,
//       date: new Date().toString(),
//       amount: 200,
//       category: "Wants",
//       type: "Manual",
//     },
//     {
//       id: 3,
//       date: new Date().toString(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date().toString(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//     // Add more data as needed
//   ];

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   // const handleInputChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setNewExpense((prevState) => ({
//   //     ...prevState,
//   //     [name]: value,
//   //   }));
//   // };

//   // const handleDateChange = (date) => {
//   //   setNewExpense((prevState) => ({
//   //     ...prevState,
//   //     date,
//   //   }));
//   // };

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Clear the form after adding the expense
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={handleAddExpense}
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       <table
//         {...getTableProps()}
//         className="w-full bg-white rounded-lg overflow-hidden"
//       >
//         <thead className="bg-gray-100 border-b border-gray-200">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-50" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//       <div className="mt-4 flex">
//         <label className="mr-2">Date:</label>
//         <DatePicker
//           selected={newExpense.date}
//           onChange={handleDateChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Amount:</label>
//         <input
//           type="number"
//           name="amount"
//           value={newExpense.amount}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Category:</label>
//         <input
//           type="text"
//           name="category"
//           value={newExpense.category}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Type:</label>
//         <input
//           type="text"
//           name="type"
//           value={newExpense.type}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       date: new Date().toString(),
//       amount: 100,
//       category: "Needs",
//       type: "Manual",
//     },
//     {
//       id: 2,
//       date: new Date().toString(),
//       amount: 200,
//       category: "Wants",
//       type: "Manual",
//     },
//     {
//       id: 3,
//       date: new Date().toString(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date().toString(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//   ]);

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Clear the form after adding the expense
//     setData([
//       ...data,
//       {
//         ...newExpense,
//         date: new Date(newExpense.date), // Convert date to Date object
//       },
//     ]);
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={handleAddExpense}
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       <table
//         {...getTableProps()}
//         className="w-full bg-white rounded-lg overflow-hidden"
//       >
//         <thead className="bg-gray-100 border-b border-gray-200">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-50" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//       <div className="mt-4 flex">
//         <label className="mr-2">Date:</label>
//         <DatePicker
//           selected={newExpense.date}
//           onChange={handleDateChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Amount:</label>
//         <input
//           type="number"
//           name="amount"
//           value={newExpense.amount}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Category:</label>
//         <input
//           type="text"
//           name="category"
//           value={newExpense.category}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//         <label className="ml-4 mr-2">Type:</label>
//         <input
//           type="text"
//           name="type"
//           value={newExpense.type}
//           onChange={handleInputChange}
//           className="p-2 border border-gray-300"
//         />
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       date: new Date().toString(),
//       amount: 100,
//       category: "Needs",
//       type: "Manual",
//     },
//     {
//       id: 2,
//       date: new Date().toString(),
//       amount: 200,
//       category: "Wants",
//       type: "Manual",
//     },
//     {
//       id: 3,
//       date: new Date().toString(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date().toString(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//   ]);

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const [showAddExpense, setShowAddExpense] = useState(false);

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Clear the form after adding the expense
//     setData([
//       ...data,
//       {
//         ...newExpense,
//         date: new Date(newExpense.date), // Convert date to Date object
//       },
//     ]);
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//     setShowAddExpense(false); // Close the Add Expense UI
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={() => setShowAddExpense(true)} // Show Add Expense UI on button click
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       {showAddExpense && ( // Conditionally render Add Expense UI
//         <div>
//           <div className="mt-4 flex">
//             <label className="mr-2">Date:</label>
//             <DatePicker
//               selected={newExpense.date}
//               onChange={handleDateChange}
//               className="p-2 border border-gray-300"
//             />
//             <label className="ml-4 mr-2">Amount:</label>
//             <input
//               type="number"
//               name="amount"
//               value={newExpense.amount}
//               onChange={handleInputChange}
//               className="p-2 border border-gray-300"
//             />
//           </div>
//           <div className="mt-4 flex">
//             <label className="mr-2">Category:</label>
//             <input
//               type="text"
//               name="category"
//               value={newExpense.category}
//               onChange={handleInputChange}
//               className="p-2 border border-gray-300"
//             />
//             <label className="ml-4 mr-2">Type:</label>
//             <input
//               type="text"
//               name="type"
//               value={newExpense.type}
//               onChange={handleInputChange}
//               className="p-2 border border-gray-300"
//             />
//             <button
//               onClick={handleAddExpense}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       )}
//       <table
//         {...getTableProps()}
//         className="w-full bg-white rounded-lg overflow-hidden mt-4"
//       >
//         <thead className="bg-gray-100 border-b border-gray-200">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-50" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       date: new Date().toISOString(),
//       amount: 100,
//       category: "Needs",
//       type: "Manual",
//     },
//     {
//       id: 2,
//       date: new Date().toISOString(),
//       amount: 200,
//       category: "Wants",
//       type: "Manual",
//     },
//     {
//       id: 3,
//       date: new Date().toISOString(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date().toISOString(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//   ]);

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const [showAddExpense, setShowAddExpense] = useState(false);

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Clear the form after adding the expense
//     setData([
//       ...data,
//       {
//         ...newExpense,
//         date: newExpense.date.toISOString(), // Convert date to ISO string
//       },
//     ]);
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//     setShowAddExpense(false); // Close the Add Expense UI
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={() => setShowAddExpense(true)} // Show Add Expense UI on button click
//           className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       {showAddExpense && ( // Conditionally render Add Expense UI
//         <div>
//           <div className="mt-4 flex">
//             <label className="mr-2">Date:</label>
//             <DatePicker
//               selected={newExpense.date}
//               onChange={handleDateChange}
//               className="p-2 border border-gray-300"
//             />
//             <label className="ml-4 mr-2">Amount:</label>
//             <input
//               type="number"
//               name="amount"
//               value={newExpense.amount}
//               onChange={handleInputChange}
//               className="p-2 border border-gray-300"
//             />
//           </div>
//           <div className="mt-4 flex">
//             <label className="mr-2">Category:</label>
//             <input
//               type="text"
//               name="category"
//               value={newExpense.category}
//               onChange={handleInputChange}
//               className="p-2 border border-gray-300"
//             />
//             <label className="ml-4 mr-2">Type:</label>
//             <input
//               type="text"
//               name="type"
//               value={newExpense.type}
//               onChange={handleInputChange}
//               className="p-2 border border-gray-300"
//             />
//             <button
//               onClick={handleAddExpense}
//               className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       )}
//       <table
//         {...getTableProps()}
//         className="w-full bg-white rounded-lg overflow-hidden mt-4"
//       >
//         <thead className="bg-gray-100 border-b border-gray-200">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-50" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-gray-200 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       date: new Date().toISOString(),
//       amount: 100,
//       category: "Needs",
//       type: "Manual",
//     },
//     {
//       id: 2,
//       date: new Date().toISOString(),
//       amount: 200,
//       category: "Wants",
//       type: "Manual",
//     },
//     {
//       id: 3,
//       date: new Date().toISOString(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date().toISOString(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//   ]);

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const [showAddExpense, setShowAddExpense] = useState(false);

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Clear the form after adding the expense
//     setData([
//       ...data,
//       {
//         ...newExpense,
//         date: newExpense.date.toISOString(), // Convert date to ISO string
//       },
//     ]);
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//     setShowAddExpense(false); // Close the Add Expense UI
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-blue-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={() => setShowAddExpense(true)} // Show Add Expense UI on button click
//           className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       {showAddExpense && ( // Conditionally render Add Expense UI
//         <div>
//           <div className="mt-4 flex">
//             <label className="mr-2 text-blue-600">Date:</label>
//             <DatePicker
//               selected={newExpense.date}
//               onChange={handleDateChange}
//               className="p-2 border border-blue-400"
//             />
//             <label className="ml-4 mr-2 text-blue-600">Amount:</label>
//             <input
//               type="number"
//               name="amount"
//               value={newExpense.amount}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//           </div>
//           <div className="mt-4 flex">
//             <label className="mr-2 text-blue-600">Category:</label>
//             <input
//               type="text"
//               name="category"
//               value={newExpense.category}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//             <label className="ml-4 mr-2 text-blue-600">Type:</label>
//             <input
//               type="text"
//               name="type"
//               value={newExpense.type}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//             <button
//               onClick={handleAddExpense}
//               className="bg-purple-500 text-white px-4 py-2 rounded-md ml-4"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       )}
//       <table
//         {...getTableProps()}
//         className="w-full bg-white rounded-lg overflow-hidden mt-4 border border-blue-400"
//       >
//         <thead className="bg-blue-100 border-b border-gray-200">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-400"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-50" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap border border-blue-400"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-blue-200 rounded-md border border-blue-400"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-blue-200 rounded-md border border-blue-400"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       date: new Date().toISOString(),
//       amount: 100,
//       category: "Needs",
//       type: "Manual",
//     },
//     {
//       id: 2,
//       date: new Date().toISOString(),
//       amount: 200,
//       category: "Wants",
//       type: "Manual",
//     },
//     {
//       id: 3,
//       date: new Date().toISOString(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date().toISOString(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//   ]);

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const [showAddExpense, setShowAddExpense] = useState(false);

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Clear the form after adding the expense
//     setData([
//       ...data,
//       {
//         ...newExpense,
// //         date: newExpense.date.toISOString(), // Convert date to ISO string
// //       },
// //     ]);
// //     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
// //     setShowAddExpense(false); // Close the Add Expense UI
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
// //       <div className="mb-4 flex items-center">
// //         <input
// //           type="text"
// //           value={globalFilter || ""}
// //           onChange={(e) => setGlobalFilter(e.target.value)}
// //           placeholder="Search expenses..."
// //           className="p-2 border border-blue-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
// //         />
// //         <button
// //           onClick={() => setShowAddExpense(true)} // Show Add Expense UI on button click
// //           className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
// //         >
// //           Add Expense
// //         </button>
// //       </div>
// //       {showAddExpense && ( // Conditionally render Add Expense UI
// //         <div>
// //           <div className="mt-4 flex">
// //             <label className="mr-2 text-blue-600">Date:</label>
// //             <DatePicker
// //               selected={newExpense.date}
// //               onChange={handleDateChange}
// //               className="p-2 border border-blue-400"
// //             />
// //             <label className="ml-4 mr-2 text-blue-600">Amount:</label>
// //             <input
// //               type="number"
// //               name="amount"
// //               value={newExpense.amount}
// //               onChange={handleInputChange}
// //               className="p-2 border border-blue-400"
// //             />
// //           </div>
// //           <div className="mt-4 flex">
// //             <label className="mr-2 text-blue-600">Category:</label>
// //             <input
// //               type="text"
// //               name="category"
// //               value={newExpense.category}
// //               onChange={handleInputChange}
// //               className="p-2 border border-blue-400"
// //             />
// //             <label className="ml-4 mr-2 text-blue-600">Type:</label>
// //             <input
// //               type="text"
// //               name="type"
// //               value={newExpense.type}
// //               onChange={handleInputChange}
// //               className="p-2 border border-blue-400"
// //             />
// //             <button
// //               onClick={handleAddExpense}
// //               className="bg-purple-500 text-white px-4 py-2 rounded-md ml-4"
// //             >
// //               Add
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //       <table
// //         {...getTableProps()}
// //         className="w-full bg-white rounded-lg overflow-hidden mt-4 border border-blue-400"
// //       >
// //         <thead className="bg-blue-200 border-b border-gray-200">
// //           {headerGroups.map((headerGroup) => (
// //             <tr {...headerGroup.getHeaderGroupProps()}>
// //               {headerGroup.headers.map((column) => (
// //                 <th
// //                   {...column.getHeaderProps()}
// //                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-400"
// //                 >
// //                   {column.render("Header")}
// //                 </th>
// //               ))}
// //             </tr>
// //           ))}
// //         </thead>
// //         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
// //           {page.map((row, i) => {
// //             prepareRow(row);
// //             return (
// //               <tr
// //                 {...row.getRowProps()}
// //                 className={i % 2 === 0 ? "bg-gray-50" : ""}
// //               >
// //                 {row.cells.map((cell) => (
// //                   <td
// //                     {...cell.getCellProps()}
// //                     className="px-6 py-4 whitespace-nowrap border border-blue-400"
// //                   >
// //                     {cell.render("Cell")}
// //                   </td>
// //                 ))}
// //               </tr>
// //             );
// //           })}
// //         </tbody>
// //       </table>
// //       <div className="mt-4 flex justify-between">
// //         <button
// //           onClick={previousPage}
// //           disabled={!canPreviousPage}
// //           className="px-4 py-2 bg-green-200 rounded-md border border-green-400"
// //         >
// //           Previous
// //         </button>
// //         <button
// //           onClick={nextPage}
// //           disabled={!canNextPage}
// //           className="px-4 py-2 bg-purple-200 rounded-md border border-purple-400"
// //         >
// //           Next
// //         </button>
// //       </div>
// //       <div className="mt-4">
// //         Page <strong>{pageIndex + 1}</strong>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Expenses;

// import React, { useMemo, useState } from "react";
// import { createColumnHelper, useReactTable } from "@tanstack/react-table";
// import { USERS } from "../data";
// // import { SearchIcon } from "../Icons/Icons";
// import { SearchIcon, DownloadIcon } from "./Icons/Icons"; // Import icons

// // import DownloadBtn from "./DownloadBtn";
// // import DebouncedInput from "./DebouncedInput";
// import DebouncedInput from "./components/DebouncedInput";
// import DownloadBtn from "./components/DebouncedInput";
// import { format } from "date-fns";

// const Expenses = () => {
//   const columnHelper = createColumnHelper();

//   const columns = [
//     columnHelper.accessor("", {
//       id: "S.No",
//       cell: (info) => <span>{info.row.index + 1}</span>,
//       header: "S.No",
//     }),
//     columnHelper.accessor("date", {
//       cell: (info) => (
//         <span>{format(new Date(info.getValue()), "MM/dd/yyyy")}</span>
//       ),
//       header: "Transaction time",
//     }),
//     columnHelper.accessor("amount", {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: "Amount",
//     }),
//     columnHelper.accessor("category", {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: "Category",
//     }),
//     columnHelper.accessor("type", {
//       cell: (info) => <span>{info.getValue()}</span>,
//       header: "Type",
//     }),
//   ];

//   const [data] = useState(() => [...USERS]);
//   const [globalFilter, setGlobalFilter] = useState("");

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       globalFilter,
//     },
//   });

//   return (
//     <div className="p-2 max-w-5xl mx-auto text-white fill-gray-400">
//       <div className="flex justify-between mb-2">
//         <div className="w-full flex items-center gap-1">
//           <SearchIcon />
//           <DebouncedInput
//             value={globalFilter ?? ""}
//             onChange={(value) => setGlobalFilter(String(value))}
//             className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
//             placeholder="Search all columns..."
//           />
//         </div>
//         <DownloadBtn data={data} fileName={"peoples"} />
//       </div>
//       <table className="border border-gray-700 w-full text-left">
//         <thead className="bg-indigo-600">
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th key={header.id} className="capitalize px-3.5 py-2">
//                   {header.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.length ? (
//             table.getRowModel().rows.map((row, i) => (
//               <tr
//                 key={row.id}
//                 className={`
//                   ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
//                 `}
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id} className="px-3.5 py-2">
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             ))
//           ) : (
//             <tr className="text-center h-32">
//               <td colSpan={5}>No Record Found!</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {/* pagination */}
//       <div className="flex items-center justify-end mt-2 gap-2">
//         <button
//           onClick={() => {
//             table.previousPage();
//           }}
//           disabled={!table.getCanPreviousPage()}
//           className="p-1 border border-gray-300 px-2 disabled:opacity-30"
//         >
//           {"<"}
//         </button>
//         <button
//           onClick={() => {
//             table.nextPage();
//           }}
//           disabled={!table.getCanNextPage()}
//           className="p-1 border border-gray-300 px-2 disabled:opacity-30"
//         >
//           {">"}
//         </button>

//         <span className="flex items-center gap-1">
//           <div>Page</div>
//           <strong>
//             {table.getState().pagination.pageIndex + 1} of{" "}
//             {table.getPageCount()}
//           </strong>
//         </span>
//         <span className="flex items-center gap-1">
//           | Go to page:
//           <input
//             type="number"
//             defaultValue={table.getState().pagination.pageIndex + 1}
//             onChange={(e) => {
//               const page = e.target.value ? Number(e.target.value) - 1 : 0;
//               table.setPageIndex(page);
//             }}
//             className="border p-1 rounded w-16 bg-transparent"
//           />
//         </span>
//         <select
//           value={table.getState().pagination.pageSize}
//           onChange={(e) => {
//             table.setPageSize(Number(e.target.value));
//           }}
//           className="p-2 bg-transparent"
//         >
//           {[10, 20, 30, 50].map((pageSize) => (
//             <option key={pageSize} value={pageSize}>
//               Show {pageSize}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// // import { SearchIcon } from "../Icons/Icons";

// const Expenses = () => {
//   const [data, setData] = useState([
//     {
//       id: 1,
//       date: new Date().toISOString(),
//       amount: 100,
//       category: "Needs",
//       type: "Manual",
//     },
//     {
//       id: 2,
//       date: new Date().toISOString(),
//       amount: 200,
//       category: "Wants",
//       type: "Manual",
//     },
//     {
//       id: 3,
//       date: new Date().toISOString(),
//       amount: 150,
//       category: "Mortgage",
//       type: "Manual",
//     },
//     {
//       id: 4,
//       date: new Date().toISOString(),
//       amount: 50,
//       category: "Shopping",
//       type: "Manual",
//     },
//   ]);

//   const columns = useMemo(
//     () => [
//       { Header: "Transaction time", accessor: "date" },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const [showAddExpense, setShowAddExpense] = useState(false);

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   // const handleAddExpense = () => {
//   //   // Add logic to add new expense record
//   //   console.log("New Expense:", newExpense);
//   //   // Clear the form after adding the expense
//   //   setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//   //   setShowAddExpense(false); // Close the Add Expense UI
//   // };
//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Add the new expense to the data state
//     setData((prevState) => [
//       ...prevState,
//       {
//         ...newExpense,
//         date: newExpense.date.toISOString(), // Convert date to ISO string
//       },
//     ]);
//     // Clear the form after adding the expense
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//     setShowAddExpense(false); // Close the Add Expense UI
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-blue-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={() => setShowAddExpense(true)} // Show Add Expense UI on button click
//           className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       {showAddExpense && ( // Conditionally render Add Expense UI
//         <div>
//           <div className="mt-4 flex">
//             <label className="mr-2 text-blue-600">Date:</label>
//             <DatePicker
//               selected={newExpense.date}
//               onChange={handleDateChange}
//               className="p-2 border border-blue-400"
//             />
//             <label className="ml-4 mr-2 text-blue-600">Amount:</label>
//             <input
//               type="number"
//               name="amount"
//               value={newExpense.amount}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//           </div>
//           <div className="mt-4 flex">
//             <label className="mr-2 text-blue-600">Category:</label>
//             <input
//               type="text"
//               name="category"
//               value={newExpense.category}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//             <label className="ml-4 mr-2 text-blue-600">Type:</label>
//             <input
//               type="text"
//               name="type"
//               value={newExpense.type}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//             <button
//               onClick={handleAddExpense}
//               className="bg-purple-500 text-white px-4 py-2 rounded-md ml-4"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       )}
//       <table
//         {...getTableProps()}
//         className="w-full bg-white rounded-lg overflow-hidden mt-4 border border-blue-400"
//       >
//         <thead className="bg-blue-100 border-b border-gray-200">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-400"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-50" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap border border-blue-400"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-blue-200 rounded-md border border-blue-400"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-blue-200 rounded-md border border-blue-400"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//     </div>
//   );
// };

// export default Expenses;

// import React, { useMemo, useState, useEffect } from "react";
// import { useTable, useGlobalFilter, usePagination } from "react-table";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const Expenses = () => {
//   // Retrieve data from localStorage on initial load
//   const [data, setData] = useState(() => {
//     const savedData = localStorage.getItem("expenses");
//     return savedData ? JSON.parse(savedData) : [];
//   });

//   // Save data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("expenses", JSON.stringify(data));
//   }, [data]);

//   const columns = useMemo(
//     () => [
//       {
//         Header: "Transaction time",
//         accessor: "date",
//         Cell: ({ value }) => new Date(value).toLocaleString(),
//       },
//       { Header: "Amount", accessor: "amount" },
//       { Header: "Category", accessor: "category" },
//       { Header: "Type", accessor: "type" },
//     ],
//     []
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     state,
//     setGlobalFilter,
//     nextPage,
//     previousPage,
//     canNextPage,
//     canPreviousPage,
//   } = useTable(
//     {
//       columns,
//       data,
//       initialState: { pageIndex: 0 },
//     },
//     useGlobalFilter,
//     usePagination
//   );

//   const { globalFilter, pageIndex } = state;

//   const [newExpense, setNewExpense] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const [showAddExpense, setShowAddExpense] = useState(false);

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewExpense((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewExpense((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddExpense = () => {
//     // Add logic to add new expense record
//     console.log("New Expense:", newExpense);
//     // Add the new expense to the data state
//     setData((prevState) => [
//       ...prevState,
//       {
//         ...newExpense,
//         date: newExpense.date.toISOString(), // Convert date to ISO string
//       },
//     ]);
//     // Clear the form after adding the expense
//     setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
//     setShowAddExpense(false); // Close the Add Expense UI
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
//       <div className="mb-4 flex items-center">
//         <input
//           type="text"
//           value={globalFilter || ""}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           placeholder="Search expenses..."
//           className="p-2 border border-blue-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
//         />
//         <button
//           onClick={() => setShowAddExpense(true)} // Show Add Expense UI on button click
//           className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
//         >
//           Add Expense
//         </button>
//       </div>
//       {showAddExpense && ( // Conditionally render Add Expense UI
//         <div>
//           <div className="mt-4 flex">
//             <label className="mr-2 text-blue-600">Date:</label>
//             <DatePicker
//               selected={newExpense.date}
//               onChange={handleDateChange}
//               className="p-2 border border-blue-400"
//             />
//             <label className="ml-4 mr-2 text-blue-600">Amount:</label>
//             <input
//               type="number"
//               name="amount"
//               value={newExpense.amount}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//           </div>
//           <div className="mt-4 flex">
//             <label className="mr-2 text-blue-600">Category:</label>
//             <input
//               type="text"
//               name="category"
//               value={newExpense.category}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//             <label className="ml-4 mr-2 text-blue-600">Type:</label>
//             <input
//               type="text"
//               name="type"
//               value={newExpense.type}
//               onChange={handleInputChange}
//               className="p-2 border border-blue-400"
//             />
//             <button
//               onClick={handleAddExpense}
//               className="bg-purple-500 text-white px-4 py-2 rounded-md ml-4"
//             >
//               Add
//             </button>
//           </div>
//         </div>
//       )}
//       <table
//         {...getTableProps()}
//         className="w-full bg-white rounded-lg overflow-hidden mt-4 border border-blue-400"
//       >
//         <thead className="bg-blue-100 border-b border-gray-200">
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th
//                   {...column.getHeaderProps()}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-400"
//                 >
//                   {column.render("Header")}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
//           {page.map((row, i) => {
//             prepareRow(row);
//             return (
//               <tr
//                 {...row.getRowProps()}
//                 className={i % 2 === 0 ? "bg-gray-50" : ""}
//               >
//                 {row.cells.map((cell) => (
//                   <td
//                     {...cell.getCellProps()}
//                     className="px-6 py-4 whitespace-nowrap border border-blue-400"
//                   >
//                     {cell.render("Cell")}
//                   </td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={previousPage}
//           disabled={!canPreviousPage}
//           className="px-4 py-2 bg-blue-200 rounded-md border border-blue-400"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextPage}
//           disabled={!canNextPage}
//           className="px-4 py-2 bg-blue-200 rounded-md border border-blue-400"
//         >
//           Next
//         </button>
//       </div>
//       <div className="mt-4">
//         Page <strong>{pageIndex + 1}</strong>
//       </div>
//     </div>
//   );
// };

// export default Expenses;
import React, { useState, useMemo, useEffect } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Expenses = () => {
  // Retrieve data from localStorage on initial load
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("expenses");
    return savedData ? JSON.parse(savedData) : [];
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(data));
  }, [data]);

  const columns = useMemo(
    () => [
      {
        Header: "Transaction time",
        accessor: "date",
        Cell: ({ value }) => new Date(value).toLocaleString(),
      },
      { Header: "Amount", accessor: "amount" },
      { Header: "Category", accessor: "category" },
      { Header: "Type", accessor: "type" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex } = state;

  const [newExpense, setNewExpense] = useState({
    date: new Date(),
    amount: 0,
    category: "",
    type: "",
  });

  const [showAddExpense, setShowAddExpense] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setNewExpense((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const handleAddExpense = () => {
    setData((prevState) => [
      ...prevState,
      {
        ...newExpense,
        date: newExpense.date.toISOString(),
      },
    ]);
    setNewExpense({ date: new Date(), amount: 0, category: "", type: "" });
    setShowAddExpense(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search expenses..."
          className="p-2 border border-blue-400 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow"
        />
        <button
          onClick={() => setShowAddExpense(true)}
          className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
        >
          Add Expense
        </button>
      </div>
      {showAddExpense && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={() => setShowAddExpense(false)}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Add New Expense
                </h3>
                <div className="mt-4 flex">
                  <label className="mr-2 text-blue-600">Date:</label>
                  <DatePicker
                    selected={newExpense.date}
                    onChange={handleDateChange}
                    className="p-2 border border-blue-400"
                  />
                  <label className="ml-4 mr-2 text-blue-600">Amount:</label>
                  <input
                    type="number"
                    name="amount"
                    value={newExpense.amount}
                    onChange={handleInputChange}
                    className="p-2 border border-blue-400"
                  />
                </div>
                <div className="mt-4 flex">
                  <label className="mr-2 text-blue-600">Category:</label>
                  <input
                    type="text"
                    name="category"
                    value={newExpense.category}
                    onChange={handleInputChange}
                    className="p-2 border border-blue-400"
                  />
                  <label className="ml-4 mr-2 text-blue-600">Type:</label>
                  <input
                    type="text"
                    name="type"
                    value={newExpense.type}
                    onChange={handleInputChange}
                    className="p-2 border border-blue-400"
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleAddExpense}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add
                </button>
                <button
                  onClick={() => setShowAddExpense(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <table
        {...getTableProps()}
        className="w-full bg-white rounded-lg overflow-hidden mt-4 border border-blue-400"
      >
        <thead className="bg-blue-100 border-b border-gray-200">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-blue-400"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className={i % 2 === 0 ? "bg-gray-50" : ""}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="px-6 py-4 whitespace-nowrap border border-blue-400"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button
          onClick={previousPage}
          disabled={!canPreviousPage}
          className="px-4 py-2 bg-blue-200 rounded-md border border-blue-400"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={!canNextPage}
          className="px-4 py-2 bg-blue-200 rounded-md border border-blue-400"
        >
          Next
        </button>
      </div>
      <div className="mt-4">
        Page <strong>{pageIndex + 1}</strong>
      </div>
    </div>
  );
};

export default Expenses;
