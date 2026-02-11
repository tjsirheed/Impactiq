import { Card } from "../components/ui/card";
import { 
  Siren, 
  Phone,
  MapPin,
  Clock,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router";

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

        {/* Emergency Actions */}
        <div className="mb-6 space-y-4">
          <button className="w-full bg-white hover:bg-gray-100 text-red-600 font-bold py-6 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg text-xl">
            <Phone className="w-8 h-8" />
            CALL EMERGENCY SERVICES
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 rounded-lg transition-colors">
              <Phone className="w-6 h-6 mx-auto mb-1" />
              <span className="text-sm">Call Insurer</span>
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
                  <p className="text-white font-bold text-sm">123 Main St, San Francisco, CA</p>
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
                <li>• Do not move if you suspect serious injury</li>
                <li>• Emergency services have been automatically notified</li>
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
