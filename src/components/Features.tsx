import { BookOpen, Clock, Sparkles, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: BookOpen,
    emoji: "📖",
    title: "12 Surgeon-Approved Recipes",
    description: "Each recipe is carefully crafted to meet strict keto requirements while tasting absolutely divine.",
  },
  {
    icon: Clock,
    emoji: "⏱️",
    title: "Ready in 5 Minutes",
    description: "No complex prep or fancy equipment needed. Just simple ingredients and your Ninja Creami.",
  },
  {
    icon: Sparkles,
    emoji: "✨",
    title: "Zero Sugar, Pure Joy",
    description: "Enjoy creamy, satisfying desserts without the guilt. Perfect for maintaining your health goals.",
  },
  {
    icon: Heart,
    emoji: "❤️",
    title: "Doctor Recommended",
    description: "Developed with input from medical professionals to ensure safety and nutrition.",
  },
];

const Features = () => {
  return (
    <section id="guide" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Your Complete Guide to{" "}
            <span className="text-primary">5-Minute Keto Desserts</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to create delicious, guilt-free treats that satisfy your cravings without compromising your health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group gradient-card border border-border/50 rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                {feature.emoji}
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in-delay-2">
          <Button variant="hero" size="xl">
            Download Free Guide
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Instant download • No signup required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;