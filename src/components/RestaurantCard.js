const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,costForTwo,cuisines,avgRating,cloudinaryImageId} = resData.info
  
    return(
        <div className="resto-card">
            <img className="resto-card-image" alt="restaurant-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating } Rating</h5>
        </div>
    )
  }

  export default RestaurantCard