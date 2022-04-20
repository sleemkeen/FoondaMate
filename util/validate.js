exports.isValidDate = async (dateString) => {
  var regEx = /^\d{2}-\d{2}-\d{4}$/;
  return dateString.match(regEx) != null;
};
