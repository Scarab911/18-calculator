Projektas "Skaičiuotuvas":
Tikslai / pasiektinas rezultatas:

1. npm (live-server)
2. plius/minus dizainas (fiksuoto pločio ir ekrano centre) (žr. Sign-up)
3. su JS sugeneruoti HTML:

- minimum: klavietūra;
- tobulas: visas objektas

4. spaudžiant su pele ant mygtukų:

- jei skaičius ar operatorius, simbolis yra įtraukiamas/parašomas ekrane
- jei C, tai išvalo ekraną
- jei < (backspace), tai nutrina vieną simbolį (iš galo)
- visi kiti nedaro nieko

```html
<div class="main-container">
  <div class="screen">
    <div class="equation">1000/52*3+89</div>
    <div class="answer">300</div>
  </div>
  <div id="keyboard" class="keyboard">
    <div class="button skaiciai ">C</div>
    <div class="button skaiciai">±</div>
    <div class="button skaiciai">%</div>
    <div class="button">+</div>
    <div class="button skaiciai">1</div>
    <div class="button skaiciai">2</div>
    <div class="button skaiciai">3</div>
    <div class="button">-</div>
    <div class="button skaiciai">4</div>
    <div class="button skaiciai">5</div>
    <div class="button skaiciai">6</div>
    <div class="button">X</div>
    <div class="button skaiciai">7</div>
    <div class="button skaiciai">8</div>
    <div class="button skaiciai">9</div>
    <div class="button">/</div>
    <div class="button skaiciai">0</div>
    <div class="button skaiciai">.</div>
    <div class="button ligybe">=</div>
  </div>
</div>
```
