# Sports
Frontend UI tervek a Sports rendszerhez.

## Felépítés
Mivel UI demoról beszélünk jelenleg, ez egy teljesen statikus HTML oldal halmaz.

A HTML fájlok 2 fő részből állnak, a baloldali `<div class="sidebar">` és a fő content `<div class="main-content">` részből.

A `<body>` elemen található egy `sitetheme` class, mely a `sports.js`-ben található `function changeTheme(theme) {}` funkció működéséhez szükséges, mely a Sidebarból próbálható ki. Az oldal alap kinézete és felépítése úgy készült, hogy átlátszó legyen minden oldalon található elem containere, a sidebar, a `main-content`-be található elemek hátterei is, így ha egy semleges hátteret váltunk teljesen megváltozik az oldal színsémája, ez egy jó feature szerintem, valakinek a világosabb témák jönnek be, de én a sötét oldalon állok:)

Fájl felépítésileg oldalanként külön css fájlal dolgoztam, szerintem így könnyebb kezelni és átláthatóbb.

### Sidebar
Négy részből áll:
- logo-container
    - Az oldal logóját tartalmazza
- user-container
    - jelenlegi bejelentkezett user profilképét, nevét, role-ját tartalmazza
- menu-container
    - a menü elemeket tartalmazza, `<li>` felsorolásban, mely egyszerűen bővíthető
- theme-selector
    - az oldal téma választója, melynek a működése az Sports.js fájlban található

### Main content
Változó mennyiségű részből áll. Felépítésileg a benne lévő elemeket külön div-ekbe rakom, és azoknak adok egyedi class nevet mint pl: `xy-container` És ebbe kerül az aktuális dolog tartalma.