import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Thermometer, Droplets, Leaf, TrendingUp, Target } from "lucide-react";
// Use URL-based import to avoid TS type issues with image modules
const fishmap = new URL("../assets/fishmap.jpg", import.meta.url).href;

// Mock data
const speciesData = [
  { species: 'Tuna', potential: 85 },
  { species: 'Mackerel', potential: 72 },
  { species: 'Sardines', potential: 68 },
  { species: 'Anchovies', potential: 55 },
];

const seasonalData = [
  { month: 'Jan', forecast: 78, historical: 72 },
  { month: 'Feb', forecast: 82, historical: 75 },
  { month: 'Mar', forecast: 85, historical: 80 },
  { month: 'Apr', forecast: 88, historical: 85 },
  { month: 'May', forecast: 92, historical: 88 },
  { month: 'Jun', forecast: 89, historical: 86 },
];

const conditionsData = [
  { parameter: 'Temperature', value: 28.5, unit: '°C', icon: Thermometer, color: 'text-red-500' },
  { parameter: 'Salinity', value: 35.2, unit: 'PSU', icon: Droplets, color: 'text-blue-500' },
  { parameter: 'Chlorophyll', value: 0.8, unit: 'mg/m³', icon: Leaf, color: 'text-green-500' },
];

const zoneData = [
  { name: 'High Potential', value: 35, color: '#22c55e' },
  { name: 'Medium Potential', value: 45, color: '#eab308' },
  { name: 'Low Potential', value: 20, color: '#ef4444' },
];

export function FisheriesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl text-slate-800 mb-2">AI-Powered Fishing Zone Analysis</h1>
          <p className="text-slate-600">Real-time analysis of optimal fishing zones using oceanographic data and AI predictions</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Map Area */}
          <div className="xl:col-span-2">
            <Card className="h-[600px]">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Global Fishing Potential Zones</span>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span>High</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <span>Medium</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span>Low</span>
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="h-full p-6">
                <div className="h-full relative rounded-lg overflow-hidden">
                  {/* World Map Background */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${fishmap})` }}
                  >
                    <div className="absolute inset-0 bg-slate-900/20"></div>
                  </div>

                  {/* Legend overlay like mockup */}
                  <div className="absolute left-4 bottom-4 bg-slate-900/80 text-white rounded-xl p-4 w-64">
                    <div className="text-sm mb-2">Fishing Potential</div>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-2 bg-green-500 rounded"></div>
                        <span>High</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-2 bg-yellow-500 rounded"></div>
                        <span>Medium Potential</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-2 bg-red-500 rounded"></div>
                        <span>Low</span>
                      </div>
                    </div>
                  </div>

                  {/* Focus indicator on Indian Ocean */}
                  <div className="absolute bottom-4 right-4 bg-white/90 rounded-lg p-2 text-xs">
                    <div className="font-medium">Focus: Indian Ocean & Asia-Pacific</div>
                    <div className="text-slate-600">Real-time analysis updated</div>
                  </div>
                </div>
              </CardContent>
            </Card>

              {/* Bottom Section now under the map within the same column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Seasonal Trends */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5" />
                      <span>Seasonal Trends & Forecasts</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={seasonalData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis />
                          <Tooltip />
                          <Line type="monotone" dataKey="forecast" stroke="#2563eb" strokeWidth="2" name="Forecast" />
                          <Line type="monotone" dataKey="historical" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5" name="Historical" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Insights */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <Target className="w-5 h-5" />
                      <span>AI Insights</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-sm mb-2">Key Factors</div>
                      <div className="text-xs text-slate-600">Temperature gradients and chlorophyll concentration show optimal conditions in Eastern Indian Ocean</div>
                    </div>
                  
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl text-green-600">92%</div>
                        <div className="text-xs text-slate-600">Confidence Level</div>
                      </div>
                      <div>
                        <div className="text-2xl text-blue-600">87%</div>
                        <div className="text-xs text-slate-600">Accuracy</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Forecast Controls removed */}
              </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Current Conditions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Ocean Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {conditionsData.map((condition, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <condition.icon className={`w-5 h-5 ${condition.color}`} />
                      <span className="text-sm">{condition.parameter}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg">{condition.value}</div>
                      <div className="text-xs text-slate-500">{condition.unit}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Species Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Species Distribution Predictions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={speciesData} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="species" type="category" />
                      <Tooltip />
                      <Bar dataKey="potential" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Zone Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Zone Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={zoneData}
                        cx="50%"
                        cy="50%"
                        innerRadius={20}
                        outerRadius={60}
                        dataKey="value"
                      >
                        {zoneData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-1 mt-2">
                  {zoneData.map((zone, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>{zone.name}</span>
                      <span>{zone.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

  {/* Bottom section moved above inside left column */}
      </div>
    </div>
  );
}