import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Activity, Droplets, Moon, Clock, Plus, Target, Zap, ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"

export default function PhysicalWellness() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-pink-600">Physical Wellness</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Daily Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-pink-200 rounded-3xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-pink-600" />
                  <span className="text-pink-700">Steps</span>
                </div>
                <Badge variant="secondary" className="bg-pink-200 text-pink-800">
                  84%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-2xl font-bold text-pink-800">8,432</span>
                  <span className="text-sm text-pink-600">/ 10,000</span>
                </div>
                <Progress value={84} className="h-3" />
                <p className="text-xs text-pink-600">1,568 steps to go!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-200 rounded-3xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Droplets className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700">Water</span>
                </div>
                <Badge variant="secondary" className="bg-blue-200 text-blue-800">
                  75%
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-2xl font-bold text-blue-800">6</span>
                  <span className="text-sm text-blue-600">/ 8 cups</span>
                </div>
                <Progress value={75} className="h-3" />
                <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600 rounded-2xl">
                  <Plus className="w-4 h-4 mr-1" />
                  Log Water
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-200 rounded-3xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Moon className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700">Sleep</span>
                </div>
                <Badge variant="secondary" className="bg-green-200 text-green-800">
                  Great
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-2xl font-bold text-purple-800">7h 23m</span>
                  <span className="text-sm text-purple-600">Quality: 92%</span>
                </div>
                <Progress value={92} className="h-3" />
                <p className="text-xs text-purple-600">Excellent sleep quality!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Exercise Tracking */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Zap className="w-6 h-6" />
              <span>Exercise Log</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="exercise-type">Exercise Type</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-2xl bg-white">
                    <option>Select exercise</option>
                    <option>Walking</option>
                    <option>Running</option>
                    <option>Cycling</option>
                    <option>Yoga</option>
                    <option>Strength Training</option>
                    <option>Swimming</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duration (min)</Label>
                    <Input id="duration" type="number" placeholder="30" className="rounded-2xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="intensity">Intensity</Label>
                    <select className="w-full p-2 border border-gray-300 rounded-2xl bg-white">
                      <option>Light</option>
                      <option>Moderate</option>
                      <option>Vigorous</option>
                    </select>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 rounded-2xl">
                  Log Exercise
                </Button>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">{"Today's Activities"}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-2xl">
                    <div>
                      <p className="font-medium text-pink-800">Morning Walk</p>
                      <p className="text-sm text-pink-600">30 min • Light intensity</p>
                    </div>
                    <Badge variant="outline" className="text-pink-600 border-pink-300">
                      Completed
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-2xl">
                    <div>
                      <p className="font-medium text-purple-800">Yoga Session</p>
                      <p className="text-sm text-purple-600">45 min • Moderate intensity</p>
                    </div>
                    <Badge variant="outline" className="text-purple-600 border-purple-300">
                      Completed
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Smart Reminders */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Clock className="w-6 h-6" />
              <span>Smart Reminders</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-2xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Droplets className="w-5 h-5 text-blue-500" />
                  <span className="font-medium text-blue-700">Hydration</span>
                </div>
                <p className="text-sm text-blue-600 mb-3">Time for your next glass of water!</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-blue-300 text-blue-600 hover:bg-blue-100 rounded-2xl bg-transparent"
                >
                  Remind in 30 min
                </Button>
              </div>

              <div className="p-4 bg-purple-50 rounded-2xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  <span className="font-medium text-purple-700">Stretch Break</span>
                </div>
                <p className="text-sm text-purple-600 mb-3">{"You've been sitting for 2 hours"}</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-purple-300 text-purple-600 hover:bg-purple-100 rounded-2xl bg-transparent"
                >
                  Start Stretching
                </Button>
              </div>

              <div className="p-4 bg-pink-50 rounded-2xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Moon className="w-5 h-5 text-pink-500" />
                  <span className="font-medium text-pink-700">Sleep Prep</span>
                </div>
                <p className="text-sm text-pink-600 mb-3">Wind down routine in 1 hour</p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full border-pink-300 text-pink-600 hover:bg-pink-100 rounded-2xl bg-transparent"
                >
                  Set Reminder
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Integration */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl">
          <CardHeader>
            <CardTitle className="text-gray-700">Health App Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border-2 border-dashed border-gray-300 rounded-3xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Google Fit</h3>
                <p className="text-sm text-gray-600 mb-4">Sync your activity data automatically</p>
                <Button variant="outline" className="rounded-2xl bg-transparent">
                  Connect Google Fit
                </Button>
              </div>

              <div className="p-6 border-2 border-dashed border-gray-300 rounded-3xl text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Apple Health</h3>
                <p className="text-sm text-gray-600 mb-4">Import health metrics seamlessly</p>
                <Button variant="outline" className="rounded-2xl bg-transparent">
                  Connect Apple Health
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
