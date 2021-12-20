import Navbar from "./components/Navbar";
import News from "./components/News";

function App() {
  return (
    <div>
      <Navbar />
      <News pageSize={9} />
    </div>
  );
}

export default App;
