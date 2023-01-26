import people from "../assets/people.jpg";

import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineRssFeed, MdVerified } from "react-icons/md";


const Features = ({observer}) => {
  const cards = [
    {
      icon: <FaRegHandshake />,
      title: "Meetup users",
      description:
        'Synando allows users to add people within a 10ft interactiton zone called "Meetup" ',
      className: "comment1",
      list: [
        "No more fake accounts- you know who you are adding and easily meetup",
        "Reduce cyber-bullying, trolling, and cat fishing",
      ],
    },
    {
      icon: <MdOutlineRssFeed />,
      title: "Multiple Newsfeed",
      description:
        " You can add your meetups (contacts) to one of 5 different news feeds",
      className: "comment2",
      list: [
        "Social",
        "Business",
        "Personal",
        "Family",
        "Plus a fully customized feed",
      ],
    },
    {
      icon: <MdVerified />,
      title: "Verified Profiles",
      description:
        "Veirified accounts can allow your fans to follow and trust your content",
      className: "comment3",
      list: [
        "Create comunities",
        "More User Generated Content",
        "Verified status - No fake account",
      ],
    },
  ];
  return (
    <div className="features" ref={observer}>
      <div className="large">
        <div className="content">
          {cards.map((item, i) => (
            <div className="section" key={i}>
              <div className="icon">{item.icon}</div>
              <div className="title">{item.title}</div>
              <div className="card">
                <div className="description">{item.description}</div>
                <ul>
                  {item.list.map((li, i) => (
                    <li className="list" key={i}>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mobile">
        <div className="content">
        <div className='sectionContainer'>
          {cards.map((item, i) => (
            <div className={`section ${item.className}`} key={i}>
              <div className="title">
                {" "}
                <span className="icon">{item.icon} </span> {item.title}
              </div>
              <div className="info">
                <div className="description">{item.description}</div>
                <ul>
                  {item.list.map((li, i) => (
                    <li className="list" key={i}>
                      {li}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          </div>
         
        </div>
          <img
        src={people}
        className="peopleImg mobile"
        alt="people"
        onContextMenu={(e) => e.preventDefault()}
      />
      </div>
     
    </div>
  );
};

export default Features;
