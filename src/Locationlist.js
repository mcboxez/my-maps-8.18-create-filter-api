import React from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import locations from'./locations';


export class Locationlist extends React.Component {



    componentDidMount(){
      this.setState({
      	locations: locations
      })
    }

  //更新搜索框数据，筛选出搜索框与地点列表的相同项  
    updateQuery = (query) => {
      this.props.updatePlaces(query);
  }


   	render(){
		return(
		  <div>
		    <p>Location List</p>
		    <input type="text" aria-label="input" onChange= { event => this.updateQuery(event.target.value)}  />
		    {
		    	this.props.locations.map(location =>{
		    		return(
		    			<p>{location.title}</p>
		    			)
		    	})
		    }
		  </div>
		)


		
        
		  
	   	
	   }
	


}


export default Locationlist