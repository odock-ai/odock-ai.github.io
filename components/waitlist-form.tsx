'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    role: '',
    teamSize: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const roles = ['CEO', 'Developer', 'CTO', 'Product Manager', 'Founder', 'Other'];
  const teamSizes = ['10', '50', '100', '500', '500+'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setLoading(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', role: '', teamSize: '' });
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-md rounded-lg border border-accent/20 bg-card p-8 text-center">
        <div className="mb-4 text-4xl">✨</div>
        <p className="text-foreground font-semibold mb-2 text-lg">You're on the list!</p>
        <p className="text-sm text-muted-foreground">
          Check your email for early access updates and exclusive previews.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-5">
      {/* Name */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Name</label>
        <Input
          type="text"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-background border-border placeholder:text-muted-foreground"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email</label>
        <Input
          type="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-background border-border placeholder:text-muted-foreground"
        />
      </div>

      {/* Role */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Your Role</label>
        <select
          required
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          <option value="">Select your role</option>
          {roles.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      {/* Team Size */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Team Size <span className="text-muted-foreground">(optional)</span></label>
        <select
          value={formData.teamSize}
          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
        >
          <option value="">Select team size</option>
          {teamSizes.map((size) => (
            <option key={size} value={size}>{size} people</option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold group mt-6"
      >
        {loading ? 'Joining...' : (
          <>
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </Button>
    </form>
  );
}
