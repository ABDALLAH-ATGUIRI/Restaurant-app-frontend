import React, { useState, useEffect, createRef, Fragment } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoid2FoYmlkb3giLCJhIjoiY2xnYThvZjlwMHd2cTNrcnZia29xdDh0biJ9.ML50IIKmnd5ZLj7VZ7_SHg';

const MyMap = ({ setCoordinates, coordinates }) => {
  const [map, setMap] = useState(null);
  const mapContainer = createRef();
  const [zoom, setZoom] = useState(10);
  const [marker, setMarker] = useState(null);


  const initializeMap = async ({ setMap, mapContainer }) => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [coordinates.longitude, coordinates.latitude],
      zoom: zoom
    });

    map.on('click', e => {
      const { lng, lat } = e.lngLat;
      setCoordinates({ longitude: lng, latitude: lat });
    });

    const marker = new mapboxgl.Marker().setLngLat([coordinates.longitude, coordinates.latitude]).addTo(map);

    setMap(map);
    setMarker(marker);
  };

  useEffect(() => {
    if (!map) { initializeMap({ setMap, mapContainer }) }
    if (marker) { marker.setLngLat([coordinates.longitude, coordinates.latitude]); }
  }, [map, coordinates]);

  useEffect(() => {
    if (map) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { longitude, latitude } = position.coords;
          map.setCenter([longitude, latitude]);
          setCoordinates({ longitude, latitude });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [map,]);




  return (
    <Fragment>
      <div ref={mapContainer} className='map-container h-full z-40' />
    </Fragment>
  );

}

export default MyMap;
