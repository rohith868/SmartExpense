// import React, { useState, useEffect } from "react";

// const Investments = () => {
//   // Retrieve data from localStorage on initial load
//   const [data, setData] = useState(() => {
//     const savedData = localStorage.getItem("investments");
//     return savedData ? JSON.parse(savedData) : [];
//   });

//   // Save data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("investments", JSON.stringify(data));
//   }, [data]);

//   const [newInvestment, setNewInvestment] = useState({
//     date: new Date(),
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const handleInputChange = (e) => {
//     console.log("Input changed");
//     const { name, value } = e.target;
//     setNewInvestment((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleDateChange = (date) => {
//     console.log("Date changed");
//     setNewInvestment((prevState) => ({
//       ...prevState,
//       date,
//     }));
//   };

//   const handleAddInvestment = () => {
//     // Add logic to add new investment record
//     console.log("New Investment:", newInvestment);
//     // Add the new investment to the data state
//     setData((prevState) => [
//       ...prevState,
//       {
//         ...newInvestment,
//         date: newInvestment.date.toISOString(), // Convert date to ISO string
//       },
//     ]);
//     // Clear the form after adding the investment
//     setNewInvestment({ date: new Date(), amount: 0, category: "", type: "" });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Investments</h2>
//       <div className="mt-4 flex">
//         <label className="mr-2 text-blue-600">Date:</label>
//         <input
//           type="date"
//           name="date"
//           value={newInvestment.date}
//           onChange={(e) => handleDateChange(new Date(e.target.value))}
//           className="p-2 border border-blue-400"
//         />
//         <label className="ml-4 mr-2 text-blue-600">Amount:</label>
//         <input
//           type="number"
//           name="amount"
//           value={newInvestment.amount}
//           onChange={handleInputChange}
//           className="p-2 border border-blue-400"
//         />
//       </div>
//       <div className="mt-4 flex">
//         <label className="mr-2 text-blue-600">Category:</label>
//         <input
//           type="text"
//           name="category"
//           value={newInvestment.category}
//           onChange={handleInputChange}
//           className="p-2 border border-blue-400"
//         />
//         <label className="ml-4 mr-2 text-blue-600">Type:</label>
//         <input
//           type="text"
//           name="type"
//           value={newInvestment.type}
//           onChange={handleInputChange}
//           className="p-2 border border-blue-400"
//         />
//         <button
//           onClick={handleAddInvestment}
//           className="bg-purple-500 text-white px-4 py-2 rounded-md ml-4"
//         >
//           Add
//         </button>
//       </div>
//       {/* Table to display investments */}
//       {/* Pagination buttons if needed */}
//     </div>
//   );
// };

// export default Investments;
// import React, { useState, useEffect } from "react";

// const Investments = () => {
//   // Retrieve data from localStorage on initial load
//   const [data, setData] = useState(() => {
//     const savedData = localStorage.getItem("investments");
//     return savedData ? JSON.parse(savedData) : [];
//   });

//   // Save data to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("investments", JSON.stringify(data));
//   }, [data]);

//   const [newInvestment, setNewInvestment] = useState({
//     date: new Date().toISOString().split("T")[0],
//     amount: 0,
//     category: "",
//     type: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewInvestment((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleAddInvestment = () => {
//     setData((prevState) => [...prevState, newInvestment]);
//     setNewInvestment({
//       date: new Date().toISOString().split("T")[0],
//       amount: 0,
//       category: "",
//       type: "",
//     });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-3xl font-bold text-center mb-6">Investments</h2>
//       <div className="mb-4 flex justify-center">
//         <div className="w-full max-w-lg">
//           <div className="flex flex-wrap -mx-3 mb-4">
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//                 Date
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 value={newInvestment.date}
//                 onChange={handleInputChange}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               />
//             </div>
//             <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//                 Amount
//               </label>
//               <input
//                 type="number"
//                 name="amount"
//                 value={newInvestment.amount}
//                 onChange={handleInputChange}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               />
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-4">
//             <div className="w-full px-3">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//                 Category
//               </label>
//               <input
//                 type="text"
//                 name="category"
//                 value={newInvestment.category}
//                 onChange={handleInputChange}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               />
//             </div>
//           </div>
//           <div className="flex flex-wrap -mx-3 mb-4">
//             <div className="w-full px-3">
//               <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
//                 Type
//               </label>
//               <input
//                 type="text"
//                 name="type"
//                 value={newInvestment.type}
//                 onChange={handleInputChange}
//                 className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//               />
//             </div>
//           </div>
//           <div className="flex justify-center">
//             <button
//               onClick={handleAddInvestment}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//               Add Investment
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Display table of investments */}
//       <div className="overflow-x-auto">
//         <table className="table-auto border-collapse border border-blue-500 w-full">
//           <thead>
//             <tr className="bg-blue-200">
//               <th className="border border-blue-500 px-4 py-2">Date</th>
//               <th className="border border-blue-500 px-4 py-2">Amount</th>
//               <th className="border border-blue-500 px-4 py-2">Category</th>
//               <th className="border border-blue-500 px-4 py-2">Type</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((investment, index) => (
//               <tr key={index} className="bg-blue-100">
//                 <td className="border border-blue-500 px-4 py-2">
//                   {investment.date}
//                 </td>
//                 <td className="border border-blue-500 px-4 py-2">
//                   {investment.amount}
//                 </td>
//                 <td className="border border-blue-500 px-4 py-2">
//                   {investment.category}
//                 </td>
//                 <td className="border border-blue-500 px-4 py-2">
//                   {investment.type}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Investments;
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Investments = () => {
  // Retrieve data from localStorage on initial load
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("investments");
    return savedData ? JSON.parse(savedData) : [];
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("investments", JSON.stringify(data));
  }, [data]);

  const [newInvestment, setNewInvestment] = useState({
    date: new Date(),
    amount: 0,
    category: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvestment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setNewInvestment((prevState) => ({
      ...prevState,
      date,
    }));
  };

  const handleAddInvestment = () => {
    setData((prevState) => [...prevState, newInvestment]);
    setNewInvestment({
      date: new Date(),
      amount: 0,
      category: "",
      type: "",
    });
    toggleModal(); // Close the modal after adding the investment
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Investments</h2>
      <button
        onClick={toggleModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
      >
        Add Investment
      </button>
      {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div
              className="fixed inset-0 transition-opacity"
              onClick={toggleModal}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                  Add New Investment
                </h3>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Date
                  </label>
                  <DatePicker
                    selected={newInvestment.date}
                    onChange={handleDateChange}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={newInvestment.amount}
                    onChange={handleInputChange}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={newInvestment.category}
                    onChange={handleInputChange}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Type
                  </label>
                  <input
                    type="text"
                    name="type"
                    value={newInvestment.type}
                    onChange={handleInputChange}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleAddInvestment}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Add
                </button>
                <button
                  onClick={toggleModal}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-blue-500 w-full">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-blue-500 px-4 py-2">Date</th>
              <th className="border border-blue-500 px-4 py-2">Amount</th>
              <th className="border border-blue-500 px-4 py-2">Category</th>
              <th className="border border-blue-500 px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {data.map((investment, index) => (
              <tr key={index} className="bg-blue-100">
                <td className="border border-blue-500 px-4 py-2">
                  {new Date(investment.date).toLocaleDateString()}
                </td>
                <td className="border border-blue-500 px-4 py-2">
                  {investment.amount}
                </td>
                <td className="border border-blue-500 px-4 py-2">
                  {investment.category}
                </td>
                <td className="border border-blue-500 px-4 py-2">
                  {investment.type}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Investments;
