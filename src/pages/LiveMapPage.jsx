import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Navigation } from "lucide-react";
import L from "leaflet";

import { db, auth } from "../firebase";
import { collection, doc, setDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function LiveMapPage() {
  const [usersLocations, setUsersLocations] = useState([]);
  const [myCoords, setMyCoords] = useState([40.1792, 44.4991]); // Երևանի կենտրոն
  const [isSharing, setIsSharing] = useState(false);

  // 1. Հետևում ենք մեր GPS դիրքին և ուղարկում Firebase
  useEffect(() => {
    let watchId;
    if ("geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newCoords = [latitude, longitude];
          setMyCoords(newCoords);

          const userId = auth.currentUser ? auth.currentUser.uid : "guest_" + Math.random().toString(36).substring(7);
          
          if (isSharing) {
            setDoc(doc(db, "live_locations", userId), {
              lat: latitude,
              lng: longitude,
              email: auth.currentUser ? auth.currentUser.email : "Հյուր",
              updatedAt: serverTimestamp(),
            }).catch((err) => console.error("Firebase error:", err));
          }
        },
        (error) => console.error("GPS Error:", error),
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
      );
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [isSharing]);

  // 2. Լսում ենք բոլոր օգտատերերի դիրքերը Firebase-ից
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "live_locations"), (snapshot) => {
      const locations = [];
      snapshot.forEach((doc) => {
        locations.push({ id: doc.id, ...doc.data() });
      });
      setUsersLocations(locations);
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="max-w-7xl w-full mx-auto px-4 py-8 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#003853] flex items-center gap-2">
            <span>📍</span> Կենդանի Քարտեզ (Live Map)
          </h1>
          <p className="text-sm text-gray-500">Դիտեք միացած օգտատերերին իրական ժամանակում</p>
        </div>

        <button
          onClick={() => setIsSharing(!isSharing)}
          className={`px-5 py-2.5 rounded-xl text-sm font-bold transition flex items-center gap-2 cursor-pointer shadow-md ${
            isSharing 
              ? "bg-green-600 text-white animate-pulse" 
              : "bg-[#003853] text-white hover:bg-[#00283d]"
          }`}
        >
          <Navigation className="w-4 h-4" />
          {isSharing ? "Դուք ուղիղ եթերում եք" : "Միացնել իմ դիրքը"}
        </button>
      </div>

      {/* Քարտեզի բլոկ՝ ֆիքսված բարձրությամբ (h-[550px]) */}
      <div className="w-full h-[550px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 relative z-0">
        <MapContainer 
          center={myCoords} 
          zoom={13} 
          scrollWheelZoom={true} 
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {usersLocations.map((userLoc) => (
            <Marker key={userLoc.id} position={[userLoc.lat, userLoc.lng]}>
              <Popup>
                <div className="text-sm font-semibold text-gray-800">
                  <p>👤 Օգտատեր: {userLoc.email || "Անհայտ"}</p>
                  <p className="text-xs text-gray-500">Վերջին թարմացումը՝ Հիմա</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <div className="mt-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-sm text-gray-600 flex justify-between items-center">
        <span>Ակտիվ օգտատերեր քարտեզում: <b>{usersLocations.length}</b></span>
        <span>Սեղմեք «Միացնել իմ դիրքը» կոճակը, որպեսզի մյուսները տեսնեն ձեզ։</span>
      </div>
    </main>
  );
}