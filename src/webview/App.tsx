import React, { useState, useEffect } from 'react';

interface Message {
  sender: 'user' | 'ai';
  text: string;
  file?: { name: string; type: string };
}

declare const acquireVsCodeApi: any;
const vscode = acquireVsCodeApi();

export default function App() {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'ai', text: '👋 Hi there! Ask me anything or attach a file using @filename' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const atMatch = input.match(/@([\w.-]+)/);
    const file = atMatch
      ? { name: atMatch[1], type: atMatch[1].endsWith('.png') ? 'image' : 'code' }
      : undefined;

    const userMsg: Message = { sender: 'user', text: input, file };
    setMessages(prev => [...prev, userMsg]);

    // Send to extension backend
    vscode.postMessage({
      type: 'chat-message',
      text: input,
      file
    });

    setInput('');
  };

  // Listen for response from extension
  useEffect(() => {
    window.addEventListener('message', event => {
      const msg = event.data;
      if (msg.type === 'chat-reply') {
        setMessages(prev => [...prev, { sender: 'ai', text: msg.text }]);
      }
    });
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '1rem', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem', border: '1px solid #ddd', padding: '1rem' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: '0.5rem 0', textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <div
              style={{
                background: msg.sender === 'user' ? '#007acc' : '#eee',
                color: msg.sender === 'user' ? '#fff' : '#000',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                display: 'inline-block',
                maxWidth: '80%'
              }}
            >
              {msg.text}
              {msg.file && (
                <div style={{ fontSize: '0.85rem', marginTop: '0.3rem', opacity: 0.8 }}>
                  📎 Attached: <strong>{msg.file.name}</strong>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex' }}>
        <input
          style={{ flex: 1, padding: '0.5rem', fontSize: '1rem' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type message…"
        />
        <button style={{ padding: '0.5rem 1rem', fontSize: '1rem' }} onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
