const { Command } = require("commander");
const program = new Command();
const { graph } = require("./controllers/graph");

program
  .name("metric")
  .description("Visualise the growth of their userbase")
  .version("0.0.1");

program
  .command("metric")
  .description("Visualise the growth of their userbase")
  .argument("analysis", "metric")
  .action(async (str, options) => {
    const limit = options.first ? 1 : undefined;
    let argArray = str.split(options.separator, limit);
    if (argArray.length > 1 || argArray[0] != "analysis") {
      console.log("Invalid Argument");
      return;
    }
    // Process Graph
    graph();
  });

program.parse();
