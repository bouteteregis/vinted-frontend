import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Header from "./containers/Header";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );

    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (isLoading ? (
    <div>En cours de chargement...</div>
  ) : (
    <div className="App">
      <header class="Header">
        <div className="">
          <div className="">
            <Header />
          </div>
        </div>
      </header>
      <div>{isHome ? <Home /> : <Offer />}</div>
    </div>
  );
}

export default App;
