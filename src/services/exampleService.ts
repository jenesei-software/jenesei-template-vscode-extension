import * as vscode from "vscode";
import { exampleSetting, workspaceRoot } from "../config";

export interface ExampleSnapshot {
  items: string[];
  generatedAt: number;
}

export class ExampleService implements vscode.Disposable {
  private readonly emitter = new vscode.EventEmitter<ExampleSnapshot>();
  readonly onDidChange = this.emitter.event;
  private snapshot: ExampleSnapshot | undefined;

  async refresh(): Promise<void> {
    const root = workspaceRoot();
    const items = root ? [root] : [];
    this.snapshot = { items, generatedAt: Date.now() };
    this.emitter.fire(this.snapshot);
  }

  getSnapshot(): ExampleSnapshot | undefined {
    return this.snapshot;
  }

  get enabled(): boolean {
    return exampleSetting();
  }

  dispose(): void {
    this.emitter.dispose();
  }
}
