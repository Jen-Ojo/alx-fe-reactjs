import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
        />

        <br />

        <button
          type="submit"
          style={{ padding: "10px", backgroundColor: "green", color: "white" }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;

