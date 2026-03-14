import allFish from '../game-data/all-fish'
import '../App.css'
import '../fish-index.css'

function Index() {

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
