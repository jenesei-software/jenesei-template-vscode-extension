import * as vscode from "vscode";

export const CONFIG_SECTION = "extensionTemplate";

export const KEYS = {
  exampleSetting: "exampleSetting",
} as const;

export function getConfig(): vscode.WorkspaceConfiguration {
  return vscode.workspace.getConfiguration(CONFIG_SECTION);
}

export function exampleSetting(): boolean {
  return getConfig().get<boolean>(KEYS.exampleSetting) ?? true;
}

export function workspaceRoot(): string | undefined {
  return vscode.workspace.workspaceFolders?.[0]?.uri.fsPath;
}
