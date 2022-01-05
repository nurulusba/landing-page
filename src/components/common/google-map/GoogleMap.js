import React from 'react'
import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
    return (
        <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAP_KEY,
        }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
        zoom={false}
      />
    )
}

export default GoogleMap
