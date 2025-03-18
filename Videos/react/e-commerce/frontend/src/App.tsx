import Nav from "./pages/Nav/Nav"
import Footer from "./pages/Footer/Index"
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "~react-pages";


const AppRoutes = () => {
  // Debugging output
  return useRoutes(routes);
};

const App = () => {
  return (
    <div className="p-0 font-Epilogue  ">
      <BrowserRouter>
      <Nav />
      <AppRoutes />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App