import { isLeapYear as leapYear } from "./leapYear.js";
(() => {
    const years = [0, 4, 400, 100, 104, 2000, 1700, 2008];
    for (const year of years) {
        const isLeapYear = leapYear(year);
        console.log(isLeapYear);
    }
})();