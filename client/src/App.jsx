import { useState } from "react";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import ToneSelection from "./components/ToneSelection";
import OutputSelection from "./components/OutputSelection";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [rawThoughts, setRawThoughts] = useState("");
  const [replyingTo, setReplyingTo] = useState("");
  const [tone, setTone] = useState("professional");
  const [generatedEmail, setGeneratedEmail] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showReplySection, setShowReplySection] = useState(false);
  const [error, setError] = useState("");

  const { theme, toggleTheme } = useTheme();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

  const generateEmail = async () => {
    if (!rawThoughts.trim()) {
      setError("Please enter your thoughts before generating an email");
      return;
    }

    setIsGenerating(true);
    setGeneratedEmail("");
    setError("");

    try {
      const response = await fetch(`${API_URL}/api/generate-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rawThoughts, tone, replyingTo })
      })

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate email");
      }
      setGeneratedEmail(data.email);

    } catch (error) {
      if (error.message.includes("Failed to fetch")) {
        setError("Cannot connect to backend. Make sure it's running on port 5000");
      } else setError(error.message)
    } finally {
      setIsGenerating(false)
    }
  };

  const copyToClickboard = () => {
    navigator.clipboard.writeText(generatedEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleKeyPress = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") generateEmail();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          <InputForm
            rawThoughts={rawThoughts}
            replyingTo={replyingTo}
            setRawThoughts={setRawThoughts}
            setReplyingTo={setReplyingTo}
            showReplySection={showReplySection}
            setShowReplySection={setShowReplySection}
            handleKeyPress={handleKeyPress}
          />

          <ToneSelection
            tone={tone}
            setTone={setTone}
            isGenerating={isGenerating}
            generateEmail={generateEmail}
            error={error}
          />
        </div>

        <OutputSelection
          generatedEmail={generatedEmail}
          copyToClickboard={copyToClickboard}
          copied={copied}
        />
      </div>
    </div>
  );
}
