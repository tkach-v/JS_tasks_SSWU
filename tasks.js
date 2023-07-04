// Задача1
// Ви повинні реалізувати функцію, яка повертає різницю між
// найбільшим та найменшим значенням у списку , отриманому як аргумент
// функції. Масив, який отримує функція як аргумент, може містити позитивні
// та негативні числа. Якщо масив порожній або має 1 значення, поверніть нуль.
//     Спочатку масив буде поданий у невідсортованому вигляді.
// arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7
// arr([16]) => 0

function task1(arr) {
    if (!Array.isArray(arr)) {
        throw "Аргумент повинен бути масивом";
    }
    return Math.max(...arr) - Math.min(...arr);
}

// console.log(task1([1, 2, 3, -4]))
// console.log(task1(16))


// Задача2
// Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді
// масиву тільки ті слова, довжина яких перевищує число.

function task2(str, num) {
    if (typeof str !== 'string' || typeof num !== 'number') {
        throw "Функція може приймати лише рядок та число";
    }

    return str.split(/[\s,!.?—]+/).filter(Boolean).filter(word => {
        return word.length > num;
    });
}

// console.log(task2("Hello world, test string. Back-end. Привіт — це.", 5));


// Задача3
// Напишіть функцію, яка повертає true, якщо перший переданий
// аргумент (рядок) закінчується другим аргументом (також рядком).
// Приклад:
//     solution('abc', 'bc') => true
// solution('abc', 'd') => false

function task3(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw "Функція може приймати лише 2 рядки";
    }
    return str1.endsWith(str2);
}

// console.log(task3('abc', 'bc'));


// Задача 4
// Напишіть функцію, яка отримує масив цілих чисел і повертає масив
// середніх значень кожного цілого числа та його послідовника, якщо він є.
//     Приклад:
// averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]
// averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]
//

function task4(arr) {
    if (typeof arr !== 'object') {
        throw "Функція може приймати лише масив";
    }
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        result.push((arr[i] + arr[i + 1]) / 2);
    }
    return result;
}

// console.log(task4([2, -2, 2, -2, 2]));
// console.log(task4([1, 3, 5, 1, -10]));


// Задача5
// Створіть функцію, яка приймає рядок і повертає кількість голосних, які
// у ній.
//     Приклад:
// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1

function task5_1(str) {
    if (typeof str !== 'string') {
        throw "Функція може приймати лише рядок";
    }
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    return str.split('').filter(elem => vowels.indexOf(elem.toLowerCase()) !== -1).length;
}

// console.log(task5_1('Celebration'));
// console.log(task5_1('Palm'));


// 5.2
// Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне
// змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null.
//     Приклад:
// removeABC("This might be a bit hard") ➞ "This might e it hrd"
// removeABC("hello world!") ➞ null

function task5_2(str) {
    if (typeof str !== 'string') {
        throw "Функція може приймати лише рядок";
    }

    const letters = ['a', 'b', 'c'];
    let changed = false;
    const str_arr = str.split('');
    for (let i = 0; i < str_arr.length; i++) {
        if (letters.indexOf(str_arr[i]) !== -1) {
            str_arr.splice(i, 1);
            changed = true;
        }
    }

    if (!changed) {
        return null;
    }
    return str_arr.join('');
}

// console.log(task5_2("This might be a bit hard"));
// console.log(task5_2("hello world!"));


// Задача6
// Напишіть JavaScript для пошуку унікальних елементів з двох масивів.
// (Set не використовувати:))
// Приклад:
//     console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

function task6(arr1, arr2) {
    if (typeof arr1 !== 'object' || typeof arr2 !== 'object') {
        throw "Функція може приймати лише 2 масиви";
    }
    let result_arr = [...arr1]
    arr2.forEach(elem => {
        if (arr1.indexOf(elem) === -1) {
            result_arr.push(elem)
        }
    });
    return result_arr;
}

// console.log(task6([1, 2, 3, "Hello", "Hi"], [100, 2, 1, 10, "Hello!"]));


// Задача7
// Напишіть функцію, щоб отримати копію об'єкта, де ключі стали
// значеннями, а значення ключами.
//     Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}
// вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

function task7(colors) {
    if (typeof colors !== 'object') {
        throw "Функція може приймати лише об'єкт";
    }

    let keys = Object.keys(colors);
    let values = Object.values(colors);
    let result = {};

    for (let i = 0; i < keys.length; i++) {
        result[values[i]] = keys[i]
    }
    return result;
}

// console.log(task7({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));


// Задача8
// Івана Іванова обікрали. Але його речі було застраховано на певну суму.
//     Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між
// загальною вартістю цих речей та межею політики.
//     Приклад:
// calculateDifference({ "baseball bat": 20 }, 5) ➞ 15
// calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11
// calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1
// Обмеження: Об'єкт завжди повинен містити елементи, сума предметів
// завжди повинна бути більшою за страховку.

function task8(stolenThings, insuranceValue) {
    if (typeof stolenThings !== 'object' || typeof insuranceValue !== 'number') {
        throw "Функція може приймати лише об'єкт та число";
    }

    if (Object.keys(stolenThings).length === 0) {
        throw "Об'єкт завжди повинен містити елементи"
    }

    let stolenSum = Object.values(stolenThings).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if (stolenSum < insuranceValue) {
        console.log("Сума предметів завжди повинна бути більшою за страховку.")
        return
    }
    return stolenSum - insuranceValue;
}

// console.log(task8({ skate: 10, painting: 20 }, 19));
// console.log(task8({}, 400));


// Задача9
// Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину
// (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з
// шириною (w) та висотою (h).
//     Приклад:
// doesBrickFit(1, 1, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 1, 1, 1) ➞ true
// doesBrickFit(1, 2, 2, 1, 1) ➞ false
// Обмеження:
//     Цеглу можна повернути будь-якою стороною до отвору.
//     Ми припускаємо, що цегла підходить, якщо її розміри дорівнюють
// розмірам отвору (тобто розмір цегли повинен бути меншим або дорівнює
// розміру отвору, не строго менше).
// Цегла не можна класти під неортогональним кутом.

function task9(a, b, c, w, h) {
    if (typeof a !== 'number' ||
        typeof b !== 'number' ||
        typeof c !== 'number' ||
        typeof w !== 'number' ||
        typeof h !== 'number') {
        throw "Функція може приймати лише 5 чисел";
    }

    let brickSides = [
        [a, b],
        [a, c],
        [b, c]
    ];

    for (const side of brickSides) {
        if ((w >= side[0] && h >= side[1]) || (w >= side[1] && h >= side[0])) {
            return true
        }
    }
    return false
}

// console.log(task9(1, 1, 1, 1, 1));
// console.log(task9(1, 2, 1, 1, 1));
// console.log(task9(1, 2, 2, 1, 1));


// Задача10
// Дано рядок, що містить повне ім'я файлу (наприклад, 'c:
//     \WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я файлу
// без розширення.

function task10(fileName) {
    if (typeof fileName !== 'string') {
        throw "Функція може приймати лише рядок";
    }
    return fileName.split(/[\\/]/).pop().split('.')[0];
}

// console.log(task10("\\WebServers\\home\\testsite\\www\\myfile.txt"));
// console.log(task10("\\WebServers\\home\\testsite\\www\\myfile.dev.txt"));


// Задача11
// Дано два рядки. Чи можна перший рядок отримати з другого циклічним
// зрушенням?

function task11(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw "Функція може приймати лише 2 рядки";
    }

    if (str1.length !== str2.length) {
        return false;
    }

    if (str1 === str2) {
        return true
    }

    for (let i = 1; i < str1.length; i++) {
        const shifted = str2.slice(i) + str2.slice(0, i);

        if (shifted === str1) {
            return true;
        }
    }
    return false;
}

// console.log(task11("hello", "lohel"));
// console.log(task11("hello", "1ohel"));


// Задача12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.

function task12(a) {
    if (typeof a !== 'object') {
        throw "Функція може приймати лише масив";
    }

    if (a.length % 2 === 1) {
        throw "Масив повинен складатися із 2n елементів";
    }

    const result = {
        b: [],
        c: []
    }

    a = a.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < a.length / 2; i++) {
        result.b.push(a[i]);
        result.c.push(a[i + 1]);
    }
    return result;
}

// console.log(task12([10, -90, 32, 4, 5, 10, 21, 21, 0, 2]));


// Задача13
// Дано рядок, що складається зі слів, розділених пробілами. Сформувати
// новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім
// першої літери першого слова; б) усі посилання у словах замінюються на
// "[посилання заборонено]"; в) всі email замінюються на "[контакти
// заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,
// видаляються.
//     Якщо кількість символів в отриманому рядку буде більшої ніж
// кількість символів у вихідному, то запустити функцію, що буде кожні 5
// секунд в alert буде питати, чи потрібна нам допомога.

function task13(str) {
    if (typeof str !== 'string') {
        throw "Функція може приймати лише рядок";
    }

    let words = str.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
        } else {
            words[i] = words[i].toLowerCase();
        }

        if (words[i].startsWith("http://") || words[i].startsWith("https://")) {
            words[i] = "[посилання заборонено]";
        }

        if (words[i].includes("@")) {
            words[i] = "[контакти заборонені]";
        }

        if (words[i].length > 3 && /^\d+$/.test(words[i])) {
            words.splice(i, 1);
            i--;
        }
    }
    let newString = words.join(" ");

    if (newString.length > str.length) {
        // Запустити функцію alert кожні 5 секунд
        setInterval(() => {
            alert("Вам потрібна допомога?");
        }, 5000);
    }
    return newString;
}

// console.log(task13("теСтОвиЙ рядок. https://www 12324 test@emample.com тест2"));


// Задача14
// Перевірити, чи дотримується в заданому тексті баланс круглих дужок,
//     що відкриваються і закриваються, тобто можна встановити взаємно
// однозначну відповідність відкриваючих і закриваючих дужок, причому
// відкриваюча дужка завжди передує тій, що закривається. Якщо баланс
// дотримується вивести цей текст на html – сторінку і заборонити користувачу
// копіювати цей текст та перегляд коду сторінки.

function task14(str) {
    if (typeof str !== 'string') {
        throw "Функція може приймати лише рядок";
    }
    const openIndexes = [];
    const closeIndexes = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openIndexes.push(i);
        } else if (str[i] === ')') {
            closeIndexes.push(i);
        }
    }

    if ((openIndexes.length !== closeIndexes.length) ||
        (openIndexes[openIndexes.length - 1] > closeIndexes[closeIndexes.length - 1])) {
        return false;
    }

    const elem = document.querySelector(".task-14");
    elem.textContent = str;
    elem.addEventListener('copy', event => {
        event.preventDefault();
    });
    document.oncontextmenu = () => {
        return false;
    };
    return true;
}

// console.log(task14("('test': ((1, 2), ('str': 1)))"));
// console.log(task14("('test': ((1, 2), ('str': 1)"));
// console.log(task14("('test': 1, 2), ('str': 1)))(("));


// Задача15
// Написати функцію, яка генерує пароль для користувача. Вимоги:
// довжина від 6 до 20 символів повинен бути рівно один символ підкреслення,
//     хоча б дві великі літери, не більше 5 цифр, будь-які дві цифри поспіль
// неприпустимі.

function task15() {
    const digits = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^`{|}~';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const minLength = 6;
    const maxLength = 20;
    const maxDigits = 5;

    let resultPassword = '';
    let digitsCount = 0;

    const passwordLength = minLength + Math.floor(Math.random() * (maxLength - minLength + 1));

    resultPassword += uppercaseChars[(Math.floor(Math.random() * uppercaseChars.length))];
    resultPassword += uppercaseChars[(Math.floor(Math.random() * uppercaseChars.length))];
    while (resultPassword.length < passwordLength) {
        const charType = Math.floor(Math.random() * 5);

        if (charType === 0 && resultPassword.indexOf('_') === -1) {
            // add _
            resultPassword += '_';
        } else if (charType === 1 &&
            digitsCount < maxDigits &&
            isNaN(parseInt(resultPassword[resultPassword.length - 1]))) {
            // add digits
            resultPassword += digits[(Math.floor(Math.random() * digits.length))];
            digitsCount++;
        } else if (charType === 2) {
            // add symbols
            resultPassword += symbols[(Math.floor(Math.random() * symbols.length))];
        } else if (charType === 3) {
            // add uppercase characters
            resultPassword += uppercaseChars[(Math.floor(Math.random() * uppercaseChars.length))];
        } else {
            // add lowercase characters
            resultPassword += lowercaseChars[(Math.floor(Math.random() * lowercaseChars.length))];
        }
    }
    return resultPassword;
}

// console.log(task15());


// Задача16
// В заданому масиві найменший елемент помістити на перше місце,
//     найменший з тих, що залишилися - на останнє місце, наступний -
// передостаннє і так далі - до середини масиву.

function task16(arr) {
    if (typeof arr !== 'object') {
        throw "Функція може приймати лише масив";
    }
    const array = [...arr]
    let startIndex = 0;
    let endIndex = array.length - 1;
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let min = Math.min(...array);
        array.splice(array.indexOf(min), 1);

        if (i % 2 === 0) {
            result[startIndex] = min;
            startIndex++;
        } else {
            result[endIndex] = min;
            endIndex--;
        }
    }
    return result;
}

// console.log(task16([-1, -40, 3, 45, -100, 23, 5, 100, 0, 1, -900]));

// Задача17
// Напишіть функцію, яка приймає рядок та повертає новий рядок,
//     відсортований за частотою появи символів. Символи з більшою частотою
// повинні йти раніше за символи з меншою частотою. Використовуйте методи
// роботи з рядками, об'єктами та сортуванням для вирішення задачі.

function task17(str) {
    if (typeof str !== 'string') {
        throw "Функція може приймати лише рядок";
    }
    const countChar = {};
    for (let char of str) {
        countChar[char] = (countChar[char] || 0) + 1;
    }

    let sortableChars = [];
    for (let key in countChar) {
        sortableChars.push([key, countChar[key]]);
    }
    sortableChars.sort((a, b) => {
        return b[1] - a[1];
    });

    let result = '';
    sortableChars.forEach(char => {
        result += char[0].repeat(char[1]);
    })
    return result;
}

// console.log(task17("abdabcd dbbaaaddd dd"));


// Задача18
// Дано два рядки. Напишіть функцію, яка знаходить найбільший
// загальний підрядок у цих рядках. Підрядка може містити лише послідовні
// символи (без перепусток). Використовуйте методи роботи з рядками та
// алгоритми пошуку для вирішення задачі.

function task18(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw "Функція може приймати лише 2 рядки";
    }
    const maxSubstring = ['', 0];
    for (let i = 0; i < str1.length; i++) {
        for (let j = i + 1; j < str1.length + 1; j++) {
            let sub = str1.slice(i, j);
            if (str2.includes(sub) && maxSubstring[1] < sub.length) {
                maxSubstring[0] = sub;
                maxSubstring[1] = sub.length;
            }
        }
    }
    return maxSubstring[0];
}

// console.log(task18("ello, ;there is a", "Hello, there is a"));


// Задача19
// Напишіть функцію, яка приймає рядок та число зсуву та повертає
// зашифровану версію рядка за допомогою шифру Цезаря. Кожна літера у
// вихідному рядку має бути замінена на літеру, що знаходиться на заданій
// кількості позицій вперед в алфавіті. Використовуйте методи роботи з рядками
// та масивами для вирішення задачі.

function task19(str, shift) {
    // працює лише із символами у таблиці ASCII

    if (typeof str !== 'string' || typeof shift !== 'number') {
        throw "Функція може приймати лише рядок та число";
    }

    if (shift < 0) {
        return task19(str, shift + 26);
    }

    let result = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];

        if (letter.match(/[a-z]/i)) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                letter = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                letter = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
        result += letter;
    }
    return result;
}

// console.log(task19("Hello", 31));
// console.log(task19("Mjqqt", -31));


// Задача20
// Напишіть функцію, яка приймає два рядки та перевіряє, чи є вони
// анаграмами (чи мають однакові символи у різному порядку). Функція
// повинна повернути true, якщо рядки є анаграмами, і false інакше.
//     Використовуйте методи роботи з рядками для вирішення задачі.

function task20(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        throw "Функція може приймати лише 2 рядки";
    }

    let str1Chars = str1.replace(' ', '').split('');
    let str2Chars = str2.replace(' ', '').split('');
    str1Chars.sort();
    str2Chars.sort();
    return str1Chars.join('') === str2Chars.join('');
}

// console.log(task20("horse", "shore"));
// console.log(task20("listen", "silent"));


// Задача21
// Створіть об'єкт "Університет" з методами для додавання студента,
// видалення студента, отримання інформації про студента за його
// ідентифікатором та отримання списку студентів певного курсу. Реалізуйте
// також функцію, яка дає змогу отримати список студентів певного факультету.
//     Використовуйте об'єкти та їх методи для вирішення задачі.

const university = {
    students: [],

    addStudent: function (student) {
        this.students.push(student);
    },
    removeStudent: function (studentId) {
        this.students = this.students.filter(student => {
            return studentId !== student.id;
        });
    },
    getStudentById: function (studentId) {
        let student = this.students.filter(student => {
            return studentId === student.id
        });
        if (student) {
            return student;
        }
        return;
    },
    getStudentsListByCourse: function (course) {
        return this.students.filter(student => {
            return course === student.course;
        });
    },
    getStudentsListByFaculty: function (faculty) {
        return this.students.filter(student => {
            return faculty === student.faculty;
        });
    },
};

// university.addStudent({
//     id: 1,
//     name: "John",
//     course: 3,
//     faculty: "ABCD",
//     age: 150
// });
// university.addStudent({
//     id: 2,
//     name: "Ann",
//     course: 1,
//     faculty: "ABCD",
//     age: 35
// });
// university.addStudent({
//     id: 3,
//     name: "Tom",
//     course: 3,
//     faculty: "DCBA",
//     age: 50
// });
// console.log(university.getStudentsListByFaculty("ABCD"));
// console.log(university.getStudentsListByCourse(3));
// console.log(university.getStudentById(3));
// university.removeStudent(3);
// console.log(university);


// Задача22
// Напишіть програму, яка аналізує текст та виводить статистику про
// кількість слів, речень та символів у тексті.
function task22_1(text) {
    if (typeof text !== 'string') {
        throw "Функція може приймати лише рядок";
    }

    const result = {
        words: text.split(" ").length,
        sentences: text.split(/[.!?]/).filter(sentence => {
            return sentence !== '';
        }).length,
        symbols: text.length,
    }
    return `Кількість слів у тексті: ${result.words}\n` +
        `Кількість речень у тексті: ${result.sentences}\n` +
        `Кількість символів у тексті: ${result.symbols}`;
}

// console.log(task22_1("Напишіть програму, яка аналізує текст та виводить статистику про " +
//     "кількість слів, речень та символів у тексті. Речення 2! Речення3? Речення 4"));

// Реалізуйте також функцію, яка
// визначає слова, що найчастіше зустрічаються в тексті. Використовуйте
// методи роботи з рядками, регулярні вирази та об'єкти для вирішення задачі.

function task22_2(text) {
    if (typeof text !== 'string') {
        throw "Функція може приймати лише рядок";
    }

    let words = text.split(" ").filter(word => {
        return word !== '';
    });

    words = words.map(word => {
        return word.replace(/[.,;!?]/g, '');
    });

    const wordsLength = {};
    words.forEach(word => {
        wordsLength[word] = (wordsLength[word] || 0) + 1;
    });

    let result = [];
    for (let key in wordsLength) {
        result.push([key, wordsLength[key]]);
    }
    result.sort((a, b) => {
        return b[1] - a[1];
    });

    let resultString = "Слова, які найчастіше зустрічаються в тексті:\n";
    result.forEach(pair => {
        resultString += `${pair[0]}: ${pair[1]}\n`;
    });

    return resultString;
}

// console.log(task22_2("тест, тест 2. Розробка, програма, 111 2 2 2 2 0"));
