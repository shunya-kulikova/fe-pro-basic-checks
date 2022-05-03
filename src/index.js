/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map((word) => `${word.substring(0, 1).toUpperCase()}${word.substring(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export function fenceString(string) {
    let newArr = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newArr.push(string[i]);
        } else if (i % 2 === 0) {
            newArr.push(string[i].toLowerCase());
        } else {
            newArr.push(string[i].toUpperCase());
        }
    }
    return newArr.join('')
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
    if (action === 'uppercase') {
        return string.toUpperCase();
    } else if (action === 'lowercase') {
        return string.toLowerCase();
    } else if (action === 'capitalize') {
        return capitalizeString(string);
    } else if (action === 'fence') {
        return fenceString(string);
    } else {
        return string
    }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
    switch (action) {
        case uppercase:
            return string.toUpperCase();
            break;
        case lowercase:
            return string.toLowerCase();
            break;
        case capitalize:
            return capitalizeString(string);
            break;
        case fence:
            return fenceString(string);
            break;
        default:
            return string;
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
    for (const char of string) {
        console.log(`${char}\n`);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
    for (let i = 0; i < string.length; i++) {
        console.log(`${string[i]}\n`);
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
    let i = 0;
    while (i < string.length) {
        console.log(`${string[i]}\n`);
        i++
    }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => string.split('').forEach((char) => console.log(`${char}\n`));