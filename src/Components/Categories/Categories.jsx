/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Categories = ({categoriesData}) => {
   
 
    
    return (
        <div>
            
          <div role="tablist" className="tabs tabs-lifted"> 

                {
                    categoriesData.map(category => 

                    <NavLink 

                     key={category.id} 
                     to={`/category/${category.category}`} 
                     role="tab" 
                     className={({isActive}) => `tab ${isActive? 'tab-active text-blue-950 font-bold text-xl' : '' }`}> 
                     {category.category}

                      </NavLink>)
                }
        </div>

        </div>

    );
};

export default Categories;