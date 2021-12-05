function daysToXmas(date) {
    const today = new Date(date.toDateString());
    const christmas = new Date('12/25/2021');
    const diffDays = Math.abs(christmas - today);
    const msPerDay = 1000 * 60 * 60 * 24;
    const daysLeft = Math.ceil(diffDays / msPerDay);
    return today > christmas ? daysLeft * -1 : daysLeft;
};

const date = new Date('Dec 24, 2021 23:59:59')
daysToXmas(date) // 1

// Documentation:
    // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
    // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates
    // - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
