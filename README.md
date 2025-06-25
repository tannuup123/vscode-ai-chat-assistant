# 💬 VS Code AI Chat Assistant Extension

A powerful Visual Studio Code extension that brings an AI-powered chat assistant right inside the editor.  
Built with a sleek React WebView interface, this assistant supports code generation, file context sharing, and rich conversations — all within VS Code.

---

## ✨ Features

✅ **React-based UI**  
- Clean and minimal interface using React
- Supports both **light** and **dark mode** (auto or user controlled)

✅ **Rich Chat Experience**  
- Markdown formatting and syntax-highlighted code blocks  
- Scrollable message history with user and AI distinction

✅ **Smart File Attachment with `@filename`**  
- Mention `@filename` to attach files from your current VS Code workspace  
- AI assistant reads file content or metadata (simulated for now)

✅ **AI Code Generation (Mocked)**  
- Generates responses based on user prompts
- Placeholder logic using a mock OpenAI response (`You attached file: main.js`)  
- Easily extendable to **OpenAI GPT API** or any model

---

## 🛠 Tech Stack

- **TypeScript** – Type-safe extension and build logic  
- **React** – Chat UI inside the WebView  
- **VS Code Extension API** – Core extension handling and command registration  
- **Webpack** – Bundling for both extension and webview UI  
- **Node.js** – Project environment and build system

---

## 🚀 How to Use

1. **Clone the Repo**
   ```bash
   git clone https://github.com/tannuup123/vscode-ai-chat-assistant.git
   cd vscode-ai-chat-assistant
   npm install
2.Build the Project
....npm run build (run thin command in your project folder terminal)

3.Launch in Extension Host

....Open the folder in VS Code.

....Press F5 to launch Extension Development Host.

....Run AI: Chat Assistant from the Command Palette (Ctrl+Shift+P).

3.Start Chatting

....Type any message to chat with the assistant.

....Use @filename to attach any file from your workspace.

....For now, the assistant replies with a mock response.

##  Future Improvements (Optional)
..🔌 Integrate real OpenAI GPT API using a secure key

..📂 Support drag-drop file upload in chat

..💾 Persistent chat history

..🧠 Workspace-level context-aware suggestions

#####Project file Structure and Screenshot of AI-chat-assistant.

![image](https://github.com/user-attachments/assets/3acca499-180e-4573-9b62-85982e97bde8)

![image](https://github.com/user-attachments/assets/69ae247e-f498-4a80-8e48-a1852b5c10f0)

![image](https://github.com/user-attachments/assets/3af28340-4e36-48d8-8dd7-d2d17e7cfa4b)

![image](https://github.com/user-attachments/assets/60f3611e-f2ac-42aa-b33d-243492d6ed87)

![image](https://github.com/user-attachments/assets/c22b20d6-75da-4780-af93-75f35309c049)

![image](https://github.com/user-attachments/assets/2f595988-236c-4816-9c42-ecdd1b41f1fa)







