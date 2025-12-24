#!/usr/bin/env node
/* Fix executable permissions for npm bin shims in CI environments.
   Some environments can end up with non-executable files in node_modules/.bin,
   which causes "Permission denied" (exit 126) when running tools like vite.
*/
const fs = require("fs");
const path = require("path");

const binDir = path.join(process.cwd(), "node_modules", ".bin");

function chmodSafe(p) {
  try {
    fs.chmodSync(p, 0o755);
  } catch (err) {
    // Ignore permission errors; we'll still try other files.
  }
}

function main() {
  // Only relevant on POSIX.
  if (process.platform === "win32") return;

  if (!fs.existsSync(binDir)) return;

  const entries = fs.readdirSync(binDir);
  for (const name of entries) {
    const p = path.join(binDir, name);
    let stat;
    try {
      stat = fs.lstatSync(p);
    } catch {
      continue;
    }

    if (stat.isSymbolicLink()) {
      // Try to chmod the symlink target.
      try {
        const target = fs.realpathSync(p);
        chmodSafe(target);
      } catch {
        // ignore
      }
      continue;
    }

    if (stat.isFile()) {
      chmodSafe(p);
    }
  }
}

main();
