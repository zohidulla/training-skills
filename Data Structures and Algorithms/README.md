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

> Example linear search in JavaScript

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

> Example binary search in JavaScript

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
<img src="./images/time-complexity.webp>
</p>

<p align="center">
<img src="./images/array-sorting-algorithms.jpeg>
</p>

> Turli vaqt murakkabliklarida talab qilinadigan operatsiyalar:

<p align="center">
<img src="./images/operations.png>
</p>
