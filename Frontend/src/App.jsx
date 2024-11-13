import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/home'
import AtlasBackup from './components/atlasBackup'
import CatmInbound from './components/catmInbound'
import IcmExtract from './components/icmExtract'
import PlanExport from './components/planExport'
import AnaplanForecastInbound from './components/anaplanForecastInbound'

function App() {

  return (
    <>
      <BrowserRouter>
      <div className='bg-screenshot h-screen w-full'>
        <Routes>
                  <Route path="/atlasBackup" element={<AtlasBackup />} />
                  <Route path="/catmInbound" element={<CatmInbound />} />
                  <Route path="/icmExtract" element={<IcmExtract />} />
                  <Route path="/planExport" element={<PlanExport />} />
                  <Route path="/anaplanForecastInbound" element={<AnaplanForecastInbound />} />
                  <Route path='/' element={<Home/>}/>
          </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
