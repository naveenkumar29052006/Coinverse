import React from 'react';
import { Target, Users, Mail, Shield, Zap, Globe } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-black border border-border/50 p-12 text-center">
        <div className="absolute top-0 right-0 p-10 opacity-10">
          <Globe className="w-64 h-64 text-accent" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Coinverse</span>
          </h1>
          <p className="text-xl text-secondary leading-relaxed">
            Empowering everyone to understand, track, and grow their crypto investments with beautiful, real-time tools.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors group">
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Real-Time Data</h3>
          <p className="text-secondary">
            Instant price updates and market analytics powered by industry-leading APIs.
          </p>
        </div>

        <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors group">
          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Secure & Private</h3>
          <p className="text-secondary">
            Your data is encrypted and privacy-focused. We prioritize security in everything we build.
          </p>
        </div>

        <div className="bg-card p-8 rounded-2xl border border-border/50 hover:border-accent/30 transition-colors group">
          <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6 group-hover:scale-110 transition-transform">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Goal Oriented</h3>
          <p className="text-secondary">
            Tools designed to help you set targets and achieve your financial goals efficiently.
          </p>
        </div>
      </div>

      {/* Mission & Contact Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card p-8 rounded-2xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <Users className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-secondary leading-relaxed mb-6">
            We believe that financial freedom should be accessible to everyone. By building intuitive and powerful tools, we aim to demystify cryptocurrency and make investing transparent, enjoyable, and profitable for users of all experience levels.
          </p>
        </div>

        <div className="bg-card p-8 rounded-2xl border border-border/50">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="w-6 h-6 text-accent" />
            <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
          </div>
          <p className="text-secondary mb-6">
            Have questions, suggestions, or just want to say hi? We'd love to hear from you.
          </p>
          <a
            href="mailto:info@coinverse.com"
            className="inline-flex items-center gap-2 text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <Mail className="w-4 h-4" />
            info@coinverse.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;