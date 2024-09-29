
import React, { useRef, useEffect } from 'react';

export default function CloseButton({ }) {

    const myRef = useRef(null);

    useEffect(() => {
        myRef.current.addEventListener('click', handleClick);
        return () => {
            myRef.current.removeEventListener('click', handleClick);
        };
    }, []);

    const handleClick = (event) => {
        let parentEle =   event.target.parentNode;
        do {
            parentEle = parentEle.parentNode;
        } while (parentEle.className != "story-block" || parentEle == null)
        parentEle.style.display = "none";
    };

    return (<>
        <span className="span">
            <button ref={myRef}>X</button>
        </span>
    </>)
}