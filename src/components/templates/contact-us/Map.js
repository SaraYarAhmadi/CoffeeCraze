"use client";
import "leaflet/dist/leaflet.css";

export default function Map({ children }) {
  return (
    <div className="text-center bg-white px-2">
      {children}
    </div>
  );
}
