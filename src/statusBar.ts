import * as vscode from "vscode";
import type { ExampleSnapshot } from "./services/exampleService";

export class StatusBar implements vscode.Disposable {
  private readonly item: vscode.StatusBarItem;

  constructor() {
    this.item = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left,
      100,
    );
    this.item.name = "Extension Template";
    this.item.command = "extensionTemplate.refresh";
  }

  update(snapshot: ExampleSnapshot | undefined): void {
    if (!snapshot) {
      this.item.text = "$(symbol-misc) Extension Template";
      this.item.tooltip = vscode.l10n.t("Scanning…");
      this.item.show();
      return;
    }

    this.item.text = `$(symbol-misc) ${snapshot.items.length}`;
    this.item.tooltip = vscode.l10n.t("Items: {0}", snapshot.items.length);
    this.item.show();
  }

  dispose(): void {
    this.item.dispose();
  }
}
