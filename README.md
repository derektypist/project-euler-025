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

**User Stories**

As a user, I expect the function `digitFibonacci(5)` to return a number.

As a user, I expect the function `digitFibonacci(5)` to return 21.

As a user, I expect the function `digitFibonacci(10)` to return 45.

As a user, I expect the function `digitFibonacci(15)` to return 69.

As a user, I expect the function `digitFibonacci(20)` to return 93.

**Information Architecture**

The function `digitFibonacci(n)` returns a number, where `n` is the number of digits.