import React, { useState } from "react";
import Swal from 'sweetalert2';
import "./contact.css";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    desc: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const MY_SECRET = import.meta.env.VITE_CUSTOM_SECRET;
  const EMAIL_API = import.meta.env.VITE_CUSTOM_API;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(EMAIL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-custom-secret": MY_SECRET
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();    

      if (result.result === "Success") {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully submitted!",
          showConfirmButton: false,
          timer: 1500
        });

        setFormData({ name: "", phone: "", email: "", desc: "" });

      } else {

        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Submission failed. Please try again.",
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact__container background_dark padding-sections">
      <div className="contact__body max-width">
        <div className="contact__content">
          <div className="contact__header">
            <h2>Get in Touch</h2>
            <p>Need a hand managing your business operations? We’re here to support you.</p>
            <p>Whether you’re looking to outsource tasks, hire remote talent, or simply want to explore how we can help your business run more smoothly—let’s talk.</p>
          </div>
          <form id="contact-form" onSubmit={handleSubmit}>
            <p>Name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name here"
              className="form-control background_clear"
              required
            /><br />

            <p>Phone</p>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="form-control background_clear"
              required
            /><br />

            <p>Email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email here"
              className="form-control background_clear"
              required
            /><br />

            <p>How can we help you?</p>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your message"
              className="form-control background_clear"
              required
            ></textarea><br />

            <button type="submit" className="btn btn-lg background_clear">Submit</button>

          </form>
        </div>
      </div>
    </div>
  );
}
