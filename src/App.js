import './App.css';
import AppBar from './AppBar/AppBar';
import Banner from './Banner/Banner';
import MovieRaw from './MovieRaw';

const API_KEY = 'c21c70709242dd71f2155bc6cd121d9e';

const request = {
  trending: `trending/all/week?api_key=${API_KEY}`,
  upcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  latest: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  toRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
};

function App() {
  return (
    <div className="App">
      {/* navigation section */}
      <AppBar />

      {/* banner section */}
      <Banner />

      {/* movies rows */}
      <MovieRaw title="Trending" request={request.trending} />
      <MovieRaw title="Upcoming" request={request.upcoming} />
      <MovieRaw title="Latest" request={request.latest} />
      <MovieRaw title="Top Rated" request={request.toRated} />
    </div>
  );
}

export default App;
