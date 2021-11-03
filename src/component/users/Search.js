import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
// import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";


const Search = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);

  const { searchUsers, clearUsers, users } = githubContext;
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something and try submitting again.", "warning");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="container mt-2">
      <form className="d-flex" onSubmit={onSubmit}>
        <input
          className="form-control"
          type="text"
          name="text"
          placeholder="Search"
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-secondary btn-dark"
        />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-secondary btn-dark btn-block w-100 mt-2 btn-sm"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

// Search.propTypes = {
// searchUsers: PropTypes.func.isRequired,
// clearUsers: PropTypes.func.isRequired,
//   alertUser: PropTypes.func.isRequired,
// };

export default Search;
