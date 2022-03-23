import Header from "./Header";
import "./styles.css";
import Card from "./Card";
import Data from "./Data";
function App() {
  const cards = Data.map((item) => {
    return (
      <div className="card--block">
        {item.id > 1 && <hr />}
        <Card
          key={item.id}
          img={item.image}
          location={item.location}
          googleMapsUrl={item.googleMapsUrl}
          title={item.title}
          startDate={item.startDate}
          endDate={item.endDate}
          description={item.description}
        />
      </div>
    );
  });
  return (
    <div className="App">
      <Header />
      {cards}
    </div>
  );
}

export default App;
