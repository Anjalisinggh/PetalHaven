import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Play, Pause, Star, ArrowLeft, Wind, Sparkles, BookOpen, Target } from "lucide-react"
import Link from "next/link"

export default function MentalWellness() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-purple-600">Mental Wellness Zone</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Meditation Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-200 rounded-3xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-700">Meditation Streak</span>
                </div>
                <Badge variant="secondary" className="bg-purple-200 text-purple-800">
                  7 days
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <span className="text-3xl font-bold text-purple-800">7</span>
                  <p className="text-sm text-purple-600">consecutive days</p>
                </div>
                <Progress value={70} className="h-3" />
                <p className="text-xs text-purple-600">3 more days to reach your goal!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-100 to-blue-200 border-blue-200 rounded-3xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Wind className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700">Mindfulness</span>
                </div>
                <Badge variant="secondary" className="bg-green-200 text-green-800">
                  Present
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <span className="text-3xl font-bold text-blue-800">8.5</span>
                  <p className="text-sm text-blue-600">mindfulness score</p>
                </div>
                <Progress value={85} className="h-3" />
                <p className="text-xs text-blue-600">Feeling very present today!</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-100 to-indigo-200 border-indigo-200 rounded-3xl">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  <span className="text-indigo-700">Focus Time</span>
                </div>
                <Badge variant="secondary" className="bg-indigo-200 text-indigo-800">
                  45 min
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <span className="text-3xl font-bold text-indigo-800">2h 15m</span>
                  <p className="text-sm text-indigo-600">total today</p>
                </div>
                <Progress value={90} className="h-3" />
                <p className="text-xs text-indigo-600">Excellent focus session!</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guided Meditations */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Play className="w-6 h-6" />
              <span>Guided Meditations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-purple-800">Morning Clarity</h3>
                  <Badge variant="outline" className="text-purple-600 border-purple-300">
                    5 min
                  </Badge>
                </div>
                <p className="text-sm text-purple-600 mb-4">Start your day with focused intention</p>
                <Button size="sm" className="w-full bg-purple-500 hover:bg-purple-600 rounded-2xl">
                  <Play className="w-4 h-4 mr-1" />
                  Start Session
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-blue-800">Stress Relief</h3>
                  <Badge variant="outline" className="text-blue-600 border-blue-300">
                    10 min
                  </Badge>
                </div>
                <p className="text-sm text-blue-600 mb-4">Release tension and find calm</p>
                <Button size="sm" className="w-full bg-blue-500 hover:bg-blue-600 rounded-2xl">
                  <Play className="w-4 h-4 mr-1" />
                  Start Session
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-indigo-800">Sleep Preparation</h3>
                  <Badge variant="outline" className="text-indigo-600 border-indigo-300">
                    15 min
                  </Badge>
                </div>
                <p className="text-sm text-indigo-600 mb-4">Gentle transition to restful sleep</p>
                <Button size="sm" className="w-full bg-indigo-500 hover:bg-indigo-600 rounded-2xl">
                  <Play className="w-4 h-4 mr-1" />
                  Start Session
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Breathing Exercises */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Wind className="w-6 h-6" />
              <span>Breathing Exercises</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Wind className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-semibold text-blue-800 mb-2">4-7-8 Breathing</h3>
                  <p className="text-sm text-blue-600 mb-4">Inhale 4, Hold 7, Exhale 8</p>
                  <div className="flex space-x-2 justify-center">
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600 rounded-2xl">
                      <Play className="w-4 h-4 mr-1" />
                      Start
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-600 rounded-2xl bg-transparent"
                    >
                      <Pause className="w-4 h-4 mr-1" />
                      Pause
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Quick Techniques</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-2xl">
                    <div>
                      <p className="font-medium text-purple-800">Box Breathing</p>
                      <p className="text-sm text-purple-600">4-4-4-4 pattern</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-300 text-purple-600 rounded-2xl bg-transparent"
                    >
                      Try Now
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-2xl">
                    <div>
                      <p className="font-medium text-green-800">Belly Breathing</p>
                      <p className="text-sm text-green-600">Deep diaphragmatic</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-300 text-green-600 rounded-2xl bg-transparent"
                    >
                      Try Now
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-pink-50 rounded-2xl">
                    <div>
                      <p className="font-medium text-pink-800">Coherent Breathing</p>
                      <p className="text-sm text-pink-600">5 seconds in, 5 out</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-pink-300 text-pink-600 rounded-2xl bg-transparent"
                    >
                      Try Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mindfulness Check-In */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Target className="w-6 h-6" />
              <span>Mindfulness Check-In</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">How present do you feel right now?</h3>
                <p className="text-sm text-gray-600">Take a moment to tune into your current state</p>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <Button
                    key={rating}
                    variant="outline"
                    className="h-16 rounded-3xl border-purple-200 hover:bg-purple-50 flex flex-col items-center justify-center bg-transparent"
                  >
                    <Star className="w-5 h-5 mb-1" />
                    <span className="text-xs">{rating}</span>
                  </Button>
                ))}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">What are you noticing right now?</label>
                <Textarea
                  placeholder="Describe your thoughts, feelings, or sensations..."
                  className="rounded-2xl border-gray-300"
                  rows={3}
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 rounded-2xl">
                Complete Check-In
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Mood Journal with AI */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <BookOpen className="w-6 h-6" />
              <span>AI-Powered Mood Journal</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <span className="font-medium text-purple-700">AI Insight</span>
                </div>
                <p className="text-sm text-purple-600">
                  {
                    "Based on your recent entries, you seem to be experiencing more clarity and focus. Consider exploring creative activities to enhance this positive momentum."
                  }
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">{"How are you feeling today?"}</label>
                <Textarea
                  placeholder="Express your thoughts and emotions freely..."
                  className="rounded-2xl border-gray-300"
                  rows={4}
                />
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1 bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 rounded-2xl">
                  Save Entry
                </Button>
                <Button variant="outline" className="border-purple-300 text-purple-600 rounded-2xl bg-transparent">
                  <Sparkles className="w-4 h-4 mr-1" />
                  Get AI Suggestions
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
