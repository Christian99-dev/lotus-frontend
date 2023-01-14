import React, { useEffect } from "react";
import L from "leaflet";
import Marker_Icon from "../../media/icons/marker.svg";
/**https://www.latlong.net/convert-address-to-lat-long.html */

const Maps = ({location}) => {
  useEffect(() => {
    const size = 64;
    const iconPerson = new L.Icon({
      iconUrl: Marker_Icon,
      iconRetinaUrl: Marker_Icon,
      iconAnchor: new L.Point(0.5 * size, 1 * size),
      popupAnchor: new L.Point(0, -1 * size),
      shadowUrl: null,
      shadowSize: null,
      shadowAnchor: null,
      iconSize: new L.Point(1 * size, 1 * size),
      className: "marker-icon",
    });
    const address = location;
    var container = L.DomUtil.get("map");

    if (container != null) {
      container._leaflet_id = null;
    }
    var map = L.map("map").setView(address, 12);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
      }
    ).addTo(map);
    L.Marker.prototype.options.icon = iconPerson;
    var marker = L.marker(address).addTo(map);
    marker.bindPopup("Taunusstein").openPopup();
  }, [location]);
  return <div id="map" style={{ height: "100%", borderRadius: "10px", zIndex:"2" }} />;
};

export default Maps;
