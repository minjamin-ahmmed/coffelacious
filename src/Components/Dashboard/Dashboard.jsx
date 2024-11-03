import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utilities/addToDb";
import DashboardCard from "../DashboardCard/DashboardCard";

const Dashboard = () => {

    const [coffeelist, setCoffeeList] = useState([])


    const allCoffees = useLoaderData()


    useEffect(() => {

        const storedCoffeeList = getStoredReadList()
        const storedReadListInt = storedCoffeeList.map(id => parseInt(id))

        const favouriteCoffeeList = allCoffees.filter(coffees => storedReadListInt.includes(coffees.id))

        setCoffeeList(favouriteCoffeeList)
    },[])

 



    return (
        <div>
            <h2>Dashboard Component:{coffeelist.length} </h2>
            <div className="grid grid-cols-3 gap-10 my-12">
            {
                coffeelist.map(coffee => <DashboardCard key={coffee.id} coffee={coffee} ></DashboardCard>)
            }
            </div>
        </div>
    );
};

export default Dashboard;