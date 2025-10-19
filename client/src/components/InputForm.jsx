import { Sparkles } from 'lucide-react'
import React from 'react'

export default function InputForm() {
  return (
    <div className="space-y-6">
      <div className='bg-white rounded-2xl shadow-xl border border-slate-200 p-8'>
        <div className='flex items-center gap-2 mb-6'>
          <Sparkles className='w-5 h-5 text-blue' />
          <h2 className='text-xl font-semibold text-slate-800'>Your Thoughts</h2>
        </div>

        <textarea placeholder="What' s on your mind.....eg: need a mail/letter on sick leave"
          className='w-full h-40 px-4 py-2 border-2 border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none resize-none text-slate-700 placeholder-slate-400 transition-colors'
          name="" id="" />
        <div className="mt-6">
          <button className='text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-all'>
            +Add
          </button>
        </div>

        {/* Conditional Rendering */}
        {/* <div className='mt-4 duration-300'>
          <textarea className='w-full h-32 px-4 py-3 border border-slate-200 rounded-xl focus:border-blue-400 focus:outline-none resize-none text-slate-700 placeholder-slate-400 transition-all' name="" id=""/>
      </div> */}

        <div className="mt-4 text-xs text-slate-500">
          Tip: Press Ctrl+Enter (or Cmd+Enter) to generate
        </div>
      </div>
    </div>
  )
}
