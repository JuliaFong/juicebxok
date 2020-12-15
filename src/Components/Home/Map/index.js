import React, { Component } from 'react'
import ReactMapGL, { NavigationControl, Marker } from 'react-map-gl'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis } from '@fortawesome/free-solid-svg-icons'



const MAPBOX_API = process.env.REACT_APP_MAPBOX_API
const cannabisColor = "rgb(146,	198, 68)"

class Map extends Component {
    state = {
        viewport: {
            width: '75vw',
            height: '75vh',
            latitude: 36.084621,
            longitude: -96.921387,
            zoom: 5
        },
        loading: true
    }

    setViewPort = viewport => {
        this.setState({ viewport })
    }


    render() {
        return (
            <div className="Map">
                <ReactMapGL 
                    {...this.state.viewport}
                    mapboxApiAccessToken={MAPBOX_API}
                    onViewportChange={(viewport) => this.setState({viewport})}
                >
                    {
                        this.props.dispensaries ? this.props.dispensaries.map(dispensary => {
                            return (
                                <Marker
                                    latitude={dispensary.coordinates.latitude}
                                    longitude={dispensary.coordinates.longitude}
                                >
                                <FontAwesomeIcon className="icon" icon={faCannabis} color={cannabisColor} size="1x" />
                                </Marker>
                            )
                        }) : ''
                    }
                </ReactMapGL>
            </div>
        )
    }
}

export default Map
