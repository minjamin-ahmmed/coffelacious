import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";


const CoffeeCards = () => {

    const {category} = useParams()


    const coffeeData = useLoaderData()


    const [coffees, setCoffees] = useState([])

    useEffect(() => {
    
        if(category) {
            const filteredByCategories = [...coffeeData].filter(coffee => coffee.category === category)
            setCoffees(filteredByCategories)
        }
        else{

            setCoffees(coffeeData.slice(0, 6))
        }

        

    },[category, coffeeData])

    
    


    // const filteredCoffees = coffees.filter(coffee => coffee.category === )
    
    
    return (
        <div className="mt-10">
           
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 ">
            {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee} ></Card>)
            }
            </div>

            <NavLink to="/coffees">
                <div className="flex items-center justify-center my-20">
                     <button className="btn btn-warning"> View All </button>
                </div>
            </NavLink>
        </div>
    );
};

export default CoffeeCards;