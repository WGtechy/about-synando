import { useRef, useState, useEffect } from "react";
import {
  IoLogoApple,
  IoLogoAndroid,
  IoVolumeMuteSharp,
  IoVolumeHighSharp,
  IoShareSocialSharp,
  IoCloudDownloadSharp
} from "react-icons/io5";
import homeVideo from "../assets/homeVideo.mp4";

const IntroPage = ({observer}) => {
  const [play, setPlay] = useState(true)
  const videoRef = useRef(null);
  const [volume, setVolume] = useState(false);
  const [share, setShare] = useState(false)

  useEffect(()=>{
    if(navigator.share){
      setShare(true)
    } else { setShare(false)}
  },[])

  const onVolumePress = (node) => {
    if (videoRef.current.muted && play) {
      videoRef.current.muted = false;
      setVolume(true);
    } else {
      videoRef.current.muted = true;
      setVolume(false);
    }
  };

  const shareHandler = ()=>{
    const file= homeVideo;
    // console.log(navigator, {share: navigator?.share}, homeVideo, files)
    let url = 'https://synando.netlify.app';
     if (navigator.share && navigator?.canShare({file})){
      navigator.share({
        file,
        url: 'https://www.synando.com'
      }).then(()=>console.log('Thank you for sharing')).catch(error=>console.log('Sorry could not share, please try again later', error))
    } else 
    if(navigator.share) {
       navigator.share({
        url,
        file
      }).then(()=>console.log('Thank you for sharing')).catch(error=>console.log('Sorry could not share, please try again later', error))

    } else { console.log('Not supported')}
  }
  const videoToggle = ()=>{
    if(videoRef.current && play){
      videoRef.current.pause()
      setPlay(false)
    } else {
      setPlay(true)
      videoRef.current.play()
    }
  }

  const downloadIcons = [
    {
      icon: IoLogoApple,
      name: "IOS",
      url: "https://apps.apple.com/us/app/synando/id6443847115",
    },
    {
      icon: IoLogoAndroid,
      name: "Android",
      url: "https://drive.google.com/file/d/1xWERForrzBnnHQwYvzHlIITsJ80MRzLE/view?usp=sharing",
    },
    {
      name: "Share",
      icon: IoShareSocialSharp,
      display: share,
      clickHandler: shareHandler
    },
  ];
  const mobileBtn = [
    {
      icon: volume ? IoVolumeHighSharp : IoVolumeMuteSharp,
      clickHandler: onVolumePress,
      name: "Sound",
      display: true,
      type: "click",
    },
     {
      name: "Share",
      type: "click",
      icon: IoShareSocialSharp,
      display: share,
      clickHandler: shareHandler
    },
    {
      icon: IoCloudDownloadSharp,
      url: "https://apps.apple.com/us/app/synando/id6443847115",
      type: "visit",
      name: "Download",
      display: navigator.appVersion.includes('Mac')
    },
    {
      icon: IoCloudDownloadSharp,
      name: "Download",
      url: "https://drive.google.com/file/d/1xWERForrzBnnHQwYvzHlIITsJ80MRzLE/view?usp=sharing",
      type: "visit",
      display: navigator.appVersion.includes('Android')

    },
  ];
  return (
    <div className="introPage" ref={observer}>
      <img src="favicon.ico" alt="logo" className="logo" />
      {/* <div className="mobileBtn">
        {mobileBtn.map((item, i) =>
          item.type === "click" ? (
            item.display && <div className="mobileIcon" key={i}>
            <item.icon
                  className="icon"
                  key={i}
                  onClick={item.clickHandler}
                />
              <div className='iconText'>{item.name}</div>
            </div>
          ) : (
            item.display && <a
              href={item.url}
              rel="noreferrer"
              target="_blank"
              className="mobileIcon"
              key={i}
            >
              <div className="icon"><item.icon /></div>
              <div className='iconText'>{item.name}</div>
            </a>

          )
        )}
      </div> */}

      <div className=" largeAndMobile">
        <div className="introPageLarge">
          <div className="homeText">
            <h2>
              Join The World First <br /> Real Life Social Network
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
          <div className='contentText'>
          With Synando, you will see what's closest to you. You will see who's closer to you.  You will have control and comfort to share personal stories, and inspire your friends without feeling like you're talking to a stranger; control your world.
          </div>
          <div className="downloadIcons">
            {downloadIcons.map((item, i) => (
              item?.url ? <a
                href={item.url}
                rel="noreferrer"
                target="_blank"
                className="downloadIcon"
                key={i}
              >
                <div className="icon"><item.icon /></div>
                <p>{item.name}</p>
              </a> : 
              item?.clickHandler && item?.display && <div className='downloadIcon' 
              key={i}
               onClick={item.clickHandler}
               >
               <div className='icon'><item.icon /></div>
                 <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="mobile">
        <video
          ref={videoRef}
          onContextMenu={(e) => e.preventDefault()}
          muted={true}
          onClick={videoToggle}
          src={homeVideo}
          autoPlay
          loop
          alt="synando into"
          preload='auto'
          playsInline
        >
        <div className="downloadIcons">
            {downloadIcons.map((item, i) => (
              item?.url ? <a
                href={item.url}
                rel="noreferrer"
                target="_blank"
                className="downloadIcon"
                key={i}
              >
                <div className="icon"><item.icon /></div>
                <p>{item.name}</p>
              </a> : 
              item?.clickHandler && item?.display && <div className='downloadIcon' 
              key={i}
               onClick={item.clickHandler}
               >
               <div className='icon'><item.icon /></div>
                 <p>{item.name}</p>
              </div>
            ))}
          </div>
        </video>
      </div> */}
    </div>
  );
};

export default IntroPage;
