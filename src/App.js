import "./index.css";
import "./assets/styles/main.scss";
import Layout from "./layouts/layout";
import Footer from "./layouts/footer/footer";
import Sidebar from "./layouts/sidebar/sidebar";
import AppRouter from "./router";

function App() {
  return (
    <div>
      <Sidebar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
