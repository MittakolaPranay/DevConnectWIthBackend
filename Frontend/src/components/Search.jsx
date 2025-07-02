import "./Search.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search courses, reels, or creators..."
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
};

export default SearchBar;
