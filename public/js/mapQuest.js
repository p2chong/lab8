function initMap() {
	L.mapquest.key = 'uvbIkzpfVMz7m19eNYxCA1dl6ooIaK1M';

	var map = L.mapquest.map('map',{
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
	// add your code here
}