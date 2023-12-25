import React from "react";

function ButtonsFilters({ menu, filters }) {
  return (
    <div className="m-4">
      <div className="btn1 text-center d-flex justify-content-center align-items-center">
        {menu.map((ele, index) => (
          <button
            className="mx-3 rounded-2 bg-dark text-white p-1 fw-bolder"
            key={index}
            onClick={() => filters(ele)} // Pass the category 'ele' to filters function
          >
            {ele}
          </button>
        ))}
        <button
          className="mx-3 rounded-2 bg-dark text-white p-1 fw-bolder"
          onClick={() => filters('All')} // Add 'All' button functionality
        >
          All
        </button>
      </div>
    </div>
  );
}

export default ButtonsFilters;
