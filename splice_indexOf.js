// нужно написать функция которая будет выводить второе вхождение элемента,
// если его нету то возращать undefined решение довольно корявое но читабельное

"use strict";

function secondIndex(text, symbol) {

    text = text.split('');
    // if (text.indexOf(symbol) == -1)   { // если раскоментировать то код будет возращать в случает отсутствия элемента вообще
    //     return undefined;
    // }
    text.splice(text.indexOf(symbol), 1) // в данном случае -1 элемент последний в массиве будет удален что не верноб могут быть ошибки
    if (text.indexOf(symbol) == -1) {
        return undefined;
    }
    return text.indexOf(symbol)+1;
}
