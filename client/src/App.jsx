import { useState } from "react";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ToneSelection from "./components/ToneSelection";
import OutputSelection from "./components/OutputSelection";

export default function App() {
  const [rawThoughts, setRawThoughts] = useState("");
  const [replyingTo, setReplyingTo] = useState("");
  const [tone, setTone] = useState("professional");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showReplySection, setShowReplySection] = useState(false);
  const [error, setError] = useState("");

  // Generating Email
  const generateEmail = async () => {
    if (!rawThoughts.trim()) {
      setError("Please enter your thoughts before generating an email");
      return;
    }
  };

  // Copy Function
  const copyToClickboard = () => {
    navigator.clipboard.writeText(generatedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <InputForm
            rawThoughts={rawThoughts}
            replyingTo={replyingTo}
            setRawThoughts={setRawThoughts}
            setReplyingTo={setReplyingTo}
            showReplySection={showReplySection}
            setShowReplySection={setShowReplySection}
          />

          {/* Tone Selection  */}
          <ToneSelection
            tone={tone}
            setTone={setTone}
            isGenerating={isGenerating}
            generateEmail={generateEmail}
            error={error}
          />
        </div>

        {/* Output */}
        <OutputSelection
          generatedEmail={generatedEmail}
          copyToClickboard={copyToClickboard}
        />
      </div>
    </div>
  );
}
