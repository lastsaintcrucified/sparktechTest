"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
	return (
		<MapContainer
			center={[36.785834, 3.058756]}
			zoom={13}
			style={{ height: "250px", width: "100%" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={[36.785834, 3.058756]}>
				<Popup>Bab El Oued</Popup>
			</Marker>
		</MapContainer>
	);
}
