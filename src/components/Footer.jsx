import React from 'react';
import { Heart, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "ERP Systems", href: "#what-i-build" },
    { name: "SaaS Platforms", href: "#what-i-build" },
    { name: "Business Automation", href: "#what-i-build" },
    { name: "Custom Web Apps", href: "#what-i-build" }
  ];

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const social = [
    { name: "GitHub", href: "https://github.com/Ankit1417" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ankit-gupta-507b242aa/" },
    { name: "Email", href: "mailto:guptaankit98242@gmail.com" }
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-900 pt-16 pb-8 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-900">
          {/* Column 1: Brand Info */}
          <div className="col-span-2 md:col-span-1 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <img src="images/AG.png" alt="AG" className="h-8 w-8 rounded-full border border-zinc-800" />
              <span className="font-display font-bold text-white text-base tracking-tight">
                Ankit Gupta
              </span>
            </div>
            <p className="text-zinc-500 text-xs font-light leading-relaxed max-w-xs">
              Senior Full Stack Engineer & SaaS Builder specializing in creating custom enterprise modules and automating business operations.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Navigation</h4>
            <ul className="space-y-2.5 text-xs">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="hover:text-white transition-colors duration-200">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: What I Build */}
          <div className="text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Services</h4>
            <ul className="space-y-2.5 text-xs">
              {services.map((service, idx) => (
                <li key={idx}>
                  <a href={service.href} className="hover:text-white transition-colors duration-200">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="text-left space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">Social Links</h4>
            <ul className="space-y-2.5 text-xs">
              {social.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
                  >
                    {item.name}
                    {item.name !== "Email" && <ExternalLink className="w-3 h-3 text-zinc-600" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            <span>Built with React, Tailwind CSS, and passion for creating impactful software.</span>
          </div>

          <div>
            <p>© {currentYear} Ankit Gupta. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
