import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  useEffect(() => {
    try {
      const map = L.map('map').setView([26.9124, 75.7873], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([26.9124, 75.7873]).addTo(map)
        .bindPopup('Jaipur')
        .openPopup();
    } catch (error) {
      console.log({ error: error });
    }
  }, []);

  return (
    <div id="map" style={{ height: '300px', width: '100%' }} className='mt-[30px] rounded-lg shadow-lg'>

    </div>
  );
};

export default MapComponent;
