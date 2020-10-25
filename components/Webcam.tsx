import React, { useState, useEffect, useRef } from "react";
import { Spinner } from "react-bootstrap";

export default function Webcam() {
  const [mediaStream, setMediaStream] = useState<MediaStream>();
  const CAPTURE_OPTIONS = { video: true, audio: true };
  const videoRef = useRef<HTMLVideoElement>();

  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(
          CAPTURE_OPTIONS
        );

        setMediaStream(stream);

        videoRef.current.srcObject = stream;
      } catch (err) {}
    }

    if (!mediaStream) {
      enableStream();
    } else {
      return function cleanup() {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      };
    }
  }, [mediaStream]);

  const handleCanPlay = async () => {
    await videoRef.current.play();
  };

  if (!mediaStream) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <div className="content-container">
        <video
          ref={videoRef}
          onCanPlay={handleCanPlay}
          autoPlay
          playsInline
          muted
        ></video>
        <button onClick={handleCanPlay}>Retry Play</button>
      </div>
    );
  }
}
