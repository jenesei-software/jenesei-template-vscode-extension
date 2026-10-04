import * as vscode from "vscode";
import type { ExampleService } from "../services/exampleService";

export class ItemsTreeProvider
  implements vscode.TreeDataProvider<string>, vscode.Disposable
{
  private readonly emitter = new vscode.EventEmitter<void>();
  readonly onDidChangeTreeData = this.emitter.event;

  constructor(private readonly service: ExampleService) {}

  refresh(): void {
    this.emitter.fire();
  }

  getTreeItem(label: string): vscode.TreeItem {
    return new vscode.TreeItem(label);
  }

  getChildren(): string[] {
    return this.service.getSnapshot()?.items ?? [];
  }

  dispose(): void {
    this.emitter.dispose();
  }
}
