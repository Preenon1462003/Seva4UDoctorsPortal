import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import SigninForDoctor from '../src/components/SigninForDoctor'
import GetDetails from './components/GetDetails';
import LogIn from './components/LogIn';
import DashBoard from './components/DashBoard';
import HomePage from './components/Pages/Home';
import RoomPage from './components/Pages/Room';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SigninForDoctor/> */}
      <Router>

        <Routes>

        <Route path="/" element={<SigninForDoctor />} />
        <Route path="/signup2" element={<GetDetails />} />
        <Route path="/login" element={<LogIn />} />
        

        <Route path='/home' element={<HomePage/>} />
        <Route path='/room/:roomId' element={<RoomPage/>} />


          
        </Routes>


      </Router>
    </>
  )
}

export default App
