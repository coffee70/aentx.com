'use client';

import { useActionState } from 'react';
import { CheckCircleIcon, AlertCircleIcon, SparklesIcon } from "lucide-react";
import { submitContactForm } from "../server/submit-contact-form";

interface FormState {
  success?: boolean;
  error?: string;
  message?: string;
}

const initialState: FormState = {};

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <div className="relative max-w-3xl mx-auto text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Get in touch with us
        </h2>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Interested in optimizing your manufacturing pipeline? Let&apos;s discuss how AENTX can help transform your operations.
        </p>
      </div>

      {/* Success Message */}
      {state.success && (
        <div className="mb-6 p-4 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm border border-green-300/50 rounded-2xl text-white shadow-2xl text-left">
          <div className="flex items-center">
            <CheckCircleIcon className="w-6 h-6 mr-4 text-green-100 flex-shrink-0" />
            <div>
              <div className="font-semibold mb-1">Message Sent Successfully!</div>
              <div className="text-green-100 text-sm">Thank you for your interest. We&apos;ll get back to you within 24 hours.</div>
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {state.error && (
        <div className="mb-6 p-4 bg-gradient-to-r from-red-500/90 to-rose-500/90 backdrop-blur-sm border border-red-300/50 rounded-2xl text-white shadow-2xl text-left">
          <div className="flex items-center">
            <AlertCircleIcon className="w-6 h-6 mr-4 text-red-100 flex-shrink-0" />
            <div>
              <div className="font-semibold mb-1">Submission Error</div>
              <div className="text-red-100 text-sm">{state.error}</div>
            </div>
          </div>
        </div>
      )}

      <form action={formAction} className="space-y-4 backdrop-blur-sm bg-white/10 p-8 rounded-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-white/50"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-white/50"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Work Email"
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-white/50"
        />
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-white/50"
        />
        <textarea
          name="message"
          placeholder="How can we help you?"
          rows={4}
          className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg placeholder-white/70 text-white focus:outline-none focus:border-white/50 resize-none"
        />
        <button
          type="submit"
          className="w-full bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl flex items-center justify-center group"
        >
          Send Message
          <SparklesIcon className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
        </button>
      </form>
    </div>
  );
} 