import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from '../../pages/Home/Homepage';
import Explore from '../../pages/Explore/Explore';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/explore" element={<Explore />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
    </BrowserRouter>  )
}

export default Router