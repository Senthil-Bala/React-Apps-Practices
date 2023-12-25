import React, { useState } from "react";
import Data from "./Data";
import Table from "react-bootstrap/Table";
function TableFile() {
  const [search, setSearch] = useState("");
  console.log(Data);
  return (
    <div className="text-center">
      <h1>Search Filter</h1>
      <input
        className="mb-3 rounded-2 bg-black text-white text-center p-2 w-25"
        type="text"
        placeholder="Search here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Table
        striped
        bordered
        hover
        variant='dark'
        className="container rounded-5 bg-gradient"
      >
        <thead>
          <tr>
            <th>No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {Data.filter((items) => {
            return search.toLowerCase() === ""
              ? items
              : items.first_name.toLowerCase().includes(search) ||
                  items.last_name.toLowerCase().includes(search) ||
                  items.email.toLowerCase().includes(search) ||
                  items.phone.toLowerCase().includes(search);
          }).map((ele, index) => (
            <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.first_name}</td>
              <td>{ele.last_name}</td>
              <td>{ele.email}</td>
              <td>{ele.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TableFile;
