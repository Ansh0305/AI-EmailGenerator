import { CheckCircle, Copy } from 'lucide-react'
import React from 'react'

export default function OutputSelection() {
  return (
        <div className='mt-12 white rounded-2xl shadow-xl border border-slate-200 p-8 min-h-[500px] flex flex-col'>
            <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-2'>
                    <CheckCircle className='w-5 h-5 text-blue-500' />
                    <h2 className='text-xl font-semibold text-slate-800'>Generated Email</h2>
                </div>

                {/* Conditional Rendering */}
                <button className='flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-all text-sm font-medium'>
                    <Copy className='w-4 h-4' />
                </button>
            </div>

            {/* Conditional Rendering  */}
            <div className="flex-1 bg-slate-50 rounded-xl p-6 border border-slate-200 overflow-auto">
                <div className="max-w-none">
                    <div className="whitespace-pre-wrap text-slate-700 loading-relaxed">
                        Generate Email
                    </div>
                </div>
            </div>
        </div>
    )
}
