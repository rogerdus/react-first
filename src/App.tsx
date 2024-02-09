import { LaunchList } from "./components/LaunchList.jsx";
import { LaunchDetails } from "./components/LaunchDetails.jsx";
import { RocketDetails } from "./components/RocketDetails.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="/launch/:launchId" element={<LaunchDetails />} />
        <Route path="/rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}

export default App;
