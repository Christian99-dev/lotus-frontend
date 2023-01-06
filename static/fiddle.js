function isEmpty(obj) {
    for(var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
  
    return JSON.stringify(obj) === JSON.stringify({});
  }

  const MapsWorking = () => {
    const address = [50.143028, 8.15988];
    return (
      <MapContainer
        center={address}
        zoom={16}
        scrollWheelZoom={true}
        style={{ height: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={address} icon={iconPerson}>
          <Popup>Taunusstein</Popup>
        </Marker> */}
      </MapContainer>
    );
  };
