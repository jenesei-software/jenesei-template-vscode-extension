import type * as vscode from "vscode";
import type { ExampleService } from "../services/exampleService";
import { renderPanel } from "./webview/panelHtml";

export class PanelViewProvider
  implements vscode.WebviewViewProvider, vscode.Disposable
{
  static readonly viewType = "extensionTemplate.panel";

  private view: vscode.WebviewView | undefined;

  constructor(
    private readonly extensionUri: vscode.Uri,
    private readonly service: ExampleService,
  ) {}

  resolveWebviewView(view: vscode.WebviewView): void {
    this.view = view;
    view.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri],
    };
    view.webview.html = renderPanel(this.service.getSnapshot());
  }

  update(): void {
    if (this.view) {
      this.view.webview.html = renderPanel(this.service.getSnapshot());
    }
  }

  dispose(): void {
    this.view = undefined;
  }
}
