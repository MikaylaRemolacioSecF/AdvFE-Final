'use client';
import React, { useEffect, useState } from 'react';
import '../UserProfile/style.css'; 

const UserProfile = () => {
  // this sets up state to hold the user info
  const [user, setUser] = useState(null);

  // this runs once when the component loads
  useEffect(() => {
    // fetch a random user from the api
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => {
        // get the first user from the results
        const result = data.results[0];

        // create a full name from first and last name
        const fullName = `${result.name.first} ${result.name.last}`;

        // get the profile picture and location
        const profilePicture = result.picture.large;
        const bio = `Hi, I'm ${fullName}. I live in ${result.location.city}, ${result.location.country}.`;

        // save the user info in state
        setUser({
          name: fullName,
          profilePicture,
          bio,
        });
      })
      .catch((error) => console.error('Error fetching user:', error));
  }, []); // the empty array means this runs only once

  // show a loading message while user info is being fetched
  if (!user) return <div className="loading">Loading profile...</div>;

  return (
    <div className="user-profile">
      <img
        src={user.profilePicture}
        alt={`${user.name}'s profile`}
        className="profile-picture"
      />
      <h2 className="user-name">{user.name}</h2>
      <p className="user-bio">{user.bio}</p>
    </div>
  );
};

export default UserProfile;
