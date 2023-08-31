import React, { useState } from "react";

function GifSearch({ handleSearch }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(query);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter a Search Term:
        </label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-success">
        Find Gifs
      </button>
    </form>
  );
}

export default GifSearch;
