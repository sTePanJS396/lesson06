// Главная функция - randomNumber.
// В randomNumber находятся все переменные, необходимые для работы программы.
// Переменные: number - искомое значение, whoNumber - ответ пользователя, С - результат работы 
// функции isNum.
// В rabdomNumber находятся функция isRandomNumber.
// B isRandomNumber находиться функция isNum.
// В функции isNum происходит проверка значений, полученных от пользователя:
// если введенное число равно загаданному, то возвращаем в переменной С значение TRUE
// если введенное число не равно загаданному, то вызываем функцию isNum.


function randomNumber() {
    let number = 50;
    let whoNumber;
    let c;
    let count = 10;
    // объявим все необходимые переменные

    function isRandomNumber() {
        whoNumber = prompt('Введи число от 1 до 100');
        function isNum() {
            if (Number(whoNumber) === number) {
                return c = true;
            } else {
               if (whoNumber === null) {
                   alert('Игра окончена!');
                   console.log(typeof whoNumber);
                   return c = false;
               } else if (Number(whoNumber) < 50) {
                   alert('Загаданное число больше!');
                   console.log(typeof whoNumber);
               } else if (Number(whoNumber) > 50) {
                   alert('Загаданное число меньше!');
                   console.log(typeof whoNumber);
               } else {
                   alert('Введи число!');
               }
            }
        };

        isNum();

        if (c === true) {
            alert('Ты угадал!');
        } else if (c == false){
            alert('Пока!');
        } esle {
            isRandomNumber();
        }
    } 
    isRandomNumber();
};
randomNumber();
