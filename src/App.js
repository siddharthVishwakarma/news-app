import Navbar from "./components/Navbar";
import News from "./components/News";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={<News key="general" pageSize={9} category="general" />}
        />
        <Route
          exact
          path="/health"
          element={<News key="health" pageSize={9} category="health" />}
        />
        <Route
          exact
          path="/technology"
          element={<News key="technology" pageSize={9} category="technology" />}
        />
        <Route
          exact
          path="/business"
          element={<News key="business" pageSize={9} category="business" />}
        />
        <Route
          exact
          path="/sports"
          element={<News key="sports" pageSize={9} category="sports" />}
        />
        <Route
          exact
          path="/science"
          element={<News key="science" pageSize={9} category="science" />}
        />
      </Routes>
    </div>
  );
}

export default App;
