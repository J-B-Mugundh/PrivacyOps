import React from "react";
import "./style.css";

const ProfileCard = ({ userData }) => {
  return (
    <div className="card mb-4 profile-card">
      <div className="row g-0">
        <div className="col-md-4 col-12">
          <div id="card-profile-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAhjETflPjuIsJXTh0xbAlcYZqUkzkRECuaSzC_Zc1g&s"
              className="img-fluid rounded-start"
              alt={userData.firstName}
            />
          </div>
        </div>
        <div className="col-md-8 col-12">
          <div className="card-body">
            <h5 className="card-title">
              {userData.user.firstName} {userData.user.lastName}
            </h5>
            <p className="card-text">
              <strong>Email:</strong> {userData.user.email}
            </p>
            <p className="card-text">
              <strong>Designation:</strong>{" "}
              {userData.user.role === 1 ? "General Police" : "Commissioner"}
            </p>
            <p className="card-text">
              <strong>Role:</strong> {userData.user.role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
