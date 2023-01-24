import {useEffect} from "react";
import { motion } from "framer-motion";
import page1 from "../assets/page1.jpg";
import page2 from "../assets/page2.jpg";
import page3 from "../assets/page3.jpg";
import page4 from "../assets/page4.jpg";

const AppTemplatePage = () => {
  
  const images = [page1, page2, page3, page4]
  return (
    <div className=" appTemplatePage"  >
      <div className="large">
        <div className="content">
          <h3>Share your personal stories and inspire real connections</h3>
          
        </div>
        <div className="appImage">
        {images.map((item,i)=><img src={item} key={i} className="page" alt={`page${i}`}  onContextMenu={(e)=>e.preventDefault()} />)}
        </div>
      </div>
    </div>
  );
};

export default AppTemplatePage;
