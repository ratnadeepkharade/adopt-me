import React, { useState } from "react";

const SearchParams = () => {
  // hooks never go inside if statement or for loop
  // hooks are executed in order and if they are based on condition then it might happen that next hook in order gets assigned to 1st hook
  const [location, setLocation] = useState("Seattle, WA");

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
