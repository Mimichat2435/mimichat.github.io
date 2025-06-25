
import React from 'react';
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ThemeToggle = ({ isDark, onToggle }: ThemeToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
      <Sun className={`w-5 h-5 transition-colors ${isDark ? 'text-slate-400' : 'text-yellow-500'}`} />
      <Switch
        checked={isDark}
        onCheckedChange={onToggle}
        className="data-[state=checked]:bg-slate-600 data-[state=unchecked]:bg-white/20"
      />
      <Moon className={`w-5 h-5 transition-colors ${isDark ? 'text-blue-400' : 'text-slate-400'}`} />
    </div>
  );
};

export default ThemeToggle;
