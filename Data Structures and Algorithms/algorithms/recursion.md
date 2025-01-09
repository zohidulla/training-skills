### Recursive Algorithms

**Recursion** - bu computer science da katta muammolarni kichikroq, o'xshash masalalarga bo'lish orqali hal qilish uchun ishlatiladigan texnikadir. Funktsiyaning o'zini bevosita yoki bilvosita chaqirishi rekursiya, mos keladigan funksiya esa rekursiv funktsiya deb ataladi. Rekursiv algoritmdan foydalanib, ba'zi muammolarni juda oson hal qilish mumkin.

**Learn Basics of Recursion Algorithms:**

- Introduction to Recursion
- Recursion vs Iteration
- Finite and Infinite Recursion
- What is Tail Recursion
- Tail Recursion Optimization

**Recursion in Different Languages:**

- Recursion in Python
- Recursion in Java
- Recursion in C#
- Recursion in JavaScript

**Easy Problems on Recursion**

- Print 1 to n without loop
- Print n to 1 without loop
- Mean of Array using Recursion
- Sum of natural numbers using recursion
- Decimal to binary number using recursion
- Sum of array elements using recursion
- Print reverse of a string using recursion
- Program for length of a string using recursion
- Sum of digit of a number using recursion
- Tail recursion to calculate sum of array elements.
- Program to print first n Fibonacci Numbers | Set 1
- Factorial of a number
- Array Min and Max using Recursion
- Palindrome Check using Recursion
- Count Set-bits using Recursion
- Fibonacci Series in reverse order using Recursion

**Medium Problems on Recursion**

- Recursively remove all adjacent duplicates
- Sort the Queue using Recursion
- Reversing a queue using recursion
- Coin Change
- Binary to Gray code using recursion
- Delete a linked list using recursion
- Product of 2 Numbers using Recursion
- Programs for Printing Pyramid Patterns using Recursion
- Length of longest palindromic sub-string : Recursion
- Program for Tower of Hanoi Algorithm
- Time Complexity Analysis | Tower Of Hanoi (Recursion)
- Program to calculate value of nCr using Recursion
- Find geometric sum of the series using recursion
- Convert a String to an Integer using Recursion
- DFS traversal of a Tree
- Bottom View of a Binary Tree using Recursion
- Write a program to print all Permutations of given String
- Print all subsets of a given Set or Array
- Print all possible paths from top left to bottom right of a mXn matrix
- Print all combinations of balanced parentheses
- Longest Common Subsequence (LCS)

**Hard Problems on Recursion**

- Find the value of a number raised to its reverse
- How to Sort a Stack using Recursion
- Reverse a Doubly linked list using recursion
- Given a string, print all possible palindromic partitions
- Check if a string is a scrambled form of another string
- Word Break Problem | DP-32
- Print all palindromic partitions of a string
- N Queen Problem | Backtracking-3
- Algorithm to Solve Sudoku | Sudoku Solver
- The Knight’s tour problem

**Practice Sets on Recursion**

- Recursive Practice Problems with Solutions
- Practice Questions for Recursion | Set 1
- Practice Questions for Recursion | Set 2
- Practice Questions for Recursion | Set 3
- Practice Questions for Recursion | Set 4
- Practice Questions for Recursion | Set 5
- Practice Questions for Recursion | Set 6
- Practice Questions for Recursion | Set 7
- Practice questions for Linked List and Recursion

**Rekursiv algoritm nima?**
Rekursiv algoritm muammoni hal qilishda rekursiyadan foydalanadigan algoritmdir. Rekursiv algoritmlar odatda ikki qismdan iborat:

- **Base case:** Qaysi shart rekursiyani to'xtatadi.
- **Recursive case:** Muammoning kichikroq versiyasi bilan funksiyaning o'ziga qo'ng'iroq qilish.

**Types of Recursion**

- **Direct recursion:** Bu faktorial amalga oshirish bilan tavsiflanadi, bu erda usullar o'zini chaqiradi.
- **In-Direct recursion:** Bu bir usul, aytaylik, A usuli boshqa B usulini chaqirganda sodir bo'ladi, so'ngra u A usulini chaqiradi. Bu ikki yoki undan ortiq usullarni o'z ichiga oladi va oxir-oqibat dumaloq qo'ng'iroqlar ketma-ketligini yaratadi.
- **Head recursion:** Rekursiv chaqiruv usulning boshida amalga oshiriladi.
- **Tail recursion:** Rekursiv chaqiruv oxirgi bayonotdir.

**Rekursiyadan qachon foydalanish kerak?**
Rekursiya turli xil muammolarni hal qilish uchun ishlatilishi mumkin bo'lgan kuchli texnikadir. Biroq, rekursiyadan ehtiyotkorlik bilan foydalanish muhim, chunki u to'g'ri ishlatilmasa, stekning to'lib ketishiga olib kelishi mumkin.

Rekursiya quyidagi hollarda qo'llanilishi kerak:

- Muammoni rekursiv hal qilish mumkin bo'lgan kichikroq kichik muammolarga bo'lish mumkin.
- Asosiy holatni aniqlash oson.
- Rekursiv qo'ng'iroqlar quyruq rekursivdir.

**Examples of Recursion**

> Example 1: Factorial: The factorial of a number n is the product of all the integers from 1 to n. The factorial of n can be defined recursively as:

```js
factorial(n) = n * factorial(n-1)
```

> Example 2: Fibonacci sequence: The Fibonacci sequence is a sequence of numbers where each number is the sum of the two preceding numbers. The Fibonacci sequence can be defined recursively as:

```js
fib(n) = fib(n-1) + fib(n-2)
```

**Applications of Recursion Algorithms:**

- **Tree and Graph Traversal:** Depth-first search (DFS) and breadth-first search (BFS)
- **Dynamic Programming:** Solving optimization problems by breaking them into smaller subproblems
- **Divide-and-Conquer:** Solving problems by dividing them into smaller parts, solving each part recursively, and combining the results
- **Backtracking:** Exploring all possible solutions to a problem by recursively trying different options
- **Combinatorics:** Counting or generating all possible combinations or permutations of a set
