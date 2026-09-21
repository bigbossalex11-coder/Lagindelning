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

Vite + React
Vite serverar sidan på localhost:5173, översätter JSX till vanlig JavaScript
och laddar om när man sparar. Snabbt att komma igång med, och det kursen använder.

State i App
Spelarlistan ligger i App eftersom tre komponenter behöver samma data.
PlayerList ritar den, PlayerRow ändrar rank, AddPlayerForm lägger till.
Låg den i en av dem skulle de andra inte komma åt den.

Nya kopior i stället för att ändra data
React jämför med föregående värde. Ändras den befintliga listan är det
fortfarande samma lista, och inget ritas om. Därför skapas alltid en ny kopia.

Ett gemensamt error-state
Alla fyra anrop skriver till samma felruta. Användaren behöver ett ställe att
titta på, inte ett meddelande per anrop. Rutan visas bara när det finns ett fel.

Rank uppdateras direkt i gränssnittet
Kortet byter färg utan att vänta på serverns svar. Snabbare att använda, men
gränssnittet kan visa en ändring som inte sparades om anropet misslyckas.
Medveten avvägning i det här projektets storlek.

CSS grid med auto-fill och minmax
Antalet kolumner anpassas efter skärmbredden utan media queries.
En träningsgrupp kan vara 25 spelare, så korten behöver vara små.

