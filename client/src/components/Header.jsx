import React from 'react'
import { Mail } from "lucide-react"

export default function Header() {
    return (
        <div className="bg-white border-b border-slate-200 shadow-sm">
            <div className="max-w-6xl max-auto px-6 py-6">

                <div className="flex items-center gap-3">

                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-lg">
                        <Mail className='w-6 h-6 text-white' />
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold text-slate-800'>AI Email Writer</h1>
                        <p className='text-sm text-slate-500'>Transform your thoughts into perfect emails with ChatGPT</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
