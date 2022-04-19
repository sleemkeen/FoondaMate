const CliGraph = require("cli-graph");
const { fetchGraph } = require("./graphService");
var babar = require("babar");
const bar = require("cli-barchart");
const chalk = require("chalk");

exports.graph = async () => {
  //   Add points
  let items = await fetchGraph();
  let keys = Object.keys(items);
  let values = Object.values(items);
  let graphStructure = [];
  let graphStructureWithObject = [];

  for (var i = 0; i < keys.length; i++) {
    graphStructure.push([i, values[i]]);
    graphStructureWithObject.push({ key: keys[i], value: values[i] });
  }

  console.log(
    babar(graphStructure, {
      color: "green",
      width: 170,
      height: 30,
      yFractions: 0.1,
      caption: "Visualise the growth of their userbase",
    })
  );
  console.log("");
  console.log(keys.join(" "));
  console.log("");
  console.log("");
  console.log("Generating Graph Analysis");

  const chartString = bar.default(graphStructureWithObject, {
    // max width of bar, default is 1/3 of terminal columns
    maxWidth: 50,

    // bar color, default is blue
    colorize: (item, index, items) => chalk.green,

    // label after bar, default is percentage calculated from `item.value` / sum
    renderLabel: (item, index, items) => chalk.green(item.value),
  });

  console.log(chartString);
};
