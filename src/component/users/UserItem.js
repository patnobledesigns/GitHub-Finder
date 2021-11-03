import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className='col-lg-4 col-md-6'>
      <div
        className='card mb-4 shadow bg-white'
        style={{ width: "18rem", borderRadius: "10px" }}>
        <img
          style={{ borderRadius: "100%" }}
          className='shadow mx-auto d-block m-4'
          src={avatar_url}
          alt='cardimage'
          width='100'
        />

        <div className='card-body'>
          <h5 className='card-title text-center mb-4'>{login}</h5>
          <Link to={`/user/${login}`} className='btn btn-primary'>
            More
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
