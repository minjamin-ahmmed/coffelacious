import { NavLink } from "react-router-dom";

const Card = ({coffee}) => {

    console.log(coffee);

    const {category, type, origin, rating, popularity,ingredients , image} = coffee

    const [first, second] = ingredients
    
    return (
        <NavLink to="/coffees">
            <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            className="h-[300px] object-cover"
            alt={category} />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> Name:{first}</h2>
          <h3>Category: {type} </h3>
          <p>Ingrediant: {second} </p>
          <p>Origin:{origin} </p>
          <p>Ratings:{rating} </p>
          <p>Popular:{popularity} </p>

        </div>
      </div>
        </NavLink>
    );
};

export default Card;