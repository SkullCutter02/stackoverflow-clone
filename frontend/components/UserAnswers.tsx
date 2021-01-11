import React from "react";
import { useQuery } from "react-query";

import host from "../utils/host";
import * as css from "../utils/cssVariables";

interface Props {
  uuid: string;
}

const UserAnswers: React.FC<Props> = ({ uuid }) => {
  return <div>{uuid}</div>;
};

export default UserAnswers;
