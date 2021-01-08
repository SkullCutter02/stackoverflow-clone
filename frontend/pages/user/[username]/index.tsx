import React from "react";
import { useRouter } from "next/router";

const UserProfilePage: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <React.Fragment>
      <p>{username}</p>
    </React.Fragment>
  );
};

export default UserProfilePage;
