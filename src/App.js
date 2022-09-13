import requests from "./requests";
import Row from "./Row";

//  api key:
function App() {
  return (
    <div className="App">
      <Row 
      title="Netflix Originals"
      fetchapi={requests.fetchNetflixOriginals}/>
      <Row
      title="Trending"
      fetchapi={requests.fetchTrending}/>
    </div>
  );
}

export default App;
