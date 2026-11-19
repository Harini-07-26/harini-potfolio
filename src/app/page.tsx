'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ArrowRight,
  MapPin,
  Code2,
  Cpu,
  Database,
  Layers,
  Box,
  Wrench,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Send,
  Globe,
  Clock,
  X
} from 'lucide-react';
import SectionWrapper from '@/src/components/SectionWrapper';
import { PERSONAL_DETAILS, PROJECTS, SKILLS, EXPERIENCES } from '@/src/utils/constants';

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// EMAIL ACTION MODAL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function EmailModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_DETAILS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_DETAILS.email
  )}&su=${encodeURIComponent('Hello Harini - Full Stack Developer Inquiry')}`;

  const mailtoUrl = `mailto:${PERSONAL_DETAILS.email}?subject=${encodeURIComponent(
    'Hello Harini - Full Stack Developer Inquiry'
  )}`;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="glass rounded-2xl p-6 sm:p-8 max-w-md w-full border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-[#12121c]/95 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <Mail size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send an Email</h3>
            <p className="text-xs text-slate-500 dark:text-white/50">Choose how you&apos;d like to reach out</p>
          </div>
        </div>

        {/* Email Address Box with Copy */}
        <div className="p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-between gap-3 mb-6 font-mono text-sm">
          <span className="text-slate-800 dark:text-white font-medium select-all break-all">
            {PERSONAL_DETAILS.email}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white text-xs hover:border-indigo-500 transition-colors flex-shrink-0"
            title="Copy email"
          >
            {copied ? (
              <>
                <Check size={13} className="text-green-500" />
                <span className="text-green-600 dark:text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Action Options */}
        <div className="space-y-3">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2.5">
              <Send size={16} /> Open in Gmail (Web Browser)
            </span>
            <ExternalLink size={15} />
          </a>
        </div>

        <p className="text-[11px] text-center text-slate-400 dark:text-white/40 mt-5">
          Tip: &quot;Open in Gmail&quot; works instantly in your browser without requiring any desktop app.
        </p>
      </div>
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HERO SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function HeroSection({ onOpenEmail }: { onOpenEmail: () => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#0a0a0f] transition-colors duration-300">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/15 dark:bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 leading-tight tracking-tight">
              Hi, I&apos;m <span className="gradient-text">Harini</span>
            </h1>

            {/* Type Animation */}
            <div className="text-xl sm:text-2xl text-slate-600 dark:text-white/60 font-mono mb-6 h-9">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React.js Specialist',
                  2000,
                  'Next.js Engineer',
                  2000,
                  'Node.js Backend Dev',
                  2000,
                  'NestJS API Builder',
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-indigo-600 dark:text-indigo-400 font-semibold"
              />
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-white/60 text-lg leading-relaxed max-w-xl mb-10">
              I build{' '}
              <span className="text-slate-900 dark:text-white font-semibold">scalable, modern web applications</span>{' '}
              from ground up — crafting clean APIs, intuitive UIs, and immersive 3D experiences with React, Next.js,
              Node.js &amp; NestJS.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Projects <ArrowRight size={16} />
              </Link>
              <a
                href={PERSONAL_DETAILS.resume}
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-200/70 hover:bg-slate-300/70 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={16} /> Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href={PERSONAL_DETAILS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 dark:text-white/50 dark:hover:text-indigo-400 transition-colors text-sm"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={PERSONAL_DETAILS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 dark:text-white/50 dark:hover:text-indigo-400 transition-colors text-sm"
              >
                <Github size={16} /> GitHub
              </a>
              <button
                type="button"
                onClick={onOpenEmail}
                className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 dark:text-white/50 dark:hover:text-indigo-400 transition-colors text-sm cursor-pointer"
              >
                <Mail size={16} /> Email
              </button>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 blur-2xl scale-110" />
              {/* Gradient border ring */}
              <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <div className="w-full h-full rounded-full bg-slate-50 dark:bg-[#0a0a0f]" />
              </div>
              {/* Profile image */}
              <Image
                src="/home-without-bg.png"
                alt="Harini Thangavel - Full Stack Developer"
                fill
                className="object-cover rounded-full p-[4px]"
                quality={100}
                priority
              />
              {/* Floating badge: location */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#111] border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-white/70 text-xs whitespace-nowrap shadow-md dark:shadow-xl">
                <MapPin size={12} className="text-indigo-500 dark:text-indigo-400" /> Chennai, India
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-20">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 dark:text-white/30 dark:hover:text-white/60 transition-colors animate-bounce"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-5 h-8 border border-slate-300 dark:border-white/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ABOUT SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-100/60 dark:bg-[#080810] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 text-sm font-mono tracking-widest uppercase">
              About Me
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-3">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionWrapper>
            <div className="glass rounded-2xl p-8 space-y-6">
              <p className="text-slate-700 dark:text-white/70 text-lg leading-relaxed">
                I&apos;m a passionate{' '}
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">Full Stack Developer</span> based
                in Chennai, India, with a love for building products that solve real problems and create great user
                experiences.
              </p>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                My expertise spans the full web stack — from{' '}
                <span className="text-slate-900 dark:text-white font-medium">crafting responsive, animated UIs</span>{' '}
                with React and Next.js, to building{' '}
                <span className="text-slate-900 dark:text-white font-medium">scalable APIs and microservices</span> with
                Node.js and NestJS. I&apos;ve worked on 3D product configurators, enterprise platforms, and AI-powered
                internal tools.
              </p>
              <p className="text-slate-600 dark:text-white/70 leading-relaxed">
                I bring a team a{' '}
                <span className="text-slate-900 dark:text-white font-medium">solutions-first mindset</span>, clean code
                standards, and a habit of diving deep into both the UI and the architecture to deliver features that
                actually work — end-to-end.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
                {[
                  { value: '3+', label: 'Years Experience' },
                  { value: '10+', label: 'Projects Shipped' },
                  { value: '2', label: 'Companies' }
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-slate-500 dark:text-white/50 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper>
            {/* Experience timeline */}
            <div className="space-y-6">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="glass rounded-xl p-6 hover:border-indigo-500/30 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-slate-900 dark:text-white font-bold text-lg">{exp.company}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-slate-600 dark:text-white/40 text-xs bg-slate-200/60 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-white/60 text-sm mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PROJECTS SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-[#0a0a0f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 text-sm font-mono tracking-widest uppercase">
              Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-3">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-white/50 mt-4 max-w-xl mx-auto">
              Things I&apos;ve built that I&apos;m proud of — from 3D visualizers to enterprise platforms.
            </p>
          </div>
        </SectionWrapper>

        <div className="space-y-8">
          {PROJECTS.map((project) => (
            <SectionWrapper key={project.id}>
              <div className="glass rounded-2xl overflow-hidden hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg`}
                    >
                      {project.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                        <div>
                          <p className="text-slate-500 dark:text-white/40 text-xs font-mono tracking-widest uppercase mb-1">
                            {project.subtitle}
                          </p>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                        </div>
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} opacity-20 flex-shrink-0`}
                        />
                      </div>

                      <p className="text-slate-600 dark:text-white/60 leading-relaxed mb-6">
                        {project.longDescription}
                      </p>

                      {/* Highlights */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                        {project.highlights.map((h) => (
                          <div
                            key={h}
                            className="text-xs text-slate-600 dark:text-white/50 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-center"
                          >
                            {h}
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/80 rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SKILLS SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Code2 size={18} />,
  Backend: <Cpu size={18} />,
  Database: <Database size={18} />,
  Architecture: <Layers size={18} />,
  '3D & AI': <Box size={18} />,
  Tools: <Wrench size={18} />
};

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-800 dark:text-white/80 font-medium">{name}</span>
        <span className="text-slate-500 dark:text-white/40 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full skill-bar-fill"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-100/60 dark:bg-[#080810] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="text-indigo-600 dark:text-indigo-400 text-sm font-mono tracking-widest uppercase">
              Expertise
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mt-3">
              Skills &amp; <span className="gradient-text">Technologies</span>
            </h2>
          </div>
        </SectionWrapper>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <SectionWrapper key={category}>
              <div className="glass rounded-xl p-6 h-full hover:border-indigo-500/20 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                    {categoryIcons[category]}
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-bold">{category}</h3>
                </div>
                {skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONTACT SECTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function ContactSection({ onOpenEmail }: { onOpenEmail: () => void }) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    PERSONAL_DETAILS.email
  )}&su=${encodeURIComponent('Discussion: Full Stack Developer Role / Inquiry')}`;

  const mailtoUrl = `mailto:${PERSONAL_DETAILS.email}?subject=${encodeURIComponent(
    'Discussion: Full Stack Developer Role / Inquiry'
  )}`;

  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 dark:bg-[#0a0a0f] transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionWrapper>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Direct Contacts
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-slate-600 dark:text-white/60 mt-4 max-w-xl mx-auto text-base sm:text-lg">
              Have an open role, an exciting project, or want to discuss full-stack engineering? Reach out directly —
              I&apos;m always glad to talk!
            </p>
          </div>
        </SectionWrapper>

        {/* Top Profile Quick-Banner */}
        <SectionWrapper>
          <div className="glass rounded-2xl p-6 sm:p-8 mb-10 border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all shadow-md dark:shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                <div className="relative w-20 h-20 rounded-full p-[2px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-100 dark:bg-[#0a0a0f]">
                    <Image src="/home-without-bg.png" alt={PERSONAL_DETAILS.name} fill className="object-cover" />
                  </div>
                  <span
                    className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-2 border-white dark:border-[#0a0a0f] rounded-full"
                    title="Online & Available"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{PERSONAL_DETAILS.name}</h3>
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400">
                      Open to work
                    </span>
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">
                    {PERSONAL_DETAILS.role}
                  </p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-600 dark:text-white/50">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-indigo-500 dark:text-indigo-400" /> {PERSONAL_DETAILS.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-purple-500 dark:text-purple-400" /> IST (UTC +5:30)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Globe size={13} className="text-pink-500 dark:text-pink-400" /> Remote / Hybrid / On-site
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={onOpenEmail}
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all hover:-translate-y-0.5 whitespace-nowrap cursor-pointer"
                >
                  <Send size={15} /> Send Email
                </button>
                <a
                  href={PERSONAL_DETAILS.resume}
                  download
                  className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white font-medium text-sm transition-all hover:-translate-y-0.5 whitespace-nowrap"
                >
                  <Download size={15} /> Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* 4 Interactive Contact Detail Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Email Card */}
          <SectionWrapper>
            <div className="glass rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-md">
                    <Mail size={22} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                    Primary
                  </span>
                </div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Email Address</h4>
                <p className="text-slate-500 dark:text-white/50 text-xs mb-3">
                  Best for job discussions, contracts, and detailed inquiries.
                </p>
                <div
                  onClick={() => handleCopy(PERSONAL_DETAILS.email, 'email')}
                  className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-sm text-slate-800 dark:text-white/90 break-all select-all mb-4 cursor-pointer hover:border-indigo-500/50 transition-colors flex items-center justify-between gap-2"
                  title="Click to copy email address"
                >
                  <span>{PERSONAL_DETAILS.email}</span>
                  <span className="text-[11px] font-sans text-indigo-500 dark:text-indigo-400 flex items-center gap-1 flex-shrink-0">
                    {copiedItem === 'email' ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                    {copiedItem === 'email' ? 'Copied' : 'Click to copy'}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-white/5">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-medium hover:shadow-md transition-all whitespace-nowrap"
                  title="Open directly in Gmail"
                >
                  <Send size={13} /> Open in Gmail <ExternalLink size={11} className="opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_DETAILS.email, 'email')}
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-all"
                  title="Copy email address"
                >
                  {copiedItem === 'email' ? (
                    <>
                      <Check size={13} className="text-green-500 dark:text-green-400" />
                      <span className="text-green-600 dark:text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </SectionWrapper>

          {/* Phone & WhatsApp Card */}
          <SectionWrapper>
            <div className="glass rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-md">
                    <Phone size={22} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/80 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                    Phone / WhatsApp
                  </span>
                </div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Phone &amp; WhatsApp</h4>
                <p className="text-slate-500 dark:text-white/50 text-xs mb-3">
                  Available for urgent discussions and quick verbal chats.
                </p>
                <div
                  onClick={() => handleCopy(PERSONAL_DETAILS.phone, 'phone')}
                  className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-sm text-slate-800 dark:text-white/90 break-all select-all mb-4 cursor-pointer hover:border-emerald-500/50 transition-colors flex items-center justify-between gap-2"
                  title="Click to copy phone number"
                >
                  <span>{PERSONAL_DETAILS.phone}</span>
                  <span className="text-[11px] font-sans text-emerald-600 dark:text-emerald-400 flex items-center gap-1 flex-shrink-0">
                    {copiedItem === 'phone' ? <Check size={13} className="text-green-500" /> : <Copy size={13} />}
                    {copiedItem === 'phone' ? 'Copied' : 'Click to copy'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-white/5">
                <a
                  href={`tel:${PERSONAL_DETAILS.phone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-medium transition-all"
                >
                  <Phone size={13} /> Call Directly
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_DETAILS.phone, 'phone')}
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/80 hover:text-slate-900 dark:hover:text-white text-xs font-medium transition-all"
                  title="Copy phone number"
                >
                  {copiedItem === 'phone' ? (
                    <>
                      <Check size={13} className="text-green-500 dark:text-green-400" />
                      <span className="text-green-600 dark:text-green-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </SectionWrapper>

          {/* LinkedIn Card */}
          <SectionWrapper>
            <div className="glass rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                    <Linkedin size={22} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                    Network
                  </span>
                </div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">LinkedIn Profile</h4>
                <p className="text-slate-500 dark:text-white/50 text-xs mb-3">
                  Connect for career opportunities, recommendations, and updates.
                </p>
                <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-sm text-slate-800 dark:text-white/90 break-all select-all mb-4">
                  linkedin.com/in/harini-thangavel
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                <a
                  href={PERSONAL_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-medium transition-all"
                >
                  Connect on LinkedIn <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </SectionWrapper>

          {/* GitHub Card */}
          <SectionWrapper>
            <div className="glass rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group hover:-translate-y-1">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-md">
                    <Github size={22} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20">
                    Source Code
                  </span>
                </div>
                <h4 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">GitHub Profile</h4>
                <p className="text-slate-500 dark:text-white/50 text-xs mb-3">
                  Explore repositories, 3D prototypes, backend services, and code.
                </p>
                <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-sm text-slate-800 dark:text-white/90 break-all select-all mb-4">
                  github.com/Harini-07-26/
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                <a
                  href={PERSONAL_DETAILS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-lg bg-purple-500/15 hover:bg-purple-500/25 border border-purple-500/30 text-purple-700 dark:text-purple-300 text-xs font-medium transition-all"
                >
                  Visit GitHub Profile <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </SectionWrapper>
        </div>

        {/* Additional Info Cards Bar */}
        <SectionWrapper>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-5 border border-slate-200 dark:border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-slate-500 dark:text-white/40 text-[11px] uppercase tracking-wider">Location</p>
                <p className="text-slate-800 dark:text-white font-medium text-sm">Chennai, TN, India</p>
              </div>
            </div>

            <div className="glass rounded-xl p-5 border border-slate-200 dark:border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 flex-shrink-0">
                <Clock size={18} />
              </div>
              <div>
                <p className="text-slate-500 dark:text-white/40 text-[11px] uppercase tracking-wider">Timezone</p>
                <p className="text-slate-800 dark:text-white font-medium text-sm">IST (UTC +5:30)</p>
              </div>
            </div>

            <div className="glass rounded-xl p-5 border border-slate-200 dark:border-white/5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-slate-500 dark:text-white/40 text-[11px] uppercase tracking-wider">Availability</p>
                <p className="text-slate-800 dark:text-white font-medium text-sm">Immediate / Flexible</p>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// FOOTER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function Footer({ onOpenEmail }: { onOpenEmail: () => void }) {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-100/80 dark:bg-[#080810] py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 dark:text-white/30 text-sm">
          Built with ❤️, all rights reserved for Harini Thangavel.
        </p>
        <div className="flex gap-4">
          <a
            href={PERSONAL_DETAILS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-white/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={PERSONAL_DETAILS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 dark:text-white/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            title="GitHub"
          >
            <Github size={16} />
          </a>
          <button
            type="button"
            onClick={onOpenEmail}
            className="text-slate-500 dark:text-white/30 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
            title="Send Email"
          >
            <Mail size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN PAGE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function Home() {
  const [emailModalOpen, setEmailModalOpen] = useState(false);

  return (
    <main className="bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-white transition-colors duration-300">
      <HeroSection onOpenEmail={() => setEmailModalOpen(true)} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection onOpenEmail={() => setEmailModalOpen(true)} />
      <Footer onOpenEmail={() => setEmailModalOpen(true)} />
      <EmailModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
    </main>
  );
}
