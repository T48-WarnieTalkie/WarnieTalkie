module.exports.dateFormatter = (date) => {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}
module.exports.timeFormatter = (date) => {
    return date.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + 
    date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + 
    date.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
}