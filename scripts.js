alert('Exercises Solved by: Samuel Victor\nsamuelvictorol (github)');

// Exercise 1   

document.querySelector('#calculate-ex1').addEventListener('click', function() {
    var num1 = parseFloat(document.querySelector('.ex-box input[type="number"]:nth-child(1)').value);
    var num2 = parseFloat(document.querySelector('.ex-box input[type="number"]:nth-child(2)').value);
    var operation = document.querySelector('#operations').value;

    var operationsMap = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => b !== 0 ? a / b : alert('Division by zero is not allowed!') || null
    };

    var result = operationsMap[operation](num1, num2);

    if (result !== null) {
        alert('(Exercise 1) The result is: ' + result.toFixed(2));
    }
});

// Exercise 2

function isPrime(num, i = 2) {
    if (num < 2 || (num % i === 0 && i < num)) return false;
    if (i * i > num) return true;
    return isPrime(num, i + 1);
}

document.querySelector('#calculate-ex2').addEventListener('click', function() {
    var num = parseInt(document.querySelector('#ex2 .ex-box input[type="number"]').value);

    if (isNaN(num)) {
        alert('(Exercise 2) Please enter a number.');
        return;
    }

    var message = '(Exercise 2) The number ' + num + (isPrime(num) ? ' IS' : ' is NOT') + ' prime.';
    var nextPrimes = [];
    for (var i = num + 1; nextPrimes.length < 10; i++) {
        if (isPrime(i)) nextPrimes.push(i);
    }
    message += '\n(Exercise 2) The next 10 prime numbers are: ' + nextPrimes.join(', ');

    alert(message);
});

// Exercise 3

function factorial(num) {
    if (num < 0) return undefined;
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

document.querySelector('#calculate-ex3').addEventListener('click', function() {
    var num = parseInt(document.querySelector('#ex3 .ex-box input[type="number"]').value);
    alert('(Exercise 3) The factorial of ' + num + ' is: ' + factorial(num));
});

// Exercise 4

document.querySelector('#calculate-ex4').addEventListener('click', function() {
    let text = document.querySelector('#ex4 .ex-box input').value;
    if(isPalindrome()){
        alert('(Exercise 4) The text is palindrome');
    } else {
        alert('(Exercise 4) The text is not palindrome');
    }
    function isPalindrome() {
        let textReverse = text.split('').reverse().join('');
        return textReverse === text;
    }
}); 

// Exercise 5

document.querySelector('#calculate-ex5').addEventListener('click', function() {
    let number = document.querySelector('#ex5 .ex-box input').value;
    if(number <= 0 || number > 10){
        alert('(Exercise 5) Please enter a number between 1 and 10');
        return
    }else {
        let numberNames = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
        let tbody = document.querySelector('.table-ex5 tbody');
        tbody.innerHTML = ""; // Limpa o corpo da tabela
    
        for (let i = 1; i <= number; i++) {
            let row = document.createElement('tr');
            let cellNumber = document.createElement('td');
            let cellName = document.createElement('td');
            cellNumber.textContent = i;
            cellName.textContent = numberNames[i];
            row.appendChild(cellNumber);
            row.appendChild(cellName);
            tbody.appendChild(row);
        }
    
        let modalWrapper = document.querySelector('.modal-wrapper');
        modalWrapper.style.display = 'flex';
    }
});

document.querySelector('#close-ex5').addEventListener('click', function() {
    let modalWrapper = document.querySelector('.modal-wrapper');
    modalWrapper.style.display = 'none';
});

// Exercise 6

document.querySelector('#calculate-ex6').addEventListener('click', function() {
    let text = document.querySelector('#ex6 .ex-box input').value;
    let vowels = 0
    for (let i = 0; i < text.length; i++) {
        if (text[i] == "a" || text[i] == "e" || text[i] == "i" || text[i] == "o" || text[i] == "u") {
            vowels += 1;
        }
    }
    alert('(Exercise 6) The text:\n-> ' + text +'\nhas ' + vowels + ' vowels');
});

// Exercise 7

document.querySelector('#calculate-ex7').addEventListener('click', function() {
    let note1 = parseFloat(document.querySelector('#ex7 .ex-box input:nth-child(1)').value);
    let note2 = parseFloat(document.querySelector('#ex7 .ex-box input:nth-child(2)').value);
    let note3 = parseFloat(document.querySelector('#ex7 .ex-box input:nth-child(3)').value);
    if(note1 < 0 || note1 > 10 || note2 < 0 || note2 > 10 || note3 < 0 || note3 > 10){
        alert('(Exercise 7) Please enter a number between 0 and 10');
        return
    }else {
        let average = (note1 + note2 + note3) / 3;
        alert('(Exercise 7) The average is: ' + average.toFixed(2));
    }
});

// Exercise 8

document.querySelector('#calculate-ex8').addEventListener('click', function() {
    let initialCapital = parseFloat(document.querySelector('#ex8 .ex-box input:nth-child(1)').value);
    let interestRate = parseFloat(document.querySelector('#ex8 .ex-box input:nth-child(2)').value);
    let months = parseFloat(document.querySelector('#ex8 .ex-box input:nth-child(3)').value);
    if(initialCapital < 0 || interestRate < 0 || interestRate > 100 || months < 0 )  {
        alert('(Exercise 8) Please enter a positive number');
        return
    }else {
        let finalCapital = initialCapital * (1 + (interestRate/100)) ** months;
        alert('(Exercise 8) The final capital is: ' + finalCapital.toFixed(2));
    }
});