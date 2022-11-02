import './style.css';
import data from "./data"

import Header from "./components/Header"
import Card from './components/Card';

function App() {

    const cards = data.map((item) => {
    return (
      <Card
      key={item.id}
        title={item.title}
        imageUrl={item.imageUrl}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
      />
    )
  })

  return (
    <div>
      <Header/>
      <div className="cards-container">
        {cards}
      </div>
      
    </div>
  )
}

export default App;
