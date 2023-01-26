import {useCallback, useRef} from "react";
import page1 from "../assets/page1.jpg";
import page2 from "../assets/page2.jpg";
import page3 from "../assets/page3.jpg";
import page4 from "../assets/page4.jpg";

const AppTemplatePage = () => {

  const observer = useRef(null)

const viewElement = useCallback(node=>{
  if(observer.current) observer.current.disconnect();
  observer.current = new IntersectionObserver(entries=>{
    console.log(node)
    entries.forEach(entry=>{
      if(entry.isIintersecting){
        entry.target.classList.add('show')
      }else {
        entry.target.classList.remove('show')
      }
    });
    }
  )
},[observer])

console.log(observer)
  
  const images = [page1, page2, page3, page4]
  return (
    <div className=" appTemplatePage" ref={viewElement} >
      <div className="large">
        <div className="content">
          <h3>Share your personal stories and inspire real connections</h3>
          
        </div>
        <div className="appImage">
        {images.map((item,i)=><img src={item} key={i} className="page" alt={`page${i}`}  onContextMenu={(e)=>e.preventDefault()} />)}
        </div>
      </div>
      <div className="mobile">
        <div className="content">
          <h3>Share your personal stories and inspire real connections</h3>
          
        </div>
        <div className="tempContainer">
        {images.map((item,i)=><img src={item} key={i} className="image" alt={`page${i}`}  onContextMenu={(e)=>e.preventDefault()} />)}
        </div>
      </div>
    </div>
  );
};

export default AppTemplatePage;
