import { useEffect, useRef, useState } from "react";

import {
  HuddleClientProvider,
  getHuddleClient,
  useRootStore,
} from "@huddle01/huddle01-client";
import PeerVideoAudioElem from "./components/PeerVideoAudioElem";
import Setup from "./components/Setup";
import Navbar from "./components/Navbar";
import Wallet from "./components/Wallet";
import LandingIcons from "./assets/LandingIcons";
import useClientStore from "./store/useClientStore";

function App() {
  const huddleClient = getHuddleClient("ramit");
  const stream = useRootStore((state) => state.stream);

  const enableStream = useRootStore((state) => state.enableStream);
  const pauseTracks = useRootStore((state) => state.pauseTracks);
  const isCamPaused = useRootStore((state) => state.isCamPaused);
  const peers = useRootStore((state) => state.peers);
  const peerId = useRootStore((state) => state.peerId);
  const lobbyPeers = useRootStore((state) => state.lobbyPeers);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const roomState = useRootStore((state) => state.roomState);
  const address = useClientStore((state) => state.address);

  const micState = useRootStore((state) => state.micState);

  console.log({ micState });

  const videoRef = useRef<HTMLVideoElement>(null);

  console.log({ address });

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.srcObject = stream;
  //   }
  // }, [stream]);

  useEffect(() => {
    console.log({ peers: Object.values(peers), peerId, isCamPaused });
  }, [peers, peerId, isCamPaused]);

  return (
    <HuddleClientProvider value={huddleClient}>
      {/* Navabr */}
      <div className="bg-brand min-h-screen">
        <div className="flex justify-center items-center">
          <span className="h-3/4"> {LandingIcons.icon}</span>
          <p className="text-lenstext text-3xl m-2 flex justify-center py-2">
            Lensify
          </p>
        </div>

        <div className="flex flex-col m-20 items-center">
          <Wallet />
        </div>

        <div className="bg-brand h-full ">
          <div className="flex flex-col h-full w-full my-20 items-center">
            {/* // host */}
            <div className="bg-[#E5FFBE] rounded-md w-1/3 h-56 backdrop-blur-md flex justify-center items-center">
              {LandingIcons.avatar}
            </div>
            {lobbyPeers[0] && <h2>Lobby Peers</h2>}
            <div>
              {lobbyPeers.map((peer) => (
                <div>{peer.peerId}</div>
              ))}
            </div>

            {Object.values(peers)[0] && <h2>Peers</h2>}

            <div className="peers-grid grid-flow-col">
              {Object.values(peers).map((peer, i) => (
                <>
                  <PeerVideoAudioElem peerIdAtIndex={peer.peerId} />

                  <div className="bg-yellow-200">{`Peer` + i}</div>
                </>
              ))}
            </div>
            <br />

            {!roomState.joined && <Setup huddleClient={huddleClient} />}

            <div className="flex">
              <button
                className="p-2 m-1 rounded-lg bg-brandbutton text-brand font-semibold"
                onClick={() => enableStream()}
              >
                Enable Stream
              </button>
              <button
                className="p-2  m-1 rounded-lg bg-brandbutton text-brand font-semibold"
                onClick={() => pauseTracks()}
              >
                Disable Stream
              </button>
            </div>

            {roomState.joined && (
              <button
                className="p-2 rounded-lg bg-brandbutton text-brand font-semibold"
                onClick={() => huddleClient.allowAllLobbyPeersToJoinRoom()}
              >
                allowAllLobbyPeersToJoinRoom()
              </button>
            )}
            {/* <UserProfile /> */}

            <button
              type="button"
              onClick={() => huddleClient.enableShare()}
              className="bg-green-200 "
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </HuddleClientProvider>
  );
}

export default App;
