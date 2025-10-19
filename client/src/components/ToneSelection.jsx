import { AlertCircle, Send, Wand2 } from "lucide-react";
import React from "react";

const tones = [
  {
    value: "professional",
    label: "Professional",
    desc: "Clear and business-appropriate",
  },
  {
    value: "warm",
    label: "Warm",
    desc: "Friendly and persuasive",
  },
  {
    value: "concise",
    label: "Concise",
    desc: "Brief and to the point",
  },
  {
    value: "formal",
    label: "Formal",
    desc: "Traditional and respectful",
  },
  {
    value: "casual",
    label: "Casual",
    desc: "Relaxed and conversational",
  },
  {
    value: "persuasive",
    label: "Persuasive",
    desc: "Compelling and influential",
  },
];

export default function ToneSelection({
  tone,
  setTone,
  isGenerating,
  generateEmail,
  error,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
      <div className="flex items-center gap-2 mb-6">
        <Wand2 className="w-5 h-5 text-blue-500" />
        <h2 className="text-xl font-semibold text-slate-500">
          Choose Your Tone
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {tones.map((t) => {
          return (
            <button
            key={t.value}
              className={`p-4 rounded-xl border-2 text-left transition-all  ${
                tone === t.value
                  ? "border-blue-500 bg-blue-50 shadow-md"
                  : "border-slate-200 hover:border-slate-300 bg-white"
              }`}
              onClick={() => setTone(t.value)}
            >
              <div className="font-semibold text-slate-800 mb-1">{t.label}</div>
              <div className="text-xs text-slate-500">{t.desc}</div>
            </button>
          );
        })}
      </div>

      <button
        className="w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled: cursor-not-allowed flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-100"
        onClick={generateEmail}
        disabled={isGenerating}
      >
        {isGenerating ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Generating with AI..
          </>
        ) : (
          <>
            <Send className="w-5 h-5" /> Generate Email
          </>
        )}
      </button>

      {/* Conditional Rendering */}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}
    </div>
  );
}
