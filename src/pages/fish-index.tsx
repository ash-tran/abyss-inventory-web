import forgottenDeep from '../game-data/forgotten-deep'
import ancientSands from '../game-data/ancient-sands'
import ocean from '../game-data/ocean'
import spiritRoots from '../game-data/spirit-roots'
import sunkenWilds from '../game-data/sunken-wilds'
import anglerCave from '../game-data/angler-cave'
import '../App.css'
import '../fish-index.css'


function Index() {

  // regions
  const regions = [
    { name: "Forgotten Deep", data: forgottenDeep },
    { name: "Ancient Sands", data: ancientSands },
    { name: "Ocean", data: ocean },
    { name: "Spirit Roots", data: spiritRoots },
    { name: "Sunken Wilds", data: sunkenWilds },
    { name: "Angler Cave", data: anglerCave }
  ];

  // store unique fish by name
  const fishMap = new Map<string, fishWithRegions>();

  for (const region of regions) 
  {
    for (const fish of region.data) 
    {
      if (fishMap.has(fish.name)) 
      {
        const existingFish = fishMap.get(fish.name)!;
        existingFish.regions.push(region.name);
      } 
      else 
      {
        fishMap.set(fish.name, { ...fish, regions: [region.name] });
      }
    }
  }

  // sort by price descending
  // need to implement further sorting for the table
  const allFish = Array.from(fishMap.values()).sort((a, b) => b.price - a.price);

  return (
    <>
    <div className="page-layout">
        <div>
          <h1>Index</h1>
          <p className="version">{allFish.length} Fish</p>
          <p className="version">Version: 03/07/2026 (Fish Pond Update)</p>
        </div>
      
    <table className="fish-table">
      <thead>
        <tr>
          <th className="fish-header">Fish</th>
          <th className="fish-header">Rarity</th>
          <th className="fish-header">Region</th>
          <th className="fish-header">Weight</th>
          <th className="fish-header">Price (kg)</th>
        </tr>
      </thead>
      <tbody>
        {allFish.map((fish) => (
          <tr key={fish.name}>
            <td>
              <div className="fish-image">
                  <img src={fish.image} alt={fish.name} width="100" />
                  <p>{fish.name}</p>
              </div>
            </td>  
            <td>
              <div className={fish.rarity.toLowerCase()}>
                {fish.rarity}
              </div>
            </td> 
            <td>
              <div className="region-tags">
                {fish.regions.map((region, index) => (
                  <span key={index} className="region-tag">
                    {region}
                  </span>
                ))}
              </div>
            </td>
            <td>{fish.weight.join("/kg - ")}/kg</td>
            <td>{fish.price}/kg</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default Index
