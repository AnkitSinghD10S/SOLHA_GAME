module.exports.checkForValues = (fieldObj) => {
    let errorObj = {};
    let isError = false;
  
    Object.keys(fieldObj).forEach((fieldKey) => {
      if (!fieldObj[fieldKey]) {
        isError = true;
        errorObj[fieldKey] = "This is a required field";
      }
    });
    return [isError, errorObj];
  };
  