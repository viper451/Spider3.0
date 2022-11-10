mapboxgl.accessToken = 'pk.eyJ1IjoiZXBoaXJhbS1yZW5haXMiLCJhIjoiY2t5ajZ1aTVoMWk4ZTJvcG1nNzRjaWY0MiJ9.ipIanO9ZaafvcgugtuZAFg';
const geojson = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [72.872067124358, 19.291322024164458]
			},
			properties: {
				title: 'Beverly Park Road',
				description: 'Mira Road'
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [72.8611189126874, 19.29926094696998]
			},
			properties: {
				title: 'Golden Nest',
				description: 'Bhayandar'
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [72.85593023013136, 19.29178783894362]
			},
			properties: {
				title: 'Jugura Hospital',
				description: 'Kashimira'
			}
		},
	]
};

const map = new mapboxgl.Map({
	container: 'map', // container ID
	// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
	style: 'mapbox://styles/mapbox/streets-v11', // style URL
	center: [72.8625784459673, 19.293857691914653], // starting center in [lng, lat]
	zoom: 14, // starting zoom
});

// add markers to map
for (const feature of geojson.features) {
	// create a HTML element for each feature
	const el = document.createElement('div');
	el.className = 'marker';
	 
	// make a marker for each feature and add it to the map
	new mapboxgl.Marker(el)
	.setLngLat(feature.geometry.coordinates)
	.setPopup(
	new mapboxgl.Popup({ offset: 25 }) // add popups
	.setHTML(
	`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
	)
	)
	.addTo(map);
}

const inViewport = (entries, observer) => {
	entries.forEach(entry => {
	entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
	});
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

// Attach observer to every [data-inviewport] element:
const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
ELs_inViewport.forEach(EL => {
	Obs.observe(EL, obsOptions);
});