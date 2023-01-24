import { useCallback, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  IoLogoApple,
  IoLogoAndroid,
  IoVolumeMuteSharp,
  IoVolumeHighSharp,
} from "react-icons/io5";
import homeVideo from "../assets/homeVideo.mp4";
import { endHandler, moveHandler, startHandler } from "./utilities/funcs";
const IntroPage = () => {
  const observer = useRef(null);
  const [play, setPlay] = useState(true)
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(false);
  const btnRef = useRef(null)
  const onVolumePress = (node) => {
    if (videoRef.current.muted && play) {
      videoRef.current.muted = false;
      setVolume(true);
    } else {
      videoRef.current.muted = true;
      setVolume(false);
    }
  };
  const videoToggle = ()=>{
    if(videoRef.current && play){
      videoRef.current.pause()
      setPlay(false)
    } else {
      setPlay(true)
      videoRef.current.play()
    }
  }
  // useEffect(()=>{
  //   if(videoRef.current && isVideoPlaying){
  //     console.log('tested')
  //     videoRef.current.play()
  //   }
  // },[isVideoPlaying])

  const downloadIcons = [
    {
      icon: <IoLogoApple />,
      name: "App Store",
      url: "apps.apple.com/us/app/synando/id6443847115",
    },
    {
      icon: <IoLogoAndroid />,
      name: "Android APK",
      url: "drive.google.com/file/d/1xWERForrzBnnHQwYvzHlIITsJ80MRzLE/view?usp=sharing",
    },
  ];
  const mobileBtn = [
    {
      data: "volume",
      type: "click",
    },
    {
      icon: <IoLogoApple />,
      url: "apps.apple.com/us/app/synando/id6443847115",
      type: "visit",
      name: "Apple",
    },
    {
      icon: <IoLogoAndroid />,
      name: "Android",
      url: "drive.google.com/file/d/1xWERForrzBnnHQwYvzHlIITsJ80MRzLE/view?usp=sharing",
      type: "visit",
    },
  ];
  return (
    <div className="introPage">
      <img src="favicon.ico" alt="logo" className="logo" />
      <div className="mobileBtn">
        {mobileBtn.map((item, i) =>
          item.type === "click" ? (
            <div className="mobileIcon" key={i}>
              {volume ? (
                <IoVolumeHighSharp
                  className="icon"
                  key={i}
                  onClick={onVolumePress}
                />
              ) : (
                <IoVolumeMuteSharp
                  className="icon"
                  key={i}
                  onClick={onVolumePress}
                />
              )}
              <div className='iconText'>Sound</div>
            </div>
          ) : (
            <a
              href={`https://www.${item.url}`}
              rel="noreferrer"
              target="_blank"
              className="mobileIcon"
              key={i}
            >
              <div className="icon">{item.icon}</div>
              <div className='iconText'>{item.name}</div>
            </a>

          )
        )}
      </div>

      <div className=" large">
        <div className="introPageLarge">
          <div className="homeText">
            <h2>
              Join The World First <br /> Real Life Social NEtwork
            </h2>
            <div className="experience">
              Experience Real{" "}
              <span className="words">
                <span>Privacy</span>
                <span>Networks</span>
                <span>Social</span>
                <span>Connections</span>
                <span>Privacy</span>
              </span>
            </div>
          </div>
          <div className="downloadIcons">
            {downloadIcons.map((item, i) => (
              <a
                href={`https://www.${item.url}`}
                rel="noreferrer"
                target="_blank"
                className="downloadIcon"
                key={i}
              >
                <div className="icon">{item.icon}</div>
                <p>{item.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mobile">
        <video
          ref={videoRef}
          onContextMenu={(e) => e.preventDefault()}
          muted={true}
          onClick={videoToggle}
          src={homeVideo}
          autoPlay
          loop
          alt="synando into"
        />
        <div className="downloadIcons">
          {downloadIcons.map((item, i) => (
            <a
              href={`https://www.${item.url}`}
              rel="noreferrer"
              target="_blank"
              className="downloadIcon"
              key={i}
            >
              <div className="icon">{item.icon}</div>
              <p>{item.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
