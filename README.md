# Project Euler 025 - 1000-Digit Fibonacci Number

The Fibonacci sequence is defined by the recurrence relation:

    Fn = Fn-1 + Fn-2, where F1 = 1 and F2 = 1.

Hence the first 12 terms are:

    F1 = 1
    F2 = 1
    F3 = 2
    F4 = 3
    F5 = 5
    F6 = 8
    F7 = 13
    F8 = 21
    F9 = 34
    F10 = 55
    F11 = 89
    F12 = 144

The 12th term, F12 is the first term to contain three digits.

The aim is to find the index of the first term in the Fibonacci sequence to contain n digits, using HTML Forms and JavaScript.

Information at [Project Euler 025](https://projecteuler.net/problem=25)

## UX

**Getting Started**

Enter the number of digits between 1 and 2000 and click on the Submit Button.  You will see the index of the first term to contain that number of digits, unless you have made an invalid input.  For example, if you entered 5 digits, you would expect the index to be 21.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 1 or greater than 2000
- Entering a number, but it is not an integer

As a user, I expect the function `digitFibonacci(5)` to return a number.

As a user, I expect the function `digitFibonacci(5)` to return 21.

As a user, I expect the function `digitFibonacci(10)` to return 45.

As a user, I expect the function `digitFibonacci(15)` to return 69.

As a user, I expect the function `digitFibonacci(20)` to return 93.

**Information Architecture**

The function `digitFibonacci(n)` returns a number, where `n` is the number of digits between 1 and 2000.

## Features

Allows the user to enter the number of digits as well as getting the index of the first term containing that number of digits.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.