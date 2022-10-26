import { SocketAddress } from "net";
import React, { useState } from "react";
import useClientStore from "../store/useClientStore";
import { login } from "../utils/login";

const Wallet = () => {
  const [userData, setUserData] = useState<{ address: string; lens: string }>();
  const [loggedIn, setLoggedIn] = useState<boolean>();
  const setAddress = useClientStore((state) => state.setAddress);
  const setLensHandle = useClientStore((state) => state.setLensHandle);

  const handlelogin = async () => {
    const { address, lens } = await login();
    setAddress(address);
    setLensHandle(lens);

    setUserData({ address, lens });
    setLoggedIn(true);
  };

  console.log({ userData, loggedIn });

  return (
    <div className="  h-16 w-fit px-2 py-1 bg-brandbutton justify-center items-center flex rounded-xl">
      {!loggedIn ? (
        <button onClick={handlelogin} className="text-3xl text-brand">
          Connect
        </button>
      ) : (
        <span className="text-3xl text-brand">{userData?.lens} </span>
      )}
    </div>
  );
};

export default Wallet;
