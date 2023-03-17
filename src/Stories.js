import React, { useEffect, useState } from "react";

const Stories = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);
  let API = "https://hn.algolia.com/api/v1/search?query=html";
  const fetchApiData = async (API) => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setLoading(false);
      console.log(data);

      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <div>Dayal tech news Channel</div>
      <div></div>
    </div>
  );
};

export default Stories;
