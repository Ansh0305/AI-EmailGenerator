# 📧 AI-EmailGenerator

![Project Status](https://img.shields.io/badge/Status-In%20Development-yellow)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
## 🌟 Overview

The **AI-EmailGenerator** is a powerful, intelligent **web application** designed to streamline and automate the process of writing professional emails. Built with **React** and bundled using **Vite** for a fast development experience and dynamic user interface, it leverages cutting-edge Large Language Models (LLMs) to generate email drafts from simple user prompts.

**Goal:** To provide a seamless, interactive experience for users to quickly generate high-quality, contextually relevant, and grammatically correct email content directly in their browser.

## ✨ Features

* **Prompt-to-Email Generation:** Generate a full email draft from a simple, one-line request via an intuitive text input field.
* **Tone Adjustment:** Interactive controls (e.g., dropdowns/sliders) to specify the desired tone (professional, friendly, urgent, casual) for the output.
* **Copy-to-Clipboard:** One-click functionality to instantly copy the generated email body for easy pasting into your email client.
* **Modern UI/UX:** Built using React and styled with [Specify Styling Method, e.g., Tailwind CSS] to ensure a responsive and modern user experience.

## 💻 Getting Started

### Prerequisites

You'll need the following installed on your machine:

* **Node.js** (which includes npm or yarn)
* **Git**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Ansh0305/AI-EmailGenerator.git
    cd AI-EmailGenerator
    ```

2.  **Install dependencies:**
    *If using npm (recommended for Vite):*
    ```bash
    npm install
    ```
    *If using yarn:*
    ```bash
    yarn install
    ```

### API Key Setup

This project requires an API key from an LLM provider (e.g., OpenAI, Google Gemini). For security, API keys should be stored in an environment file. Since you are using **Vite**, environment variables must be prefixed with `VITE_`.

1.  Obtain your API Key from [https://platform.openai.com/api-keys].
2.  Create a file named **`.env`** in the root directory of the project.
3.  Add your API key to the `.env` file using the `VITE_` prefix (adjust the variable name to match how you access it in your code):

    ```ini
    # Example for a Vite/React App
    VITE_API_KEY="YOUR_API_KEY_HERE"
    ```

    > **Note:** Access these variables in your React code using `import.meta.env.VITE_API_KEY`.

## 🚀 Usage

### Running the Application

After installation and setup, start the development server:

*If using **npm**:*
```bash
npm run dev
```

If using yarn:

```bash
yarn dev
```

The application should automatically open in your browser at: http://localhost:5173/ (the default port for Vite).

### Example Workflow

The application guides you through four simple steps to generate a complete email draft:

| **Step** | **Action** | **Example Input / Expected Output** |
| :---: | :--- | :--- |
| **1. Prompt** | Enter the core idea and context of the email. | `"Follow up with Alex about the budget proposal we sent last week."` |
| **2. Tone** | Select the desired communication style. | `"Professional and encouraging"` |
| **3. Generate** | Click the main button to process the request. | *The app communicates with the LLM and generates the draft.* |
| **4. Output** | Review the generated draft and copy the final text. | **Subject:** Following Up: Budget Proposal for Q3 |

### 🛠 Built With
Frontend Framework: React

Build Tool: Vite

Package Manager: npm / yarn

LLM Integration: OpenAI

Styling: Tailwind CSS

### 🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

### 📄 License
Distributed under the MIT License. See LICENSE for more information.

### 📞 Contact
Your Name or Handle  - [saiansh2016@gmail.com]

Project Link: https://github.com/Ansh0305/AI-EmailGenerator.git

