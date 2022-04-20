var assert = require("assert");
const { graph } = require("../controllers/graph");
const { fetchGraph } = require("../controllers/graphService");
const { isValidDate } = require("../util/validate");
const { filterData } = require("../helpers/filters");

describe("Fetches Api", function () {
  describe("Fetch Api from endpoint", function () {
    it("should fetch api", async function () {
      let res = await fetchGraph();
      assert.equal(typeof res, "object");
    });
  });
});

describe("Validate Input Date Format", function () {
  describe("validate time format", function () {
    it("it should return true for right format", async function () {
      let date = "01-01-2022";
      let res = await isValidDate(date);
      assert.equal(res, true);
    });
  });
});

describe("Validate Input Date Format", function () {
  describe("validate time format", function () {
    it("it should return false for wrong format", async function () {
      let date = "2022-01-01";
      let res = await isValidDate(date);
      assert.equal(res, false);
    });
  });
});

describe("Check filtered functions", function () {
  describe("validate filtered function", function () {
    it("it should return filtered object", async function () {
      let items = await fetchGraph();
      let startDate = "01-01-2022";
      let endDate = "08-01-2022";
      let res = await filterData(startDate, endDate, items);
      assert.equal(typeof res, "object");
    });
  });
});

describe("Check filtered functions", function () {
  describe("validate filtered function", function () {
    it("it should return false when startdate is not valid", async function () {
      let items = await fetchGraph();
      let startDate = "";
      let endDate = "08-01-2022";
      let res = await filterData(startDate, endDate, items);
      assert.equal(res, false);
    });
  });
});

describe("Check filtered functions", function () {
  describe("validate filtered function", function () {
    it("it should return false when enddate is not valid", async function () {
      let items = await fetchGraph();
      let startDate = "08-01-2022";
      let endDate = "";
      let res = await filterData(startDate, endDate, items);
      assert.equal(res, false);
    });
  });
});
