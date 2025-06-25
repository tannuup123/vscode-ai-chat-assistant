import * as vscode from 'vscode';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('ai-chat-assistant.start', () => {
      const panel = vscode.window.createWebviewPanel(
        'aiChat',
        'AI Chat Assistant',
        vscode.ViewColumn.One,
        {
          enableScripts: true,
          localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))]
        }
      );

      const scriptUri = panel.webview.asWebviewUri(
        vscode.Uri.file(path.join(context.extensionPath, 'media', 'webview.js'))
      );

      panel.webview.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"><title>AI Chat</title></head>
        <body><div id="root"></div><script src="${scriptUri}"></script></body>
        </html>
      `;

      // 👂 Handle message from webview
      panel.webview.onDidReceiveMessage(
        message => {
          if (message.type === 'chat-message') {
            const userInput = message.text;

            //  MOCK AI response
            const response = `This is a mock AI response to: "${userInput}"`; // Replace this with OpenAI API call when ready

            // Send back to webview
            panel.webview.postMessage({
              type: 'chat-reply',
              text: response
            });
          }
        },
        undefined,
        context.subscriptions
      );
    })
  );
}
