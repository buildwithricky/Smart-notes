import React , {useState,useEffect,useRef}from 'react'
import { FiSettings } from "react-icons/fi";

const Settings = ({setSettings,settings}) => {
    const [showSettings,setShowSettings] = useState(false)
   const [dropDown, setDropDown] = useState({
      
       font:false,
   })
  
   const [showPicker,setShowPicker] = useState(false);
   const [showPicker2,setShowPicker2] = useState(false);
    // click out handler
    function useOutsideAlerter(ref){
        useEffect(()=>{
            function handleClickOutside(event){
                if(ref.current && !ref.current.contains(event.target)){     
                    setShowSettings(false)
                }
            }
            document.addEventListener("mousedown",handleClickOutside)
return ()=>{
    document.removeEventListener("mousedown",handleClickOutside)
}
        },[ref])
    }
    
    const wrapperRef =useRef(null)
    useOutsideAlerter(wrapperRef)
    const colorRef = useRef(null)
  
   
    const dropDownHandlerFont = ()=>{
        
        if(!dropDown.font){
            setDropDown({...dropDown,theme:false,font:true})
         }
         else if (dropDown.font){
             setDropDown({theme:false,font:false})
         }
    }
   
  
    return (
        <div ref={wrapperRef}>
             
             <div className={showSettings ?'settings-icon settings-rotate':'settings-icon'}>
             <FiSettings
             onClick={()=> {
                 if(!showSettings){
                    setShowSettings(true)
                 }
                 else{
                     setShowSettings(false)
                 }
                
             }}
             />
             
                 </div>
                 <div className={showSettings ?'settings-menu show-menu':'settings-menu'}>
                 <ul>
                    
                         
                         
                    
                     <li
                     onClick={()=>{
                    dropDownHandlerFont();
                        }}
                     ><a>fonts</a>
                     <ul className={`${dropDown.font ? 'hidden display' : 'hidden'}`}>
                         <li><a></a></li>
                         <li><a>light</a></li>
                         <li><a>inverted</a></li>
                     </ul>
                     </li>
                     {/* refactor ineffiecient code */}
                     <li onClick={()=>{
                         if(!showPicker){
                             setShowPicker(true);
                         }
                         else{
                             setShowPicker(false)
                         }
                     }} >Note background</li>{ showPicker && <input type='color'  onChange={(e)=>{
                         setSettings({...settings ,background:e.target.value})
                         
                         }} value={settings.background}/> }
                          <li onClick={()=>{
                         if(!showPicker){
                             setShowPicker2(true);
                         }
                         else{
                             setShowPicker2(false)
                         }
                     }} >text-color</li>{ showPicker2 && <input type='color'   onChange={(e)=>{
                        setSettings({...settings ,textColor:e.target.value})}} value={settings.background}/> }
                 </ul>
             </div>
        </div>
    )
}

export default Settings
