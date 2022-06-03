import axios from "axios";
import React, { useState } from "react";

export default function AddCity() {
  const [form, setForm] = useState([]);
  const formData = () => {
    axios
      .post("http://localhost:8080/cities", form)
      .then((res) => {
        console.log(res);
      })
      .then(form);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
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
        <input
          type="text"
          onChange={handleInput}
          placeholder="Add City"
          name="city"
        />
        <input
          type="text"
          onChange={handleInput}
          placeholder="Add peoples"
          name="people"
        />
        <input type="submit" />
      </form>
    </>
  );
}
