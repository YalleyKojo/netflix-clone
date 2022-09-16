import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import "./App.css"
import Navbar from "./Navbar";
//  api key:
function App() {
  return (
    <div className="app">
      <Navbar/>
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS"
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
