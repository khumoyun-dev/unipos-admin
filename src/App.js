import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import useToken from "./hooks/useToken";
import Auth from "./screens/Auth/Auth";
import Home from "./screens/Home/Home";

function App() {
  const [token] = useToken();

  if (token) {
    return (
      <>
        <div className="app">
          <Sidebar />
          <div className="main">
            <Navbar />
            <Home />
          </div>
        </div>
      </>
    );
  } else {
    return <Auth />;
  }
}

export default App;
