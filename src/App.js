import React,{ Component } from 'react';
import classes from'./App.module.css';
import ProductData from './ProductDetails/ProductData';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetail from './ProductDetails/ProductDataCode';
import Topbar from './Topbar';

class App extends Component{
  state={
    ProductData:ProductData,
    currentPreviewImagePos:0,
    currentSelectedFeature:0,
  }
  onColorOptionClick = (pos) => {
  this.setState({currentPreviewImagePos:pos});
  }
  onFeatureItemClick= (pos) =>
  {
    this.setState({currentSelectedFeature:pos})
  }
  render()
  {
    return (
      <div className="App">
        <header className="App-header">
         <Topbar/>
        </header>
        <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
         <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
         currentSelectedFeature={this.state.currentSelectedFeature}/>
        </div>
         
        <div className={classes.ProductData}>
          <ProductDetail data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick} 
          currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} 
          currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
        </div>
      </div>
    );
  }
 
}

export default App;
