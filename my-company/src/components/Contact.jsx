import React from "react";

function Contact() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Contact</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Your message"
          style={{ padding: "10px", marginBottom: "10px" }}
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


