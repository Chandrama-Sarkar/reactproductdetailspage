import React from 'react';
import classes from './ProductPreview.module.css';
const ProductPreview=(props) =>{
    const CurrentHour=new Date().getHours()>9?new Date().getHours():'0'+new Date().getHours()
    const CurrentMinute=new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes()
return(
  <div className={classes.ProductPreview}>
        <img src={props.currentPreviewImage} alt="product_preview"/>
        {
           props.currentSelectedFeature===1? 
           <div className={classes.HeartData}>
           <i className="fas fa-heartbeat"></i>
           <p>78</p>
          </div>
          :
          <div className={classes.TimeData}>
          <p>{`${CurrentHour}:${CurrentMinute}`}</p>
         </div>
    
        }
       

      
   </div>
);
}
export default ProductPreview