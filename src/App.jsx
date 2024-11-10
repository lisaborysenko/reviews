import React, { useState } from "react";

import reviews from "./data";
import Reviews from "./Reviews";

const App = () => {
  const data = [...reviews];

  return (
    <div>
      <h2>Reviews Starter</h2>
      <div className="form">
        <Reviews reviewsData={data} />
      </div>
    </div>
  );
};
export default App;

