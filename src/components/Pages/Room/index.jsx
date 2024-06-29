import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const RoomPage = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appID = 1646915964;
    const serverSecret = "dfe35c6cc75b7c1f99b702f8e2a3fcaf";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Enter your name"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      turnOnCameraWhenJoining: true,
      showScreenSharingButton: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,

      videoResolutionList: [
        ZegoUIKitPrebuilt.VideoResolution_360P,
        ZegoUIKitPrebuilt.VideoResolution_180P,
        ZegoUIKitPrebuilt.VideoResolution_480P,
        ZegoUIKitPrebuilt.VideoResolution_720P,
      ],
      videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_360P,
    });
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div ref={myMeeting} />
    </div>
  );
};

export default RoomPage;
