import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
           <div className="h-16">
                <Navbar></Navbar>
           </div>

           
             <Outlet></Outlet>
         

            <Footer></Footer>
        </div>
    );
};

export default MainLayout;