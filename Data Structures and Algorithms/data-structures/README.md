## DATA STRUCTURES - MA'LUMOTLAR TUZILMASI

Ma'lumotlar tuzilmalari kompyuter dasturlashning asosiy qurilish bloklari hisoblanadi. Ular dasturda ma'lumotlar qanday tashkil etilishi,
saqlanishi va boshqarilishini belgilaydi. Ma'lumotlar tuzilmalarini tushunish samarali va samarali algoritmlarni ishlab chiqish uchun juda muhimdir.

<p align="center">
<img src="../images/classification-ds.jpg">
</p>

1. **Linear Data Structure:** Ma'lumotlar elementlari ketma-ket yoki chiziqli joylashtirilgan, har bir element o'zining oldingi va keyingi qo'shni elementlariga
   biriktirilgan ma'lumotlar strukturasi chiziqli ma'lumotlar strukturasi deb ataladi.
   Example: Array, Stack, Queue, Linked List, etc.
2. **Static Data Structure:** Statik ma'lumotlar strukturasi qattiq xotira hajmiga ega. Statik ma'lumotlar strukturasidagi elementlarga kirish osonroq.
   Example: array.
3. **Dynamic Data Structure:** Dinamik ma'lumotlar strukturasida o'lcham aniqlanmagan. Kodning xotira (bo'sh joy) murakkabligi bo'yicha samarali deb hisoblanishi
   mumkin bo'lgan ish vaqti davomida tasodifiy yangilanishi mumkin.
   Example: Queue, Stack, etc.
4. **Non-Linear Data Structure:** Ma'lumotlar elementlari ketma-ket yoki chiziqli joylashtirilmaydigan ma'lumotlar tuzilmalari chiziqli bo'lmagan ma'lumotlar
   tuzilmalari deb ataladi. Chiziqli bo'lmagan ma'lumotlar tuzilmasida biz barcha elementlarni faqat bitta ishga o'tkaza olmaymiz.
   Examples: Trees and Graphs.

- [Array](./array.md)
  - Massiv - elementlar to'plamini saqlaydigan chiziqli ma'lumotlar strukturasi. Elementlar qo'shni xotiraga ajratilgan,
    doimiy kirish imkonini beradi. Har bir element o'ziga xos indeks raqamiga ega.
- [Matrix/Grid](./matrix.md)
  - Matritsa - bu qatorlar va ustunlar shaklida joylashtirilgan ikki o'lchovli elementlar massivi. U to'rtburchaklar to'r shaklida ifodalanadi, har bir element satr va ustunning kesishmasida joylashgan.
- [String](./string.md)
  - String - bu matnni ifodalash uchun ishlatiladigan belgilar ketma-ketligi. Bu kompyuter dasturlarida matnli ma'lumotlarni manipulyatsiya qilish va qayta ishlash imkonini beruvchi ma'lumotlar turi hisoblanadi.
- [Stack](./stack.md)
  - Stack - bu oxirgi kirish, birinchi chiqish (LIFO) tamoyiliga amal qiluvchi chiziqli ma'lumotlar strukturasi. Steklar funktsiya chaqiruvlarini, xotirani boshqarishda muhim rol o'ynaydi va algoritmlarda, veb-ishlab chiqishda va kompilyatorlar va brauzerlar kabi tizimlarda keng qo'llaniladi.
- [Queue](./queue.md)
  - Navbat – birinchi kirsa, birinchi chiqadi (FIFO) tamoyiliga amal qiluvchi chiziqli ma’lumotlar strukturasi. Navbatlar vazifalarni yoki ma'lumotlarni tartibda boshqarish, rejalashtirish va xabarlarni qayta ishlash tizimlarida muhim rol o'ynaydi.
- [Linked list](./linked-list.md)
  - Bog'langan ro'yxat - bu ko'rsatkichlar bilan bog'langan tugunlarda ma'lumotlarni saqlaydigan chiziqli ma'lumotlar tuzilmasi. Massivlardan farqli o'laroq, bog'langan ro'yxatlar tugunlari qo'shni xotira joylarida saqlanmaydi va ularga faqat ro'yxat boshidan boshlab ketma-ket kirish mumkin.
- [Hash](./hash.md)
  - Xeshlash - bu xesh funktsiyalari deb ataladigan matematik formulalar yordamida o'zgaruvchan o'lchamdagi kirishdan qat'iy o'lchamli chiqishni (xesh qiymati) hosil qiluvchi usul. Xeshlash odatda samarali qidirish, qo'shish va o'chirish uchun ma'lumotlar tuzilmalarida qo'llaniladi va xavfsiz ma'lumotlarni qidirish, parolni saqlash, kriptografiya, raqamli imzolar va boshqalar kabi dasturiy ilovalarda asosiy rol o'ynaydi.
- [Tree](./tree.md)
  - Daraxt - bu qirralar bilan bog'langan tugunlardan iborat bo'lgan chiziqli bo'lmagan, ierarxik ma'lumotlar strukturasi bo'lib, yuqori tugun ildiz deb ataladi va tugunlar tugunlari bo'ladi. U fayl tizimlarida, ma'lumotlar bazalarida, qarorlar qabul qilish algoritmlarida va boshqalarda keng qo'llaniladi.
- [Binary Tree](./binary-tree.md)
  - Ikkilik daraxt - bu chiziqli bo'lmagan va ierarxik ma'lumotlar strukturasi bo'lib, unda har bir tugun chap va o'ng bola deb ataladigan eng ko'p ikkita bolaga ega.
- [Binary Search Tree](./binary-search-tree.md)
  - Ikkilik qidiruv daraxti ikkilik daraxtning bir turi bo'lib, unda har bir tugunning chap pastki daraxti faqat tugundan kichikroq qiymatlarni o'z ichiga oladi va har bir tugunning o'ng pastki daraxti faqat tugundan kattaroq qiymatlarni o'z ichiga oladi. Bu xususiyat rekursiv ravishda qo'llaniladi, ya'ni har bir tugun uchun uning chap va o'ng pastki daraxtlari ham joriy Ikkilik qidiruv daraxti shartlarini qondirishi kerak.
- [Heap](./heap.md)
  - Uyum - bu to'liq ikkilik daraxt ma'lumotlar strukturasi bo'lib, u yig'ish xususiyatini qondiradi. Uyumlar odatda ustuvor navbatlarni amalga oshirish uchun ishlatiladi, bu erda eng kichik yoki eng katta element har doim daraxtning ildizida joylashgan.
- Graph
  - Grafik chiziqli bo'lmagan ma'lumotlar strukturasi bo'lib, ular bir juft tugunlarni bog'laydigan chekli uchlar (yoki tugunlar) va qirralarning (yoki bog'lamlar) to'plamidan iborat. Ob'ektlar o'rtasidagi munosabatlarni tasvirlash uchun grafiklardan keng foydalaniladi.
- Advanced Data Structures
  - Murakkab ma'lumotlar tuzilmalari - bu ma'lumotlarni samarali tartibga solish, saqlash va manipulyatsiya qilish uchun ishlatiladigan, murakkab algoritmlarda tezroq va samaraliroq qayta ishlashga imkon beradigan ma'lumotlarning murakkab tartibi. Massivlar va bog'langan ro'yxatlar kabi asosiy ma'lumotlar turlaridan farqli o'laroq, bu tuzilmalar segment daraxtlari, Trie, ikkilik indekslangan daraxt, qo'shimchalar massivi va boshqalar kabi yanada murakkab variantlarni o'z ichiga oladi.
