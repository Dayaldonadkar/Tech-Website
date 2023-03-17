import React from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";

const App = () => {
  return (
    <div>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
