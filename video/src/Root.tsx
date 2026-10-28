import React from "react";
import { Composition } from "remotion";
import { NyayaCrossVideoWalkthrough } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="NyayaCrossWalkthrough"
        component={NyayaCrossVideoWalkthrough}
        durationInFrames={2100}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
