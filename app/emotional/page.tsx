import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  Smile,
  Frown,
  Meh,
  Angry,
  Zap,
  ArrowLeft,
  Users,
  Lock,
  Sparkles,
  Music,
  BookOpen,
  Coffee,
} from "lucide-react"
import Link from "next/link"

export default function EmotionalWellness() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
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
              <h1 className="text-2xl font-bold text-pink-600">Emotional Wellness Space</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Emotion Tracker */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Heart className="w-6 h-6" />
              <span>How are you feeling right now?</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <Button
                variant="outline"
                className="h-24 rounded-3xl border-green-200 hover:bg-green-50 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Smile className="w-8 h-8 text-green-500" />
                <span className="text-sm font-medium">Happy</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 rounded-3xl border-blue-200 hover:bg-blue-50 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Meh className="w-8 h-8 text-blue-500" />
                <span className="text-sm font-medium">Calm</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 rounded-3xl border-yellow-200 hover:bg-yellow-50 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Zap className="w-8 h-8 text-yellow-500" />
                <span className="text-sm font-medium">Excited</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 rounded-3xl border-gray-200 hover:bg-gray-50 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Frown className="w-8 h-8 text-gray-500" />
                <span className="text-sm font-medium">Sad</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 rounded-3xl border-red-200 hover:bg-red-50 flex flex-col items-center justify-center space-y-2 bg-transparent"
              >
                <Angry className="w-8 h-8 text-red-500" />
                <span className="text-sm font-medium">Frustrated</span>
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Tell us more about your feelings</label>
                <Textarea
                  placeholder="What's contributing to how you feel today?"
                  className="rounded-2xl border-gray-300"
                  rows={3}
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 rounded-2xl">
                Log Emotion
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Today's Emotional Journey */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="text-gray-700">{"Today's Emotional Journey"}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-2xl">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Smile className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-green-800">Grateful</p>
                  <p className="text-sm text-green-600">9:30 AM - Morning coffee and sunshine</p>
                </div>
                <Badge variant="outline" className="text-green-600 border-green-300">
                  Current
                </Badge>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-2xl">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <Meh className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-blue-800">Focused</p>
                  <p className="text-sm text-blue-600">7:45 AM - Started work with clear mind</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-3 bg-yellow-50 rounded-2xl">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-yellow-800">Energized</p>
                  <p className="text-sm text-yellow-600">6:00 AM - Great workout session</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Anonymous Expression Room */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Lock className="w-6 h-6" />
              <span>Anonymous Expression Room</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Lock className="w-5 h-5 text-purple-500" />
                  <span className="font-medium text-purple-700">Safe Space</span>
                </div>
                <p className="text-sm text-purple-600">
                  This is your private space to express anything on your mind. Your thoughts are completely anonymous
                  and secure.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Express yourself freely</label>
                <Textarea
                  placeholder="Write your thoughts, rants, worries, or anything you need to get off your chest..."
                  className="rounded-2xl border-gray-300"
                  rows={5}
                />
              </div>

              <div className="flex space-x-2">
                <Button className="flex-1 bg-gradient-to-r from-purple-400 to-purple-500 hover:from-purple-500 hover:to-purple-600 rounded-2xl">
                  Release & Clear
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-600 rounded-2xl bg-transparent">
                  Save Privately
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Support Network */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Users className="w-6 h-6" />
              <span>Support Network</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Your Circle</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-pink-50 rounded-2xl">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback className="bg-pink-200 text-pink-700">EM</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-pink-800">Emma (Best Friend)</p>
                      <p className="text-sm text-pink-600">Always here to listen</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-pink-300 text-pink-600 rounded-2xl bg-transparent"
                    >
                      Chat
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-2xl">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback className="bg-blue-200 text-blue-700">DR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-blue-800">Dr. Rodriguez (Mentor)</p>
                      <p className="text-sm text-blue-600">Professional guidance</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-300 text-blue-600 rounded-2xl bg-transparent"
                    >
                      Schedule
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-2xl">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback className="bg-green-200 text-green-700">MG</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium text-green-800">Mom</p>
                      <p className="text-sm text-green-600">Unconditional support</p>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-green-300 text-green-600 rounded-2xl bg-transparent"
                    >
                      Call
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Expand Your Network</h3>
                <div className="p-4 border-2 border-dashed border-gray-300 rounded-3xl text-center">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600 mb-3">Connect with friends or find a mentor</p>
                  <Button variant="outline" className="rounded-2xl bg-transparent">
                    Invite Friends
                  </Button>
                </div>

                <div className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl">
                  <h4 className="font-medium text-purple-800 mb-2">Professional Support</h4>
                  <p className="text-sm text-purple-600 mb-3">Connect with licensed therapists and counselors</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-300 text-purple-600 rounded-2xl bg-transparent"
                  >
                    Find Therapist
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Self-Care Activities */}
        <Card className="bg-white/70 backdrop-blur-sm border-gray-200 rounded-3xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-gray-700">
              <Sparkles className="w-6 h-6" />
              <span>Self-Care Suggestions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl text-center">
                <Music className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <h3 className="font-medium text-pink-800 mb-1">Calming Music</h3>
                <p className="text-xs text-pink-600 mb-3">Soothing playlist for relaxation</p>
                <Button size="sm" className="bg-pink-500 hover:bg-pink-600 rounded-2xl">
                  Play Now
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl text-center">
                <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-medium text-purple-800 mb-1">Journal Prompts</h3>
                <p className="text-xs text-purple-600 mb-3">Guided reflection questions</p>
                <Button size="sm" className="bg-purple-500 hover:bg-purple-600 rounded-2xl">
                  Start Writing
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl text-center">
                <Heart className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <h3 className="font-medium text-blue-800 mb-1">Gratitude Practice</h3>
                <p className="text-xs text-blue-600 mb-3">Daily appreciation exercise</p>
                <Button size="sm" className="bg-blue-500 hover:bg-blue-600 rounded-2xl">
                  Practice Now
                </Button>
              </div>

              <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl text-center">
                <Coffee className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-medium text-green-800 mb-1">Tea Break</h3>
                <p className="text-xs text-green-600 mb-3">Mindful moment with tea</p>
                <Button size="sm" className="bg-green-500 hover:bg-green-600 rounded-2xl">
                  Take Break
                </Button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl">
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                <span className="font-medium text-orange-700">Personalized Suggestion</span>
              </div>
              <p className="text-sm text-orange-600">
                {
                  "Based on your current mood, we recommend taking a short walk outside. Fresh air and movement can help boost your energy and mood."
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
