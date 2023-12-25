import React, { useState } from "react";

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
        ...errors,
        [e.target.name]:''
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {
      firstName:
        formData.firstName.trim().length === 0 ? "First Name is Required" : "",
      lastName:
        formData.lastName.trim().length === 0 ? "Last Name is Required" : "",
      email: formData.email.trim().length === 0 ? "Email is Required" : "",
      password:
        formData.password.trim().length === 0 ? "Password is Required" : "",
    };
    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      setTimeout(() => {
        console.log("Form Submitted", formData);
        setSuccessMessage("Registration Successful");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });
      }, 1000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {successMessage && <p>{successMessage}</p>}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
