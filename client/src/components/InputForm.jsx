import { Sparkles } from "lucide-react";

export default function InputForm({
  rawThoughts,
  replyingTo,
  setRawThoughts,
  setReplyingTo,
  showReplySection,
  setShowReplySection,
  handleKeyPress
}) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 transition-colors">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
            Your Thoughts
          </h2>
        </div>

        <textarea
          value={rawThoughts}
          onKeyDown={handleKeyPress}
          onChange={(e) => setRawThoughts(e.target.value)}
          placeholder="What's on your mind... e.g: need a mail/letter on sick leave"
          className="w-full h-40 px-4 py-3 border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl focus:border-blue-400 focus:outline-none resize-none text-slate-700 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
        />

        <div className="mt-6">
          <button
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-2 transition-all"
            onClick={() => setShowReplySection(!showReplySection)}
          >
            {showReplySection ? "- Hide" : "+ Add"} email you're replying to (optional)
          </button>
        </div>

        {showReplySection && (
          <div className="mt-4">
            <textarea
              className="w-full h-32 px-4 py-3 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl focus:border-blue-400 focus:outline-none resize-none text-slate-700 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
              placeholder="Paste the email you're replying to..."
              value={replyingTo}
              onChange={(e) => setReplyingTo(e.target.value)}
            />
          </div>
        )}

        <div className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          Tip: Press Ctrl+Enter (or Cmd+Enter) to generate
        </div>
      </div>
    </div>
  );
}
