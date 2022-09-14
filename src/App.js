import requests from "./requests";
import Row from "./Row";

//  api key:
function App() {
  return (
    <div className="App">
      <Row 
      title="Netflix Originals"
      fetchapi={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Row
      title="Trending"
      fetchapi={requests.fetchTrending}/>
       <Row 
      title="Top Rated"
      fetchapi={requests.fetchTopRated}/>
       <Row 
      title="Action Movies"
      fetchapi={requests.fetchActionMovies}/>
       <Row 
      title="Comedy Movies"
      fetchapi={requests.fetchComedyMovies}/>
       <Row 
      title="Horror Movies"
      fetchapi={requests.fetchHorrorMovies}/>
       <Row 
      title="Romance Movies"
      fetchapi={requests.fetchRomanceMovies}/>
       <Row 
      title="Documentaries"
      fetchapi={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
