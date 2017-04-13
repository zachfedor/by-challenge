import React from 'react';
import './Profile.css';


const Profile = ({ user }) => (
  <article className="Profile">
    <h2 className="Profile-name">{user.name}</h2>

    <p className="Profile-email">
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </p>

    <p className="Profile-bio">
      {user.bio}
    </p>
  </article>
);

export default Profile;
