function processArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i]));
    }
    return result;
}

function doubleElement(element) {
    return element * 2;
}

function reverseElement(element) {
    return String(element).split('').reverse().join('');
}

console.log(processArray([1, 2, 3, 4, 5], doubleElement));
console.log(processArray(["hello", "world"], reverseElement));


function filterArray(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

function isEven(number) {
    return number % 2 === 0;
}

function isShortWord(word) {
    return word.length <= 4;
}

console.log(filterArray([1, 2, 3, 4, 5], isEven));
console.log(filterArray(["cat", "elephant", "dog", "bird"], isShortWord));


function washDishes() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Посуд вимито");
        }, 2000);
    });
}

function cleanRoom() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Кімнату прибрано");
        }, 4000);
    });
}

function makeDinner() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Вечеря приготована");
        }, 7000);
    });
}

washDishes()
    .then(res => {
        console.log(res);
        return cleanRoom();
    })
    .then(res => {
        console.log(res);
        return makeDinner();
    })
    .then(res => {
        console.log(res);
    });


function sortArray(array) {
    return new Promise((resolve, reject) => {
        if (array.length === 0) {
            reject("Масив порожній");
        } else {
            setTimeout(() => {
                const sorted = [...array].sort((a, b) => a - b);
                resolve(sorted);
            }, 2000);
        }
    });
}

sortArray([9, 2, 5, 1, 8])
    .then(result => console.log(result))
    .catch(error => console.log(error));

sortArray([])
    .then(result => console.log(result))
    .catch(error => console.log(error));
