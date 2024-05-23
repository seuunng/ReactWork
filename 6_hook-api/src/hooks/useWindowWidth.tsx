import * as React from 'react';

const useWindowWidth =()=>{
    const[width,setWidth]=React.useState(window.innerWidth);
    const handleResize=(ev:UIEvent)=>{
        setWidth(window.innerWidth)
    }
    React.useEffect(()=>{
        window.addEventListener('resize', ()=>{
        //console.log("event : ", ev)
        setWidth(window.innerWidth)
        });
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    },[handleResize]);

    const cleanup = React.useCallback(() => {
        window.removeEventListener('resize', handleResize);
    }, [handleResize]);
    
    return {width, cleanup};
    
}
export default useWindowWidth;