import React, { useEffect, useState } from "react";
import axios from 'axios';

const Route = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://atcoder.jp/users/zerozero_00/history/json";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      <h1>Data from AtCoder</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
export default Route;