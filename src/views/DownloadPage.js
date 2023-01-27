import {useEffect, useState} from "react";
import { IoLogoApple, IoLogoAndroid } from "react-icons/io5";

const DownloadPage = ({observer}) => {
  const [text, setText] = useState('')
  const [device, setDevice] = useState('')
  useEffect(()=>{
    if(navigator.appVersion.includes('Mac')){
      setText('Download on your Apple device, Also available on Play Store');
      setDevice('Mac');
    }else if(navigator.appVersion.includes('Android')){
      setText('Download on your Android device, Also available on IOS Store');
      setDevice('Android'); 
    } else {
      setText('Available on Android and IOS Devices. Desktop and other platform coming soon')
      setDevice('desktop')
    }
  },[])
  const downloadIcons = [
    {
      icon: <IoLogoApple />,
      name: "App Store",
      title: "Download on the",
      url: "apps.apple.com/us/app/synando/id6443847115",
      display: device === 'Mac' && true
    },
    {
      icon: <IoLogoAndroid />,
      name: "Android APK",
      title: "Download for android",
      display: device === 'Android' && true,
      url: "drive.google.com/file/d/1xWERForrzBnnHQwYvzHlIITsJ80MRzLE/view?usp=sharing",
    },
     {
      icon: <IoLogoApple />,
      name: "App Store",
      title: "Download on the",
      url: "apps.apple.com/us/app/synando/id6443847115",
      display: device === 'desktop' && true
    },
    {
      icon: <IoLogoAndroid />,
      name: "Android APK",
      title: "Download for android",
      display: device === 'desktop' && true,
      url: "drive.google.com/file/d/1xWERForrzBnnHQwYvzHlIITsJ80MRzLE/view?usp=sharing",
    }
  ];


  return (
    <div className="downloadPage" ref={observer}>
      <h4>
        {text}
      </h4>
      <div className="download">
        {downloadIcons.map((item, i) => (
          item.display && <a
            href={`https://www.${item.url}`}
            rel="noreferrer"
            target="_blank"
            className="downloadIcon"
            key={i}
          >
            <div className="icon">{item.icon}</div>
            <div>
              <div className="firstText">{item.title}</div>
              <div className="secondText">{item.name}</div>
            </div>
          </a>
        ))}
      </div>

    </div>
  );
};

export default DownloadPage;
