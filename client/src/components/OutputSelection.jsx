import { CheckCircle, Copy, CopyCheck, Mail } from "lucide-react";

export default function OutputSelection({ generatedEmail, copyToClickboard, copied }) {
  return (
    <div className="mt-12 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 min-h-[500px] flex flex-col transition-colors">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-blue-500" />
          <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
            Generated Email
          </h2>
        </div>

        {generatedEmail && (
          <button
            className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-all text-sm font-medium"
            onClick={copyToClickboard}
          >
            {copied ? (
              <>
                <CopyCheck className="w-4 h-4 text-green-600 dark:text-green-400" /> Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" /> Copy
              </>
            )}
          </button>
        )}
      </div>

      {generatedEmail ? (
        <div className="flex-1 bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 overflow-auto">
          <div className="whitespace-pre-wrap text-slate-700 dark:text-slate-300 leading-relaxed">
            {generatedEmail}
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-slate-400 dark:text-slate-500 text-center">
          <div>
            <Mail className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <p className="text-lg">Your polished email will appear here</p>
            <p className="text-sm mt-2">Enter your thoughts and click Generate!</p>
          </div>
        </div>
      )}
    </div>
  );
}
