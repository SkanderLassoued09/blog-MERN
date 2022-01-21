import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Addnew from "./pages/Addnew";
import Favorites from "./pages/Favorites";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addnew />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
