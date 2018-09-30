console.log("hello")
// 'yes', 'Y', 'yEs', 'YeS', 'nO', 'NO'

let first = prompt("Have you written a test?")

if (first[0].toLowerCase() === "n") {
    console.log("WRITE A TEST.")
} else if (first[0].toLowerCase() === "y") {
    let second = prompt("Does the test pass?")
    if (second[0].toLowerCase() === "n") {
        console.log("Fix your code.")
    } else if (second[0].toLowerCase() === "y") {
        let third = prompt("Do you need to refactor your code?")
        if (third[0].toLowerCase() === "n") {
            console.log("Awesome! Write a new feature.")
        } else if (third[0].toLowerCase() === "y") {
            console.log("Refactor your code.")
        }
    }
}

let passwordGuess = ''
while (passwordGuess !== 'password') {
  passwordGuess = prompt('You have been imprisoned in the code-block of a while loop! What is the magic word to exit?')
}
alert('Argh! You have escaped! I am so lonely, the world never says hello back.')
