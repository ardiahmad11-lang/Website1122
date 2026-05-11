import { ESLint } from "eslint";

async function main() {
  const eslint = new ESLint();
  const results = await eslint.lintFiles(["."]);
  
  for (const result of results) {
    if (result.errorCount > 0 || result.warningCount > 0) {
      console.log(`File: ${result.filePath}`);
      for (const msg of result.messages) {
        console.log(`  Line ${msg.line}: ${msg.message} (${msg.ruleId})`);
      }
    }
  }
}

main().catch(console.error);
