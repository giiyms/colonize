const vscode = require("vscode");

function debugeval() {
  var editor = vscode.window.activeTextEditor;
  if (!editor) return;

  if (!vscode.env.debugInfo.debug) return;

  vscode.commands.executeCommand("acceptSelectedSuggestion").then(() => {
    vscode.commands.executeCommand("expandLineSelection");
    vscode.commands.executeCommand("editor.debug.action.selectionToRepl");
  });
}

function activate(context) {
  var debugEval = vscode.commands.registerCommand("debugeval", () => {
    debugeval();
  });

  context.subscriptions.push(debugEval);
}

exports.activate = activate;
