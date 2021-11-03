import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

let githubToken;
if (process.env.NODE_ENV !== "production") {
  githubToken = process.env.REACT_APP_AUTH_TOKEN;
} else {
  githubToken = process.env.GITHUB_AUTH_TOKEN;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Search User
  const searchUsers = async (text) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      }
    );
    dispatch({ type: SEARCH_USERS, payload: response.data.items });
  };

  //Get User
  const getSingleUser = async (username) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      }
    );
    dispatch({ type: GET_USER, payload: response.data });
  };

  //Get Repos
  const getSingleUserRepos = async (username) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`,
      {
        headers: {
          Authorization: `Bearer ${githubToken}`,
        },
      }
    );
    dispatch({ type: GET_REPOS, payload: response.data });
  };

  //Clear Users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        repos: state.repos,
        user: state.user,
        loading: state.loading,
        searchUsers,
        setLoading,
        clearUsers,
        getSingleUserRepos,
        getSingleUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
