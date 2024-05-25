import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full">
      <Header />
      <div className="flex">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default App;
