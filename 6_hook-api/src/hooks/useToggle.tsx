import * as React from 'react';
/*
interface useToggleReturnType {
    hideCount: boolean,
    toggle : ()=>void; 
}
//다른 페이지에서 쓸수 있도록   export를 붙인다.
export function useToggle():useToggleReturnType {
    const[hideCount, setHideCount]=React.useState(false);
    const toggle = ()=>{setHideCount(!hideCount)};
    return{
        hideCount,
        toggle
    };
}*/

type useToggleReturnType =[boolean, ()=>void];
//function useToggle():useToggleReturnType {
const useToggle =(): useToggleReturnType=>{
    const[hide, setHideCount]=React.useState(false);
    const toggle = ()=>{setHideCount(!hide)};

    return [hide, toggle];
}
export default useToggle;