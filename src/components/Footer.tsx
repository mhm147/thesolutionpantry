const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="bg-secondary/50 border-t border-border/50">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2 text-xl font-serif font-semibold">
              <span className="text-2xl">🍨</span>
              <span>The Solution Pantry</span>
            </a>
            <p className="text-muted-foreground leading-relaxed">
              Practical desserts and tools designed for busy lives. Enjoy the sweetness without compromise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-3 text-muted-foreground">
              <a href="#guide" className="hover:text-foreground transition-colors">Free Guide</a>
              <a href="#testimonials" className="hover:text-foreground transition-colors">Reviews</a>
              <a href="/resources/disclaimer" className="hover:text-foreground transition-colors">Privacy Policy</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Stay Connected</h4>
            <p className="text-muted-foreground">
              Follow us for more keto tips, recipes, and wellness inspiration.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                📷
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                🐦
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground space-y-2">
          <p>#ad | Results may vary. This is not medical advice. Please consult your healthcare provider.</p>
          <p>Made with ❤️ for people who deserve joy.</p>
          <p>© {currentYear} The Solution Pantry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;