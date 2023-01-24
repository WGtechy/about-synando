import React from "react";
import { motion } from "framer-motion";
import { IoLogoApple, IoLogoAndroid } from "react-icons/io5";

const DownloadPage = () => {
  const downloadIcons = [
    {
      icon: <IoLogoApple />,
      name: "App Store",
      title: "Download on the",
      url: "apps.apple.com/us/app/synando/id6443847115",
    },
    {
      icon: <IoLogoAndroid />,
      name: "Android APK",
      title: "Download for android",
      url: "drive.google.com/file/d/1xWERForrzBnnHQwYvzHlIITsJ80MRzLE/view?usp=sharing",
    },
  ];
  return (
    <div className="downloadPage">
      <h4>
        Download For <br /> iOS / Android
      </h4>
      <div className="download">
        {downloadIcons.map((item, i) => (
          <a
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
