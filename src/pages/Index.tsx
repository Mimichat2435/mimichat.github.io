
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Youtube } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const themeClasses = isDark 
    ? "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
    : "min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-slate-900";

  const cardClasses = isDark
    ? "bg-slate-800/50 border-slate-700 backdrop-blur-sm"
    : "bg-white/60 border-slate-200 backdrop-blur-sm shadow-xl";

  return (
    <div className={themeClasses}>
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      
      {/* Background Pattern */}
      <div className={`absolute inset-0 opacity-20 ${isDark ? "bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" : "bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"}`}></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12 min-h-screen flex flex-col justify-center items-center">
        {/* Main Content */}
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Header */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
              Belufaney
            </h1>
            <p className={`text-xl md:text-2xl font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              Welcome to my creative universe
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Discord Card */}
            <Card className={`${cardClasses} hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20`}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 -28.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                    <g>
                      <path d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831178,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z" fill="currentColor" fillRule="nonzero"></path>
                    </g>
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Join My Discord</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Connect with the community and stay updated!</p>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('#', '_blank')}
                >
                  Click here to join Discord
                </Button>
              </CardContent>
            </Card>

            {/* Animations Card */}
            <Card className={`${cardClasses} hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20`}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M12 17l3-3H9l3 3z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Watch My Animations</h3>
                <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>Check out my latest creative works and animations!</p>
                <Button 
                  className="w-full bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('#', '_blank')}
                >
                  Click here to watch my animations
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="mt-16 space-y-6">
            <h2 className={`text-3xl font-bold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Follow Me</h2>
            <div className="flex justify-center gap-8">
              {/* YouTube */}
              <div className={`flex items-center space-x-3 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white/60 border-slate-200'} px-6 py-4 rounded-xl border hover:border-red-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 backdrop-blur-sm`}>
                <Youtube className="w-8 h-8 text-red-500" />
                <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>@Belufaney</span>
              </div>

              {/* Instagram */}
              <div className={`flex items-center space-x-3 ${isDark ? 'bg-slate-800/50 border-slate-700' : 'bg-white/60 border-slate-200'} px-6 py-4 rounded-xl border hover:border-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 backdrop-blur-sm`}>
                <Instagram className="w-8 h-8 text-pink-500" />
                <span className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>@_belufaney</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-500 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-16 w-5 h-5 bg-pink-500 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-500 rounded-full opacity-70 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      </div>
    </div>
  );
};

export default Index;
