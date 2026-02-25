import { BrowserRouter } from "react-router-dom";
import Reg from "./components/Reg";
import Home from "./components/Home";


function App()
{
  return (
    <>
    <h1>i am app</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/reg" element={<Reg />} />
        <Route path ="/h" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
