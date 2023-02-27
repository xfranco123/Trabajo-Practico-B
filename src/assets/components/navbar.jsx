import "./navbar.css";

function Navbar({ filter, onFilterChanged }) {
  return (
    <div className="navbar">
      <div className="container1">
        <input
          onChange={onFilterChanged}
          value={filter}
          className="search"
          type="text"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Navbar;
