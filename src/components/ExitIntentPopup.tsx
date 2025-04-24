
import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (
        e.clientY <= 0 && // Only trigger when mouse moves above the top edge
        !hasShown && // Only show once per session
        !sessionStorage.getItem('exitPopupShown') // Check session storage
      ) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleScheduleClick = () => {
    // Replace this URL with your actual Calendly link
    window.open('https://calendly.com/your-link', '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-[#2B1F5C] to-[#1E1B4B] border border-purple-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl text-white">Don't Miss Out!</DialogTitle>
          <DialogDescription className="text-gray-300 pt-2">
            Schedule a free consultation and learn how we can help you expand your game's reach across multiple platforms.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 pt-4">
          <Button
            onClick={handleScheduleClick}
            className="w-full bg-gradient-to-r from-purple-accent to-pink-500 hover:from-purple-accent/90 hover:to-pink-500/90 text-white font-semibold py-6"
          >
            <CalendarDays className="mr-2 h-5 w-5" />
            Schedule Free Consultation
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

