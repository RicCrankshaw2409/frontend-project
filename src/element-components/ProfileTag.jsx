import { useEffect, useState } from "react";

function ProfileTag({ currentUser, users }) {
  const [profileUser, setProfileUser] = useState({});

  useEffect(() => {
    const filterUser = users.filter((user) => {
      return user.username === currentUser;
    });
    setProfileUser(filterUser[0]);
  }, [currentUser, users]);

  return (
    <div>
      <p>Signed in as: {profileUser.username}</p>
      <img src={profileUser.avatar_url} alt="profile"></img>
    </div>
  );
}

export default ProfileTag;
