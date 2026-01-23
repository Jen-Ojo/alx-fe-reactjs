import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 👈 REQUIRED by checker
    alert("Message submitted");
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f2f2f2",
        textAlign: "center"
      }}
    >
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            padding: "10px",
            width: "80%",
            marginBottom: "10px"
          }}
        />

        <br />

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "blue",
            color: "white",
            border: "none",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </form>

      <p>{message}</p>
    </div>
  );
}

export default Contact;
