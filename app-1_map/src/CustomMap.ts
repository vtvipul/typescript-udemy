/// <reference types="@types/google.maps" />

export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divElement: HTMLElement) {
		this.googleMap = new google.maps.Map(divElement, {
			zoom: 1,
			center: { lat: 0, lng: 0 },
		});
	}

	addMarker(mappable: Mappable) {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			},
		});

		marker.addListener("click", () => {
			const infoWindow = new google.maps.InfoWindow({ content: "hello world" });
			infoWindow.open(this.googleMap, marker);
		});

		const userButton = document.querySelector("#user-button");
		const companyButton = document.querySelector("#company-button");
		userButton.addEventListener("click", () => {
			alert(mappable.markerContent());
		});
	}
}
