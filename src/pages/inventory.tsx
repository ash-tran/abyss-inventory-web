import '../App.css'
import '../inventory.css'
import { useState, useRef, useEffect } from 'react'
import allFish from '../game-data/all-fish'
import stars from '../game-data/stars'
import mutations from '../game-data/mutations'
import type { FishWithRegions, Mutation, Star } from '../types/game-data'
// import regions from '../game-data/regions'

function Inventory() {

  // handle dropdown closing
  const [isFishOpen, setIsFishOpen] = useState(false)
  const [isStarOpen, setIsStarOpen] = useState(false)
  const [isMutationOpen, setIsMutationOpen] = useState(false)

  const fishRef = useRef<HTMLDivElement>(null)
  const starRef = useRef<HTMLDivElement>(null)
  const mutationRef = useRef<HTMLDivElement>(null)

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
      if (mutationRef.current && !mutationRef.current.contains(event.target as Node)) 
      {
        setIsMutationOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // handle dropdown selections
  const [selectedFish, setSelectedFish] = useState<FishWithRegions | null>(null);
  const [selectedStar, setSelectedStar] = useState<Star | null>(null);
  const [selectedMutation, setSelectedMutation] = useState<Mutation | null>(null);

  const handleSelectFish = (fish: FishWithRegions) => {
    setSelectedFish(fish);
    setIsFishOpen(false);
  };

   const handleSelectMutation = (mutation: Mutation) => {
    setSelectedMutation(mutation);
    setIsMutationOpen(false);
  };

  const handleSelectStar = (star: Star) => {
    setSelectedStar(star);
    setIsStarOpen(false);
  };


  {/* inventory value = (mutations x stars x fish x weight) */}

  return (
    <>
    <div className="page-layout">
      <h1>Inventory</h1>
      <p>[Coming Soon]</p>

      <div className="dropdown-container">

        {/* fish dropdown */}
        <div className="dropdown" ref={fishRef}>
          <p>Fish</p>
          <button className="toggle-button" onClick={() => setIsFishOpen(!isFishOpen)}>
            {selectedFish ? `${selectedFish.name} (${selectedFish.price}/kg)`  : "Select Fish"}
          </button>
            {isFishOpen && (
              
              <ul className="dropdown-menu">
                {allFish.map((fish) => (
                  <a onClick={() => handleSelectFish(fish)}>
                    <li>{fish.name} ({fish.price}/kg)</li>
                  </a>
                ))}
              </ul> 
            )}
            </div>

            {/* display full fish information */}
            <div>
              {selectedFish ? (
                <div className="full-fish-information">
                  <img
                    className="fish-image"
                    src={selectedFish.image}
                    alt={selectedFish.name}
                    width={100}
                  />
                  <p>{`${selectedFish.name} | ${selectedFish.rarity} | ${selectedFish.weight.join("/kg - ")}/kg | (${selectedFish.price}/kg)`}</p>
                </div>
              ) : null}

        </div>

         {/* mutation dropdown */}
        <div className="dropdown" ref={mutationRef}>
        <p>Mutation</p>
        <button className="toggle-button" onClick={() => setIsMutationOpen(!isMutationOpen)}>
          {selectedMutation ? `${selectedMutation.rarity} (x${selectedMutation.multiplier})`  : "Select Mutation"}
        </button>
          {isMutationOpen && (
              <ul className="dropdown-menu">
                {mutations.map((mutation) => (
                  <a onClick={() => handleSelectMutation(mutation)}>
                    <li>{mutation.rarity} (x{mutation.multiplier})</li>
                  </a>
                ))}
              </ul>
          )}
        </div>

        {/* star dropdown */}
        <div className="dropdown" ref={starRef}>
        <p>Stars</p>
        <button className="toggle-button" onClick={() => setIsStarOpen(!isStarOpen)}>
          {selectedStar ? `${selectedStar.value} Stars (x${selectedStar.multiplier})`  : "Select Mutation"}
        </button>
          {isStarOpen && (
              <ul className="dropdown-menu">
                {stars.map((star) => (
                  <a onClick={() => handleSelectStar(star)}>
                    <li>{star.value} Stars (x{star.multiplier})</li>
                  </a>
                ))}
              </ul>
          )}
        </div>




      </div>



    </div>
    </>
  )
}

export default Inventory
