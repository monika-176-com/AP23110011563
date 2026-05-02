import { useEffect } from "react";
import { Log } from "./utils/logger";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    Log("frontend", "info", "component", "App loaded");
  }, []);

  return <Home />;
}

export default App;