import React, { useState, useEffect } from "react";

const History = ({ address }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!address) return;

      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3000/api/${address}/history`);

        if (!response.ok) {
          console.log("Fetch history error:", response.status);
          setTransactions([]); // fallback to empty list
          return;
        }

        const data = await response.json();
        console.log("🚀 API response:", data);

        // Handle different formats of API response
        if (Array.isArray(data)) {
          setTransactions(data);
        } else if (Array.isArray(data.transactions)) {
          setTransactions(data.transactions);
        } else if (Array.isArray(data.data)) {
          setTransactions(data.data);
        } else {
          setTransactions([]); // default fallback
        }

      } catch (err) {
        console.error("Fetch failed:", err);
        setTransactions([]); // handle error case gracefully
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [address]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {Array.isArray(transactions) && transactions.length > 0 ? (
          transactions.map((tx) => (
            <li key={tx.id || tx.details?.txHash}>
              <a
                href={`https://etherscan.io/tx/${tx.details?.txHash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tx.details?.type || "Transaction"}
              </a>
            </li>
          ))
        ) : (
          <li>No transactions found</li>
        )}
      </ul>
    </div>
  );
};

export default History;
