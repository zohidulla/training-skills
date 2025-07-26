# Computer Networks and Internet

Компьютерная сеть — это система, в которой два или более устройств связаны между собой для совместного использования данных, ресурсов и информации. Эти сети могут варьироваться от простых установок, например, соединения двух устройств в вашем доме, до огромных глобальных систем, таких как Интернет. Ниже приведены основные компоненты компьютерной сети.

- **Node**: Любое устройство, которое может обмениваться данными или получать их. Примерами устройств являются ноутбук, мобильный телефон, принтер, наушники и сервер.
- **Transmission Media**: Среда, через которую устройства взаимодействуют Это может быть проводная среда, такая как оптоволокно и кабели Ethernet. Это также может быть беспроводная среда, такая как WiFi, Bluetooth и инфракрасный порт.
- **Protocol**: Набор правил, которые устройства используют для связи. Существует множество различных протоколов для различных типов связи. Примерами являются HTTP (для просмотра веб-страниц) и SMTP (для электронной почты).
- **Networking Devices**: Устройства, основная цель которых — предоставление сетевых услуг. Примерами являются маршрутизатор, коммутатор, точка доступа и концентратор.
- **Networking Applications**: Программное обеспечение, которое предоставляет интерфейс для общения и обмена. Примерами являются браузеры, почтовые клиенты и приложения для обмена файлами.

## Network Models - Модели TCP/IP и OSI

Эти структуры предоставляют стандартный набор правил для сетевой коммуникации. Мы глубоко погрузимся в многоуровневые структуры моделей OSI и TCP/IP. Это поможет нам понять их цель и сравнить их подходы к организации сетевых функций.

- **OSI Model**
- **TCP/IP Model**
- **OSI vs TCP/IP Model**

**Модель TCP/IP**

<p align="left">
<img src="./images/tcp-ip-model.png">
</p>

**Модель OSI**

<p align="left">
<img src="./images/osi-model.png">
</p>

**OSI vs TCP/IP Model**

<p align="left">
<img src="./images/osi-vs-tcp-ip.png">
</p>

# Bits and Bytes - Биты и байты

<p align="left">
<img src="./images/bite-byte.png" height="200">
</p>

## PDU (Protocol Data Unit) - Единицы данных протокола

<p align="left">
<img src="./images/pdu.png">
</p>

## Инкапсуляция и декапсуляция

<p align="left">
<img src="./images/encapsulation.png">
</p>

<p align="left">
<img src="./images/encapsulation-and-decapsulation.png">
</p>

# Ethernet

**Ethernet** это семейство технологий проводных компьютерных сетей, обычно используемых в локальных вычислительных сетях (LAN), городских вычислительных сетях (MAN) и глобальных вычислительных сетях (WAN).[1] Он был коммерчески представлен в 1980 году и впервые стандартизирован в 1983 году как IEEE 802.3.

<p align="left">
<img src="./images/ethernet.png">
</p>

## Copper,Fiber and Wireless media in Ethernet - Медный кабель, оптоволокно и беспроводные сети

<p align="left">
<img src="./images/cooper-fiber-wireless.png">
</p>

| S.NO | Parameter       | Fiber                             | Copper                                                | Wireless                                               |
| ---- | --------------- | --------------------------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| 1.   | Carrier         | Light is used to carry the data   | Signals are used to carry the data                    | Signals are used to carry the data                     |
| 2.   | Bandwidth       | It has the higher bandwidth       | It has the lower bandwidth                            | It has less bandwidth when compared to wired networks. |
| 3.   | Structure       | It is very thin and lightweight.  | It is very thick and heavier.                         | It has no structure as it is wireless.                 |
| 4.   | Resistant       | More resistant.                   | Less resistant as it is prone to corrosive materials. | No need for resistance as it is wireless.              |
| 5.   | Attenuation     | Low attenuation                   | High attenuation                                      | No attenuation as it has no cables or wires.           |
| 6.   | Security        | High security                     | Secured                                               | Less security                                          |
| 7.   | Break           | Not easily breakable              | Easily breakable                                      | No break issues                                        |
| 8.   | Installing cost | The cost of installation is high. | The cost of installation is low.                      | Installation cost is high                              |

Волоконно-оптические кабели обеспечивают значительно более высокую скорость и большую пропускную способность по сравнению с медными и беспроводными соединениями. Хотя медь является приемлемым вариантом для многих пользователей, способность волокна передавать данные с помощью света (фотонов) обеспечивает существенное преимущество в скорости по сравнению с использованием меди электричества (электронов). Беспроводные соединения, хотя и удобны, часто имеют более низкую максимальную скорость, чем и оптоволокно, и медь, особенно на больших расстояниях или с несколькими пользователями.

**Fiber Optic - Волоконно-оптические**:
Предлагают самые высокие скорости, часто достигая гигабитных или даже мультигигабитных скоростей (1 Гбит/с и выше). Оптоволокно также менее восприимчиво к потере сигнала и помехам на больших расстояниях, обеспечивая постоянную высокую скорость.

**Copper - Медь**:
Все еще может обеспечивать приличную скорость, как правило, до 1 Гбит/с, но производительность может ухудшаться на больших расстояниях и при большем количестве пользователей. Медь также более подвержена помехам от других электрических источников.

**Wireless - Беспроводная связь**:
Хотя беспроводные технологии, такие как Wi-Fi и 5G, могут быть удобными, они, как правило, предлагают более низкую максимальную скорость, чем оптоволокно и часто медь, с типичным максимумом около 1 Гбит/с или меньше. На скорость беспроводной связи также могут влиять расстояние, препятствия и количество подключенных устройств.

Ключевые факторы, влияющие на разницу в скорости:

**Transmission Medium - Среда передачи**:
Оптоволокно использует свет (фотоны), который распространяется намного быстрее и с меньшими потерями, чем электричество (электроны) в меди.

**Bandwidth - Пропускная способность**:
Оптоволокно обеспечивает гораздо более высокую пропускную способность, что позволяет ему передавать больше данных одновременно, способствуя более высокой скорости.

**Signal Degradation - Ухудшение сигнала**:
Оптоволокно испытывает меньшую потерю сигнала (затухание) на расстоянии по сравнению с медью.

**Interference - Помехи**:
Оптоволокно невосприимчиво к электромагнитным помехам, в отличие от меди, на которую могут влиять другие электрические сигналы.

**Подводя итог**: для пользователей, которые в первую очередь ценят скорость, надежность и готовность своего интернет-соединения к будущему, оптоволокно является явным победителем. Медный кабель может быть хорошим выбором для удовлетворения базовых потребностей в Интернете, но беспроводной, как правило, является самым медленным вариантом, хотя он и обеспечивает удобство мобильности.

## NIC (network interface controller) - Сетевая карта

**Сетевая плата** - также известная как сетевая карта, сетевой адаптер, Ethernet-адаптер — по названию технологии — дополнительное устройство, позволяющее компьютеру взаимодействовать с другими устройствами сети. В настоящее время в персональных компьютерах и ноутбуках контроллер и компоненты, выполняющие функции сетевой платы, довольно часто интегрированы в материнские платы для удобства, в том числе унификации драйвера и удешевления всего компьютера в целом.

<p align="left">
<img src="./images/network-card.png">
</p>

## MAC (Media Access Control) Address - MAC-адрес

<p align="left">
<img src="./images/mac-address.png">
</p>

**MAC-адрес** (адрес управления доступом к среде) — это уникальный идентификатор, назначаемый сетевым интерфейсам для связи в пределах сегмента сети. Это 12-значное шестнадцатеричное число, также известное как физический или аппаратный адрес, которое жестко записывается в сетевую интерфейсную карту (NIC) во время производства.
Вот более подробное объяснение:

**Цель:**
MAC-адреса используются для уникальной идентификации устройств в сети и обеспечения связи между ними на канальном уровне (уровень 2) модели OSI.

**Структура:**
MAC-адрес обычно представляется в виде шести пар шестнадцатеричных символов, разделенных двоеточиями, тире или пробелами (например, 00:1A:2B:3C:4D:5E).

**Компоненты:**

- Организационно-уникальный идентификатор (OUI): первые шесть символов (3 байта) идентифицируют производителя сетевой карты.
- Идентификатор устройства: оставшиеся шесть символов (3 байта) уникально идентифицируют конкретное устройство в диапазоне производителя.

**Уникальность:**
MAC-адреса должны быть уникальными для каждой сетевой карты, что гарантирует возможность различения устройств в сети.

**Сравнение с IP-адресом:**
Хотя оба адреса являются сетевыми, MAC-адреса основаны на оборудовании и остаются постоянными, тогда как IP-адреса являются логическими адресами, назначаемыми сетями, и могут меняться.

**Поиск MAC-адреса:**
Вы можете узнать MAC-адрес вашего устройства, используя специальные команды операционной системы или получив доступ к сетевым настройкам в интерфейсе устройства.

## Шестнадцатеричная и двоичная системы исчисления

<p align="left">
<img src="./images/binary-hexadecimal.png">
</p>

**Двоичная и шестнадцатеричная системы счисления** – это два способа представления чисел, которые широко используются в вычислительной технике. Двоичная система использует только два символа (0 и 1) и является основой для работы компьютеров. Шестнадцатеричная система использует 16 символов (0-9 и A-F) и часто используется для представления двоичных данных более компактным образом.

**Двоичная система счисления (основание 2):**

- Использует только цифры 0 и 1.
- Каждая позиция в числе представляет степень двойки (например, 10112 = 123 + 022 + 121 + 120 = 8 + 0 + 2 + 1 = 1110).
- Широко используется в компьютерах и цифровой электронике, так как легко реализуется на логических элементах.

**Шестнадцатеричная система счисления (основание 16):**

- Использует цифры 0-9 и буквы A-F (где A=10, B=11, C=12, D=13, E=14, F=15).
- Представляет собой удобный способ компактного представления больших двоичных чисел, поскольку каждая шестнадцатеричная цифра соответствует четырем двоичным цифрам (тетраде).
- Например, 11112 = F16.

Основные отличия:

**Количество цифр:**
Двоичная система использует 2 цифры, шестнадцатеричная - 16.

**Компактность представления:**
Шестнадцатеричная система позволяет более компактно представлять большие двоичные числа, так как каждая шестнадцатеричная цифра соответствует 4 двоичным.

**Применение:**
Двоичная система является основой для работы компьютеров, а шестнадцатеричная часто используется для представления и работы с двоичными данными, например, в программировании и работе с памятью.

Перевод чисел:

**Из двоичной в шестнадцатеричную:**
Разбиваем двоичное число на тетрады (группы по 4 цифры) начиная с конца, и заменяем каждую тетраду соответствующей шестнадцатеричной цифрой.

**Из шестнадцатеричной в двоичную:**
Каждую шестнадцатеричную цифру заменяем ее эквивалентной тетрадой в двоичной системе.

## Структура MAC-адреса

<p align="left">
<img src="./images/mac-address-structure.png">
</p>

**MAC-адрес**, или адрес управления доступом к среде, — это уникальный идентификатор, назначаемый сетевым интерфейсам для связи в сегменте сети. Это **48-битное** значение, обычно представленное в виде шести групп из двух шестнадцатеричных цифр, разделенных двоеточиями, дефисами или точками.
Это **48-битное** адресное пространство содержит потенциально **248 (более 281 триллиона) возможных MAC-адресов**. **IEEE** управляет распределением MAC-адресов, изначально известных как **MAC-48**, а теперь называемых идентификаторами **EUI-48**.

## Условные обозначения MAC-адреса

<p align="left">
<img src="./images/mac-address-notation.png">
</p>

# Характеристики сети

## Пропускная способность

**Пропускная способность** - это максимальный объем данных, который может быть передан через канал связи (например, интернет) или обработан системой (например, центрифугой) за единицу времени. Обычно измеряется в битах в секунду (бит/с) и ее кратных единицах, таких как килобиты в секунду (Кбит/с) или мегабиты в секунду (Мбит/с).

В контексте сети, пропускная способность (bandwidth) определяет, сколько данных может быть передано по каналу связи в определенный момент времени. Высокая пропускная способность не гарантирует высокую скорость, но она является важным фактором, определяющим максимальную скорость передачи данных.

- **Bandwidth**
- **Throughput**
- **Latency**
- **Jitter**

<p align="left">
<img src="./images/bandwidth.png">
</p>

## Полезная пропускная способность

**Полезная пропускная способность** — это часть общей пропускной способности канала связи, которая используется непосредственно для передачи полезных (информационных) данных, без учёта служебной информации, заголовков, подтверждений, повторных передач и т.п.

Это реальная скорость передачи нужных данных, которые доходят до получателя, без «накладных расходов» сети.

**Формула**

```
Полезная пропускная способность =
  (Полный объём полезных данных) / (Общее время передачи)
```

или

```
Полезная пропускная способность =
  Общая пропускная способность × (Доля полезной информации в потоке)

```

**Пример:**

- Пропускная способность канала: 100 Мбит/с
- На заголовки, контроль ошибок и протокол уходит 30% данных
- Тогда полезная пропускная способность ≈ 70 Мбит/с

**Зачем это важно?**

- Для оценки эффективности канала связи
- При проектировании сетей, чтобы знать, насколько быстро реально передаётся информация
- Для настройки QoS, стриминга, онлайн-игр, VoIP и т.д.

## Измерение пропускной способности

**Измерение пропускной способности** — это процесс определения объёма данных, который система может передать или обработать за единицу времени. Обычно измеряется в битах в секунду (бит/с, Mbps, Gbps) или байтах в секунду (Bps, MBps), в зависимости от контекста.

Если вы загружаете файл объёмом 100 МБ за 10 секунд, то: **Пропускная способность = (100 × 8) / 10 = 80 Мбит/с**

## Задержка - Latency

**Задержка** в контексте компьютерных систем — это время, необходимое для выполнения определённой операции или передачи данных от одной точки к другой. Это ключевой параметр, влияющий на производительность систем, сетей, накопителей и других компонентов. Задержка измеряется в единицах времени (например, миллисекунды, микросекунды, наносекунды) и отражает, сколько времени проходит между запросом и его выполнением.

## Round-trip Time (RTT) или PING

**Round-trip Time (RTT)** (время кругового обхода) — это время, необходимое для отправки сетевого пакета от источника к получателю и получения ответа обратно. RTT измеряется в миллисекундах (мс) и является ключевым показателем задержки в сетевых соединениях, отражающим производительность и отзывчивость сети.

RTT не просто измеряет время путешествия пакета "туда и обратно". Оно включает в себя несколько компонентов:

1. **Время распространения (Propagation Delay):** Время, которое требуется сигналу, чтобы физически пройти по кабелям или беспроводной среде. Зависит от расстояния и скорости света в данной среде.
2. **Задержка обработки (Processing Delay):** Время, которое маршрутизаторы и другие сетевые устройства тратят на обработку пакета (чтение заголовков, принятие решений о маршрутизации).
3. **Задержка в очереди (Queuing Delay):** Время, которое пакет проводит в очередях на сетевых устройствах, ожидая своей очереди для передачи. Это сильно зависит от загрузки сети.
4. **Задержка передачи (Transmission Delay):** Время, необходимое для передачи всех битов пакета в сеть (зависит от размера пакета и пропускной способности канала).
5. **Время обработки на стороне получателя:** Время, необходимое получателю для обработки входящего пакета и генерации ответного.

Самый распространенный инструмент для измерения RTT — это утилита ping. Она отправляет ICMP-пакеты эхо-запроса на удаленный хост и измеряет время, за которое приходит эхо-ответ.

**Пример вывода ping:**

```
ping google.com

Pinging google.com [142.250.185.78] with 32 bytes of data:
Reply from 142.250.185.78: bytes=32 time=15ms TTL=117
Reply from 142.250.185.78: bytes=32 time=16ms TTL=117
Reply from 142.250.185.78: bytes=32 time=15ms TTL=117
Reply from 142.250.185.78: bytes=32 time=16ms TTL=117

Ping statistics for 142.250.185.78:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 15ms, Maximum = 16ms, Average = 15ms
```

В данном примере RTT составляет в среднем 15-16 мс. Чем ниже это значение, тем лучше.

## Джиттер - Jitter

**Джиттер** — это вариация (колебание) задержки (latency) пакетов в сетевом потоке данных. Проще говоря, это неравномерность во времени прибытия пакетов данных.

Если пакеты приходят с разной задержкой (например: 20 мс, 25 мс, 40 мс), то это — джиттер.

Представьте, что вы отправляете ряд пакетов по сети, и в идеальном мире они должны приходить с одинаковым интервалом. Однако из-за джиттера некоторые пакеты могут приходить раньше ожидаемого, а другие — позже.

**Что это означает на практике:**

Если пакеты должны приходить каждые 20 мс, то при наличии джиттера они могут приходить с интервалами 18 мс, затем 25 мс, затем 21 мс и так далее. Это неравномерное прибытие и есть джиттер.

**Причины возникновения джиттера:**

**Джиттер может быть вызван различными факторами в сети:**

1. **Перегрузка сети (Network Congestion):** Когда сетевые устройства (маршрутизаторы, коммутаторы) перегружены трафиком, пакеты могут задерживаться в очередях. Разная загрузка приводит к тому, что задержка в очереди для разных пакетов будет неодинаковой.
2. **Изменение маршрутов (Route Changes):** Если пакеты одного и того же потока данных проходят по разным маршрутам в сети, они могут сталкиваться с разной задержкой и приходить в разное время.
3. **Неравномерная обработка пакетов:** Разные сетевые устройства могут обрабатывать пакеты с разной скоростью в зависимости от их загрузки, приоритетов или используемых алгоритмов.
4. **Беспроводные соединения:** Wi-Fi и другие беспроводные технологии более подвержены помехам и колебаниям сигнала, что может увеличивать джиттер.
5. **Особенности оборудования:** Некоторые сетевые устройства могут иметь неравномерную внутреннюю обработку пакетов.

**Влияние джиттера:**

Джиттер особенно критичен для приложений реального времени, где важна равномерность потока данных. Наиболее заметное влияние он оказывает на:

1. **Голосовая связь по IP (VoIP):** Высокий джиттер приводит к "искажениям" голоса, "заиканиям", пропаданиям слов, эхо и задержкам. Принимающее устройство пытается сгладить джиттер, используя джиттер-буфер, но слишком большой джиттер может привести к переполнению или опустошению буфера, что проявляется в слышимых проблемах.
2. **Видеоконференции и видеостриминг:** Аналогично VoIP, джиттер вызывает "замерзания" изображения, рассыпание на пиксели, рассинхронизацию звука и видео.
3. **Онлайн-игры:** Хотя больше страдают от высокой общей задержки (RTT), джиттер также может способствовать "лагам" и нестабильному игровому процессу.
4. **Промышленные системы управления (SCADA, IoT):** В системах, где требуется точная синхронизация и своевременная доставка данных от датчиков и контроллеров, джиттер может привести к серьезным сбоям и неточностям.

**Управление джиттером (Jitter Buffering):**

Для компенсации джиттера используются **джиттер-буферы (jitter buffers)**. Это небольшие буферы памяти на стороне получателя, которые временно хранят входящие пакеты. Цель буфера — собрать достаточно пакетов, упорядочить их и затем выдавать их приложению с равномерным интервалом.

- **Малый буфер:** Эффективно сокращает общую задержку, но не может справиться с большим джиттером (пакеты могут приходить слишком поздно для буфера и быть отброшены).
- **Большой буфер:** Лучше справляется с джиттером, но увеличивает общую задержку для потока данных.

Таким образом, джиттер является важным показателем качества сетевого соединения, особенно для чувствительных к задержкам приложений, и его минимизация или эффективная компенсация критически важны для обеспечения хорошего пользовательского опыта.

# Коммутаторы и канальный уровень

## Сетевой коммутатор

<p align="left">
<img src="./images/network-switch.png">
</p>

## Принцип работы сетевого коммутатора

<p align="left">
<img src="./images/network-switch-2.png">
</p>

## Заголовок кадра Ethernet

<p align="left">
<img src="./images/network-switch-3.png">
</p>

Example:
**Data - 46 Bytes**
(min data size if VLAN Tag is absent)
**+**
**Overhead - 26 Bytes**
**=**
**72 Bytes**

**Throughtput = 46/72 = 64%**

Note: Preamble and SFD are not counted here

## Типы передачи данных

<p align="left">
<img src="./images/type-comm.png">
</p>

## Типы MAC-адресов

<p align="left">
<img src="./images/type-mac-address.png">
</p>

## Полный дуплекс против полудуплекса

<p align="left">
<img src="./images/duplex.png">
</p>

## Коллизия - Collision

<p align="left">
<img src="./images/collision.png">
</p>

## Механизмы обработки коллизий - Handling Collisions

<p align="left">
<img src="./images/handling-collisions.png">
</p>

## Домены коллизий - Collision Domains

<p align="left">
<img src="./images/collision-domains.png">
</p>

## Согласование скорости и дуплекса - Speed and duplex negotiation

<p align="left">
<img src="./images/speed-duplex-negotiation.png">
</p>

## Анализ заголовков unicast кадров Ethernet - Analysis of unicast Ethernet frame headers

<p align="left">
<img src="./images/unicast.png">
</p>

**Examples EtherType**

- **IPv4: 0x0800**
- **IPv6: 0x86DD**
- **ARP: 0x0806**
- **VLAN Tag: 0x8100**
- **MPLS: 0x8847**

# Маршрутизаторы и сетевой уровень - Routers and Network Layer

## Недостатки коммутируемой сети - Disadvantages of a switched network

<p align="left">
<img src="./images/disadvantages.png">
</p>

<p align="left">
<img src="./images/diffirent-networks.png">
</p>

## IP-адрес - IP address

<p align="left">
<img src="./images/ip-address.png">
</p>

## IPv4 против IPv6 IP-адресов - IPv4 vs IPv6

<p align="left">
<img src="./images/ipv4-vs-ipv6.png">
</p>

## Формат IPv4-адреса - IPv4 Address Format

<p align="left">
<img src="./images/ipv4-format.png">
</p>

## MAC-адрес против IP-адреса - MAC Address vs IP Address

<p align="left">
<img src="./images/mac-vs-ip.png">
</p>

## Типы IP-адресов - Types of IP Addresses

<p align="left">
<img src="./images/types-ip.png">
</p>

## Маршрутизатор - Router

<p align="left">
<img src="./images/router.png">
</p>

## LAN vs WAN

LAN (Local Area Network) и WAN (Wide Area Network) — это два основных типа компьютерных сетей, которые различаются по своему масштабу, скорости и технологии подключения.

WAN (Wide Area Network) — это сеть, которая охватывает большие географические расстояния, соединяя компьютеры и устройства в разных городах, странах или даже континентах. WAN обычно использует различные технологии передачи данных, такие как оптоволокно, спутниковая связь и другие.

## Как маршрутизаторы соединяют локальные сети

<p align="left">
<img src="./images/routers.png">
</p>

# IP-адресация и IP-пакеты - IP Addressing and IP Packets

## Классы IP-адресов - IP Address Classes

<p align="left">
<img src="./images/ip-address-classes.png">
</p>

## Локальный хост localhost

<p align="left">
<img src="./images/localhost.png">
</p>

## Частные и публичные IP-адреса - Private and Public IP Addresses

<p align="left">
<img src="./images/private-public-ip.png">
</p>

## Что такое сеть - What is a Network

<p align="left"></p>
<img src="./images/network.png">
</p>

## Диапазоны частных IP-адресов - Private IP Address Ranges

<p align="left">
<img src="./images/private-ip-ranges.png">
</p>

## Диапазоны публичных IP-адресов - Public IP Address Ranges

<p align="left">
<img src="./images/public-ip-ranges.png">
</p>

## Статические IP-адреса - Static IP address

<p align="left">
<img src="./images/static-ip.png">
</p>

## Динамические IP-адреса - Dynamic IP address

<p align="left">
<img src="./images/dynamic-ip.png">
</p>

## Заголовок IPv4 - IPv4 Header

<p align="left">
<img src="./images/ipv4-header.png">
</p>

# Сети - Networks

**Examples:**

<p align="left">
<img src="./images/network-1.png">
</p>

<p align="left">
<img src="./images/network-2.png">
</p>

<p align="left">
<img src="./images/network-3.png">
</p>

# Двоичная математика - Binary Math

## Преобразование из двоичной системы в десятичную - Binary to Decimal Conversion

<p align="left">
<img src="./images/binary-to-decimal.png">
</p>

## Преобразование из десятичной системы в двоичную - Decimal to Binary Conversion

<p align="left">
<img src="./images/decimal-to-binary.png">
</p>

## Бинарные операторы И и ИЛИ - Binary AND and OR Operators

<p align="left">
<img src="./images/binary-and-operator.png">
</p>

<p align="left">
<img src="./images/binary-or-operator.png">
</p>

# Сетевые маски и подсети - Subnetting and Network Masks

## Сетевая маска - Network Mask

<p align="left">
<img src="./images/network-mask.png">
</p>

<p align="left">
<img src="./images/network-mask-1.png">
</p>

**Examples:**

<p align="left">
<img src="./images/network-mask-2.png">
</p>

<p align="left">
<img src="./images/network-mask-3.png">
</p>

<p align="left">
<img src="./images/network-mask-4.png">
</p>

<p align="left">
<img src="./images/network-host-1.png">
</p>

<p align="left">
<img src="./images/network-host-2.png">
</p>

<p align="left">
<img src="./images/network-host-3.png">
</p>

## Подсети - Subnetting

**There are classes of IP addresses -A, B and C with default masks /8, /16 and /24 correspondingly.**

**Quantity of the available for assignment to the devices IP addresses in each network is calculated using formula**
**2^(host bits qty) - 2**

**Ipv4 addressing space is limited, especially space of the public Ipv4 addresses**

**Subnetting allows to use other network masks, not just default /8, /16 or /24**

**Subnetting decreases quantity of the host IP addresses in the networks**

**Optimize usage of the public Ipv4 addresses**

<p align="left">
<img src="./images/subnetting.png">
</p>

<p align="left">
<img src="./images/subnetting-1.png">
</p>

<p align="left">
<img src="./images/subnetting-2.png">
</p>

Subnetting Example:

<p align="left">
<img src="./images/subnetting-3.png">
</p>

<p align="left">
<img src="./images/subnetting-4.png">
</p>

## Вложенная подсеть - Nested Subnetting

<p align="left">
<img src="./images/subnetting-5.png">
</p>

# ARP и ICMP

## Шлюз по умолчанию - Default Gateway

<p align="left">
<img src="./images/default-gateway.png">
</p>

## ARP (Address Resolution Protocol)

<p align="left">
<img src="./images/arp.png">
</p>

## ARP-запрос и ответ - ARP Request and Response

<p align="left">
<img src="./images/arp-request-response-1.png">
</p>

<p align="left">
<img src="./images/arp-request-response-2.png">
</p>

## Как отправляются пакеты на удаленные узлы - How packets are sent to remote networks

<p align="left">
<img src="./images/arp-sent-packet.png">
</p>

## Протокол ICMP - ICMP (Internet Control Message Protocol)

<p align="left">
<img src="./images/icmp.png">
</p>

# Транспортный уровень — TCP и UDP - Transport Layer - TCP and UDP

## Задачи транспортного уровня - Tasks of the Transport Layer

<p align="left">
<img src="./images/transport-layer.png">
</p>

## Клиент и сервер - Client and Server

<p align="left">
<img src="./images/client-server.png">
</p>

## Соединение транспортного уровня - Transport Layer Connection

<p align="left">
<img src="./images/transport-layer-connection.png">
</p>

## Порты приложений и протоколов - Application and Protocol Ports

<p align="left">
<img src="./images/application-ports.png">
</p>

## Мультиплексирование и де-мультиплексирование - Multiplexing and Demultiplexing

<p align="left">
<img src="./images/multiplexing-demultiplexing.png">
</p>

## Диапазоны портов - Ports Ranges

<p align="left">
<img src="./images/ports-ranges.png">
</p>

## Сетевой сокет - Network Socket

<p align="left">
<img src="./images/network-socket.png">
</p>

**Network Socket Examples**

<p align="left">
<img src="./images/network-socket-examples.png">
</p>

## Множественные сокеты - Multiple Sockets

<p align="left">
<img src="./images/multiple-sockets.png">
</p>

## Одни и те же порты в разных приложениях - Same Ports in Different Applications

<p align="left">
<img src="./images/same-port.png">
</p>

## TCP против UDP - TCP vs UDP

<p align="left" width="300">
<img src="./images/tcp-vs-udp.jpg">
</p>

## Установление TCP-соединения - Transmission Control Protocol (TCP) Connection Establishment

<p align="left">
<img src="./images/tcp-connection.png">
</p>

## Заголовок TCP - TCP Header

<p align="left">
<img src="./images/tcp-header.png">
</p>

## Протокол UDP - User Datagram Protocol (UDP)

<p align="left">
<img src="./images/udp.png">
</p>

<p align="left">
<img src="./images/udp-header.png">
</p>

# Маршрутизация - Routing

## Маршрутизаторы - Routers

<p align="left">
<img src="./images/routing.png">
</p>

## Таблица маршрутизации - Routing table

<p align="left">
<img src="./images/routing-table.png">
</p>

Destination IP address **10.2.10.5** will match first route **10.2.10.0/24**
Destination IP address **10.2.7.1** will **SKIP** first route **10.2.10.0/24** **BUT** will match **10.2.0.0/20** route

## Маршрутизация между двумя сетями - Routing Between Two Networks

<p align="left">
<img src="./images/routing-between-networks.png">
</p>

<p align="left">
<img src="./images/routing-between-networks-1.png">
</p>

1. **PC1** finds out that **PC2** is located in **different** network (by applying network mask to the own and foreign IP addresses)
2. On network layer **PC1** adds IP header with source IP **172.16.3.7**, destination IP **192.168.1.15** and TTL 64
3. **PC1** checks local ARP table to find MAC address of the **default gateway** (if absent - send ARP Request)
4. On Data Link layer **PC1** adds Ethernet header (source **a6:37:2b:5f:be:47**, dest **31:a1:2c:51:3a:1b**) and sends Ethernet frame
5. **Switch1** receives Ethernet frame from **PC1** on **Fa0/3** interface, verifies **FCS**, checks MAC address table to find where destination MAC is located and finds it behind **Gi1/1**
6. **Switch1** adds MAC address of **PC1** to the MAC address table to and maps it to the **Fa0/3** (if MAC of **PC1** not yet in the table)
7. **Switch1** sends Ethernet frame to **Gi1/1**
8. **Router** receives Ethernet frame on its **Gi0/0**, on Data Link layer verifies **FCS**, checks **destination MAC** address field and sees that MAC matches with MAC of it's **Gi0/0** interface
9. **Router** removes Ethernet header and examines Network layer **IPv4** header, checks header checksum and TTL
10. **Router** sees that destination IP address in the IP packet **192.168.1.15** doesn't match with any of its own IP addresses. That's why router must send it further
11. **Router** checks routing table to find matching route for the **192.168.1.15** IP address. For **each route** it applies network mask to the destination IP address and compares result to the prefix
12. **Router** finds matching route **192.168.1.0/24** and sees that it is directly connected. It means destinaton host is directly attached to the router
13. **Router** sends ARP request for MAC address of the **192.168.1.15** IP address (if MAC of **PC2** is absent in the ARP cache on the **Router**). **PC2** responds to this ARP request with its MAC address **20:af:41:26:56:ab**
14. On the Network layer **Router** decrements **TTL** by one (it becomes 63 = 64 - 1) and calculates new IPv4 header **checksum**
15. On the Data Link layer **Router** adds new Ethernet header and calculates FCS (source **18:a1:11:21:a1:ab**, dest **20:af:41:26:56:ab**)
16. **Router** sends Ethernet frame via **Gi0/1** interface (according to the route in the routing table)
17. **Switch2** receives Ethernet frame from **Router** on **Gi1/2** interface, verifies **FCS**, checks MAC address table to find where destination MAC is located and finds it behind **Fa0/5**
18. **Switch2** adds MAC address of **Router's Gi0/1** interface to the MAC address table to and maps it to the **Gi1/2** (if MAC of **Router** not yet in the table)
19. **Switch2** sends Ethernet frame to **Fa0/5**
20. **PC2** receives frame and on the Data Link layer verifies **FCS**, compares destination MAC address to its own MAC, finds that they are **equal**. Removes Ethernet header
21. On the Network layer **PC2** checks header checksum and TTL, compares destination IP to it's own IP. They are equal. Strips IPv4 header and sends segment to the **transport** layer for further processing

## Несколько маршрутизаторов - Multiple Routers

<p align="left">
<img src="./images/multiple-routers.png">
</p>

## Статические и динамические маршруты - Static and Dynamic Routes

<p align="left">
<img src="./images/static-dynamic-routes.png">
</p>

## Маршрут по умолчанию - Default Route

<p align="left">
<img src="./images/default-route.png">
</p>

## Как применяется маршрут по умолчанию - How Default Route is Applied

<p align="left">
<img src="./images/default-route-match.png">
</p>
