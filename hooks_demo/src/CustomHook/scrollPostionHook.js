import { useState,useEffect } from "react";
function GetScrollPostion(){
    const [scrollPositon, setScrollPositon] = useState(0);
    useEffect(() => {  
        const handleScroll = () => {
            setScrollPositon(window.scrollY)
        }
        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return scrollPositon
}

export default GetScrollPostion