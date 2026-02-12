import { Card } from "../components/ui/card";
import { 
  ArrowLeft, 
  CheckCircle, 
  Car,
  Gauge,
  Battery,
  AlertTriangle
} from "lucide-react";
import { Link } from "react-router";

export default function VehicleStatusSafe() {
  const vehicleStats = [
    { label: "Speed", value: "0 mph", icon: Gauge, status: "normal" },
    { label: "Battery", value: "92%", icon: Battery, status: "normal" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-6 pb-8">
        <div className="flex items-center gap-3 mb-1">
          <Link to="/">
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <h1 className="text-2xl font-bold text-white">Vehicle Status</h1>
        </div>
        <p className="text-blue-100 text-sm ml-9">Tesla Model 3 • ABC 1234</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Status Card - Green */}
        <Card className="bg-gradient-to-br from-green-900/50 to-green-800/30 border-green-700/40 p-6 mb-6">
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-green-500/20 mb-4">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2">Safe Condition</h2>
            <p className="text-green-200 text-sm mb-4">
              Your vehicle is operating normally. All systems are functioning as expected.
            </p>
            <div className="w-full bg-green-950 rounded-full h-2 overflow-hidden">
              <div className="h-full w-full bg-green-500 rounded-full"></div>
            </div>
          </div>
        </Card>

        {/* Vehicle Graphic */}
        <Card className="bg-[#1a1a24] border-[#2a2a38] p-8 mb-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-600/10 border-2 border-green-500/30">
                <Car className="w-32 h-32 text-green-400" />
              </div>
              <div className="absolute -top-2 -right-2 p-2 bg-green-500 rounded-full">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Last updated: Just now</p>
        </Card>

        {/* Vehicle Stats */}
        <div className="mb-6">
          <h3 className="text-white text-lg font-bold mb-3">Vehicle Diagnostics</h3>
          <div className="grid grid-cols-2 gap-3">
            {vehicleStats.map((stat) => (
              <Card key={stat.label} className="bg-[#1a1a24] border-[#2a2a38] p-3">
                <div className="flex flex-col items-center text-center">
                  <stat.icon className="w-6 h-6 text-green-400 mb-2" />
                  <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
                  <p className="text-white font-bold text-sm">{stat.value}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <Card className="bg-[#1a1a24] border-[#2a2a38] p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-400 mt-0.5" />
            <div>
              <p className="text-white font-medium text-sm mb-1">Automatic Crash Detection</p>
              <p className="text-gray-400 text-xs leading-relaxed">
                ImpactIQ continuously monitors your vehicle. In case of an accident, we'll automatically notify emergency services and your insurer.
              </p>
            </div>
          </div>
        </Card>

        {/* Quick Nav */}
        <div className="mt-6 flex gap-2 text-xs flex-wrap">
          <Link to="/" className="px-3 py-1.5 bg-blue-600 text-white rounded-lg">Home</Link>
          <Link to="/insurer" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Insurer View</Link>
          <Link to="/vehicle-moderate" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Moderate</Link>
          <Link to="/vehicle-crash" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Crash Alert</Link>
        </div>
      </div>
    </div>
  );
}