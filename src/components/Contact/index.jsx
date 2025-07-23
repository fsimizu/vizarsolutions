import React, { useState } from "react";
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

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    
    const { name, phone, email, desc } = formData;
    console.log("submit pressed", formData);
    
    // Basic validation
    const nameRe = /^[A-Za-z]{2,}$/;
    const phoneRe = /^[0-9]{10}$/;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRe.test(name)) {
      console.log("Name must be at least 2 letters.");
      alert("Name must be at least 2 letters.");
      return;
    }
    if (!phoneRe.test(phone)) {
      console.log("Please enter a valid 10-digit phone number.");
      alert("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!emailRe.test(email)) {
      console.log("Please enter a valid email address.");
      alert("Please enter a valid email address.");
      return;
    }

    try {
      console.log("llama")
      const response = await fetch("https://qyyuxypefl.execute-api.us-east-1.amazonaws.com/dev/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // "x-custom-secret": "g0r3%ODhC26$2{$£"
        },
        body: JSON.stringify(formData),
      });


      if (response.ok) {
        alert("Successfully submitted!");
        setFormData({ name: "", phone: "", email: "", desc: "" });

      } else {
        alert("Submission failed. Please try again.");
        console.log("error 1")
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
      console.log("error 2")
    }
  };

  return (
    <div className="contact__container background_dark padding-sections">
      <div className="contact__body max-width">
        <div className="contact__content">
          <form id="contact-form" onSubmit={handleSubmit}>
            <h4>Name:</h4>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name here…"
              className="form-control"
              required
            /><br />

            <h4>Phone:</h4>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="form-control"
              required
            /><br />

            <h4>Email:</h4>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email here…"
              className="form-control"
              required
            /><br />

            <h4>How can we help you?</h4>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your message…"
              className="form-control"
              required
            ></textarea><br />

            <button type="submit" className="btn btn-lg">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
