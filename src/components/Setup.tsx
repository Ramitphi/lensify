import HuddleClient from "@huddle01/huddle01-client/HuddleClient/HuddleClient";
import React, { useState } from "react";

interface Props {
  huddleClient: HuddleClient;
}
const Setup: React.FC<Props> = ({ huddleClient }) => {
  const [roomName, setRoomName] = useState<string>("");
  const handleJoin = async () => {
    try {
      console.log({ roomName });

      await huddleClient.join(roomName, {
        address: "0x15900c698ee356E6976e5645394F027F0704c8Eb",
        wallet: "",
        ens: "axit.eth",
      });

      console.log("joined");
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div className="flex flex-col">
      <div className="flex">
        <p className=" text-brandbutton w-fit m-2 ">Your Meeting room</p>
        <input
          className="bg-transparent border-brandbutton border-2 w-fit rounded-md m-2 text-white"
          onChange={(e) => setRoomName(e.target.value)}
        />
        <button
          className="p-2  m-1 rounded-lg bg-brandbutton text-brand font-semibold"
          onClick={handleJoin}
        >
          Join Room
        </button>
      </div>
      <div className="flex">
        <p className=" text-brandbutton w-fit m-2 ">Enter your name</p>

        <input className="bg-transparent border-brandbutton border-2 w-fit rounded-md m-2 text-white" />
      </div>

      {/* <button>Start Meeting</button> */}
    </div>
  );
};

export default Setup;
