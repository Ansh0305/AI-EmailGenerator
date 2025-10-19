import { AlertCircle, Wand2 } from 'lucide-react'
import React from 'react'

export default function ToneSelection() {
  return (
        <div className='bg-white rounded-2xl shadow-xl border border-slate-200 p-8'>
            <div className="flex items-center gap-2 mb-6">
                <Wand2 className='w-5 h-5 text-blue-500' />
                <h2 className="text-xl font-semibold text-slate-500">
                    Choose Your Tone
                </h2>
            </div>

            <div className='grid grid-cols-2 gap-3'>
                <button className={`p-4 rounded-xl border-2 text-left transition-all`}>
                    <div className='font-semibold text-slate-800 mb-1'>
                        Label
                    </div>
                    <div className="text-xs text-slate-500">Description</div>
                </button>
            </div>

            <button className='w-full mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled: cursor-not-allowed flex itemscenter justify-center gap-2 transition-all hover:scale-105 active:scale-100'>
                Generate Email
            </button>

            {/* Conditional Rendering */}
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl
    flex items-start gap-3">
                <AlertCircle className='w-5 h-5 text-red-500 flex-shrink-0 mt-0.5' />
                <div className="text-sm text-red-700">Error</div>
            </div>
        </div>
    )
}
