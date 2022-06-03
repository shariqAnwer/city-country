import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Table = () => {
  const [data, setData] = useState([]);
  const handleData = () => {
    axios.get("http://localhost:8080/cities").then((res) => {
      const result = res.data;
      console.log(result);
      setData(result);
    });
  };
  useEffect(() => {
    handleData();
  }, []);

  const remove = (id) => {
    axios.delete(`http://localhost:8080/cities/${id}`).then((res) => {
      setData([...res.data]);
    });
  };

  return (
    <>
      <table className="orders">
        <thead>
          <tr>
            <th>ID</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr className="orders-row">
              <td className="id">{e.id}</td>
              <td className="Country">{e.country}</td>
              <td className="city">{e.city}</td>
              <td className="population">{e.population}</td>
              <td className="edit">
                <button>edit</button>
              </td>
              <td className="delete">
                <button
                  onClick={() => {
                    remove(e.id);
                    
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
