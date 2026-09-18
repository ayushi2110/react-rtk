import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ControllerComp from "./pages/ControllerComp";
import HideShow from "./pages/HideShow";
import InputElement from "./pages/InputElement";
import OnChangeEvent from "./pages/OnChangeEvent";
import PassDataInArray from "./pages/PassDataInArray";
import PassUserData from "./pages/PassUserData";
import StateManagement from "./pages/StateManagement";
import UnControlledComponet from "./pages/UnControlledComponet";
import UseEffectUse from "./pages/UseEffectUse";
import UseRefExample from "./pages/UseRefExample";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<StateManagement />} />
        <Route path="/hide-show" element={<HideShow />} />
        <Route path="/on-change" element={<OnChangeEvent />} />
        <Route path="/controller-component" element={<ControllerComp />} />
        <Route path="/pass-user" element={<PassUserData />} />
        <Route
          path="/pass-array"
          element={<PassDataInArray data={["GIT", "GITHUB", "React"]} />}
        />
        <Route path="/input-element" element={<InputElement />} />
        <Route path="/use-effect" element={<UseEffectUse />} />
        <Route path="/use-ref" element={<UseRefExample />} />
        <Route path="/uncontrolled" element={<UnControlledComponet />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
