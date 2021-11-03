import React, { useEffect, useContext, Fragment } from "react";
import Spinner from "../layout/Spinner";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getSingleUser, repos, getSingleUserRepos } =
  githubContext;
  useEffect(() => {
    getSingleUser(match.params.login);
    getSingleUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    company,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <div className="container">
        <Link to="/" className="btn btn-secondary btn-dark btn-sm  mt-2">
          <i className="fa fa-arrow-alt-left"></i> Back to Home
        </Link>
        <h5 className="d-inline" style={{ marginLeft: "15px" }}>
          Hireable:
        </h5>{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-danger" />
        )}
        <div className="row">
          <div className="col-md-4 mt-4">
            <div className="card bg-white" style={{ borderRadius: "10px" }}>
              <img
                style={{ borderRadius: "100%" }}
                className="shadow mx-auto d-block mt-4"
                src={avatar_url}
                alt="cardimage"
                width="100"
              />
              <div className="p-4">
                <h4>{name}</h4>
                <strong>Location: {location}</strong>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-4">
            <div className="card bg-white" style={{ borderRadius: "10px" }}>
              <div className="card-body">
                <div>
                  {bio && (
                    <Fragment>
                      <h3>Bio</h3>
                      <p>{bio}</p>
                    </Fragment>
                  )}
                  <a href={html_url} className="btn btn-dark my-1">
                    Visit Github Profile
                  </a>
                  <ul className="list-group">
                    <li className="list-group-item border-0">
                      {login && (
                        <Fragment>
                          <strong>Username: </strong>
                          {login}
                        </Fragment>
                      )}
                    </li>
                    <li className="list-group-item border-0">
                      {company && (
                        <Fragment>
                          <strong>Company: </strong>
                          {company}
                        </Fragment>
                      )}
                    </li>
                    <li className="list-group-item border-0">
                      {blog && (
                        <Fragment>
                          <strong>Website: </strong>
                          {blog}
                        </Fragment>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card d-inline bg-white border-0"
          style={{ borderRadius: "10px" }}
        >
          <span className="badge rounded-pill bg-danger m-4 ">
            Followers: {followers}
          </span>
          <span className="badge rounded-pill bg-success m-4">
            Following: {following}
          </span>
          <span className="badge rounded-pill bg-light m-4">
            Public Repos: {public_repos}
          </span>
          <span className="badge rounded-pill bg-dark m-4">
            Public Gists: {public_gists}
          </span>
        </div>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

// User.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   user: PropTypes.object.isRequired,
//   repos: PropTypes.array.isRequired,
//   getSingleUser: PropTypes.func.isRequired,
//   getSingleUserRepos: PropTypes.func.isRequired,
// };

export default User;
