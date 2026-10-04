import * as assert from "node:assert";
import * as vscode from "vscode";

const EXTENSION_ID = "jenesei-software.extension-template";

suite("Extension Template", () => {
  test("is present and activates", async () => {
    const extension = vscode.extensions.getExtension(EXTENSION_ID);
    assert.ok(extension, `extension ${EXTENSION_ID} should be installed`);
    await extension.activate();
    assert.ok(extension.isActive, "extension should be active");
  });

  test("registers its commands", async () => {
    await vscode.extensions.getExtension(EXTENSION_ID)?.activate();
    const commands = await vscode.commands.getCommands(true);
    for (const id of [
      "extensionTemplate.refresh",
      "extensionTemplate.hello",
      "extensionTemplate.openSettings",
    ]) {
      assert.ok(commands.includes(id), `${id} should be registered`);
    }
  });
});
