import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

const useDarkMode = (initialValue) =>{
    const [value, setValue] = useLocalStorage(initialValue)
    const bodyElement = document.querySelector("body")
    useEffect(()=>{
        bodyElement.classList.toggle('darkmode')
    },[value])
    console.log(bodyElement.classList)
    return [value, setValue]
}

export default useDarkMode