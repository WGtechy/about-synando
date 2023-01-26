import people from "../assets/people.jpg";
import synandoSocial from "../assets/synandoSocial.png";

const SocialInteraction = ({observer}) => {
    
  return (
    <div className="socialInteraction" ref={observer}>
      <div className="content">
        <h3>
          Experience authentic social experience and privacy{" "}
        </h3>
        <br />
        <div className="experience">Real-life secure connections for <br />Business, Social, Friendship and Family </div>
      </div>
      <img src={people} className='peopleImg large' alt='people' onContextMenu={(e)=>e.preventDefault()} />
      <img src={synandoSocial} className='peopleImg mobile' alt='people'  onContextMenu={(e)=>e.preventDefault()} />
    </div>
  ); 
};

export default SocialInteraction;
