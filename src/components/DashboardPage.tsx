import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Mock data for charts
const trajectoryData = [
  { time: 0, depth: 0 },
  { time: 10, depth: -50 },
  { time: 20, depth: -100 },
  { time: 30, depth: -150 },
  { time: 40, depth: -200 },
  { time: 50, depth: -150 },
  { time: 60, depth: -100 },
];

const profileData = [
  { depth: 0, temperature: 28, salinity: 35.1 },
  { depth: -50, temperature: 26, salinity: 35.3 },
  { depth: -100, temperature: 22, salinity: 35.5 },
  { depth: -150, temperature: 18, salinity: 35.2 },
  { depth: -200, temperature: 15, salinity: 34.9 },
  { depth: -250, temperature: 12, salinity: 34.7 },
];

const comparisonData = [
  { value: -2000, profile1: 4, profile2: 6 },
  { value: -1500, profile1: 8, profile2: 10 },
  { value: -1000, profile1: 15, profile2: 18 },
  { value: -500, profile1: 22, profile2: 24 },
  { value: 0, profile1: 28, profile2: 26 },
];

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl text-slate-800 mb-2">Interactive ARGO Profile Dashboards</h1>
          <p className="text-slate-600">Analyze oceanographic data from ARGO float networks</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Dashboard Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Dashboard Selection */}
                <div>
                  <Label className="text-sm">Dashboard Selection</Label>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center space-x-2">
                      <Switch id="float-trajectories" defaultChecked />
                      <Label htmlFor="float-trajectories" className="text-sm">Float Trajectories</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Switch id="depth-time" />
                      <Label htmlFor="depth-time" className="text-sm">Depth-Time Plots</Label>
                    </div>
                  </div>
                </div>

                {/* Parameters */}
                <div>
                  <Label className="text-sm">Parameters</Label>
                  <div className="mt-2 space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="oxygen" defaultChecked />
                      <Label htmlFor="oxygen" className="text-sm">Oxygen</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pressure" />
                      <Label htmlFor="pressure" className="text-sm">Pressure</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="salinity" defaultChecked />
                      <Label htmlFor="salinity" className="text-sm">Salinity</Label>
                    </div>
                  </div>
                </div>

                {/* Date Range */}
                <div>
                  <Label className="text-sm">Date Range Selector</Label>
                  <div className="mt-2 space-y-2">
                    <Select defaultValue="2023-01">
                      <SelectTrigger>
                        <SelectValue placeholder="Start Date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023-01">2023-01</SelectItem>
                        <SelectItem value="2023-02">2023-02</SelectItem>
                        <SelectItem value="2023-03">2023-03</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="2023-12">
                      <SelectTrigger>
                        <SelectValue placeholder="End Date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2023-10">2023-10</SelectItem>
                        <SelectItem value="2023-11">2023-11</SelectItem>
                        <SelectItem value="2023-12">2023-12</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Export Options */}
                <div>
                  <Label className="text-sm">Export Options</Label>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">ASCII</Button>
                    <Button variant="outline" size="sm">NetCDF</Button>
                  </div>
                </div>

                {/* Visualization Type */}
                <div>
                  <div className="flex items-center space-x-2">
                    <Switch id="heatmaps" />
                    <Label htmlFor="heatmaps" className="text-sm">Heatmaps</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Map Trajectories */}
            <Card>
              <CardHeader>
                <CardTitle>Mapped Trajectories - Indian Ocean</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 relative overflow-hidden">
                  {/* Mock Map Background */}
                  <div 
                    className="absolute inset-0 opacity-20 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('https://images.unsplash.com/photo-1581922819772-1cb6451adfc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBvY2VhbiUyMG1hcCUyMHNhdGVsbGl0ZXxlbnwxfHx8fDE3NTcwNTk4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
                    }}
                  ></div>
                  
                  {/* Float Trajectories */}
                  <svg className="w-full h-full">
                    {/* Sample trajectory paths */}
                    <path d="M 50,80 Q 150,120 250,60 T 350,100" stroke="#2563eb" strokeWidth="2" fill="none" opacity="0.8" />
                    <path d="M 80,140 Q 180,100 280,120 T 380,80" stroke="#1d4ed8" strokeWidth="2" fill="none" opacity="0.8" />
                    <path d="M 120,200 Q 220,160 320,180 T 420,140" stroke="#1e40af" strokeWidth="2" fill="none" opacity="0.8" />
                    
                    {/* Float positions */}
                    <circle cx="50" cy="80" r="4" fill="#dc2626" />
                    <circle cx="350" cy="100" r="4" fill="#dc2626" />
                    <circle cx="80" cy="140" r="4" fill="#dc2626" />
                    <circle cx="380" cy="80" r="4" fill="#dc2626" />
                    <circle cx="120" cy="200" r="4" fill="#dc2626" />
                    <circle cx="420" cy="140" r="4" fill="#dc2626" />
                    
                    {/* Labels */}
                    <text x="55" y="75" className="text-xs fill-slate-700">2902746</text>
                    <text x="355" y="95" className="text-xs fill-slate-700">2902812</text>
                  </svg>
                  
                  <div className="absolute bottom-4 left-4 text-xs text-slate-600">
                    Interactive map showing ARGO float trajectories in the Indian Ocean
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {/* Depth-Time Plot */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Depth-Time Plot (Temperature & Salinity)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={profileData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="depth" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="temperature" stroke="#2563eb" strokeWidth="2" name="Temperature (°C)" />
                        <Line type="monotone" dataKey="salinity" stroke="#dc2626" strokeWidth="2" name="Salinity (PSU)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Profile Comparison */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Profile Comparison</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={comparisonData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="value" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="profile1" stackId="1" stroke="#2563eb" fill="#3b82f6" name="ID 2902746" />
                        <Area type="monotone" dataKey="profile2" stackId="2" stroke="#dc2626" fill="#ef4444" name="Salinity" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}