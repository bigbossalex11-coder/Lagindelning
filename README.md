# Lagindelning

Ett verktyg för att hålla koll på spelare i ett lag och ge dem en nivå (grön/gul/röd). Tanken är att senare kunna dela in lag utifrån nivå.

## Backend krävs

Appen hämtar data från [Lagindelning-api](https://github.com/bigbossalex11-coder/Lagindelning-api). Starta det först enligt dess README, sedan webappen nedan.

## Köra lokalt

```
git clone https://github.com/bigbossalex11-coder/Lagindelning.git
cd Lagindelning/client
npm install
npm run dev

```

Öppna adressen som terminalen visar: http://localhost:5173 I webläsaren

## Tekniska val

**Vite + React** – Vite är byggverktyget som serverar sidan på localhost:5173, översätter JSX till vanlig JavaScript som webbläsaren förstår, och laddar om direkt när man sparar. Valt för att det går snabbt att komma igång med och är vad kursen använder.

**State i App, props nedåt** – Spelarlistan ligger i App eftersom flera komponenter behöver samma data: PlayerList ritar den, PlayerRow ändrar rank och laddar upp filer, AddPlayerForm lägger till. Låg listan i en av dem skulle de andra inte komma åt den. Därför lyfts state till närmaste gemensamma förälder och skickas nedåt som props.

**Nya kopior i stället för att ändra data** – Vi ändrar aldrig i befintlig lista eller befintligt objekt, utan skapar en kopia med ändringen och skickar den till setPlayers. React jämför med föregående värde och ser att det är en ny lista, och ritar då om. Ändrar man i den gamla listan är det fortfarande samma lista och React upptäcker ingen skillnad.

**Ett gemensamt error-state** – Alla fyra API-anrop skriver till samma `error`-state och samma felruta. Användaren behöver ett ställe att titta på, inte ett felmeddelande per anrop. Rutan visas villkorat med `&&` så att det inte ligger ett tomt element på sidan när allt fungerar.

**Rank uppdateras direkt i gränssnittet** – När man klickar på en färgknapp byter kortet färg utan att vänta på serverns svar. Det gör appen snabb att använda, men innebär att gränssnittet kan visa en ändring som inte sparades om anropet misslyckas. Medvetet vald avvägning i det här projektets storlek.

- **CSS grid med auto-fill och minmax** – `repeat(auto-fill, minmax(140px, 1fr))` gör att antalet kolumner anpassas efter skärmbredden utan media queries. En träningsgrupp kan vara 25 spelare, så korten behöver vara små och packas tätt.
