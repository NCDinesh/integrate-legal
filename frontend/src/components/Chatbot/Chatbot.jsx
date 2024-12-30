import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await axios.post("http://localhost:8000/chatbot/", {
        query,
      });
      setResponse(res.data.response);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
      <h1>Gender-Based Violence Chatbot</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          placeholder="Ask a question about gender-based violence..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ width: "100%", padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{ marginTop: "10px", padding: "10px 20px", fontSize: "16px" }}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      {response && (
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
