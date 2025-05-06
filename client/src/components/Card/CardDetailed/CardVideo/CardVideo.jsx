import React from "react";
import s from "./CardVideo.module.scss";
import { VideoPlayer } from "../../../VideoPlayer/VideoPlayer";

export const CardVideo = ({ type, id }) => {
  return (
    <div className={s.video}>
      <VideoPlayer type={type} id={id} />
    </div>
  );
};