import { Card } from "../components/ui/card";
import { 
  ArrowLeft, 
  AlertTriangle, 
  Car,
  Phone,
  MapPin,
  Clock
} from "lucide-react";
import { Link } from "react-router";

export default function VehicleStatusModerate() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-orange-500 px-6 py-6 pb-8">
        <div className="flex items-center gap-3 mb-1">
          <Link to="/">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Vehicle Status</h1>
        </div>
        <p className="text-yellow-100 text-sm ml-9">Tesla Model 3 • ABC 1234</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Status Card - Yellow/Orange Warning */}
        <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-800/40 border-yellow-700/50 p-6 mb-6">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-yellow-500/20 mb-4 animate-pulse">
              <AlertTriangle className="w-16 h-16 text-yellow-400" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2">Moderate Crash Detected</h2>
            <p className="text-yellow-100 text-sm mb-4">
              Impact detected. Vehicle damage is not critical. Please check your surroundings and assess the situation.
            </p>
            <div className="w-full bg-yellow-950 rounded-full h-2 overflow-hidden">
              <div className="h-full w-[65%] bg-yellow-500 rounded-full"></div>
            </div>
            <p className="text-yellow-200 text-xs mt-2">Impact severity: Moderate</p>
          </div>
        </Card>

        {/* Vehicle Graphic */}
        <Card className="bg-[#1a1a24] border-[#2a2a38] p-8 mb-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-orange-600/10 border-2 border-yellow-500/40">
                <Car className="w-32 h-32 text-yellow-400" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-yellow-500 rounded-full animate-pulse">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Detected: 3 minutes ago</p>
        </Card>

        {/* Incident Details */}
        <div className="mb-6">
          <h3 className="text-white text-lg font-bold mb-3">Incident Details</h3>
          <div className="space-y-3">
            <Card className="bg-[#1a1a24] border-[#2a2a38] p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Time of Impact</p>
                  <p className="text-white font-medium text-sm">Feb 11, 2026 at 2:47 PM</p>
                </div>
              </div>
            </Card>

            <Card className="bg-[#1a1a24] border-[#2a2a38] p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">Location</p>
                  <p className="text-white font-medium text-sm">123 Main St, San Francisco, CA</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
            <Phone className="w-5 h-5" />
            Contact Support
          </button>
          
          <button className="w-full bg-[#1a1a24] border-2 border-yellow-600 text-yellow-400 font-bold py-4 rounded-lg hover:bg-yellow-600/10 transition-colors">
            Report Incident Details
          </button>
        </div>

        {/* Info Section */}
        <Card className="bg-[#1a1a24] border-yellow-600/30 p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5" />
            <div>
              <p className="text-white font-medium text-sm mb-1">Insurer Notified</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                Your insurance provider has been automatically notified of this incident. A claims specialist will contact you within 24 hours.
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Nav */}
        <div className="mt-6 flex gap-2 text-xs flex-wrap">
          <Link to="/" className="px-3 py-1.5 bg-blue-600 text-white rounded-lg">Home</Link>
          <Link to="/insurer" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Insurer View</Link>
          <Link to="/vehicle-safe" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Safe</Link>
          <Link to="/vehicle-crash" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Crash Alert</Link>
        </div>
      </div>
    </div>
  );
}
