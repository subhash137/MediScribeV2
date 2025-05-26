import { Outlet } from 'react-router-dom'
import DoctorNavbar from '../../components/DoctorNavbar'
import Footer from './Footer'
const LayoutDoctor = () => {
  return (
    <div>
      <DoctorNavbar />
      <div className='h-[100vh]'>
        <Outlet />
      </div>
      <Footer />
      
    </div>
  )
}

export default LayoutDoctor
