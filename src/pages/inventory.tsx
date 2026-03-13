import '../App.css'
import '../inventory.css'
import { useState, useRef, useEffect } from 'react'

function Inventory() {

  // handle dropdowns
  const [isFishOpen, setIsFishOpen] = useState(false)
  const [isStarOpen, setIsStarOpen] = useState(false)

  const fishRef = useRef<HTMLDivElement>(null)
  const starRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (fishRef.current && !fishRef.current.contains(event.target as Node)) 
      {
        setIsFishOpen(false)
      }
      if (starRef.current && !starRef.current.contains(event.target as Node)) 
      {
        setIsStarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])




  {/* inventory value = (mutations x stars x fish x weight) */}

  return (
    <>
    <div className="page-layout">
      <h1>Inventory</h1>
      <p>[Coming Soon]</p>

      <div className="dropdown-container">
        <div className="dropdown" ref={fishRef}>
          <p>Fish</p>
          <button className="toggle-button" onClick={() => setIsFishOpen(!isFishOpen)}>Fish</button>
            {isFishOpen && (
            
                <ul className="dropdown-menu">
                  <a><li>Fish</li></a>
                  <a><li>Fish 2</li></a>
                </ul>
          
            )}
        </div>

        <div className="dropdown" ref={starRef}>
        <p>Stars</p>
        <button className="toggle-button" onClick={() => setIsStarOpen(!isStarOpen)}>Stars</button>
          {isStarOpen && (
              <ul className="dropdown-menu">
                <a><li>x1</li></a>
                <a><li>x2</li></a>
                <a><li>x3</li></a>
              </ul>
          )}
        </div>
      </div>



    </div>
    </>
  )
}

export default Inventory
