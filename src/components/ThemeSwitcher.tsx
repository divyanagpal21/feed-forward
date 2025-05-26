
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: 'light' | 'dark') => {
    setIsRotating(true);
    setTimeout(() => {
      setTheme(newTheme);
      toast.success(`${newTheme === 'light' ? 'Light' : 'Dark'} theme activated!`);
      setIsRotating(false);
    }, 300);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative w-9 h-9 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-0.5 active:translate-y-0"
        >
          <div className={`transition-transform duration-300 ${isRotating ? 'rotate-[360deg]' : ''}`}>
            {theme === 'dark' ? <Moon className="h-5 w-5 transition-all hover:text-primary" /> : <Sun className="h-5 w-5 transition-all hover:text-primary" />}
          </div>
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border border-border/50 shadow-lg animate-scale-in bg-background/90 backdrop-blur-md dark:bg-theme-dark">
        <DropdownMenuItem
          onClick={() => handleThemeChange('light')}
          className={`${theme === 'light' ? 'bg-accent' : ''} cursor-pointer transition-all hover:bg-accent/80 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0`}
        >
          <span>☀️</span> Light
          {theme === 'light' && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleThemeChange('dark')}
          className={`${theme === 'dark' ? 'bg-accent' : ''} cursor-pointer transition-all hover:bg-accent/80 flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0`}
        >
          <span>🌙</span> Dark
          {theme === 'dark' && <span className="ml-auto text-xs">✓</span>}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
