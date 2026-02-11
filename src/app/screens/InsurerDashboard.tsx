import { Card } from "../components/ui/card";
import { 
  AlertCircle, 
  DollarSign, 
  FileText, 
  Bell,
  CheckCircle,
  Clock,
  XCircle,
  Car
} from "lucide-react";
import { Link } from "react-router";

export default function InsurerDashboard() {
  const metrics = [
    { label: "Active Claims", value: "24", icon: FileText, color: "text-blue-500" },
    { label: "Total Payouts", value: "$1.2M", icon: DollarSign, color: "text-green-500" },
  ];

  const recentAlerts = [
    { id: 1, customer: "Sarah Johnson", type: "Severe Crash", time: "2 min ago", severity: "critical" },
    { id: 2, customer: "Mike Chen", type: "Moderate Impact", time: "15 min ago", severity: "warning" },
    { id: 3, customer: "Emily Davis", type: "Minor Incident", time: "1 hour ago", severity: "info" },
  ];

  const activePolicies = [
    { id: 1, customer: "Sarah Johnson", vehicle: "Tesla Model 3", status: "critical" },
    { id: 2, customer: "Mike Chen", vehicle: "Honda Accord", status: "warning" },
    { id: 3, customer: "Emily Davis", vehicle: "Toyota Camry", status: "active" },
    { id: 4, customer: "James Wilson", vehicle: "Ford F-150", status: "active" },
    { id: 5, customer: "Lisa Anderson", vehicle: "BMW X5", status: "active" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] pb-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-6 pb-8">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-2xl font-bold text-white">ImpactIQ</h1>
          <Bell className="w-6 h-6 text-white" />
        </div>
        <p className="text-blue-100 text-sm">Insurer Dashboard</p>
      </div>

      <div className="px-6 -mt-4">
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {metrics.map((metric) => (
            <Card key={metric.label} className="bg-[#1a1a24] border-[#2a2a38] p-4">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-opacity-20 ${metric.color === 'text-blue-500' ? 'bg-blue-500' : 'bg-green-500'}`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <div>
                  <p className="text-gray-400 text-xs">{metric.label}</p>
                  <p className="text-white text-2xl font-bold">{metric.value}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Alerts */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-blue-400" />
            <h2 className="text-white text-lg font-bold">Recent Alerts</h2>
          </div>
          <div className="space-y-2">
            {recentAlerts.map((alert) => (
              <Card key={alert.id} className="bg-[#1a1a24] border-[#2a2a38] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      alert.severity === 'critical' ? 'bg-red-500/20' :
                      alert.severity === 'warning' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                    }`}>
                      <Bell className={`w-4 h-4 ${
                        alert.severity === 'critical' ? 'text-red-500' :
                        alert.severity === 'warning' ? 'text-yellow-500' : 'text-blue-500'
                      }`} />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{alert.customer}</p>
                      <p className="text-gray-400 text-xs">{alert.type}</p>
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">{alert.time}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Policies */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FileText className="w-5 h-5 text-blue-400" />
            <h2 className="text-white text-lg font-bold">Active Policies</h2>
          </div>
          <div className="space-y-2">
            {activePolicies.map((policy) => (
              <Card key={policy.id} className="bg-[#1a1a24] border-[#2a2a38] p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-800">
                      <Car className="w-5 h-5 text-gray-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{policy.customer}</p>
                      <p className="text-gray-400 text-xs">{policy.vehicle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {policy.status === 'critical' && (
                      <span className="flex items-center gap-1 text-red-500 text-xs font-medium">
                        <XCircle className="w-4 h-4" />
                        Critical
                      </span>
                    )}
                    {policy.status === 'warning' && (
                      <span className="flex items-center gap-1 text-yellow-500 text-xs font-medium">
                        <Clock className="w-4 h-4" />
                        Warning
                      </span>
                    )}
                    {policy.status === 'active' && (
                      <span className="flex items-center gap-1 text-green-500 text-xs font-medium">
                        <CheckCircle className="w-4 h-4" />
                        Active
                      </span>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Nav */}
        <div className="mt-6 flex gap-2 text-xs">
          <Link to="/" className="px-3 py-1.5 bg-blue-600 text-white rounded-lg">Insuree View</Link>
          <Link to="/vehicle-safe" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Vehicle Safe</Link>
          <Link to="/vehicle-moderate" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Moderate</Link>
          <Link to="/vehicle-crash" className="px-3 py-1.5 bg-gray-700 text-white rounded-lg">Crash</Link>
        </div>
      </div>
    </div>
  );
}
