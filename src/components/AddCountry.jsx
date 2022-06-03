import React from "react";
import { useState } from "react";
import axios from "axios";

const AddCountry = () => {
  const [country, setCountry] = useState([]);
  const formData = () => {
    axios
      .post("http://localhost:8080/countries", country)
      .then((res) => {
        console.log(res);
      })
      .then(country);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
 
    setCountry({ ...country, [name]: value });
  };
  return (
    <>
      <form action="" onSubmit={formData}>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Add Country"
          name="country"
        />
        <input type="submit" />
      </form>
    </>
  );
};
export default AddCountry;
