//5 вопрос
/* let i = 0;
while (i < 10) {
  let text = "";
  text += "Число является " + i;
  i++;
  console.log(text);
} */

/* let theNumber = prompt("Пожалуйста, введите число от 1 до 10.");

while (theNumber < 1 || theNumber > 10 || isNaN(theNumber)) {
  theNumber = prompt(
    "Введено неправильное значение, пожалуйста, введите число от 1 до 10!"
  );
}

alert("Отлично! Вы ввели число: " + theNumber);
 */

//7 вопрос
for (let i = 2; i < 11; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

//9 вопрос
for (let i = 0; i < 3; i++) {
  console.log(i);
}

//10 вопрос
//let i = 0;
//while (++i < 5) console.log(i); //1, 2, 3, 4

// и

let i = 0;
while (i++ < 5) console.log(i); //1, 2, 3, 4, 5
