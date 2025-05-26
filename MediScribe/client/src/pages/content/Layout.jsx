import Navbar from '../../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='h-[100vh]'>
        <Outlet />
      </div>
      <Footer />
      
    </div>
  )
}

export default Layout
