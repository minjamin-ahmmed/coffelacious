import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Headings from "../Headings/Headings";


const Home = () => {

    const categoriesData = useLoaderData()
    
    



    return (
        <div className="w-11/12 mx-auto">
            <Banner></Banner>

            <Headings></Headings>

            <Categories categoriesData={categoriesData}></Categories>
            
            <Outlet></Outlet>
        </div>
    );
};

export default Home;