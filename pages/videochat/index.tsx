import Webcam from "react-webcam";
import React from "react";

export default function VideoChat() {
  const webCamRef = React.useRef(null);

  return (
    <div>
      <Webcam ref={webCamRef} />;
    </div>
  );
}
