import React from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Search = (SearchProps: SearchProps) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt={"search"} />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={SearchProps.searchTerm}
          onChange={(e) => {
            SearchProps.setSearchTerm(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
