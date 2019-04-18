import StaticMaps from {'staticmaps'};

const options = {
    width: 600,
    height: 400
  };
  const map = new StaticMaps(options);

  map.image.save('my-staticmap-image.png', { compressionLevel: 9 });


  const marker = {
    img: `${__dirname}/marker.png`, // can also be a URL
    offsetX: 24,
    offsetY: 48,
    width: 48,
    height: 48
  };
   
  marker.coord = [13.437524,52.4945528];
  map.addMarker(marker);
  marker.coord = [13.430524,52.4995528];
  map.addMarker(marker);
  marker.coord = [13.410524,52.5195528];
  map.addMarker(marker);
   
  map.render()
    .then(() => map.image.save('multiple-marker.png'))
    .then(() => { console.log('File saved!'); })
    .catch(console.log);
