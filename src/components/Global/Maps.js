import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from 'leaflet';
import Marker_Icon from "../../media/icons/marker.svg";
import styled from "styled-components";
/**https://www.latlong.net/convert-address-to-lat-long.html */

const Maps = () => {
  const address = [50.143028, 8.159880];
  return (
    <MapWrapper
      center={address}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: "100%", borderRadius:"10px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={address} icon={iconPerson}>
        <Popup>
          Taunusstein
        </Popup>
      </Marker>
    </MapWrapper>
  );
};

export default Maps;

const MapWrapper = styled(MapContainer)`

`;
const size = 2;
const iconPerson = new L.Icon({
  iconUrl: Marker_Icon,
  iconRetinaUrl: Marker_Icon,
  iconAnchor: new L.Point(25 * size, 50 * size),
  popupAnchor: new L.Point(0, -40 * size),
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(50 * size, 50 * size),
  className:"marker-icon"
});


