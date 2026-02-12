import { Card } from "../components/ui/card";
import { 
  Home, 
  Car, 
  User,
  Shield,
  Activity,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";
import { Link } from "react-router";

export default function InsureeHome() {
  const claimsHistory = [
    { id: 1, date: "Jan 15, 2026", amount: "$3,200", status: "paid", description: "Minor collision" },
    { id: 2, date: "Dec 8, 2025", amount: "$1,800", status: "processing", description: "Windshield damage" },
    { id: 3, date: "Oct 22, 2025", amount: "$5,400", status: "paid", description: "Rear-end accident" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-6 pb-8">
        <h1 className="text-2xl font-bold text-white mb-1">ImpactIQ</h1>
        <p className="text-blue-100 text-sm">Welcome back, Sarah</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Quick Nav */}
        <div className="mb-6 flex gap-2 text-xs">
          <Link to="/insurer" className="px-3 py-1.5 bg-blue-600 text-white rounded-lg">Insurer View</Link>
          <Link to="/vehicle-safe" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Vehicle Safe</Link>
          <Link to="/vehicle-moderate" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Moderate</Link>
          <Link to="/vehicle-crash" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Crash</Link>
        </div>

        {/* Coverage Status Card */}
        <Card className="bg-[#1a1a24] border-[#2a2a38] p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/20">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Your Coverage</p>
                <p className="text-white text-xl font-bold">Premium Plan</p>
              </div>
            </div>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#2a2a38]">
            <div>
              <p className="text-gray-500 text-xs mb-1">Coverage</p>
              <p className="text-white font-bold text-sm">$500K</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Deductible</p>
              <p className="text-white font-bold text-sm">$500</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1">Expiry</p>
              <p className="text-white font-bold text-sm">Dec 2026</p>
            </div>
          </div>
        </Card>

        {/* Vehicle Health Card */}
        <Card className="bg-gradient-to-br from-green-900/40 to-green-800/20 border-green-700/30 p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/20">
                <Activity className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-green-200 text-xs">Vehicle Health</p>
                <p className="text-white text-xl font-bold">Excellent</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-green-950 rounded-full overflow-hidden">
              <div className="h-full w-[95%] bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-400 text-sm font-bold">95%</span>
          </div>
          <p className="text-green-200 text-xs mt-2">Last scan: 2 hours ago</p>
        </Card>

        {/* Claims History */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-white text-lg font-bold">Claims History</h2>
            <button className="text-blue-400 text-sm">View All</button>
          </div>
          <div className="space-y-2">
            {claimsHistory.map((claim) => (
              <Card key={claim.id} className="bg-[#1a1a24] border-[#2a2a38] p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-white font-medium text-sm">{claim.description}</p>
                    <p className="text-gray-400 text-xs">{claim.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-sm">{claim.amount}</p>
                    {claim.status === 'paid' && (
                      <span className="inline-flex items-center gap-1 text-green-500 text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Paid
                      </span>
                    )}
                    {claim.status === 'processing' && (
                      <span className="inline-flex items-center gap-1 text-yellow-500 text-xs">
                        <Clock className="w-3 h-3" />
                        Processing
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Link to="/vehicle-safe">
            <Card className="bg-[#1a1a24] border-[#2a2a38] p-4 hover:bg-[#222230] transition-colors cursor-pointer">
              <Car className="w-6 h-6 text-blue-400 mb-2" />
              <p className="text-white text-sm font-medium">Vehicle Status</p>
              <p className="text-gray-400 text-xs">View real-time data</p>
            </Card>
          </Link>
          <Card className="bg-[#1a1a24] border-[#2a2a38] p-4 hover:bg-[#222230] transition-colors cursor-pointer">
            <DollarSign className="w-6 h-6 text-green-400 mb-2" />
            <p className="text-white text-sm font-medium">File Claim</p>
            <p className="text-gray-400 text-xs">Report an incident</p>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a24] border-t border-[#2a2a38] px-6 py-4">
        <div className="flex items-center justify-around max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1">
            <Home className="w-6 h-6 text-blue-500" />
            <span className="text-blue-500 text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Car className="w-6 h-6 text-gray-500" />
            <span className="text-gray-500 text-xs">Vehicles</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <User className="w-6 h-6 text-gray-500" />
            <span className="text-gray-500 text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}