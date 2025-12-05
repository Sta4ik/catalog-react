import './App.css'
import { Route, Routes, HashRouter, NavLink } from 'react-router-dom'
import List1 from './components/List1'
import List2 from './components/List2'
import List3 from './components/List3'
import List4 from './components/List4'

function App() {
  let gener = ["Комедии", "Хорроры", "Боевики", "Детективы"];

  return (
    <HashRouter>
      <div>
        {
          gener.map((item, index) => (
            <NavLink className="nav-link" to={`/${index + 1}-list`}>{item}</NavLink>
          ))
        }
      </div>
      <Routes>
        <Route path="/1-list" element={<List1 genre={gener} />} />
        <Route path="/2-list" element={<List2 genre={gener} />} />
        <Route path="/3-list" element={<List3 genre={gener} />} />
        <Route path="/4-list" element={<List4 genre={gener} />} />
      </Routes>
    </HashRouter>
  )
}
export default App