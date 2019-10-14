function getDateTime(datastr = undefined)    {
            var currentdate = datastr == undefined ?new Date() : new Date(datastr);
            var month = currentdate.getMonth() + 1;
            var datetime = currentdate.getFullYear() + "-"
            + month + "-"
            + currentdate.getDate() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();
            return datetime;
        };

console.log(getDateTime('2019-10-15T14:11:00.000Z'));
console.log(getDateTime());
