// // import React, { useState } from "react";

// // const Sidebar = () => {
// //   const [open, setOpen] = useState(true);
// //   const Menus = [
// //     { title: "Expenses", src: "Chat" },
// //     { title: "Dashboard", src: "Chart_fill" },
// //     { title: "Accounts", src: "User", gap: true },
// //     { title: "Plannings ", src: "Calendar" },
// //     // { title: "Search", src: "Search" },
// //     // { title: "Analytics", src: "Chart" },
// //     { title: "News ", src: "Folder", gap: true },
// //     { title: "Setting", src: "Setting" },
// //   ];

// //   return (
// //     <div
// //       className={` ${
// //         open ? "w-72" : "w-20 "
// //       } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
// //     >
// //       <img
// //         alt=" "
// //         src="/src/assets/control.png"
// //         className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
// //          border-2 rounded-full  ${!open && "rotate-180"}`}
// //         onClick={() => setOpen(!open)}
// //       />
// //       <div className="flex gap-x-4 items-center">
// //         <img
// //           alt=" "
// //           src="/src/assets/logo.png"
// //           className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
// //         />
// //         <h1
// //           className={`text-white origin-left font-medium text-xl duration-200 ${
// //             !open && "scale-0"
// //           }`}
// //         >
// //           SmartExpense
// //         </h1>
// //       </div>
// //       <ul className="pt-6">
// //         {Menus.map((Menu, index) => (
// //           <li
// //             key={index}
// //             className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
// //             ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
// //           >
// //             <img alt=" " src={`/src/assets/${Menu.src}.png`} />
// //             <span className={`${!open && "hidden"} origin-left duration-200`}>
// //               {Menu.title}
// //             </span>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;

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
// import React from "react";
// import PropTypes from "prop-types"; // Import PropTypes for type checking

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

// Sidebar.propTypes = {
//   onSidebarItemClick: PropTypes.func.isRequired, // Define the prop type
// };

// export default Sidebar;
// import React, { useState } from "react";
// import PropTypes from "prop-types"; // Import PropTypes for type checking
// const Sidebar = ({ onSidebarItemClick }) => {
//   const [open, setOpen] = useState(true); // State to manage sidebar visibility

//   const handleToggleSidebar = () => {
//     setOpen(!open); // Toggle sidebar visibility
//   };

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
//       <img
//         alt="Toggle Sidebar"
//         src="/src/assets/control.png"
//         className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
//           border-2 rounded-full ${!open && "rotate-180"}`}
//         onClick={handleToggleSidebar} // Toggle sidebar visibility on click
//       />
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

// Sidebar.propTypes = {
//   onSidebarItemClick: PropTypes.func.isRequired, // Define the prop type
// };

// export default Sidebar;

// import React, { useState } from "react";
// import PropTypes from "prop-types"; // Import PropTypes for type checking

// const Sidebar = ({ onSidebarItemClick }) => {
//   const [open, setOpen] = useState(true); // State to manage sidebar visibility

//   const handleToggleSidebar = () => {
//     setOpen(!open); // Toggle sidebar visibility
//   };

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
//       <img
//         alt="Toggle Sidebar"
//         src="/src/assets/control.png"
//         className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
//           border-2 rounded-full ${!open && "rotate-180"}`}
//         onClick={handleToggleSidebar} // Toggle sidebar visibility on click
//       />
//       <div className="flex gap-x-4 items-center">
//         <img
//           alt=" "
//           src="/src/assets/logo.png"
//           className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
//         />
//         <h1
//           className={`text-white origin-left font-medium text-xl duration-200 ${
//             !open && "scale-0"
//           }`}
//         >
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
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               {Menu.title}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   onSidebarItemClick: PropTypes.func.isRequired, // Define the prop type
// };

// export default Sidebar;

// import React, { useState } from "react";
// import PropTypes from "prop-types"; // Import PropTypes for type checking

// const Sidebar = ({ onSidebarItemClick }) => {
//   const [open, setOpen] = useState(true); // State to manage sidebar visibility

//   const handleToggleSidebar = () => {
//     setOpen(!open); // Toggle sidebar visibility
//   };

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
//       <img
//         alt="Toggle Sidebar"
//         src="/src/assets/control.png"
//         className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
//           border-2 rounded-full ${!open && "rotate-180"}`}
//         onClick={handleToggleSidebar} // Toggle sidebar visibility on click
//       />
//       <div className="flex gap-x-4 items-center">
//         <img
//           alt=" "
//           src="/src/assets/logo.png"
//           className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
//         />
//         <h1
//           className={`text-white origin-left font-medium text-xl duration-200 ${
//             !open && "scale-0"
//           }`}
//         >
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
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               {Menu.title}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   onSidebarItemClick: PropTypes.func.isRequired, // Define the prop type
// };

// export default Sidebar;

// import React, { useState } from "react";
// import PropTypes from "prop-types"; // Import PropTypes for type checking
// // import {
// //   FaChartBar,
// //   FaCalendarAlt,
// //   FaSearch,
// //   FaChartLine,
// //   FaFolder,
// //   FaUser,
// // } from "react-icons/fa";

// const Sidebar = ({ onSidebarItemClick }) => {
//   const [open, setOpen] = useState(true); // State to manage sidebar visibility

//   const handleToggleSidebar = () => {
//     setOpen(!open); // Toggle sidebar visibility
//   };

//   const handleItemClick = (pageName) => {
//     onSidebarItemClick(pageName); // Call the function provided by the parent component
//   };

//   const Menus = [
//     { title: "Dashboard", src: "Chart_fill" },
//     { title: "Expenses", src: "spending" }, // Update the menu items accordingly
//     { title: "ExpensePlanning", src: "Search" },
//     { title: "Investments", src: "Chart" },
//     { title: "MonthlyManagement", src: "Folder" },
//     { title: "MakePayments", src: "User" },
//     // { title: "News", src: "Search" },
//   ];

//   // const Menus = [
//   //   { title: "Dashboard", icon: <FaChartBar /> },
//   //   { title: "Expenses", icon: <FaCalendarAlt /> },
//   //   { title: "ExpensePlanning", icon: <FaSearch /> },
//   //   { title: "Investments", icon: <FaChartLine /> },
//   //   { title: "MonthlyManagement", icon: <FaFolder /> },
//   //   { title: "MakePayments", icon: <FaUser /> },
//   // ];

//   return (
//     <div
//       className={` ${
//         open ? "w-72" : "w-20 "
//       } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
//     >
//       <img
//         src="/control.png"
//         alt=" "
//         className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
//           border-2 rounded-full ${!open && "rotate-180"}`}
//         onClick={handleToggleSidebar} // Toggle sidebar visibility on click
//       />
//       <div className="flex gap-x-4 items-center">
//         <img
//           alt=" "
//           src="/logo.png"
//           className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
//         />
//         <h1
//           className={`text-white origin-left font-medium text-xl duration-200 ${
//             !open && "scale-0"
//           }`}
//         >
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
//             <img alt=" " src={`/${Menu.src}.png`} />
//             <span className={`${!open && "hidden"} origin-left duration-200`}>
//               {Menu.title}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Sidebar.propTypes = {
//   onSidebarItemClick: PropTypes.func.isRequired, // Define the prop type
// };

// export default Sidebar;

import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// import {
//   FaChartBar,
//   FaCalendarAlt,
//   FaSearch,
//   FaChartLine,
//   FaFolder,
//   FaUser,
// } from "react-icons/fa";
import {
  FaChartPie,
  FaMoneyBillAlt,
  FaClipboardList,
  FaHandHoldingUsd,
  FaCalendarAlt,
  FaUserCog,
} from "react-icons/fa";

const Sidebar = ({ onSidebarItemClick }) => {
  const [open, setOpen] = useState(true);

  const handleToggleSidebar = () => {
    setOpen(!open);
  };

  const handleItemClick = (pageName) => {
    onSidebarItemClick(pageName);
  };

  // const Menus = [
  //   { title: "Dashboard", icon: <FaChartBar /> },
  //   { title: "Expenses", icon: <FaCalendarAlt /> },
  //   { title: "ExpensePlanning", icon: <FaSearch /> },
  //   { title: "Investments", icon: <FaChartLine /> },
  //   { title: "MonthlyManagement", icon: <FaFolder /> },
  //   { title: "MakePayments", icon: <FaUser /> },
  // ];
  const Menus = [
    { title: "Dashboard", icon: <FaChartPie /> },
    { title: "Expenses", icon: <FaMoneyBillAlt /> },
    { title: "ExpensePlanning", icon: <FaClipboardList /> },
    { title: "Investments", icon: <FaHandHoldingUsd /> },
    { title: "MonthlyManagement", icon: <FaCalendarAlt /> },
    { title: "MakePayments", icon: <FaUserCog /> },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
    >
      <img
        src="/control.png"
        alt=" "
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full ${!open && "rotate-180"}`}
        onClick={handleToggleSidebar}
      />
      <div className="flex gap-x-4 items-center">
        <img
          alt=" "
          src="/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          SmartExpense
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(Menu.title)}
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
            ${Menu.gap ? "mt-9" : "mt-2"}`}
          >
            {Menu.icon}
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  onSidebarItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
