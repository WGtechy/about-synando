// import React from "react";
// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css';
// import 'swiper/css/bundle'
// import 'swiper/css/scrollbar';
// import 'swiper/css/autoplay';
// import 'swiper/css/lazy';
// import {EffectCoverflow, Pagination, Navigation}from 'swiper';
// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa";
// const Comment = ({lastDataRefElement}) => {
//   const cards = [
//     {
//       picture: "profile1.jpg",
//       name: "Meetup to add users",
//       comment:
//         'Synando allows users to add people within a 10ft interactiton zone called "Meetup" ',
//     },
//     {
//       picture: "profile2.jpg",
//       name: "Multiple Newsfeed",
//       comment:
//         " You can add your meetups (contacts) to one of 5 different news feeds",
//     },
//     {
//       picture: "profile1.jpg",
//       name: "Verified Profiles",
//       comment:
//         "Veirified accounts can allow your fans to follow and trust your content",
//     },
//     {
//       picture: "profile2.jpg",
//       name: "Verified Profiles",
//       comment:
//         "Veirified accounts can allow your fans to follow and trust your content",
//     },
//     {
//       picture: "profile1.jpg",
//       name: "Verified Profiles",
//       comment:
//         "Veirified accounts can allow your fans to follow and trust your content",
//     },
//   ];
//   return (
//     <section className="comment" ref={lastDataRefElement}>
//     <div className='cardContainer' >
//      {cards.map((item, i) => (
//             <div className="card" key={i}>
//             <div className='cardNavigation'>
//             <div className='cardLeft'>
//             <div className="cardImage">
//                 <img src={item.picture} alt={item.name} />
//               </div>
//               <div className='userName'>{item.name}</div>
//             </div>
//             <div className='cardRight'> icon</div>
//             </div>
             
//       <div className="content">
//                <div className="title">{item.title}</div>
//                <div className='dateAndShareContainer'>
//                 <div> {item.date}</div>
//                 <div className='share'>
//                   <ShareIcon /> {item.share} Shares
//                 </div>
//                </div>

//                <div className='likeAndComment'>
//                 <div className='like'></div>
//                 <div className='comments'>
//                   <ChatIcon /> {item.comments} Comments
//                 </div>
//                </div>
//                </div>
//                <div className='rating'>
//                <FaStar /> 
//                <FaStar />
//                <FaStar />
//                <FaStar />
//                <FaStar />
//                </div>
               
//             </div>
//         ))}
//     </div>

    
//     </section>
//   );
// };

// export default Comment;
