import React from "react";
import { useQuery } from "urql";
import { getFollowers } from "../lens/getFollowers";
import CallUserCard from "./CallUserCard";

const Followers = () => {
  const [result, reexecuteQuery] = useQuery({
    query: getFollowers,
    variables: {
      request: {
        profileId: "0x0262",
      },
    },
  });

  const { data, fetching, error } = result;

  if (fetching) return <></>;

  const {
    followers: { items },
  } = data;

  console.log({ items });

  console.log({ followrs: data });
  return (
    <div className="m-2 h-96 overflow-y-scroll">
      {items?.map((follower: any) => {
        console.log(follower);

        const {
          wallet: { defaultProfile },
        } = follower;
        console.log({ defaultProfile });

        return <CallUserCard lenspfp={""} lensid={defaultProfile?.handle} />;
      })}
    </div>
  );
};

export default Followers;
