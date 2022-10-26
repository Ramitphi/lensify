import { useHuddleStore } from "@huddle01/huddle01-client/hooks";
import React, { useCallback, useEffect, useRef } from "react";

interface Props {
  peerIdAtIndex: string;
}

const PeerVideoAudioElem: React.FC<Props> = ({ peerIdAtIndex }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const peerCamTrack = useHuddleStore(
    useCallback(
      (state) => state.peers[peerIdAtIndex]?.consumers?.cam,
      [peerIdAtIndex]
    )
  )?.track;

  const peerMicTrack = useHuddleStore(
    useCallback(
      (state) => state.peers[peerIdAtIndex]?.consumers?.mic,
      [peerIdAtIndex]
    )
  )?.track;

  const getStream = (_track: MediaStreamTrack) => {
    const stream = new MediaStream();
    stream.addTrack(_track);
    return stream;
  };

  useEffect(() => {
    const videoObj = videoRef.current;

    if (videoObj && peerCamTrack) {
      videoObj.load();
      videoObj.srcObject = getStream(peerCamTrack);
      videoObj.play().catch((err) => {
        console.log({
          message: "Error playing video",
          meta: {
            err,
          },
        });
      });
    }

    return () => {
      if (videoObj) {
        videoObj?.pause();
        videoObj.srcObject = null;
      }
    };
  }, [peerCamTrack]);

  useEffect(() => {
    if (peerMicTrack && audioRef.current) {
      audioRef.current.srcObject = getStream(peerMicTrack);
    }
  }, [peerMicTrack]);

  return (
    <div>
      <video
        ref={videoRef}
        muted
        autoPlay
        playsInline
        style={{ width: "50%" }}
      />
      <img src="" id="musicanimation" className="w-10" />
      <audio
        ref={audioRef}
        autoPlay
        playsInline
        controls={false}
        onPlaying={() => {
          var imageId = document.getElementById("musicanimation");
          var audioimageId = imageId as HTMLAudioElement;

          audioimageId.src = "./src/assets/music.gif";
        }}
        onPause={() => {
          var imageId = document.getElementById("musicanimation");
          var audioimageId = imageId as HTMLAudioElement;

          audioimageId.src = "";
        }}
      ></audio>
    </div>
  );
};

export default React.memo(PeerVideoAudioElem);
