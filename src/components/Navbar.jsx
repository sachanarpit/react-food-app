import { Link } from "react-router-dom";

export const Navabar = () => {
  return (
    <div className="nav">
      <input type="checkbox" name="" id="" />
      <div className="nav-header">
        <div className="nav-title">
          <Link to="/">Food App</Link>
        </div>
      </div>
      <div className="nab-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className="nav-links">
        <Link to="/randommeal">Random Meal</Link>
      </div>
    </div>
  );
};
