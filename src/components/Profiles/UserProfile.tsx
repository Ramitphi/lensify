import React from "react";
import { useQuery } from "urql";
import { defaultPofileQuery } from "../../lens/getDefaultProfile";
import { urqlClient } from "../../utils/urql-client";
import CallUserCard from "../CallUserCard";

const UserProfile = () => {
  const [result, reexecuteQuery] = useQuery({
    query: defaultPofileQuery,
    variables: {
      request: {
        ethereumAddress: "0x905040585A59C5B0E83Be2b247fC15a81FF4E533",
      },
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <></>;
  const {
    defaultProfile: {
      picture: {
        original: { url },
      },
      handle,
    },
  } = data;

  console.log({ data, handle });

  return (
    <div className="m-5 w-1/2 flex items-center gap-3 border border-brandbutton rounded-md">
      <img src={url} />
      <div className="flex flex-col">
        <p className="text-brandbutton">{handle}</p>
        <p className="text-green-600">4:30</p>
      </div>
    </div>
  );
};

export default UserProfile;
