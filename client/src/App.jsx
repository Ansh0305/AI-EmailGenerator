import React from 'react'
import {AlertCircle, CheckCircle, Copy, Mail, Sparkles, Wand2} from "lucide-react"
import Header from './components/Header'
import InputForm from './components/InputForm'
import ToneSelection from './components/ToneSelection'
import OutputSelection from './components/OutputSelection'

export default function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50'>
      {/* Header */}
      <Header/>

      {/* Main Content */}
      <div className='max-w-6xl mx-auto px-6 py-12'>
        <div className='grid lg:grid-cols-2 gap-8'>
          {/* Input Section */}
          <InputForm/>

          {/* Tone Selection  */}
          <ToneSelection/>
        </div>


        {/* Output */}
        <OutputSelection/>

      </div>
    
    </div>
  )
}
