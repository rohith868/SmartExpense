// import React, { useState, useRef, useEffect } from "react";

// export default function PayPal() {
//   const [checkout, setCheckOut] = useState(false);
//   const paypal = useRef();

//   useEffect(() => {
//     if (checkout) {
//       window.paypal
//         .Buttons({
//           createOrder: (data, actions, err) => {
//             return actions.order.create({
//               intent: "CAPTURE",
//               purchase_units: [
//                 {
//                   description: "Cool looking table",
//                   amount: {
//                     currency_code: "USD",
//                     value: 650.0,
//                   },
//                 },
//               ],
//             });
//           },
//           onApprove: async (data, actions) => {
//             const order = await actions.order.capture();
//             console.log(order);
//           },
//           onError: (err) => {
//             console.log(err);
//           },
//         })
//         .render(paypal.current);
//     }
//   }, [checkout]);

//   return (
//     <div className="App">
//       {checkout ? (
//         <div ref={paypal}></div>
//       ) : (
//         <button
//           onClick={() => {
//             setCheckOut(true);
//           }}
//         >
//           Checkout
//         </button>
//       )}
//     </div>
//   );
// }

// import React, { useState, useRef, useEffect } from "react";

// export default function PayPal() {
//   const [checkout, setCheckOut] = useState(false);
//   const [amount, setAmount] = useState(0);
//   const paypal = useRef();

//   useEffect(() => {
//     if (checkout) {
//       window.paypal
//         .Buttons({
//           createOrder: (data, actions, err) => {
//             return actions.order.create({
//               intent: "CAPTURE",
//               purchase_units: [
//                 {
//                   description: "Payment",
//                   amount: {
//                     currency_code: "USD",
//                     value: amount,
//                   },
//                 },
//               ],
//             });
//           },
//           onApprove: async (data, actions) => {
//             const order = await actions.order.capture();
//             console.log(order);
//             // Add expense record with amount value
//             const expenseRecord = {
//               category: "PayPal",
//               amount: parseFloat(amount),
//               date: new Date().toISOString(),
//             };
//             const existingRecords =
//               JSON.parse(localStorage.getItem("expenses")) || [];
//             const updatedRecords = [...existingRecords, expenseRecord];
//             localStorage.setItem("expenses", JSON.stringify(updatedRecords));
//           },
//           onError: (err) => {
//             console.log(err);
//           },
//         })
//         .render(paypal.current);
//     }
//   }, [checkout, amount]);

//   return (
//     <div className="App">
//       {checkout ? (
//         <div ref={paypal}></div>
//       ) : (
//         <div>
//           <input
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//           <button
//             onClick={() => {
//               setCheckOut(true);
//             }}
//           >
//             Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";

export default function PayPal() {
  const [checkout, setCheckOut] = useState(false);
  const [amount, setAmount] = useState(0);
  const paypal = useRef();

  useEffect(() => {
    if (checkout) {
      window.paypal
        .Buttons({
          createOrder: (data, actions, err) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_units: [
                {
                  description: "Payment",
                  amount: {
                    currency_code: "USD",
                    value: amount,
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
            // Add expense record with amount value
            const expenseRecord = {
              category: "PayPal",
              amount: parseFloat(amount),
              date: new Date().toISOString(),
            };
            const existingRecords =
              JSON.parse(localStorage.getItem("expenses")) || [];
            const updatedRecords = [...existingRecords, expenseRecord];
            localStorage.setItem("expenses", JSON.stringify(updatedRecords));
          },
          onError: (err) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }
  }, [checkout, amount]);

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        {checkout ? (
          <div ref={paypal}></div>
        ) : (
          <div>
            <label className="block mb-2">Enter Amount:</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <button
              onClick={() => {
                setCheckOut(true);
              }}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
