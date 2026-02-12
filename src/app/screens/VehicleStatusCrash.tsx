import { Card } from "../components/ui/card";
import { 
  Siren, 
  Phone,
  MapPin,
  Clock,
  AlertTriangle,
  Navigation,
  Gauge
} from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function VehicleStatusCrash() {
  return (
    <div className="min-h-screen bg-red-600 pb-6">
      {/* Critical Alert Header - Red */}
      <div className="bg-red-700 px-6 py-6 pb-8 border-b-4 border-red-800">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Siren className="w-8 h-8 text-white animate-pulse" />
          <h1 className="text-3xl font-bold text-white">EMERGENCY</h1>
          <Siren className="w-8 h-8 text-white animate-pulse" />
        </div>
        <p className="text-red-100 text-center font-medium">Immediate action required</p>
      </div>

      <div className="px-6 mt-6">
        {/* Critical Status Card */}
        <Card className="bg-red-700/80 border-red-800 p-6 mb-6 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="p-6 rounded-full bg-white/20 mb-4 animate-pulse">
              <Siren className="w-20 h-20 text-white" />
            </div>
            <h2 className="text-white text-3xl font-bold mb-3">
              SEVERE CRASH DETECTED
            </h2>
            <p className="text-red-50 text-base mb-4 leading-relaxed">
              A critical impact has been detected. Please stay calm and assess your immediate surroundings for safety.
            </p>
            <div className="w-full bg-red-900 rounded-full h-3 overflow-hidden mb-2">
              <div className="h-full w-full bg-white rounded-full animate-pulse"></div>
            </div>
            <p className="text-white font-bold text-sm">Impact severity: CRITICAL</p>
          </div>
        </Card>

        {/* Map Location & Speed Detection */}
        <div className="mb-6">
          <h3 className="text-white text-lg font-bold mb-3">Location & Speed Detection</h3>
          <Card className="bg-red-800/60 border-red-900 p-0 overflow-hidden">
            <div className="relative h-48">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1758872014553-f0deb7b12d58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc3RyZWV0JTIwbWFwJTIwZ3BzJTIwbmF2aWdhdGlvbnxlbnwxfHx8fDE3NzA5MjY0MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Map location"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent"></div>
              
              {/* Location Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                  <div className="relative p-3 bg-red-500 rounded-full border-4 border-white shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Speed & Location Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-red-900 to-transparent">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-800/90 rounded-lg p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Gauge className="w-4 h-4 text-white" />
                      <p className="text-red-200 text-xs">Speed at Impact</p>
                    </div>
                    <p className="text-white font-bold text-lg">45 mph</p>
                  </div>
                  <div className="bg-red-800/90 rounded-lg p-3 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Navigation className="w-4 h-4 text-white" />
                      <p className="text-red-200 text-xs">Coordinates</p>
                    </div>
                    <p className="text-white font-bold text-xs">37.7749° N</p>
                    <p className="text-white font-bold text-xs">122.4194° W</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Emergency Actions */}
        <div className="mb-6 space-y-4">
          <button className="w-full bg-white hover:bg-gray-100 text-red-600 font-bold py-6 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg text-xl">
            <Phone className="w-8 h-8" />
            CALL EMERGENCY SERVICES
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 rounded-lg transition-colors">
              <Phone className="w-6 h-6 mx-auto mb-1" />
              <span className="text-sm">Insurer Notified</span>
            </button>
            <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 rounded-lg transition-colors">
              <MapPin className="w-6 h-6 mx-auto mb-1" />
              <span className="text-sm">Share Location</span>
            </button>
          </div>
        </div>

        {/* Incident Information */}
        <div className="mb-6">
          <h3 className="text-white text-lg font-bold mb-3">Incident Information</h3>
          <div className="space-y-3">
            <Card className="bg-red-800/60 border-red-900 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-red-200 text-xs">Time of Impact</p>
                  <p className="text-white font-bold text-sm">Feb 11, 2026 at 2:47 PM</p>
                </div>
              </div>
            </Card>

            <Card className="bg-red-800/60 border-red-900 p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-red-200 text-xs">Location</p>
                  <p className="text-white font-bold text-sm">13 Jakande St, Lagos, Nigeria</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Safety Instructions */}
        <Card className="bg-red-800/60 border-red-900 p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-white font-bold text-base mb-2">Safety Instructions</p>
              <ul className="text-red-100 text-sm space-y-1.5 leading-relaxed">
                <li>• Check yourself and passengers for injuries</li>
                <li>• Move to a safe location if possible</li>
                <li>• Turn on hazard lights</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Auto-notification Status */}
        <Card className="bg-white/95 border-white p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-green-500">
              <Phone className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-gray-900 font-bold text-sm mb-1">Emergency Services Notified</p>
              <p className="text-gray-700 text-xs leading-relaxed">
                Help is on the way. Your insurance provider and emergency contacts have been automatically alerted with your location.
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Nav */}
        <div className="mt-6 flex gap-2 text-xs flex-wrap">
          <Link to="/" className="px-3 py-1.5 bg-white text-red-600 font-medium rounded-lg">Home</Link>
          <Link to="/insurer" className="px-3 py-1.5 bg-red-800 text-white rounded-lg">Insurer View</Link>
          <Link to="/vehicle-safe" className="px-3 py-1.5 bg-red-800 text-white rounded-lg">Safe</Link>
          <Link to="/vehicle-moderate" className="px-3 py-1.5 bg-red-800 text-white rounded-lg">Moderate</Link>
        </div>
      </div>
    </div>
  );
}
