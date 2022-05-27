import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Navigation from "./Routes/Navigation/Navigation";

const Shop = () => {
  return (
    <div>
      <h1>I am the shop page</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App;
