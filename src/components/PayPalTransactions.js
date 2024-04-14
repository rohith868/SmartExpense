// import { useEffect, useState } from "react";
// import { CheckoutSdk } from "@paypal/checkout-server-sdk";

// const PayPalTransactions = () => {
//   const [transactions, setTransactions] = useState([]);

//   useEffect(() => {
//     const fetchTransactions = async () => {
//       try {
//         const clientId =
//           "AV6CCjr6V0vyz38gMiKbCnKIdo5uQufisssjjQJ5ourmPHZQQgK6eXiWccZHEJgCUdvjCdXvgLKODHRE";
//         const clientSecret =
//           "EK83-yxwo-SSMtUDDXEKTbRT7teHfttHhRhjGzL9h-Rv5M3pFGlCoKyl4F0kygHn5WXgP83jdALeA5cT";
//         const environment = new CheckoutSdk.Environment(
//           clientId,
//           clientSecret,
//           "sandbox"
//         );
//         const client = new CheckoutSdk.Client(environment);

//         // Make API call to retrieve transactions
//         const response = await client.execute({
//           method: "GET",
//           url: "/v1/reporting/transactions",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           data: {
//             start_date: "2024-03-23",
//             end_date: "2024-03-29",
//           },
//         });

//         setTransactions(response.result.transactions);
//       } catch (error) {
//         console.error("Error fetching transactions:", error);
//       }
//     };

//     fetchTransactions();
//   }, []);

//   return (
//     <div>
//       <h2>PayPal Transactions</h2>
//       <ul>
//         {transactions.map((transaction) => (
//           <li key={transaction.id}>
//             Transaction ID: {transaction.id}, Amount: {transaction.amount.value}{" "}
//             {transaction.amount.currency_code}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PayPalTransactions;

import { useEffect, useState } from "react";
import { CheckoutSdk } from "@paypal/checkout-server-sdk";

const PayPalTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const clientId =
          "AV6CCjr6V0vyz38gMiKbCnKIdo5uQufisssjjQJ5ourmPHZQQgK6eXiWccZHEJgCUdvjCdXvgLKODHRE";
        const clientSecret =
          "EK83-yxwo-SSMtUDDXEKTbRT7teHfttHhRhjGzL9h-Rv5M3pFGlCoKyl4F0kygHn5WXgP83jdALeA5cT";
        const environment = new CheckoutSdk.Environment(
          clientId,
          clientSecret,
          "sandbox"
        );
        const client = new CheckoutSdk.Client(environment);

        // Make API call to retrieve transactions
        const response = await client.execute({
          method: "GET",
          url: "/v1/reporting/transactions",
          headers: {
            "Content-Type": "application/json",
          },
          params: {
            start_date: "2024-03-23",
            end_date: "2024-03-29",
          },
        });

        setTransactions(response.result.transactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>PayPal Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            Transaction ID: {transaction.id}, Amount: {transaction.amount.value}{" "}
            {transaction.amount.currency_code}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PayPalTransactions;
