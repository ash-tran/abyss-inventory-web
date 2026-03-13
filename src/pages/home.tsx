import '../App.css'
import '../homepage.css'
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
      <div className="homepage-layout">
        <h1 className="homepage-heading">🐟Abyss Inventory</h1>
        <p className="subheading">Explore the fish index and track the creatures you've collected on your dives.</p>
        <div className="homepage-button">
          <Link to="/index"><button>Index</button></Link>
          <Link to="/inventory"><button>Inventory</button></Link>
        </div>
      </div>
    </>
  )
}

export default Home
