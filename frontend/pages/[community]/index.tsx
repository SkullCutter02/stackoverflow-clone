import React from "react";
import { useRouter } from "next/router";

const CommunityPostPage: React.FC = () => {
  const router = useRouter();
  const { community } = router.query;

  return <div>{community}</div>;
};

export default CommunityPostPage;
