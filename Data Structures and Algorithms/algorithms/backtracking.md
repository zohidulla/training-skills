### Backtracking Algorithm

**Backtracking Algorithm** muammoni hal qilish strategiyalariga o'xshaydi, ular eng yaxshi echimni topish uchun turli xil variantlarni o'rganishga yordam beradi. Ular turli yo'llarni sinab ko'rish orqali ishlaydilar va agar biri ishlamasa, ular to'g'ri yo'lni topmaguncha orqaga qaytishadi va boshqasini sinab ko'rishadi. Bu turli qismlarni bir-biriga mukammal moslashguncha sinab ko‘rish orqali jumboqni yechishga o‘xshaydi.

**Basic of Backtracking Algorithm:**

1. Introduction to Backtracking
2. Backtracking vs Recursion
3. Backtracking vs Branch and Bound

**Standard Problems**

- Permutations of a String
- The Knight’s tour problem
- Rat in a Maze
- N Queen Problem | Backtracking-3
- Subset Sum problem
- m Coloring Problem
- Hamiltonian Cycle
- Sudoku | Backtracking-7
- Magnet Puzzle
- Remove Invalid Parentheses
- A backtracking approach to generate n bit Gray Codes

**Easy Problem:**

- Backtracking to find all subsets
- Check if a given string is sum-string
- Count all possible paths between two vertices
- Find all distinct subsets of a given set
- Find if there is a path of more than k length from a source
- Print all paths from a given source to a destination
- Print all possible strings that can be made by placing spaces

**Medium Problems:**

- Tug of War
- 8 queen problem
- Combinational Sum
- Warnsdorff’s algorithm for Knight’s tour problem
- Find paths from corner cell to middle cell in maze
- Find Maximum number possible by doing at-most K swaps
- Rat in a Maze with multiple steps or jump allowed
- N Queen in O(n) space

**Hard Problems:**

- Power Set in Lexicographic order
- Word Break Problem using Backtracking
- Partition of a set into K subsets with equal sum
- Longest Possible Route in a Matrix with Hurdles
- Find shortest safe route in a path with landmines
- Print all palindromic partitions of a string
- Printing all solutions in N-Queen Problem
- Print all longest common sub-sequences in lexicographical order

**Backtracking Algorithm nima?**
Backtracking - bu muammoni hal qilishning algoritmik usuli bo'lib, u turli xil variantlarni sinab ko'rish va agar ular boshi berk ko'chaga olib kelsa, ularni bekor qilish orqali bosqichma-bosqich yechim topishni o'z ichiga oladi.

U odatda muammoni hal qilish uchun bir nechta imkoniyatlarni o'rganishingiz kerak bo'lgan vaziyatlarda qo'llaniladi, masalan, labirintda yo'l izlash yoki Sudoku kabi jumboqlarni hal qilish. O'lik nuqtaga erishilganda, algoritm oldingi qaror nuqtasiga qaytadi va yechim topilmaguncha yoki barcha imkoniyatlar tugaguncha boshqa yo'lni o'rganadi.

**Backtracking Algorithm qanday ishlaydi?**
Backtracking Algorithm muammoning barcha mumkin bo'lgan echimlarini rekursiv ravishda o'rganish orqali ishlaydi. U dastlabki yechimni tanlashdan boshlanadi va keyin ushbu yechimning barcha mumkin bo'lgan kengaytmalarini o'rganadi. Agar kengaytma yechimga olib kelsa, algoritm bu yechimni qaytaradi. Agar kengaytma yechimga olib kelmasa, algoritm oldingi yechimga qaytadi va boshqa kengaytmani sinab ko'radi.

Quyida orqaga qaytish algoritmi qanday ishlashining umumiy tavsifi keltirilgan:

1. Dastlabki yechimni tanlang.
2. Joriy yechimning barcha mumkin bo'lgan kengaytmalarini o'rganing.
3. Agar kengaytma yechimga olib kelsa, bu yechimni qaytaring.
4. Agar kengaytma yechimga olib kelmasa, oldingi yechimga qayting va boshqa kengaytmani sinab ko'ring.
5. Barcha mumkin bo'lgan yechimlar o'rganilguncha 2-4 bosqichlarni takrorlang.

Backtracking Algorithm ga misol
Example: labirint orqali eng qisqa yo'lni topish

Kirish: 2D massiv sifatida taqdim etilgan labirint, bu erda 0 ochiq joyni va 1 devorni ifodalaydi.

**Algoritm:**

1. Boshlanish nuqtasidan boshlang.
2. To'rtta mumkin bo'lgan yo'nalishning har biri uchun (yuqoriga, pastga, chapga, o'ngga) shu yo'nalishda harakat qilib ko'ring.
3. Agar bu yo'nalishda harakatlanish yakuniy nuqtaga olib kelsa, olingan yo'lni qaytaring.
4. Agar bu yo'nalishda harakatlanish yakuniy nuqtaga olib kelmasa, oldingi holatga qayting va boshqa yo'nalishni sinab ko'ring.
5. Yakuniy nuqtaga yetguncha yoki barcha mumkin bo'lgan yo'llar o'rganilguncha 2-4-bosqichlarni takrorlang.

**Backtracking Algorithm dan qachon foydalanish kerak?**
Backtracking Algorithm lari quyidagi xususiyatlarga ega bo'lgan muammolarni hal qilish uchun eng yaxshi qo'llaniladi:

- Muammoning bir nechta mumkin bo'lgan echimlari mavjud.
- Muammoni kichikroq kichik muammolarga bo'lish mumkin.
- Kichik muammolarni mustaqil ravishda hal qilish mumkin.

**Backtracking algoritmining qo'llanilishi**
Backtracking Algorithm lari turli xil ilovalarda qo'llaniladi, jumladan:

- Solving puzzles (e.g., Sudoku, crossword puzzles)
- Finding the shortest path through a maze
- Scheduling problems
- Resource allocation problems
- Network optimization problems
- Combinatorial problems, such as generating permutations, combinations, or subsets.
