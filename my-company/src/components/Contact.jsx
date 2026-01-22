import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f4f4f4",
    textAlign: "center"
  };

  const inputStyle = {
    padding: "10px",
    width: "80%",
    marginBottom: "10px"
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "blue",
    color: "white",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}>
      <h2>Contact Us</h2>

      <input
        type="text"
        placeholder="Enter your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={inputStyle}
      />

      <br />

      <button style={buttonStyle}>
        Send
      </button>

      <p>{message}</p>
    </div>
  );
}

export default Contact;

