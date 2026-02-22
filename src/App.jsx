import { Route, Routes } from "react-router";
import RootLayouts from "./components/layouts/RootLayouts";
import Error from "./pages/Error";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-lato">
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
