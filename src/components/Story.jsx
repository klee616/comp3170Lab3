import StoryImage from "./StoryImage"
import StoryContent from './StoryContent'
import React, { useRef, useEffect } from 'react';

export default function Story({ story }) {
   
  const myRef = useRef(null);
    
    useEffect(() => {
        myRef.current.addEventListener('click', handleClick);
        return () => {
          myRef.current.removeEventListener('click', handleClick);
        };
      }, []);
    

      const handleClick = (event) => {
        console.log('Clicked!');
        console.log(event);

        let parentEle = event.target.parentNode;

        do{
            parentEle = parentEle.parentNode;
        }while(parentEle.className  != "story-block" || parentEle==null)
        
            parentEle.style.display = "none";


      };

    return (<>

        <div className="story-block">
            <StoryImage imagePath={story.image_url} />
            <StoryContent story={story} />
            <span className="span sss">
                <button  ref={myRef}>X</button>
            </span>
        </div>
    </>)
}