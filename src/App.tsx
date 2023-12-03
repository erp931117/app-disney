import Main from './components/main';
import Detail from './components/details';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'

const App = () => {
  // const url = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/details/:id' element={<Detail/>}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
