import React from "react";

const Transactions = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="text-left py-2 px-4 border-b">Invoice</th>
            <th className="text-left py-2 px-4 border-b">Status</th>
            <th className="text-left py-2 px-4 border-b">Method</th>
            <th className="text-left py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">INV001</td>
            <td className="py-2 px-4 border-b">Paid</td>
            <td className="py-2 px-4 border-b">Credit Card</td>
            <td className="py-2 px-4 border-b">$250.00</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-4 text-gray-600">A list of your recent invoices.</p>
    </div>
  );
};

export default Transactions;
