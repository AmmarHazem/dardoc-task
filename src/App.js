import "./assets/styles/App.css";
import "antd/dist/antd.css";
import "./assets/styles/main.scss";
import Home from "./routes/Home";
import useSetMovieGenres from "./customHooks/useSetMovieGenres";
import Loading from "./components/Loading";

function App() {
  const [loading] = useSetMovieGenres();

  return (
    <div className="App">
      {loading ? (
        <div className="w-100 flex justify-center pt-3">
          <Loading size={80} />
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
