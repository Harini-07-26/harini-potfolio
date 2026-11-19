'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Send,
  Globe,
  Clock,
  ArrowLeft,
  ArrowRight,
  X
} from 'lucide-react';
import { PERSONAL_DETAILS } from '@/src/utils/constants';

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

        {/* Email Address Pill */}
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
          Tip: &quot;Open in Gmail&quot; opens directly in your browser without requiring any desktop app.
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [emailModalOpen, setEmailModalOpen] = useState(false);

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
    <main className="min-h-screen bg-slate-50 dark:bg-[#0a0a0f] text-slate-900 dark:text-white pt-28 pb-20 relative overflow-hidden transition-colors duration-300">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-white/60 hover:text-indigo-600 dark:hover:text-white text-sm transition-colors"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-mono uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Direct Contacts
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-slate-600 dark:text-white/60 mt-4 max-w-xl mx-auto text-base sm:text-lg">
            Have an open role, an exciting project, or want to discuss full-stack engineering? Reach out directly —
            I&apos;m always glad to talk!
          </p>
        </div>

        {/* Top Profile Quick-Banner */}
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
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{PERSONAL_DETAILS.name}</h2>
                  <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-500/10 border border-green-500/30 text-green-600 dark:text-green-400">
                    Open to work
                  </span>
                </div>
                <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mb-2">{PERSONAL_DETAILS.role}</p>
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
                onClick={() => setEmailModalOpen(true)}
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

        {/* 4 Interactive Contact Detail Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Email Card */}
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
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Email Address</h3>
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

          {/* Phone & WhatsApp Card */}
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
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">Phone &amp; WhatsApp</h3>
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

          {/* LinkedIn Card */}
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
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">LinkedIn Profile</h3>
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

          {/* GitHub Card */}
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
              <h3 className="text-slate-900 dark:text-white font-semibold text-lg mb-1">GitHub Profile</h3>
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
        </div>

        {/* Additional Info Cards Bar */}
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
      </div>
      <EmailModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
    </main>
  );
}
