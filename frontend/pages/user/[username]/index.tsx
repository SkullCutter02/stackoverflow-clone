import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";

import UserInfo from "../../../components/UserInfo";

interface Props {
  username: string;
}

const UserProfilePage: React.FC<Props> = ({ username }) => {
  const [key, setKey] = useState<number>(0);

  useEffect(() => {
    setKey((old) => old + 1);
  }, [username]);

  return <UserInfo username={username} key={key} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      username: context.query.username,
    },
  };
};

export default UserProfilePage;
