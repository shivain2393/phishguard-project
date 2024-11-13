import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@/Layout";
import Homepage from "@/pages/Homepage";
import About from "@/pages/About";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Layout>
    </Router>
  )
}

export default App;