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
    // объявим все необходимые переменные

    function isRandomNumber(n) {
        whoNumber = +prompt('Введи число от 1 до 100');
        function isNum() {

            if (whoNumber === 50) {
                return c = true;                
            } else if (whoNumber < 50) {
                alert('Число меньше, чем надо!');
                isRandomNumber();
            } else if (whoNumber > 50) {
                alert('Число больше, чем надо!');
                isRandomNumber();
            }

            
        };

        if (c === true) {
            alert('Ты угадал!');
        } else {
            isNum();
        }
    } 

    isRandomNumber();
};
randomNumber();