
import {useEffect} from "react";

export const useScrollLock = (isOpen: boolean) => {
    useEffect(() => {

        if (!isOpen) return;

        const Overflow = document.body.style.overflow;

        document.body.style.overflow="hidden";

       return ()=> {
           document.body.style.overflow = Overflow;
       }

    }, [isOpen]);
}