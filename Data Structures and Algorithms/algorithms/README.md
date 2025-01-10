## ALGORITM

- **Algoritm** - bu muammoni hal qilish uchun aniq ketma-ketlikda berilgan ko'rsatmalar to'plami
- Yaxshi algoritmning belgilari:
  - kirish (muammo) va chiqish (yechim) aniq berilgan bo'lishi kerak
  - Algoritmning har bir bosqichi aniq va ravshan bo'lishi kerak
  - Algoritm muammoni hal qilishning turli usullari orasida eng samaralisi bo'lishi kerak
  - Algoritmda kompyuter kodi bo'lmasligi kerak. Buning o'rniga algoritm turli xil dasturlash tillarida ishlatilishi mumkin bo'lgan tarzda yozilishi kerak

<p align="center">
<img src="../images/algorithms.jpg">
</p>

Algoritm - bu hisoblash masalasini hal qilish uchun ishlatilishi mumkin bo'lgan aniq belgilangan ko'rsatmalarning cheklangan ketma-ketligi. U kirishni kerakli natijaga aylantiradigan bosqichma-bosqich protsedurani taqdim etadi.

> Algoritmlar odatda mantiqiy tuzilishga amal qiladi:

- **Input:** Algoritm kiritilgan ma'lumotlarni oladi.
- **Processing:** Algoritm kiritilgan ma'lumotlar ustida bir qator operatsiyalarni bajaradi.
- **Output:** Algoritm kerakli natijani beradi.

Algoritmlar murakkab hisoblash masalalarini samarali va samarali hal qilish uchun zarurdir. Ular tizimli yondashuvni ta'minlaydi:

- **Solving problems:** Algoritmlar muammolarni kichikroq, boshqariladigan bosqichlarga ajratadi.
- **Optimizing solutions:** Algoritmlar muammolarning eng yaxshi yoki optimalga yaqin yechimlarini topadi.
- **Automating tasks:** Algoritmlar vaqt va kuchni tejaydigan takrorlanuvchi yoki murakkab vazifalarni avtomatlashtirishi mumkin.

1. [**Analysis of Algorithms**](./analysis.md)
   Algoritmlarni tahlil qilish algoritmlarning samaradorligini baholash jarayoni bo'lib, asosan vaqt va makon murakkabligiga e'tibor beradi. Bu kirish hajmi oshgani sayin algoritmning ishlash vaqti yoki bo'sh joy talablari qanday o'sishini baholashga yordam beradi.

2. [**Mathematical Algorithms**](./mathematical.md)
   Ma'lumotlar tuzilmalari va algoritmlarini tahlil qilish va optimallashtirish uchun matematik algoritmlardan foydalaniladi. Bo'linuvchanlik, LCM, GCD va boshqalar kabi asosiy tushunchalarni bilish haqiqatan ham ma'lumotlar tuzilmalari qanday ishlashini tushunishga yordam beradi va samarali algoritmlarni loyihalash qobiliyatingizni oshiradi.

3. [**Bitwise Algorithms**](./bitwise.md)
   Bitli algoritmlar - bu raqamlarning alohida bitlarida ishlaydigan algoritmlar. Ushbu algoritmlar raqamlarning ikkilik tasvirini manipulyatsiya qiladi, masalan, bitlarni o'zgartirish, raqamning ma'lum bitlarini o'rnatish yoki tozalash va bit bo'yicha operatsiyalarni (VA, OR, XOR) bajaradi. Bitli algoritmlar odatda past darajadagi dasturlash, kriptografiya va optimallashtirish vazifalarida qo'llaniladi, bu erda alohida bitlarni samarali manipulyatsiya qilish kerak.

4. [**Searching Algorithms**](./searching.md)
   Qidiruv algoritmlari ma'lumotlar to'plamidagi ma'lum bir element yoki elementni topish uchun ishlatiladi. Ushbu algoritmlar katta ma'lumotlar to'plamidan ma'lumotlarni samarali olish uchun keng qo'llaniladi.

5. [**Sorting Algorithms**](./sorting.md)
   Saralash algoritmlari ro'yxat elementlarini ma'lum bir tartibda, masalan, son yoki alifbo tartibida joylashtirish uchun ishlatiladi. U elementlarni tizimli ravishda tartibga solib, muayyan elementlarni qidirish va ularga kirishni osonlashtiradi.

6. [**Recursion**](./recursion.md)
   Rekursiya - bu funksiya o'z ta'rifi doirasida o'zini chaqiradigan dasturlash usuli. Odatda bir xil muammoning kichikroq holatlariga bo'linishi mumkin bo'lgan muammolarni hal qilish uchun ishlatiladi.

7. [**Backtracking Algorithm**](./backtracking.md)
   Backtracking algoritmi Rekursiya algoritmidan olingan bo'lib, agar rekursiv yechim muvaffaqiyatsizlikka uchrasa, uni qaytarish imkoniyati mavjud, ya'ni yechim muvaffaqiyatsiz bo'lgan taqdirda, dastur muvaffaqiyatsizlikka uchragan vaqtni kuzatib boradi va boshqa yechimga asoslanadi. Shunday qilib, u asosan barcha mumkin bo'lgan echimlarni sinab ko'radi va to'g'risini topadi.

8. **Divide and Conquer Algorithm**
   Bo‘l va zabt et algoritmlari muammolarni kichikroq kichik muammolarga bo‘lish, o‘sha kichik muammolarni yechish va yakuniy yechimni olish uchun yechimlarni birlashtirish orqali hal qilish uchun rekursiv strategiyaga amal qiladi.

9. **Greedy Algorithm**
   Ochko'zlik algoritmi bir vaqtning o'zida yechimni bir bo'lakdan tashkil qiladi va eng aniq va darhol foyda keltiradigan keyingi qismni tanlaydi, ya'ni o'sha paytda eng maqbul tanlovdir. Shunday qilib, mahalliy optimallikni tanlash global echimlarga olib keladigan muammolar Greedy uchun eng mos keladi.

10. **Dynamic Programming**
    Dinamik dasturlash - murakkab masalalarni oddiy kichik muammolarga bo'lish orqali hal qilish uchun ishlatiladigan usul. Har bir kichik muammoni faqat bir marta yechish va natijalarni saqlash orqali u ortiqcha hisob-kitoblardan qochadi, bu esa keng doiradagi muammolar uchun samaraliroq yechimlarga olib keladi.

11. **Graph Algorithms**
    Grafik algoritmlari - bu tugunlar va qirralarning yig'indisi bo'lgan grafiklar bilan bog'liq muammolarni hal qilish uchun ishlatiladigan texnika va usullar to'plami. Bu algoritmlar grafiklar ustida izlash, oʻtish, eng qisqa yoʻlni topish va ulanishni aniqlash kabi turli amallarni bajaradi. Ular tarmoqni marshrutlash, ijtimoiy tarmoqlarni tahlil qilish va resurslarni taqsimlash kabi keng ko'lamli real muammolarni hal qilish uchun zarurdir.

12. **Pattern Searching**
    Pattern Searching DSA-da kattaroq matn ichida ma'lum bir naqshning paydo bo'lishini topish uchun ishlatiladigan asosiy usuldir. Shaklni qidirish algoritmlari keraksiz taqqoslashlarni minimallashtirish va qidiruvni tezroq qilish uchun oldindan ishlov berish kabi usullardan foydalanadi.

13. **Branch and Bound Algorithm**
    Tarmoq va bog'langan algoritm - bu eng yaxshi yechimni muntazam ravishda izlash uchun kombinatoriy optimallashtirish masalalarida qo'llaniladigan usul. U muammoni kichikroq kichik muammolarga yoki filiallarga bo'lish orqali ishlaydi, so'ngra optimal yechim chegaralari asosida ma'lum filiallarni yo'q qiladi. Bu jarayon eng yaxshi yechim topilmaguncha yoki barcha filiallar o'rganilguncha davom etadi.

14. **Geometric Algorithms**
    Geometrik algoritmlar - bu shakllar, nuqtalar, chiziqlar va ko'pburchaklar bilan bog'liq muammolarni hal qiluvchi algoritmlar to'plami. Geometrik algoritmlar informatikaning keng doiradagi muammolarini, masalan, kesishuvlarni aniqlash, qavariq korpusni hisoblash va hokazolarni hal qilish uchun zarurdir.

15. **Randomized Algorithms**
    Tasodifiy algoritmlar - muammolarni hal qilish uchun tasodifiylikdan foydalanadigan algoritmlar. Ular o'z maqsadlariga erishish uchun tasodifiy ma'lumotlardan foydalanadilar, bu ko'pincha oddiyroq va samaraliroq echimlarga olib keladi. Bu algoritmlar bir xil natija bermasligi mumkin, lekin ehtimollik yondashuvi maqbul bo'lgan holatlarda ayniqsa foydalidir.
