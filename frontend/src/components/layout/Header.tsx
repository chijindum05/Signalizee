import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, User, ChevronDown, Activity,  HandMetal, Home, Earth, BookOpenCheck } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header = ({ onToggleSidebar }: HeaderProps) => {
  const [authType, setAuthType] = useState<'login' | 'signup'>('login');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const applicationItems = [
    { icon: HandMetal, label: "HandScribe", description: "Real-time recognition and translation of hand gestures to text." },
    { icon: Home, label: "Home Automation System", description: "Home automation with hand gestures using Arduino and MediaPipe." },
    { icon: Earth, label: "EcoSense", description: "App for monitoring and reporting environmental pollutants." },
    { icon: BookOpenCheck, label: "PastPapers", description: "This is a smart and user-friendly app designed to help students access a vast collection of past examination questions anytime, anywhere" },
  ];

  const handleAuthClick = (type: 'login' | 'signup') => {
    setAuthType(type);
    setIsAuthOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 lg:px-6">
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          className="lg:hidden mr-2"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            Signalize
          </span>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Navigation - moved to far right */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          
          {/* Applications Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-1">
                <span>Applications</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-80 bg-popover border-border">
              {applicationItems.map((item, index) => (
                <DropdownMenuItem key={index} className="flex items-start space-x-3 p-4 cursor-pointer">
                  <item.icon className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Auth buttons and theme toggle */}
        <div className="flex items-center space-x-2 ml-4">
          <Button 
            variant="ghost" 
            onClick={() => handleAuthClick('login')}
            className="hidden sm:inline-flex"
          >
            Login
          </Button>
          <Button 
            className="tech-button hidden sm:inline-flex"
            onClick={() => handleAuthClick('signup')}
          >
            Sign Up
          </Button>
          
          <ThemeToggle />
          
          {/* User icon for mobile */}
          <Button variant="ghost" size="icon" className="sm:hidden">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        type={authType}
        onSwitchType={(type) => setAuthType(type)}
      />
    </header>
  );
};