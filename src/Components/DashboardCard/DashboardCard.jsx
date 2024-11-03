
const DashboardCard = ({coffee}) => {

    const {category, id, type, origin, rating, popularity,ingredients , image} = coffee

    const [first, second] = ingredients

    return (
       <div className="card bg-base-100 shadow-xl hover:scale-105 hover:ease-in-out hover: transition-transform relative">
        <figure>
          <img
            src={image}
            className="h-[300px] object-cover rounded-3xl w-full"
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

        <div className="absolute left-[90%] -top-5">
            <button  className="btn btn-warning rounded-full"> delete </button>
        </div>
      </div>
    );
};

export default DashboardCard;