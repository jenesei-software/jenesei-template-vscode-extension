import * as vscode from "vscode";
import { registerCommands } from "./commands";
import { exampleSetting, workspaceRoot } from "./config";
import { ExampleService } from "./services/exampleService";
import { StatusBar } from "./statusBar";
import { ItemsTreeProvider } from "./views/itemsTreeProvider";
import { PanelViewProvider } from "./views/panelViewProvider";

export async function activate(
  context: vscode.ExtensionContext,
): Promise<void> {
  const output = vscode.window.createOutputChannel("Extension Template");
  context.subscriptions.push(output);

  const service = new ExampleService();
  context.subscriptions.push(service);

  const statusBar = new StatusBar();
  context.subscriptions.push(statusBar);

  const panel = new PanelViewProvider(context.extensionUri, service);
  const items = new ItemsTreeProvider(service);

  const refresh = async (): Promise<void> => {
    try {
      await service.refresh();
    } catch (error) {
      output.appendLine((error as Error).message);
      void vscode.window.showErrorMessage(
        vscode.l10n.t("Extension Template: {0}", (error as Error).message),
      );
    }
  };

  service.onDidChange((snapshot) => {
    statusBar.update(snapshot);
    panel.update();
    items.refresh();
  });

  context.subscriptions.push(
    panel,
    items,
    vscode.window.registerWebviewViewProvider(
      PanelViewProvider.viewType,
      panel,
    ),
    vscode.window.registerTreeDataProvider("extensionTemplate.items", items),
  );

  registerCommands(context, { service, refresh, output });

  context.subscriptions.push(
    vscode.workspace.onDidChangeConfiguration((event) => {
      if (!event.affectsConfiguration("extensionTemplate")) {
        return;
      }
      void refresh();
    }),
    vscode.workspace.onDidChangeWorkspaceFolders(() => {
      void refresh();
    }),
  );

  output.appendLine(
    vscode.l10n.t(
      "Activated. exampleSetting={0}, workspace={1}",
      String(exampleSetting()),
      workspaceRoot() ?? "none",
    ),
  );

  await refresh();
}

export function deactivate(): void {
  // Disposables are released through the extension context.
}
