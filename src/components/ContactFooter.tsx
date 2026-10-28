import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { useState } from "react";

export default function ContactFooter() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! We'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-primary">Global Community Cookbook</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Sharing the joy of cooking, one recipe at a time. Connecting cultures through the universal language of delicious food.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-background">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3 text-background/70">
              <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#categories" className="hover:text-primary transition-colors">Cuisines</a></li>
              <li><a href="#submit" className="hover:text-primary transition-colors">Submit Recipe</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 font-serif">Get in Touch</h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  required 
                  placeholder="Your Name" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-primary" 
                />
                <Input 
                  required 
                  type="email" 
                  placeholder="Email Address" 
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-primary" 
                />
              </div>
              <Textarea 
                required 
                placeholder="How can we help?" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus-visible:ring-primary min-h-[100px]" 
              />
              <Button type="submit" disabled={loading} className="bg-primary hover:bg-primary/90 text-white border-none">
                {loading ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>© {new Date().getFullYear()} Global Community Cookbook. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Made with love for food.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
