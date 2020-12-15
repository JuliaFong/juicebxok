import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl'
import ReactMapGL, {  Marker } from 'react-map-gl'





class Location extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: "",
            longitude: "",
            city: "",
            address: "",
            name: "",
            number: ""
    
        }
    }

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbob/streets-v11',
            center: [this.state.longitude, this.state.latitude],
            zoom: this.state.zoom
        })
    }
    
   

    // getMyLocation = () => {
    //     const location = map.navigation && map.navigation.geoLocation
    //     if (geoLocation in location) {
    //         get
    //     }
    // }

    render() {
        return (

            <div>
                <div ref={el => this.mapContainer = el} />
            </div>
            // <div id="Location">
            //     <h1>Location</h1>
            //     <Marker
            //     latitude={this.state.viewport.latitude}
            //     longitude={this.state.viewport.longitude}
            //     >
            //         Here I am!!!
            //     </Marker>
            // </div>
        )
    }
}


export default Location
