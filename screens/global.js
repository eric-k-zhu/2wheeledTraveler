import moment from 'moment';

var time = moment().utcOffset('-05:00').format('hh:mm a');

module.exports = {
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    curTime: time, 
    curSpeed: 0, 
    maxSpeed: 0
};