import { useTheme } from '../hooks/useTheme'

import modeIcon from '../assets/mode-icon.svg'
import './ThemeSelector.css'

const themeColors = ['#58249c', '#249c6b', '#b70233']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  console.log(mode)

  return (
    <div className="theme-selector">
      <div className="mode-toggler">
        <img 
          src={modeIcon} 
          alt="dark/light mode toggler"  
          onClick={() => changeMode(mode === 'dark' ? 'light' : 'dark')}  
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(10%)' }}
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map(color => 
          <div 
            key={color} 
            onClick={() => changeColor(color)} 
            style={{ background: color }}
          />)}
      </div>
    </div>
  )
}
