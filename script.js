function add (n1,n2) {
    return n1 + n2;
}

function subtract (n1,n2) {
    return n1 - n2;
}

function  multiply (n1,n2) {
    return n1 * n2;
}

function divide (n1,n2) {
    if (n2 === 0)
        return "This will return an undefined output.";
    else
        return n1/n2;
}

function modulus (n1, n2) {
    if (n2 === 0)
        return "This operation cannot be used with zero.";
    else
        return n1%n2;
}

function calc(operation) {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);
    const resultElement = document.getElementById('output');

    if (isNaN(n1) || isNaN(n2)) {
        resultElement.innerHTML = "Ensure that both inputs are valid. ";
        return;
    }

    let output, message

    switch (operation) {
    case '+':
      output = add(n1,n2);
      text = `The sum of ${n1} and ${n2} is ${output}.`;
      break;
    case '-':
      output = subtract(n1,n2);
      text = `The difference of ${n1} and ${n2} is ${output}.`;
      break;
    case '*':
      output = multiply(n1,n2);
      text = `The product of ${n1} and ${n2} is ${output}.`;
      break;
    case '/':
      output = divide(n1,n2);
      text = typeof output === "string" ? result : `The quotient of ${n1} and ${n2} is ${output}.`;
      break;
    case '%':
      output = modulus(n1,n2);
      text = typeof output === "string" ? output : `The remainder of ${n1} divided by ${n2} is ${output}.`;
      break;
    default:
      text = "Operation is invalid.";
    }

    resultElement.innerHTML = text;
}

