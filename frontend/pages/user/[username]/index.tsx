import React from "react";
import { useRouter } from "next/router";

const UserProfilePage: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div>
      <p>{username}</p>
    </div>
  );
};

export default UserProfilePage;
