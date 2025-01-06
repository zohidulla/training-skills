### Bitwise Algorithms

Ma'lumotlar tuzilmalari va algoritmlarida (DSA) bitli algoritmlar operatsiyalarni samarali bajarish uchun raqamlarning ikkilik ko'rinishlarining alohida bitlarini manipulyatsiya qilishni o'z ichiga oladi. Bu algoritmlar AND, OR, XOR, NOT, Left Sift va Right Shift kabi bitli operatorlardan foydalanadi.

**Basics**

- Introduction to Bitwise Algorithms
- Bitwise Operators in C/C++
- Bitwise Operators in Java
- Python Bitwise Operators
- JavaScript Bitwise Operators
- All about Bit Manipulation
- Little and Big Endian Mystery

**Bit Manipulation Tips and Tricks**

- Bits manipulation (Important tactics)
- Bitwise Hacks for Competitive Programming

**Easy Problems on Bit Algorithms:**

- Binary Representation
- Turn off the rightmost set bit
- Check if K-th Bit Set
- Set the K-th Bit
- Modulus division by 2's Power
- Odd Occurring Number
- Power of two
- The only set bit
- Add Bit Strings
- Check for Integer Overflow
- XOR without using XOR
- Check for Equal
- Check for opposite signs
- Swap Two Numbers
- Russian Peasant

**Medium Problems on Bit Algorithms:**

- Most Significant Set Bit
- Rightmost Set Bit
- Count Set Bits
- Swap Bits
- Rotate Bits
- Smallest of Three
- Minimum without branching
- Smallest power of 2 greater than or equal to n
- Program to find parity
- Check if binary is palindrome
- Generate n-bit Gray Codes
- Check for Sparse
- Euclid when % and / are costly
- Square without using \*, / and pow()
- Cyclic Redundancy Check and Modulo-2 Division
- Set Bits in a Range
- Check for Bleak
- Gray to Binary and Vice Versa

**Hard Problems on Bit Algorithms:**

- Next higher with same set bits
- Karatsuba Algorithm for fast Multiplication
- Max Subarray XOR
- Longest Sequence of 1’s in Binary with One Flip
- Closest Smaller and greater with same set bits
- Bitmasking and Dynamic Programming
- Compute the Parity
- XOR Encryption by Shifting Plaintext
- Count pairs with at least one digit common
- Floating to Binary
- Booth’s Multiplication Algorithm
- Pairs with Pandigital Concatenation
- n-th number whose binary is a palindrome
- Two non-repeating in an array of repeating

**Bitwise algorithms** - bu butun sonlar yoki suzuvchi nuqtali raqamlar kabi kattaroq ma'lumotlar turlarida emas, balki ma'lumotlarning alohida bitlarida ishlaydigan algoritmlar. Ushbu algoritmlar bitlarni to'g'ridan-to'g'ri manipulyatsiya qiladi, odatda AND, OR, XOR, chapga siljitish, o'ngga siljish va to'ldiruvchi kabi bitli operatorlardan foydalanadi.

**Common Bitwise Algorithms and Operations:**

- **Bitwise AND (&):** Kirish sifatida ikkita raqamni oladi va ularning mos bitlarida bit yo'nalishi bo'yicha VA amalini bajaradi. Agar ikkala bit ham 1 bo'lsa, u 1 ni qaytaradi; aks holda, u 0 ni qaytaradi.
- **Bitwise OR (|):** Bit bo'yicha OR amalini ikkita raqamning mos keladigan bitlarida bajaradi. Bitlardan kamida bittasi 1 bo'lsa, u 1 ni qaytaradi.
- **Bitwise XOR (^):** Ikki raqamning mos keladigan bitlarida bit bo'yicha eksklyuziv OR amalini bajaradi. Bitlar boshqacha bo'lsa 1 ni, agar ular bir xil bo'lsa 0 ni qaytaradi.
- **Bitwise NOT (~):** Bit bo'yicha EMAS operatsiyasini bajaradi, u kirishning har bir bitini aylantiradi (1 0 ga, 0 esa 1 ga aylanadi).
- **Left Shift (<<) and Right Shift (>>):** Bu operatorlar raqamning bitlarini belgilangan pozitsiyalar soni bo'yicha chapga yoki o'ngga siljitadi. Chapga siljish sonni 2 ga ko'paytirishga teng, o'ngga siljish esa 2 ga bo'lish bilan tengdir.

**Applications of Bitwise Algorithms:**

- **Bit manipulation (setting, clearing, toggling bits):** Bitli operatorlar ko'pincha raqamlarning alohida bitlarini boshqarish uchun ishlatiladi. Bunga bitlarni o'rnatish (OR yordamida), bitlarni tozalash (to'ldiruvchi bilan AND yordamida), bitlarni almashtirish (1 bilan XOR yordamida) va ma'lum bir bitning qiymatini tekshirish kabi vazifalar kiradi.
- **Efficient storage of data:** Bitli algoritmlar Huffman kodlash kabi ma'lumotlarni siqish texnikasida hal qiluvchi rol o'ynaydi. Ular to'g'ridan-to'g'ri bitlarni manipulyatsiya qilish orqali siqilgan ma'lumotlarni samarali taqdim etishi va qayta ishlashi mumkin.
- **Cryptography:** AES (Advanced Encryption Standard), DES (Data Encryption Standard) va SHA (Secure Hash Algoritm) kabi ko'plab kriptografik algoritmlar shifrlash, shifrni ochish va xeshlash uchun bitli operatsiyalardan foydalanadi. Bitwise XOR, xususan, oddiyligi va samaradorligi uchun shifrlash algoritmlarida keng qo'llaniladi.
- **Networking and Protocol Handling:** Bitli algoritmlar tarmoq protokollarida IP-manipulyatsiyasi, pastki tarmoqni maskalash va paketlarni tahlil qilish kabi vazifalar uchun ishlatiladi. Masalan, IP manzili va pastki tarmoq maskasidan tarmoq manzilini aniqlash uchun pastki tarmoq maskalashda bit bo'yicha AND ishlatiladi.
- **Low-Level System Programming:** Bitli operatsiyalar qurilmani boshqarish, xotirani boshqarish va bit darajasidagi kiritish-chiqarish operatsiyalari kabi vazifalar uchun past darajadagi tizim dasturlashda muhim ahamiyatga ega. Ular apparat registrlarini manipulyatsiya qilish, bayroqlarni o'rnatish/tozalash va ishlash uchun kodni optimallashtirish uchun ishlatiladi.
- **Error Detection and Correction:** Bitli algoritmlar CRC (Tsiklik ortiqcha tekshiruv) va Hamming kodlari kabi xatolarni aniqlash va tuzatish usullarida qo'llaniladi. Ushbu algoritmlar uzatilgan ma'lumotlardagi xatolarni aniqlash va tuzatish uchun bitli XOR va boshqa operatsiyalardan foydalanadi.
