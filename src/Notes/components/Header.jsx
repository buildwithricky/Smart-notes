import React from 'react'
import Darkmode from "./Darkmode.jsx";
import Settings from './settings.jsx';

const Header = ({theme ,setTheme,setSettings,settings}) => {
    
    return (
        <div>
             <header className="section-header">
          <h1 style={{ color: "#fff" }}>Notes</h1>
          <Darkmode change={setTheme} checked={theme} size={60} />
        <Settings setSettings={setSettings}
        settings={settings}
        />
        </header>
        </div>
    )
}

export default Header
