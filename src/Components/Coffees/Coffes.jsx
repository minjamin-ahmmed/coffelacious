import { useLoaderData } from "react-router-dom";
import Card from "../Card/Card";
import { useState } from "react";


const Coffes = () => {

    const coffeeData = useLoaderData()
    console.log(coffeeData);
    
    const [coffees, setCoffees] = useState(coffeeData)

    const handleSorting = sortBy => {
        if(sortBy === 'popularity'){
        
            const sorted = [...coffeeData].sort((a,b) => b.popularity - a.popularity)
            setCoffees(sorted)

        }
        else if(sortBy === 'rating'){
            const sorted = [...coffeeData].sort((a,b) => b.rating - a.rating)
            setCoffees(sorted)

        }
    }

    return (
        <div className=" w-11/12 mx-auto">
            <div className="mt-10 lg:flex items-center justify-between">
                <h1 className="text-3xl font-thin mb-5 lg:mb-0">Sort Coffee's by Popularity & Rating -> </h1>

                <div className="space-x-5">
                    <button onClick={() => handleSorting('popularity')} className="btn btn-warning font-bold">Sort By Popularity</button>
                    <button onClick={() => handleSorting('rating')} className="btn btn-warning font-bold">Sort By Rating</button>
                </div>
            </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
             {
                coffees.map(coffee => <Card key={coffee.id} coffee={coffee} ></Card>)
             }
             </div>
        </div>
    );
};

export default Coffes;