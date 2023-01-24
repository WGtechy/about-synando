import {useEffect, useRef} from "react";
import { motion } from "framer-motion";
import people from "../assets/people.jpg";
import synandoSocial from "../assets/synandoSocial.png";
import { endHandler, moveHandler, startHandler } from "./utilities/funcs";

const SocialInteraction = () => {
    
  const observer = useRef(null)

  return (
    <div className="socialInteraction"
    
 onTouchStart={(e)=>startHandler(e, observer.current.style)} 
    onTouchMove={(e)=>moveHandler(e, observer.current.style)} 
    onTouchEnd={(e)=>endHandler(e, observer.current.style)}
    ref={observer}>
      <div className="content">
        <h3>
          Experience authentic social experience and privacy{" "}
        </h3>
        <br />
        <div className="experience">Real-life secure connections for Business, Social, Friendship and Family </div>
      </div>
      <img src={people} className='peopleImg large' alt='people' onContextMenu={(e)=>e.preventDefault()} />
      <img src={synandoSocial} className='peopleImg mobile' alt='people'  onContextMenu={(e)=>e.preventDefault()} />
    </div>
  );
};

export default SocialInteraction;
