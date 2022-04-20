const axios = require("axios");
const moment = require("moment");
const { isValidDate } = require("../util/validate");

exports.filterData = async (startDate, endDate, items) => {
  if (isValidDate(startDate) && isValidDate(endDate)) {
    let keys = Object.keys(items);
    let values = Object.values(items);
    let convertObjectToArray = [];
    for (let i = 0; i < keys.length; i++) {
      convertObjectToArray.push({ key: keys[i], value: values[i] });
    }

    var resultMetricData = convertObjectToArray.filter(function (a) {
      var singleDate = a.key || {};
      let hitDates = new Date(singleDate);
      return hitDates >= new Date(startDate) && hitDates <= new Date(endDate);
    });
    return resultMetricData;
  }
  return false;
};
