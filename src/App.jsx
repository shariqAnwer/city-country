import { Route,  Routes } from "react-router-dom";
import "./App.css";
import AddCity from "./components/AddCity";
import { Navbar } from "./components/Navbar";
import Table from "./components/Table";
import AddCountry from "./components/AddCountry";
function App() {
  return (
    <div className="App">
      <Navbar />
         <Routes>
        <Route path="/Home" element={<Table/>}></Route>
        <Route path="/City"element={<AddCity/>}></Route>
        <Route path="/Country" element={<AddCountry/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
