var assert = require("assert");
const { graph } = require("../controllers/graph");
const { fetchGraph } = require("../controllers/graphService");

describe("Fetches Api", function () {
  describe("Fetch Api from endpoint", function () {
    it("should fetch api", async function () {
      let res = await fetchGraph();
      assert.equal(typeof res, "object");
    });
  });
});
