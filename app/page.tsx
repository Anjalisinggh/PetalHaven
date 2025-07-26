import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Heart, Brain, Activity, Droplets, Moon, Smile, Star, TrendingUp, Calendar, Award } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
               Petal Haven
              </h1>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                <Star className="w-3 h-3 mr-1" />
                1,247 points
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Buddy</h2>
          <p className="text-gray-600">{"Let's nurture your wellness journey today"}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-to-br from-pink-100 to-pink-200 border-pink-200 rounded-3xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-pink-700 font-medium">Today's Steps</p>
                  <p className="text-2xl font-bold text-pink-800">8,432</p>
                </div>
                <Activity className="w-8 h-8 text-pink-600" />
              </div>
              <Progress value={84} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-200 rounded-3xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-700 font-medium">Water Intake</p>
                  <p className="text-2xl font-bold text-blue-800">6/8 cups</p>
                </div>
                <Droplets className="w-8 h-8 text-blue-600" />
              </div>
              <Progress value={75} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-200 rounded-3xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-700 font-medium">Sleep</p>
                  <p className="text-2xl font-bold text-purple-800">7h 23m</p>
                </div>
                <Moon className="w-8 h-8 text-purple-600" />
              </div>
              <Progress value={92} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-100 to-green-200 border-green-200 rounded-3xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-green-700 font-medium">Mood Score</p>
                  <p className="text-2xl font-bold text-green-800">8.2/10</p>
                </div>
                <Smile className="w-8 h-8 text-green-600" />
              </div>
              <Progress value={82} className="mt-2 h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Physical Wellness */}
          <Card className="bg-white/70 backdrop-blur-sm border-pink-200 rounded-3xl hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-pink-700">
                <Activity className="w-6 h-6" />
                <span>Physical Wellness</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Daily Activity</span>
                  <Badge variant="outline" className="text-pink-600 border-pink-300">
                    Active
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Hydration Reminder</span>
                  <span className="text-xs text-blue-600">In 30 min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Stretch Break</span>
                  <span className="text-xs text-purple-600">Due now</span>
                </div>
              </div>
              <Link href="/physical">
                <Button className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 rounded-2xl">
                  Track Physical Wellness
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Mental Wellness */}
          <Card className="bg-white/70 backdrop-blur-sm border-purple-200 rounded-3xl hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-purple-700">
                <Brain className="w-6 h-6" />
                <span>Mental Wellness</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Meditation Streak</span>
                  <Badge variant="outline" className="text-purple-600 border-purple-300">
                    7 days
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mindfulness Check</span>
                  <span className="text-xs text-green-600">Completed</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Breathing Exercise</span>
                  <span className="text-xs text-blue-600">Available</span>
                </div>
              </div>
              <Link href="/mental">
                <Button className="w-full bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 rounded-2xl">
                  Explore Mental Wellness
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Emotional Wellness */}
          <Card className="bg-white/70 backdrop-blur-sm border-blue-200 rounded-3xl hover:shadow-lg transition-all duration-300">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center space-x-2 text-blue-700">
                <Heart className="w-6 h-6" />
                <span>Emotional Wellness</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Emotion Log</span>
                  <Badge variant="outline" className="text-green-600 border-green-300">
                    Grateful
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Journal Entry</span>
                  <span className="text-xs text-purple-600">Pending</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Support Network</span>
                  <span className="text-xs text-pink-600">3 friends</span>
                </div>
              </div>
              <Link href="/emotional">
                <Button className="w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-2xl">
                  Nurture Emotions
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Insights */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <TrendingUp className="w-6 h-6" />
              <span>Weekly Wellness Report</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Improvement</h3>
                <p className="text-sm text-gray-600">Sleep quality up 15%</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Achievement</h3>
                <p className="text-sm text-gray-600">7-day meditation streak</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800">Consistency</h3>
                <p className="text-sm text-gray-600">Daily check-ins: 6/7</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="h-20 rounded-3xl border-pink-200 hover:bg-pink-50 bg-transparent">
            <div className="text-center">
              <Droplets className="w-6 h-6 mx-auto mb-1 text-blue-500" />
              <span className="text-sm">Log Water</span>
            </div>
          </Button>
          <Button variant="outline" className="h-20 rounded-3xl border-purple-200 hover:bg-purple-50 bg-transparent">
            <div className="text-center">
              <Brain className="w-6 h-6 mx-auto mb-1 text-purple-500" />
              <span className="text-sm">Quick Meditation</span>
            </div>
          </Button>
          <Button variant="outline" className="h-20 rounded-3xl border-green-200 hover:bg-green-50 bg-transparent">
            <div className="text-center">
              <Smile className="w-6 h-6 mx-auto mb-1 text-green-500" />
              <span className="text-sm">Mood Check</span>
            </div>
          </Button>
          <Button variant="outline" className="h-20 rounded-3xl border-yellow-200 hover:bg-yellow-50 bg-transparent">
            <div className="text-center">
              <Star className="w-6 h-6 mx-auto mb-1 text-yellow-500" />
              <span className="text-sm">Affirmation</span>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}
