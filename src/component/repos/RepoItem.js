import React from "react";
import PropTypes from "prop-types";

const RepoItem = ({ repo }) => {
  return (
    <div className="card mb-2 bg-white">
      <div className="card-body">
        <h5>
          <a href={repo.html_url}>{repo.name}</a>
        </h5>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
