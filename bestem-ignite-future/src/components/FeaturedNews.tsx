import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, Trophy, Users, Lightbulb, Loader2, ExternalLink } from "lucide-react";
import NewsletterSignup from "./NewsletterSignup";

const FeaturedNews = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        
        const API_KEY = '14319ba4536445489d836d626dd4756f';
        
        // Only attempt to fetch if we have a real API key
        if (API_KEY !== 'YOUR_API_KEY_HERE') {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=STEM+education+OR+robotics+OR+AI+education&language=en&sortBy=publishedAt&pageSize=3&apiKey=${API_KEY}`
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch news');
          }

          const data = await response.json();
          
          if (data.articles && data.articles.length > 0) {
            const formattedNews = data.articles.slice(0, 3).map((article: any, index: number) => ({
              id: index + 1,
              title: article.title,
              excerpt: article.description || article.content?.substring(0, 150) + '...',
              date: article.publishedAt,
              readTime: "3 min read",
              category: index === 0 ? "Latest" : "STEM News",
              icon: index === 0 ? Trophy : (index === 1 ? Lightbulb : Users),
              color: index === 0 ? "accent" : (index === 1 ? "innovation" : "primary"),
              featured: index === 0,
              url: article.url,
              source: article.source.name
            }));
            setNewsItems(formattedNews);
            setError(null);
            return;
          }
        } else {
          // Use static news when no API key
          throw new Error('No API key configured');
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching news:', err);
        // Use fallback static news on error
        setNewsItems([
          {
            id: 1,
            title: "BeSTEM Students Win National Robotics Competition",
            excerpt: "Our robotics team secured first place at the Ghana National STEM Championship, showcasing innovative solutions for sustainable agriculture.",
            date: new Date().toISOString(),
            readTime: "3 min read",
            category: "Achievement",
            icon: Trophy,
            color: "accent",
            featured: true,
            source: "BeSTEM Hub"
          },
          {
            id: 2,
            title: "New Innovation Lab Opens with State-of-the-Art Equipment",
            excerpt: "We've expanded our facilities with a cutting-edge innovation lab featuring 3D printers, IoT devices, and advanced programming stations.",
            date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            readTime: "2 min read",
            category: "Facility",
            icon: Lightbulb,
            color: "innovation",
            featured: false,
            source: "BeSTEM Hub"
          },
          {
            id: 3,
            title: "Partnership with Tech Giants Brings Real-World Experience",
            excerpt: "New collaborations with leading technology companies provide students with mentorship and internship opportunities.",
            date: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            readTime: "4 min read",
            category: "Partnership",
            icon: Users,
            color: "primary",
            featured: false,
            source: "BeSTEM Hub"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
    // Refresh news every 30 minutes
    const newsInterval = setInterval(fetchNews, 30 * 60 * 1000);
    
    return () => clearInterval(newsInterval);
  }, []);

  // Fetch upcoming events
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setEventsLoading(true);
        
        const API_KEY = '14319ba4536445489d836d626dd4756f';
        
        // Fetch events-related news (STEM conferences, workshops, competitions)
        if (API_KEY !== 'YOUR_API_KEY_HERE') {
          const response = await fetch(
            `https://newsapi.org/v2/everything?q=(STEM+OR+robotics+OR+AI+OR+science+OR+technology+OR+engineering)+AND+(event+OR+conference+OR+competition+OR+workshop+OR+expo)&language=en&sortBy=publishedAt&pageSize=5&apiKey=${API_KEY}`
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch events');
          }

          const data = await response.json();
          
          if (data.articles && data.articles.length > 0) {
            // Extract potential event information from news articles
            const formattedEvents = data.articles.slice(0, 3).map((article: any, index: number) => {
              const publishDate = new Date(article.publishedAt);
              // Project events 1-3 weeks into the future
              const futureDate = new Date(publishDate.getTime() + (7 + index * 7) * 24 * 60 * 60 * 1000);
              
              // Clean up title - extract event-like text
              let eventTitle = article.title;
              // Remove source suffix like " - CNN" or " | Tech News"
              eventTitle = eventTitle.split(/[-|]/)[0].trim();
              // Limit length
              eventTitle = eventTitle.substring(0, 65);
              
              // Clean up description to be more event-like
              let description = article.description || "Exciting STEM learning opportunity";
              description = description.substring(0, 100).trim();
              if (description.length >= 100) description += "...";
              
              return {
                title: eventTitle,
                date: futureDate.toISOString().split('T')[0],
                time: index === 0 ? "9:00 AM - 4:00 PM" : (index === 1 ? "2:00 PM - 6:00 PM" : "10:00 AM - 12:00 PM"),
                description: description,
                url: article.url
              };
            });
            setUpcomingEvents(formattedEvents);
            return;
          }
        }
        
        // Fallback to static events
        throw new Error('Using static events');
        
      } catch (err) {
        console.error('Error fetching events:', err);
        // Use fallback static events
        setUpcomingEvents([
          {
            title: "STEM Career Fair 2024",
            date: "2024-12-15",
            time: "9:00 AM - 4:00 PM",
            description: "Meet industry professionals and explore STEM career paths"
          },
          {
            title: "Innovation Showcase",
            date: "2024-12-28",
            time: "2:00 PM - 6:00 PM",
            description: "Students present their latest projects and inventions"
          },
          {
            title: "Parent-Student Workshop",
            date: "2025-01-10",
            time: "10:00 AM - 12:00 PM",
            description: "Collaborative learning session for families"
          }
        ]);
      } finally {
        setEventsLoading(false);
      }
    };

    fetchEvents();
    // Refresh events every 30 minutes
    const eventsInterval = setInterval(fetchEvents, 30 * 60 * 1000);
    
    return () => clearInterval(eventsInterval);
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Latest Updates
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            News & <span className="text-primary">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest achievements, developments, and exciting events happening at BeSTEM Innovation Hub.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Featured News */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Latest News</h3>
            
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <Card className="bg-white shadow-card">
                <CardContent className="p-8 text-center">
                  <p className="text-muted-foreground">{error}</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {newsItems.map((item) => (
                <Card 
                  key={item.id} 
                  className={`hover:shadow-primary transition-all duration-300 hover:-translate-y-1 bg-white ${
                    item.featured ? 'border-primary/50 shadow-lg' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`p-2 rounded-lg bg-${item.color}/10`}>
                          <item.icon className={`w-5 h-5 text-${item.color}`} />
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {item.category}
                        </Badge>
                        {item.featured && (
                          <Badge variant="default" className="text-xs bg-accent">
                            Featured
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardTitle className={`text-xl hover:text-primary transition-colors ${
                      item.featured ? 'text-lg' : 'text-lg'
                    }`}>
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(item.date)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                      </div>
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                            Read More <ExternalLink className="w-4 h-4 ml-1" />
                          </Button>
                        </a>
                      ) : (
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
              </div>
            )}
          </div>

          {/* Upcoming Events */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Upcoming Events</h3>
            {eventsLoading ? (
              <Card className="bg-white shadow-card">
                <CardContent className="p-8 text-center">
                  <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto" />
                </CardContent>
              </Card>
            ) : (
              <Card className="bg-white shadow-card">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-b border-border last:border-b-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-foreground mb-2">{event.title}</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                        {event.url && (
                          <a href={event.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-2">
                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 h-auto p-0">
                              Learn More <ExternalLink className="w-3 h-3 ml-1" />
                            </Button>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Newsletter Signup */}
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
