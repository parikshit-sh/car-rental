import '../styles/navbar.css';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isActive, setIsActive] = useState(false);
    const handleMenuToggle = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        const handleResize = () =>{
            const isDesktop = window.matchMedia('(min-width:643px)').matches;
            if(isDesktop){
                setIsActive(false);
            };
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])
  return (
    <>
    
 <div className={`off__screenMenu ${isActive ? 'active' : ''} ` }>
        <ul>
            <Link to="/home"><li>Home</li></Link>
            <li>About</li>
            <Link to="/cars"><li>Cars</li></ Link>
            <li>Help</li>
            <li>Download</li>
        </ul>
    </div>
    
    <nav>
    <div className="logo-m items-center justify-start w-32 hidden">
        <h2 className='font-bold text-2xl'>Rentals</h2>
        </div>
        <ul className="nav__link">
    
            <Link to="/home"><li className='hover:text-[#0069D2] cursor-pointer transition ease-out'>Home</li></Link>
            <li className='hover:text-[#0069D2] cursor-pointer transition ease-out'>About</li>
            <Link to="/cars"><li className='hover:text-[#0069D2] cursor-pointer transition ease-out'>Cars</li></ Link>
            <li className='hover:text-[#0069D2] cursor-pointer transition ease-out'>Help</li>
            <li><a href="" className="btn">Download</a></li>
        </ul>
        <div  className={`ham__menu ${isActive ? 'active' : ''}`}
          onClick={handleMenuToggle}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </nav>
    
    </>
    
  )
}

export default Navbar