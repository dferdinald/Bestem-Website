import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import RegistrationModal from "./RegistrationModal";

const ProgramSchedule = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleReserveSpot = (program: string, day: string, time: string) => {
    setSelectedProgram(program);
    setSelectedDay(day);
    setSelectedTime(time);
    setIsRegistrationOpen(true);
  };
  const schedules = [
    {
      program: "STEM Foundations",
      sessions: [
        { day: "Saturday", time: "9:00 AM - 12:00 PM", location: "Main Lab", spots: "5 spots left" },
        { day: "Sunday", time: "2:00 PM - 5:00 PM", location: "Innovation Lab", spots: "8 spots left" }
      ]
    },
    {
      program: "Innovation Labs",
      sessions: [
        { day: "Saturday", time: "1:00 PM - 5:00 PM", location: "Innovation Lab", spots: "3 spots left" }
      ]
    },
    {
      program: "Coding & Tech Skills",
      sessions: [
        { day: "Saturday", time: "11:00 AM - 2:00 PM", location: "Computer Lab", spots: "7 spots left" }
      ]
    },
    {
      program: "Robotics & Engineering",
      sessions: [
        { day: "Saturday", time: "9:00 AM - 1:00 PM", location: "Robotics Lab", spots: "2 spots left" }
      ]
    },
    {
      program: "AI & Machine Learning",
      sessions: [
        { day: "Saturday", time: "10:00 AM - 2:00 PM", location: "AI Lab", spots: "4 spots left" }
      ]
    },
    {
      program: "Advanced Programming",
      sessions: [
        { day: "Saturday", time: "2:00 PM - 6:00 PM", location: "Computer Lab", spots: "6 spots left" }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Class Schedule
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Find Your Perfect <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from flexible scheduling options designed to fit your lifestyle while maximizing learning outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {schedules.map((schedule, index) => (
            <Card key={index} className="bg-white shadow-card hover:shadow-primary transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{schedule.program}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          <span className="font-semibold">{session.day}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {session.spots}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{session.location}</span>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-3"
                        onClick={() => handleReserveSpot(schedule.program, session.day, session.time)}
                      >
                        Reserve Spot
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <RegistrationModal 
          open={isRegistrationOpen} 
          onOpenChange={setIsRegistrationOpen}
          preSelectedProgram={selectedProgram}
          preSelectedDay={selectedDay}
          preSelectedTime={selectedTime}
        />
      </div>
    </section>
  );
};

export default ProgramSchedule;
