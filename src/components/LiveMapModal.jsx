import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { X, Navigation } from "lucide-react";
import L from "leaflet";

// Ներմուծում ենք firestore-ը ձեր firebase.js-ից (կամ կարգավորեք ըստ ձեր ֆայլի)
import { db, auth } from "../firebase"; 
import { collection, doc, setDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

// Ուղղում ենք Leaflet-ի ստանդարտ մարկերի նկարի խնդիրը React-ում
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function LiveMapModal({ isOpen, onClose }) {
  const [usersLocations, setUsersLocations] = useState([]);
  const [myCoords, setMyCoords] = useState([40.1792, 44.4991]); // Երևանի կենտրոնը որպես սկզբնական
  const [isSharing, setIsSharing] = useState(false);

  // 1. Հետևում ենք մեր GPS դիրքին և ուղարկում Firebase
  useEffect(() => {
    if (!isOpen) return;

    let watchId;
    if ("geolocation" in navigator) {
      watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const newCoords = [latitude, longitude];
          setMyCoords(newCoords);

          // Եթե օգտատերը միացրել է կիսվելու կոճակը, թարմացնում ենք բազայում
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
  }, [isOpen, isSharing]);

  // 2. Լսում ենք բոլոր օգտատերերի դիրքերը Firebase-ից իրական ժամանակում
  useEffect(() => {
    if (!isOpen) return;

    const unsubscribe = onSnapshot(collection(db, "live_locations"), (snapshot) => {
      const locations = [];
      snapshot.forEach((doc) => {
        locations.push({ id: doc.id, ...doc.data() });
      });
      setUsersLocations(locations);
    });

    return () => unsubscribe();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-4xl h-[80vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Վերնագիր */}
        <div className="bg-[#003853] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">📍</span>
            <h2 className="text-lg font-bold">Կենդանի Քարտեզ (Live Map)</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSharing(!isSharing)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                isSharing 
                  ? "bg-green-500 text-white animate-pulse" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              {isSharing ? "Դուք ուղիղ եթերում եք" : "Միացնել իմ դիրքը"}
            </button>

            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Քարտեզ */}
        <div className="flex-1 w-full relative z-0">
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

            {/* Ցուցադրում ենք բոլոր միացված օգտատերերին */}
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

        {/* Ներքևի տեղեկատվական վահանակ */}
        <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 text-xs text-gray-600 flex justify-between items-center">
          <span>Ակտիվ օգտատերեր քարտեզում: <b>{usersLocations.length}</b></span>
          <span>Սեղմեք «Միացնել իմ դիրքը» կոճակը, որպեսզի մյուսները նույնպես տեսնեն ձեզ։</span>
        </div>

      </div>
    </div>
  );
}