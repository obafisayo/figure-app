import {useState} from "react";

function useContextState() {
    const [hover, setHover] = useState(false)
    function onEnter() {
        setHover(true)
    }
    function onLeave() {
        setHover(false)
    }
    return {hover, onEnter, onLeave}
}
export default useContextState