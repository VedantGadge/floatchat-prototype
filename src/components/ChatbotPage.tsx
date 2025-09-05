import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Send, Mic, HelpCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Mock data for chat responses - ensuring all data is properly defined
const salinityData = [
  { location: 'Equatorial Pacific', salinity: 34.7 },
  { location: 'Arabian Sea', salinity: 36.2 },
  { location: 'Bay of Bengal', salinity: 33.8 },
  { location: 'Indian Ocean', salinity: 35.1 },
];

const bgcData = [
  { parameter: 'Dissolved O₂', oct: 245, nov: 220, dec: 235, jan: 250, feb: 240, mar: 255 },
  { parameter: 'Nitrate', oct: 15, nov: 18, dec: 20, jan: 22, feb: 19, mar: 16 },
  { parameter: 'Chlorophyll', oct: 0.8, nov: 1.2, dec: 1.5, jan: 1.1, feb: 0.9, mar: 0.7 },
];

const temperatureDepthData = [
  { depth: 0, temperature: 28.5 },
  { depth: 50, temperature: 26.2 },
  { depth: 100, temperature: 22.8 },
  { depth: 150, temperature: 18.5 },
  { depth: 200, temperature: 15.2 },
  { depth: 300, temperature: 12.1 },
  { depth: 500, temperature: 8.7 },
  { depth: 1000, temperature: 4.2 },
];

const heatContentData = [
  { year: '2019', heat: 230 },
  { year: '2020', heat: 235 },
  { year: '2021', heat: 242 },
  { year: '2022', heat: 248 },
  { year: '2023', heat: 255 },
  { year: '2024', heat: 261 },
];

const currentVelocityData = [
  { direction: 'N', velocity: 0.15 },
  { direction: 'NE', velocity: 0.23 },
  { direction: 'E', velocity: 0.31 },
  { direction: 'SE', velocity: 0.28 },
  { direction: 'S', velocity: 0.19 },
  { direction: 'SW', velocity: 0.12 },
  { direction: 'W', velocity: 0.08 },
  { direction: 'NW', velocity: 0.11 },
];

const seasonalTrendData = [
  { month: 'Jan', temp: 27.2, salinity: 35.1 },
  { month: 'Feb', temp: 27.8, salinity: 35.2 },
  { month: 'Mar', temp: 28.5, salinity: 35.0 },
  { month: 'Apr', temp: 29.1, salinity: 34.8 },
  { month: 'May', temp: 29.8, salinity: 34.6 },
  { month: 'Jun', temp: 30.2, salinity: 34.5 },
  { month: 'Jul', temp: 29.9, salinity: 34.7 },
  { month: 'Aug', temp: 29.5, salinity: 34.9 },
  { month: 'Sep', temp: 29.0, salinity: 35.0 },
  { month: 'Oct', temp: 28.3, salinity: 35.2 },
  { month: 'Nov', temp: 27.7, salinity: 35.3 },
  { month: 'Dec', temp: 27.3, salinity: 35.2 },
];

const oxygenDepthData = [
  { depth: 0, oxygen: 220 },
  { depth: 100, oxygen: 180 },
  { depth: 200, oxygen: 45 },
  { depth: 400, oxygen: 15 },
  { depth: 600, oxygen: 12 },
  { depth: 800, oxygen: 18 },
  { depth: 1000, oxygen: 35 },
];

export function ChatbotPage() {
  const chatMessages = [
    {
      id: 1,
      type: 'user',
      text: 'Show me temperature profile data for the Arabian Sea in January 2024',
      timestamp: '15 min ago'
    },
    {
      id: 2,
      type: 'bot',
      text: 'Temperature profile from ARGO float 2902746 in the Arabian Sea (15.2°N, 65.8°E) from January 2024. The mixed layer depth is approximately 80m with a strong thermocline below.',
      timestamp: '15 min ago',
      hasChart: true,
      chartType: 'temperature-depth'
    },
    {
      id: 3,
      type: 'user',
      text: 'What is the ocean heat content trend in the Indian Ocean over the last 5 years?',
      timestamp: '12 min ago'
    },
    {
      id: 4,
      type: 'bot',
      text: 'Ocean Heat Content (OHC) in the Indian Ocean has shown a consistent warming trend from 2019-2024. The upper 2000m has gained approximately 31 ZJ of heat, indicating significant climate change impacts.',
      timestamp: '12 min ago',
      hasChart: true,
      chartType: 'heat-content'
    },
    {
      id: 5,
      type: 'user',
      text: 'Show current velocity patterns near the Maldives',
      timestamp: '10 min ago'
    },
    {
      id: 6,
      type: 'bot',
      text: 'Current velocity measurements from ARGO floats near the Maldives (4°N, 73°E) show predominantly eastward flow with speeds up to 0.31 m/s. This aligns with the South Equatorial Current patterns.',
      timestamp: '10 min ago',
      hasChart: true,
      chartType: 'current-velocity'
    },
    {
      id: 7,
      type: 'user',
      text: 'Compare seasonal temperature and salinity variations in the Bay of Bengal',
      timestamp: '8 min ago'
    },
    {
      id: 8,
      type: 'bot',
      text: 'Bay of Bengal shows distinct seasonal patterns: Temperature peaks in May (29.8°C) and reaches minimum in January (27.2°C). Salinity is lowest during monsoon months (34.5-34.6 PSU) due to freshwater influx.',
      timestamp: '8 min ago',
      hasChart: true,
      chartType: 'seasonal-trends'
    },
    {
      id: 9,
      type: 'user',
      text: 'Show me salinity profiles near the equator in March 2023',
      timestamp: '5 min ago'
    },
    {
      id: 10,
      type: 'bot',
      text: 'Salinity profiles from 10 ARGO floats within 6°N-6°S, March 2023. Data shows typical equatorial mixed layer depth with salinity variations between 34.7-36.2 PSU across different ocean basins.',
      timestamp: '5 min ago',
      hasChart: true,
      chartType: 'salinity'
    },
    {
      id: 11,
      type: 'user',
      text: 'Compare BGC parameters in the Arabian Sea for the last 6 months',
      timestamp: '3 min ago'
    },
    {
      id: 12,
      type: 'bot',
      text: 'Biogeochemical (BGC) parameters in the Arabian Sea (October 2023 - March 2024) show seasonal variations linked to monsoon patterns. Dissolved oxygen levels peak in January (250 μmol/kg), while chlorophyll shows maximum in December (1.5 mg/m³).',
      timestamp: '3 min ago',
      hasChart: true,
      chartType: 'bgc'
    },
    {
      id: 13,
      type: 'user',
      text: 'What are the nearest ARGO floats to coordinates 12.5°N, 65.8°E?',
      timestamp: '1 min ago'
    },
    {
      id: 14,
      type: 'bot',
      text: 'Found 4 active ARGO floats within 50km of location (12.5°N, 65.8°E). The nearest float (ID: 2901456) is 15km away and last reported temperature: 28.3°C, salinity: 35.1 PSU at surface.',
      timestamp: '1 min ago',
      hasMap: true
    },
    {
      id: 15,
      type: 'user',
      text: 'Show me dissolved oxygen levels at different depths in the Indian Ocean',
      timestamp: 'Just now'
    },
    {
      id: 16,
      type: 'bot',
      text: 'Analyzing dissolved oxygen profiles from 25 ARGO BGC floats in the Indian Ocean. Showing typical oxygen minimum zone (OMZ) between 200-800m depth with concentrations below 20 μmol/kg.',
      timestamp: 'Just now',
      hasChart: true,
      chartType: 'oxygen-depth'
    }
  ];

  const recentQueries = [
    'Ocean Heat Content',
    'Indian Ocean SST Anomaly',
    'ARGO Data Availability',
    'Mixed Layer Depth',
    'Salinity Anomalies',
    'BGC Float Locations',
    'Temperature Gradients',
    'Current Patterns'
  ];

  const savedVisualizations = [
    { name: 'Arabian Sea Temperature', type: 'Profile Analysis' },
    { name: 'Indian Ocean Heat Content', type: 'Trend Analysis' },
    { name: 'Bay of Bengal Salinity', type: 'Seasonal Patterns' },
    { name: 'Equatorial Currents', type: 'Velocity Map' },
    { name: 'BGC Parameters', type: 'Multi-variate' }
  ];

  return (
    <div className="h-screen overflow-hidden bg-slate-50">
      <div className="container mx-auto px-6 py-8 h-full flex flex-col">
        <div className="mb-8 text-center shrink-0">
          <h1 className="text-3xl text-slate-800 mb-2">ARGO Ocean Intelligence Chatbot</h1>
          <p className="text-slate-600">Ask questions about ocean data and get instant visualizations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 flex-1 min-h-0">
          {/* Chat Interface - Main Area */}
          <div className="lg:col-span-3 relative min-h-0 h-[calc(100vh-240px)] min-h-[560px] max-h-[820px]">
            <Card className="absolute inset-0 flex flex-col min-h-0 overflow-hidden">
              <CardHeader className="bg-slate-800 text-white rounded-t-lg shrink-0">
                <CardTitle className="text-lg">Ocean Data Intelligence</CardTitle>
              </CardHeader>
              
              {/* Chat Messages */}
              <CardContent className="flex-1 min-h-0 overflow-y-auto p-0 max-h-[62vh]">
                <div className="p-4 space-y-4">
                  {chatMessages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border shadow-sm'
                      }`}>
                        <div className="text-sm mb-1">{message.text}</div>
                        <div className={`text-xs ${message.type === 'user' ? 'text-blue-100' : 'text-slate-500'}`}>
                          {message.timestamp}
                        </div>
                        
                        {/* Dynamic charts based on chart type */}
                        {message.hasChart && message.chartType && (
                          <div className="mt-3 h-48 bg-slate-50 rounded-lg p-2">
                            <ResponsiveContainer width="100%" height="100%">
                              {(() => {
                                switch (message.chartType) {
                                  case 'temperature-depth':
                                    return (
                                      <LineChart data={temperatureDepthData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="depth" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="temperature" stroke="#dc2626" strokeWidth={2} name="Temperature (°C)" />
                                      </LineChart>
                                    );
                                  case 'heat-content':
                                    return (
                                      <LineChart data={heatContentData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="heat" stroke="#f97316" strokeWidth={3} name="Heat Content (ZJ)" />
                                      </LineChart>
                                    );
                                  case 'current-velocity':
                                    return (
                                      <BarChart data={currentVelocityData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="direction" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="velocity" fill="#0891b2" />
                                      </BarChart>
                                    );
                                  case 'seasonal-trends':
                                    return (
                                      <LineChart data={seasonalTrendData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="month" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="temp" stroke="#dc2626" strokeWidth={2} name="Temperature (°C)" />
                                        <Line type="monotone" dataKey="salinity" stroke="#2563eb" strokeWidth={2} name="Salinity (PSU)" />
                                      </LineChart>
                                    );
                                  case 'salinity':
                                    return (
                                      <LineChart data={salinityData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="location" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="salinity" stroke="#2563eb" strokeWidth={2} name="Salinity (PSU)" />
                                      </LineChart>
                                    );
                                  case 'bgc':
                                    return (
                                      <BarChart data={bgcData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="parameter" />
                                        <YAxis />
                                        <Tooltip />
                                        <Bar dataKey="oct" fill="#1e40af" />
                                        <Bar dataKey="nov" fill="#2563eb" />
                                        <Bar dataKey="dec" fill="#3b82f6" />
                                        <Bar dataKey="jan" fill="#60a5fa" />
                                        <Bar dataKey="feb" fill="#93c5fd" />
                                        <Bar dataKey="mar" fill="#dbeafe" />
                                      </BarChart>
                                    );
                                  case 'oxygen-depth':
                                    return (
                                      <LineChart data={oxygenDepthData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="depth" />
                                        <YAxis />
                                        <Tooltip />
                                        <Line type="monotone" dataKey="oxygen" stroke="#059669" strokeWidth={2} name="Dissolved O₂ (μmol/kg)" />
                                      </LineChart>
                                    );
                                  default:
                                    return null;
                                }
                              })()}
                            </ResponsiveContainer>
                          </div>
                        )}

                        {/* Map for location query */}
                        {message.hasMap && (
                          <div className="mt-3 h-48 bg-slate-100 rounded-lg p-2 relative">
                            <div className="text-xs text-slate-600 mb-2">Active ARGO floats near location:</div>
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm p-2 bg-white rounded">
                                <div>
                                  <div>Float ID: 2901456</div>
                                  <div className="text-xs text-slate-500">T: 28.3°C, S: 35.1 PSU</div>
                                </div>
                                <div className="text-right">
                                  <div>15 km</div>
                                  <div className="text-xs text-green-600">Active</div>
                                </div>
                              </div>
                              <div className="flex justify-between text-sm p-2 bg-white rounded">
                                <div>
                                  <div>Float ID: 2901466</div>
                                  <div className="text-xs text-slate-500">T: 27.8°C, S: 35.0 PSU</div>
                                </div>
                                <div className="text-right">
                                  <div>23 km</div>
                                  <div className="text-xs text-green-600">Active</div>
                                </div>
                              </div>
                              <div className="flex justify-between text-sm p-2 bg-white rounded">
                                <div>
                                  <div>Float ID: 2901450</div>
                                  <div className="text-xs text-slate-500">T: 28.1°C, S: 34.9 PSU</div>
                                </div>
                                <div className="text-right">
                                  <div>37 km</div>
                                  <div className="text-xs text-green-600">Active</div>
                                </div>
                              </div>
                            </div>
                            {/* Simple visual representation */}
                            <div className="absolute inset-0 pointer-events-none">
                              <svg className="w-full h-full">
                                <circle cx="50%" cy="50%" r="4" fill="#dc2626" />
                                <circle cx="45%" cy="45%" r="2" fill="#2563eb" />
                                <circle cx="55%" cy="40%" r="2" fill="#2563eb" />
                                <circle cx="60%" cy="55%" r="2" fill="#2563eb" />
                                <circle cx="40%" cy="60%" r="2" fill="#2563eb" />
                                <line x1="50%" y1="50%" x2="45%" y2="45%" stroke="#94a3b8" strokeWidth="1" />
                                <line x1="50%" y1="50%" x2="55%" y2="40%" stroke="#94a3b8" strokeWidth="1" />
                                <line x1="50%" y1="50%" x2="60%" y2="55%" stroke="#94a3b8" strokeWidth="1" />
                                <line x1="50%" y1="50%" x2="40%" y2="60%" stroke="#94a3b8" strokeWidth="1" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              
              {/* Input Area */}
              <div className="p-4 border-t bg-slate-50 shrink-0">
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon">
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Input 
                    placeholder="Ask a question about ocean data..."
                    className="flex-1"
                  />
                  <Button size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Quick suggestions */}
                <div className="flex space-x-2 mt-2">
                  <Button variant="outline" size="sm" className="text-xs">Recent Floats</Button>
                  <Button variant="outline" size="sm" className="text-xs">Sea Surface Temp</Button>
                  <Button variant="outline" size="sm" className="text-xs">Ocean Currents</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Recent Queries */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Queries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {recentQueries.map((query, index) => (
                  <div key={index} className="flex items-center space-x-2 p-2 rounded hover:bg-slate-50 cursor-pointer">
                    <div className="w-6 h-4 bg-slate-200 rounded"></div>
                    <span className="text-sm">{query}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Saved Visualizations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Saved Visualizations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {savedVisualizations.map((viz, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-8 h-6 bg-blue-600 rounded"></div>
                      <span className="text-sm">{viz.name}</span>
                    </div>
                    <div className="text-xs text-slate-500">{viz.type}</div>
                  </div>
                ))}
                
                <div className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-8 h-6 bg-slate-300 rounded flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-sm">My Salinity Chart</span>
                  </div>
                  <div className="text-xs text-slate-500">Network Analysis</div>
                </div>
              </CardContent>
            </Card>

            {/* Export Options */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Export Data</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full">ASCII</Button>
                <Button variant="outline" className="w-full">NetCDF</Button>
              </CardContent>
            </Card>

            {/* Help */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <HelpCircle className="w-5 h-5" />
                  <span>Help/FAQ</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}