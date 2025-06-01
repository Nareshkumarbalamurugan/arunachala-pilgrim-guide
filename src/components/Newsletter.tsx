
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates on festivals and spiritual events.",
      });
      setEmail('');
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-orange-100 to-amber-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-none shadow-2xl overflow-hidden">
          <CardContent className="p-8 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Get monthly updates on festivals & spiritual events
              </h2>
              <p className="text-lg opacity-90 mb-8">
                Stay connected with Tiruvannamalai's spiritual calendar
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 hover:scale-105 transition-all duration-200"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
