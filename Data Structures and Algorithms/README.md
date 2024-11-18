# MA'LUMOTLAR TUZILMASI VA ALGORITMLAR (Data Structures and Algorithms)

### Kompyuter

- Kompyuter - **ma'lumotlar**ga ishlov beruvchi electron qurilma
- Kompyuterning asosiy vazifasi **ma'lumotlar**ni o'qish,
  ularning ustida turli hisob-kitoblarni bajarish va saqlash

**Kompyuterlar 3 ta tarkibiy qismlardan iborat:**

- Prosessor (CPU)
- Xotira (RAM, HDD, SSD...)
- Kirish-chiqish qurilmalari (keyboard, mouse, monitor...)

### DASTUR

- Dastur - qo'yilgan muammoga yechim topish uchun, kompyuterga qaysi amallarni qanday ketma-ketlikda bajarishni aytuvchi **ko'rsatmalar to'plami**
- Bevosita dastur yozish jarayoni dasturlash, dastur yozuvchi odam esa **dasturchi** deyiladi

### ALGORITM

- **Algoritm** - bu muammoni hal qilish uchun aniq ketma-ketlikda berilgan ko'rsatmalar to'plami
- Yaxshi algoritmning belgilari:
  - kirish (muammo) va chiqish (yechim) aniq berilgan bo'lishi kerak
  - Algoritmning har bir bosqichi aniq va ravshan bo'lishi kerak
  - Algoritm muammoni hal qilishning turli usullari orasida eng samaralisi bo'lishi kerak
  - Algoritmda kompyuter kodi bo'lmasligi kerak. Buning o'rniga algoritm turli xil dasturlash tillarida ishlatilishi mumkin bo'lgan tarzda yozilishi kerak

### MA'LUMOTLAR

- Ma'lumotlar - kompyuter xotirasida saqlanuvchi matn, rasm, video, audio, dasturlar, jadvallar va boshqa axborotlar
- Ma'lumotlar tuzilmasi - ma'lumotlardan **samarali** foydalanish uchun tartibga solishning o'ziga xos usuli

> [!NOTE]
>
> Ma'lumotlar tuzilmasi va algoritmlar - **dasturlash**ning negizi!
> Bitta muammoga **bir nechta** yechim bo'lishi
> Mavjud ma'lumotlar tuzilmasi va algoritmlardan xabardor bo'lish eng **samarali** yechimni topishda yordam beradi
> Samaradorlik algoritmning **tezligi** va qancha **xotira** egallashi bilan o'lchanadi **(Time and Space complexity)**

### MA'LUMOTLAR TUZILMASI

- Array (ro'yxat)
- 2-3-N o'lchamli ro'yxat
- Linked list (bo'glangan ro'yxat)
- Stacks
- Queues
- Graph (Graflar)
- Shajara (Tree)
- Hash jadvallari
- Heap

### ALGORITMLAR

- Aksar muammolar ma'lumotlarni tartiblashga va qidirishga borib taqaladi
- Biz o'rganadigan aksar algoritmlar ham aynan **Tartiblash** va **Qidirish** (Sorting and Searching) algoritmlar haqida bo'ladi
- Dynamic Programming, Greedy Algorithms

### SORTING

- Bubble sort
- Selection sort
- Merge sort
- Quick sort
- Heap sort
- Bucket sort

### QIDIRISH ALGORITMLAR - SEARCHING

- Linear search
- Binary search
- Recursion
- Jump search

### Linear search

**Linear search** - **Chiziqli qidiruv** - elementlarni qidirishning eng oddiy turi bo'lib, ko'rib chiqilayotgan keyingi qiymatni ushbu qiymatlar mos kelgunga qadar kerakli qiymat bilan **ketma-ket** taqqoslash yo'li bilan amalga oshiriladi.

<p align="center">
<img src="./images/linear.png">
</p>

> Example **Linear search** in JavaScript

```js
function search(arr, n, x) {
  for (let i = 0; i < n; i++) if (arr[i] == x) return i;
  return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;
let n = arr.length;

let result = search(arr, n, x);
result == -1
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);
```

> [!NOTE]
>
> Saralanmagan ro'yxatlar: Bizda tartiblanmagan massiv yoki ro'yxat mavjud bo'lganda, to'plamdagi istalgan elementni topish uchun **Linear search** eng ko'p ishlatiladi.
> Kichik ma'lumotlar to'plamlari mavjud bo'lsa **Linear search** afzalroqdir.
> Kichik ma'lumotlar to'plamlari uchun juda mos keladigan algoritm.
> Hech qanday qo'shimcha xotira talab qilmaydi.
> Katta massivlar uchun mos emas.

### Binary search

**Binary search** - **Ikkilik qidiruv** - logarifmik vaqt logida tartiblangan massivdagi elementni topishga imkon beruvchi algoritm bo'lib, bu erda n - massivdagi elementlar soni.

<p align="center">
<img src="./images/binary.png">
</p>

> Algoritm

1. Massivning o'rta elementini tanlash
2. Elementni kerakli element bilan solishtirish
3. Agar elementlar teng bo'lsa, ushbu elementning indeksini qaytaring, aks holda:

- Agar siz izlayotgan element o'rtadagidan kichikroq bo'lsa, massivning chap yarmini ko'rib chiqing
- Agar siz izlayotgan element o'rtadagidan kattaroq bo'lsa, massivning o'ng yarmini ko'rib chiqing

4. Biz elementni topmagunimizcha, algoritmni massivning tanlangan yarmiga qo'llaymiz
5. Agar kerakli element massivda bo'lmasa, biz sikldan chiqamiz

> Example **Binary search** in JavaScript

```js
function search(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const key = Math.floor((start + end) / 2);
    const value = nums[key];

    if (value === target) return key;

    if (target > value) start = key + 1;
    if (target < value) end = key - 1;
  }

  return -1;
}
```

> [!NOTE]
>
> **Binary search** elementlar soni ko'p bo'lganda samarali bo'ladi, chunki u har bir bosqichda taqqoslash operatsiyalari sonini taxminan yarmiga qisqartiradi.

### Big O notation (katta O belgisi)

<p align="center">
<img src="./images/bigO.jpeg">
</p>

- Big O (katta O) - algoritmning tezligini o'lchash uchun mezon
- Big O eng yomon holatdagi tezlikni o'lchaydi
- O'lchov birligi - operatsiyalar soni
- Linear Search uchun O(n)
- Binary Search uchun O(log2N)

> Ba'zi algoritmlarning tezligi:

<p align="center">
<img src="./images/time-complexity.webp">
</p>

<p align="center">
<img src="./images/array-sorting-algorithms.jpeg">
</p>

> Turli vaqt murakkabliklarida talab qilinadigan operatsiyalar:

<p align="center">
<img src="./images/operations.png">
</p>

<p align="center">
<img src="./images/big-o-computations.jpg">
</p>

### Array - ma'lumot tuzilmasi

> Array (Massiv)

<p align="center">
<img src="./images/array.png">
</p>

> Array in JavaScript

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Initializing an array with values

// Accessing elements
console.log("Element at index 0:", arr[0]); // Element at index 0: 1
```

> ARRAY va XOTIRA

<p align="center">
<img src="./images/array-memory.webp">
</p>

> ARRAY va Big O

<p align="center">
<img src="./images/big-o-operations.webp">
</p>

<p align="center">
<img src="./images/big-o-method-type.png">
</p>

> **Array** turlari:

Asosan ikki turdagi **Array** mavjud:

**Static Array**: Ushbu turdagi massivda xotira kompilyatsiya vaqtida uning belgilangan o'lchamiga ega bo'ladi. Biz bu massiv hajmini o‘zgartira olmaymiz yoki yangilay olmaymiz.
**Dynamic Array**: Ushbu turdagi massivda xotira ish vaqtida ajratiladi, lekin belgilangan hajmga ega emas. Aytaylik, foydalanuvchi massivning istalgan tasodifiy hajmini e'lon qilmoqchi bo'lsa, biz statik massivdan foydalanmaymiz, uning o'rniga qo'lda dinamik massiv ishlatiladi. U har qanday dasturning ishlash vaqtida uning hajmini belgilash uchun ishlatiladi.

<p align="center">
<img src="./images/arrays-static.png">
</p>

> Example in JavaScript

```js
// Static Integer Array
const staticArray = [1, 2, 3, 4, 5];

// Dynamic Integer Array (Array with size allocation)
const dynamicArray = new Array(5); // Allocating memory for 5 elements

// Initializing dynamic array elements
for (let i = 0; i < dynamicArray.length; i++) {
  dynamicArray[i] = i + 1; // Assigning values 1, 2, 3, 4, 5
}

// Printing Static Integer Array
console.log("Static Integer Array:");
console.log(staticArray.join(" "));

// Printing Dynamic Integer Array
console.log("Dynamic Integer Array:");
console.log(dynamicArray.join(" "));
```

<p align="center">
<img src="./images/array-complexity.jpg">
</p>

> **Static Array** va **Dynamic Array** o'rtasidagi asosiy farq:

<p align="center">
<img src="./images/arrays-difference.jpg">
</p>

### LINKED LISTS

- **LINKED LISTS** - bu ketma-ketligi xotiradagi joylashuviga bog'liq bo'lmagan **chiziqli** ma'lumotlar **to'plami**
- Ro'yxatning har bir elementi keyingi elementga **ishora** qiladi
- Ma'lumotlar tuzilmasi sifatida **LINKED LISTS**ni bir-biriga **bog'langan tugunlar** ko'rinishida tasavvur qilamiz
- Har bir tugun o'z **qiymatini** va keyingi element **manzilini** saqlaydi

<p align="center">
<img src="./images/linked_lists.svg">
</p>

> **LINKED LISTS** - Bog'langan ro'yhatlar

<p align="center">
<img src="./images/array_memory.png">
</p>

<p align="center">
<img src="./images/linkedlists_memory.png">
</p>

> Linked List Implementation in C

<p align="center">
<img src="./images/linkedlists_exwithvalues.svg">
</p>

> **ARRAYS** VS. **LINKED LISTS**

|               | ARRAYS                                        | LINKED LISTS                                    |
| ------------- | --------------------------------------------- | ----------------------------------------------- |
| AFZALLIKLARI  | - Tez o'qish/qidirish                         | - Tez yozish/o'chirish                          |
|               | - Har bir element kamroq xotira egallaydi     | - O'zgaruvchan hajmga ega                       |
|               |                                               | - Xotiradan samarali foydalanish                |
| KAMCHILIKLARI | - Sekin qo'shish/o'chirish                    | - Sekin qidirish                                |
|               | - O'zgarmas hajm (hajm o'zgartirish "qimmat") | - Har bir tugun xotirada ko'proq                |
|               | - Xotiradan smarasiz foydalanish              | joy egallaydi (qiymat + keyingi tugun mamnzili) |

<p align="center">
<img src="./images/array-vs-linked.png">
</p>

<p align="center">
<img src="./images/difference-between-array-vs-linked-list.jpg">
</p>

> **LINKED LISTS** turlari:

1. **Singly linked lists** - Bir tomonlama ro'yxat

<p align="center">
<img src="./images/linkedlists_singly.svg">
</p>

2. **Doubly linked lists** - Ikki marta bog'langan ro'yxat

<p align="center">
<img src="./images/linkedlists_doubly.svg">
</p>

3. **Circular linked lists** - Aylana ro'yxat

- **Circular singly linked list**

<p align="center">
<img src="./images/linkedlists_circsingly.svg">
</p>

- **Circular doubly linked list**

<p align="center">
<img src="./images/linkedlists_circdoubly.svg">
</p>

> [!NOTE]
>
> **ABSTRAKT MA'LUMOT TURLARI**
>
> - Ma'lumot turiga **dasturlash tilidan uzilgan** holda qarash
> - Abstrakt ma'lumot turi u saqlaydigan **qiymatlar** va uning ustida
>   bajarish mumkin bo'lgan **operasiyalar** bilan aniqlanadi

> Example **LINKED LISTS** in JavaScript

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Append: Insert a new node at the end of the linked list
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Prepend: Insert a new node at the beginning of the linked list
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Delete: Remove the first occurrence of a node with the given data
  delete(data) {
    if (!this.head) {
      return; // List is empty
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // Search: Find the first occurrence of a node with the given data
  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true; // Data found
      }
      current = current.next;
    }
    return false; // Data not found
  }

  // Print: Display the elements of the linked list
  print() {
    let current = this.head;
    const elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.join(" -> "));
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30
linkedList.delete(20);
linkedList.print(); // Output: 5 -> 10 -> 30
console.log(linkedList.search(10)); // Output: true
console.log(linkedList.search(50)); // Output: false
```

### SELECTION SORT - RO'YXATLARNI TARTIBLASH

<p align="center">
<img src="./images/selection-sort.gif">
</p>

> Example **Selection Sort** in JavaScript

```js
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      // Swap
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort([3, 5, 1, 2])); // [1, 2, 3, 5]
```

> **Selection Sort** performance summary table

<p align="center">
<img src="./images/selection-sort-complexity.jpeg">
</p>

### RECURSION - REKURSIYA

<p align="center">
<img src="./images/recursion.jpeg">
</p>

> Rekursiya — Funksiya oʻziga oʻzi toʻgʻridan-toʻgʻri yoki qandaydir vosita orqali murojaat qilish jarayoniga rekursiya deyiladi va bunday funksiya rekursiv funksiya deb ataladi

> Rekursiv funksiyalar ikki qismdan iborat bo'ladi:

- Rekursiya sharti (recursive case)
- To'xtash sharti (base case)

> Exapmle **Recursion** in JavaScript

```js
// Program to countdown till 1

// recursive function
function counter(count) {
  // display count
  console.log(count);

  // condition for stopping
  if (count > 1) {
    // decrease count
    count = count - 1;

    // call counter with new value of count
    counter(count);
  } else {
    // terminate execution
    return;
  }
}

// access function
counter(5);
```

```js
// recursion while loop
const factorial = (x) => {
  if (x < 0) {
    throw new Error("x must be greater than or equal to 0");
  }

  if (x <= 1) {
    return 1;
  }

  let result = 1;

  while (x > 0) {
    result *= x;
    x--;
  }

  return result;
};
```

```js
// recursive function
function factorial(num) {
  // base case
  // recurse only if num is greater than 0
  if (num > 1) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
}

let x = 3;

// store result of factorial() in variable
let y = factorial(x);

console.log(`The factorial of ${x} is ${y}`);
```

### THE STACK

<p align="center">
<img src="./images/stack.png">
</p>

- **LIFO** Ma'lumotlar to'plami
- **LIFO (Last In First Out)** - Oxirgi kirgan, birinchi chiqadi
- Ma'lumotlar to'plam ustiga qo'shiladi va to'plam usridan olinadi

> The Stack ustida amallar

- Push - element qo'shish
- Pop - element sug'urib olish
- isEmpty - to'plam bo'sh ekanligini tekshirish
- isFull - to'plam to'la ekanligini tekshirish
- Peek - eng yuqoridagi element qiymatini ko'rish

<p align="center">
<img src="./images/stack-action.webp">
</p>

<p align="center">
<img src="./images/stack-complexity.jpg">
</p>

> Example **Stack** in JavaScript

```js
// Stack class
class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  // push(item)
  // pop()
  // peek()
  // isEmpty()
  // printStack()
}

// push function
push(element);
{
  // push element into the items
  this.items.push(element);
}

// pop function
pop();
{
  // return top most element in the stack
  // and removes it from the stack
  // Underflow if stack is empty
  if (this.items.length == 0) return "Underflow";
  return this.items.pop();
}

// peek function
peek();
{
  // return the top most element from the stack
  // but does'nt delete it.
  return this.items[this.items.length - 1];
}

// isEmpty function
isEmpty();
{
  // return true if stack is empty
  return this.items.length == 0;
}

// printStack function
printStack();
{
  let str = "";
  for (let i = 0; i < this.items.length; i++) str += this.items[i] + " ";
  return str;
}
```

```js
// creating object for stack class
let stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack.isEmpty());

// returns Underflow
console.log(stack.pop());

// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());

// returns 30
console.log(stack.peek());

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack.printStack());
```

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }
}

function postFixEvaluation(exp) {
  let stack = new Stack();
  for (let i = 0; i < exp.length; i++) {
    let c = exp[i];
    if (!isNaN(c)) stack.push(c - "0");
    else {
      let val1 = stack.pop();
      let val2 = stack.pop();
      if (val1 == "Underflow" || val2 == "Underflow")
        return "Can not perform postfix evaluation";
      switch (c) {
        case "+":
          stack.push(val2 + val1);
          break;
        case "-":
          stack.push(val2 - val1);
          break;
        case "/":
          stack.push(val2 / val1);
          break;
        case "*":
          stack.push(val2 * val1);
          break;
      }
    }
  }

  return stack.pop();
}

// calling the above method
// returns 9
console.log(postFixEvaluation("235*+8-"));

// returns "Can not perform postfix evaluation"
console.log(postFixEvaluation("23*+"));
```

> **Stack va Rekursiya**

- Rekursiv funksiyalar ham stack asosida ishlaydi
- Dasturlashda bu **call stack** yoki **program stack** deyiladi

<p align="center">
<img src="./images/call-stack.jpg">
</p>

<p align="center">
<img src="./images/call-stack-javascript.png">
</p>

### DIVIDE & CONQUER - Bo'lib tashlab, hukmronlik qil

- Ba'zida muammolarga yechim ko'rinmaydi
- Yaxshi dasturchi muammo oldida yengilmaydi
- Katta muammoni mayda muammolarga bo'lib olib, har bir muammoni alohida hal qiladi
- Bu **DIVIDE & CONQUER** metodi deb ataladi
- **DIVIDE & CONQUER** metodi juda ko'p muammolarga yechim bo'lishi mumkin
- Keyingi safar murakkab muammoga to'qnash kelganingizda shu metodni esga soling

<p align="center">
<img src="./images/Working-of-Divide-and-Conquer-Algorithm.webp">
</p>

> Examples of **Divide and Conquer** Algorithm in JavaScript

```js
// Function to find the maximum number
// in a given array.
function findMax(a, lo, hi) {
  // If lo becomes greater than hi, then return minimum
  // integer possible
  if (lo > hi) return Number.MIN_VALUE;
  // If the subarray has only one element, return the
  // element
  if (lo === hi) return a[lo];
  const mid = Math.floor((lo + hi) / 2);
  // Get the maximum element from the left half
  const leftMax = findMax(a, lo, mid);
  // Get the maximum element from the right half
  const rightMax = findMax(a, mid + 1, hi);
  // Return the maximum element from the left and right
  // half
  return Math.max(leftMax, rightMax);
}
```

### QUICKSORT

- **Quicksort** ham ma'lumotlarni **tartiblash** algoritmi
- **Selection sortga** nisbatan bir necha barobar tezroq
- **Divide and Conquer** yordamida ishlaydi

<p align="center">
<img src="./images/quicksort.webp">
</p>

> Complexity Analysis of Quick Sort

<p align="center">
<img src="./images/quicksort-time-space.png">
</p>

> Examples **Quick Sort** **Select the First element as a pivot** in JavaScript

```js
function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[0];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

var unsorted = [23, 45, 16, 37, 3, 99, 22];
var sorted = quicksort(unsorted);

console.log("Sorted array", sorted);
```

> Examples **Quick Sort** **Select the Last element as a pivot** in JavaScript

```js
function quicksort(array) {
  if (array.length <= 1) {
    return array;
  }

  var pivot = array[array.length - 1];

  var left = [];
  var right = [];

  for (var i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}

var unsorted = [23, 45, 16, 37, 3, 99, 22];
var sorted = quicksort(unsorted);

console.log("Sorted array", sorted);
```

> Examples **Quick Sort** **Select the Middle element as a pivot** in JavaScript

```js
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== Math.floor(arr.length / 2)) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage
let array = [10, 7, 8, 9, 1, 5];
console.log("Sorted array:", quickSort(array));
```

> Examples **Quick Sort** **Select a Random element as a pivot** in JavaScript

```js
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let right = [];
  let equal = [];

  for (let val of arr) {
    if (val < pivot) {
      left.push(val);
    } else if (val > pivot) {
      right.push(val);
    } else {
      equal.push(val);
    }
  }
  return [...quickSort(left), ...equal, ...quickSort(right)];
}

// Unsorted Array
const arr = [6, 9, 2, 5, 0, 7, 3, 1, 8, 4];

console.log(quickSort(arr)); // [0,1,2,3,4,5,6,7,8,9]
```

### BUBBLE SORT

- Eng sodda tartiblash algoritmi
- Qo'shni elementlarni solishtirish va o'rnini almashtirish orqali ishlaydi

<p align="center">
<img src="./images/bubble-sort-slide.webp">
</p>

> Example **BUBBLE SORT** in JavaScript

```js
// Optimized javaScript implementation
// of Bubble sort
function bubbleSort(arr, n) {
  var i, j, temp;
  var swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // IF no two elements were
    // swapped by inner loop, then break
    if (swapped == false) break;
  }
}

// Function to print an array
function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++) console.log(arr[i] + " ");
}

// Driver program
var arr = [64, 34, 25, 12, 22, 11, 90];
var n = arr.length;
bubbleSort(arr, n);
console.log("Sorted array: ");
printArray(arr, n);
```

> Complexity Analysis of Bubble Sort:
> Time Complexity: O(n2)
> Auxiliary Space: O(1)

> **Bubble Sort** afzalliklari:

- **Bubble Sort** tushunish va amalga oshirish oson.
- Bu qo'shimcha xotira maydonini talab qilmaydi.
- Bu barqaror tartiblash algoritmidir, ya'ni bir xil kalit qiymatiga ega bo'lgan elementlar tartiblangan chiqishda o'zlarining nisbiy tartibini saqlab turadi.

- **Bubble Sort** kamchiliklari:
- **Bubble Sort** tartiblash O(n2) vaqt murakkabligiga ega, bu esa katta maʼlumotlar toʻplamlari uchun uni juda sekinlashtiradi.
- **Bubble Sort** solishtirishga asoslangan tartiblash algoritmidir, ya'ni u kirish ma'lumotlar to'plamidagi elementlarning nisbiy tartibini aniqlash uchun taqqoslash operatorini talab qiladi. Ayrim hollarda algoritm samaradorligini cheklashi mumkin.

### MERGE SORT

- **Divide and Conquer** usuli yordamida ishlaydigan tartiblash algoritmi
- Ro'yxatni ikkiga bo'lib, ikki tarafni alohida tartiblab jamlash asosida ishlaydi

<p align="center">
<img src="./images/merge-sort.webp">
</p>

<p align="center">
<img src="./images/Merge-Sort-1.webp">
</p>
<p align="center">
<img src="./images/Merge-Sort-2.webp">
</p>
<p align="center">
<img src="./images/Merge-Sort-3.webp">
</p>
<p align="center">
<img src="./images/Merge-Sort-4.webp">
</p>

> Example **MERGE SORT** in JavaScript

```js
function merge(arr, left, mid, right) {
  const n1 = mid - left + 1;
  const n2 = right - mid;

  // Create temp arrays
  const L = new Array(n1);
  const R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) L[i] = arr[left + i];
  for (let j = 0; j < n2; j++) R[j] = arr[mid + 1 + j];

  let i = 0,
    j = 0;
  let k = left;

  // Merge the temp arrays back into arr[left..right]
  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left >= right) return;

  const mid = Math.floor(left + (right - left) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  merge(arr, left, mid, right);
}

function printArray(arr) {
  console.log(arr.join(" "));
}

// Driver code
const arr = [12, 11, 13, 5, 6, 7];
console.log("Given array is");
printArray(arr);

mergeSort(arr, 0, arr.length - 1);

console.log("\nSorted array is");
printArray(arr);
```

> Complexity Analysis of **Merge Sort**:

- Time Complexity:
  - Best Case: O(n log n), When the array is already sorted or nearly sorted.
  - Average Case: O(n log n), When the array is randomly ordered.
  - Worst Case: O(n log n), When the array is sorted in reverse order.
- Auxiliary Space: O(n), Additional space is required for the temporary array used during merging.

> **Merge Sort** afzalliklari:

- Barqarorlik: **Merge Sort** barqaror tartiblash algoritmidir, ya'ni u kirish massividagi teng elementlarning nisbiy tartibini saqlaydi.
- Kafolatlangan eng yomon ishlash: **Merge Sort** eng yomon vaqt murakkabligi O(N logN) ga teng, ya'ni u hatto katta ma'lumotlar to'plamlarida ham yaxshi ishlaydi.
- Amalga oshirish oson: **Divide and Conquer** yondashuvi oddiy.
- Tabiiy parallel: Biz mustaqil ravishda pastki qatorlarni birlashtiramiz, bu esa uni parallel ishlov berish uchun mos qiladi.
  > **Merge Sort** kamchiliklari:
- Bo'shliqning murakkabligi: **Merge Sort** saralash jarayonida birlashtirilgan kichik massivlarni saqlash uchun qo'shimcha xotira talab qiladi.
- Joyda emas: **Merge Sort** joyida tartiblash algoritmi emas, ya'ni tartiblangan ma'lumotlarni saqlash uchun qo'shimcha xotira talab qilinadi. Bu xotiradan foydalanish tashvish tug'diradigan ilovalarda kamchilik bo'lishi mumkin.
- Umuman **QuickSort** dan sekinroq. **QuickSort** keshga qulayroq, chunki u joyida ishlaydi.
