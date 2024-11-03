import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from "../../assets/nutrition.png"
import { addStoredReadList, getStoredReadList } from "../../Utilities/addToDb";
import { useState } from "react";


const CoffeeDetails = () => {

    
    const {coffeId} = useParams()
    const coffeeData = useLoaderData()

    const loadedData = getStoredReadList() // Came From Utilities 

    

    const id = parseInt(coffeId) // Coverted to Number

    const loadedCoffee = loadedData.find(coffee => parseInt(coffee) === id)

    const [isActive, setIsActive] = useState(!!loadedCoffee)

    const coffee = coffeeData.find(coffee => coffee.id === id)


    const { nutrition_info, name, rating, popularity, ingredients , image, making_process, description } = coffee
   
    const {calories, carbohydrates, fat, protein} = nutrition_info

    const handleFavouriteBtn = (id) => {
            addStoredReadList(id)
    }

 





    return (
        <div className="w-11/12 mx-auto my-10 space-y-5">
            <h1 className="text-xl font-medium"> {description} </h1>

            <img className="w-full object-cover rounded-2xl h-[400px] lg:h-[500px]" src={image} alt="" />

            <div className="flex items-center justify-between">
                <div>
                    <p className="text-xl font-bold"> {name} </p>
                    <p className="text-md font-medium">Popularity: {popularity} </p>
                    <p className="text-md font-medium">Ratings: {rating} </p>
                </div>

                <div>
                    <button disabled={isActive} onClick={
                        () => 
                    {
                        handleFavouriteBtn(coffeId)
                        setIsActive(true)

                    }
                    } className="btn btn-warning text-black font-bold"> Add Favourite </button>
                </div>
            </div>

            <h3 className="text-lg font-medium">Making Process: <span className="font-medium text-sm">{making_process}</span> </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <div className="mb-5">
                <h3 className="font-medium"> Ingredients:  </h3>
                {
                ingredients.map((ingredient, index) => <li key={index}> {ingredient} </li>)
            }
            </div>

            <div>
            <h3 className="font-medium"> Nutrition:  </h3>

            <li>Calories: {calories}</li>
            <li>Fat: {fat}  </li>
            <li>Carbohydrates: {carbohydrates}  </li>
            <li> Protein: {protein} </li>
            </div>
          </div>

          <div>
                <img src={nutritionImg} alt="" />
          </div>
          </div>



        </div>
    );
};

export default CoffeeDetails;