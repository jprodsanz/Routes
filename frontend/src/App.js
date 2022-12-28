import { Link, Route, Routes } from "react-router-dom"
import { About } from "./pages /about";
import { Contact } from "./pages /contact";
import { Home } from "./pages /home";
import { NotFound } from "./pages /notfound";


function App() {
  return ( 
    <>
      <nav>
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/about">About</Link></li>
          <li><Link to ="/contact">Contact</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </nav>
    </>
  )
}

export default App;