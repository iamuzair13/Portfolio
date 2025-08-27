// components/GoogleMap.tsx
"use client";

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "50vh",

};

const center = {
     
  lat: 31.47157928801122, // your latitude
  lng: 74.36280253770518, // your longitude
};

const api ='AIzaSyDOoRGcFz2DW7NGR2VtqG0gmarQq-w0z4c'

export default function MyMap() {
  return (
    <LoadScript googleMapsApiKey={api}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
