import * as vscode from "vscode";
import type { ExampleService } from "./services/exampleService";

export interface CommandDeps {
  service: ExampleService;
  refresh: () => Promise<void>;
  output: vscode.OutputChannel;
}

export function registerCommands(
  context: vscode.ExtensionContext,
  deps: CommandDeps,
): void {
  const { service, refresh, output } = deps;

  context.subscriptions.push(
    vscode.commands.registerCommand("extensionTemplate.refresh", async () => {
      await refresh();
    }),
    vscode.commands.registerCommand("extensionTemplate.hello", () => {
      const count = service.getSnapshot()?.items.length ?? 0;
      void vscode.window.showInformationMessage(
        vscode.l10n.t("Extension Template: {0} item(s).", count),
      );
    }),
    vscode.commands.registerCommand(
      "extensionTemplate.openSettings",
      async () => {
        await vscode.commands.executeCommand(
          "workbench.action.openSettings",
          "@ext:jenesei-software.extension-template",
        );
      },
    ),
  );

  output.appendLine(vscode.l10n.t("Commands registered."));
}
