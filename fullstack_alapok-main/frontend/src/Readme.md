# Felhasználókezelő Webalkalmazás

Ez a projekt egy egyszerű webalkalmazás, amely lehetővé teszi felhasználók kezelését. Az alkalmazás React keretrendszerrel készült, és tartalmaz CRUD (Create, Read, Update, Delete) funkciókat.

## Főbb Funkciók
- **Felhasználók listázása**: Megjeleníti az összes felhasználót egy táblázatban.
- **Felhasználó hozzáadása**: Új felhasználót lehet hozzáadni egy külön oldalon.
- **Felhasználó szerkesztése**: Meglévő felhasználók adatait lehet módosítani.
- **Felhasználó törlése**: Felhasználók törlése a rendszerből.

---

## Fájlok és Működésük

### 1. `App.jsx`
Ez a fő fájl, amely az egész alkalmazást vezérli. Itt található a navigációs menü (navbar) és az oldalak közötti váltás. A főbb funkciók:
- **Adatok betöltése**: Az alkalmazás indulásakor betölti a felhasználók adatait a szerverről.
- **CRUD műveletek**: Kezeli a felhasználók hozzáadását, szerkesztését és törlését.
- **Router**: A React Router segítségével lehet váltani az oldalak között (pl. listaoldal és hozzáadási oldal).

### 2. `UserTable.jsx`
Ez a komponens felelős a felhasználók táblázatos megjelenítéséért. Itt látható az összes felhasználó, és innen lehet törölni vagy szerkeszteni őket.
- **Props**:
  - `users`: A felhasználók listája.
  - `onDelete`: A törléshez szükséges függvény.
  - `onUpdate`: A szerkesztéshez szükséges függvény.

### 3. `UserForm.jsx`
Ez a komponens egy űrlapot tartalmaz, amelyen keresztül új felhasználót lehet hozzáadni. Az űrlap egy külön oldalon található.
- **Props**:
  - `onAdd`: A felhasználó hozzáadásához szükséges függvény.
- **Működés**:
  - Az űrlap kitöltése után a "Hozzáadás" gombra kattintva elküldi az adatokat a szervernek.

### 4. `api.js`
Ez a fájl tartalmazza az összes szerverrel való kommunikációt. Az alábbi funkciókat valósítja meg:
- **`getUsers`**: Lekéri az összes felhasználót.
- **`createUser`**: Új felhasználót hoz létre.
- **`updateUser`**: Meglévő felhasználót frissít.
- **`deleteUser`**: Töröl egy felhasználót.

### 5. `Navbar.jsx`
Ez a komponens tartalmazza a navigációs menüt (navbar), amely lehetővé teszi az oldalak közötti váltást.
- **Működés**:
  - A menüben található linkek segítségével válthatsz a "Felhasználók Listája" és a "Felhasználó Hozzáadása" oldalak között.

### 6. `App.css`
Ez a fájl tartalmazza az alkalmazás stílusait. Például:
- A navigációs menü (navbar) középre igazítása.
- A táblázat és az űrlap megjelenésének beállítása.

---

## Hogyan Használható az Alkalmazás?

1. **Indítás**:
   - Telepítsd a szükséges csomagokat: `npm install`
   - Indítsd el az alkalmazást: `npm start`

2. **Navigáció**:
   - A navigációs menüben választhatsz a "Felhasználók Listája" és a "Felhasználó Hozzáadása" között.

3. **Funkciók**:
   - **Felhasználók Listája**: Itt láthatod az összes felhasználót, és törölheted vagy szerkesztheted őket.
   - **Felhasználó Hozzáadása**: Itt adhatsz hozzá új felhasználót.

---

## Követelmények
- **Node.js**: Az alkalmazás futtatásához szükséges.
- **React**: A felhasználói felület megjelenítéséhez.
- **React Router**: Az oldalak közötti navigációhoz.

---


