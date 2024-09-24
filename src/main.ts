import './style.css'

const jegyek: number[] = []

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('gomb')!.addEventListener('click', () => {
    const Inputjegy = document.getElementById('erdemjegy') as HTMLInputElement;
    const jegy = parseInt(Inputjegy.value)
    if (jegy > 0 && jegy < 6) {
      jegyek.push(jegy)
      document.getElementById("kiiras")!.textContent = jegyek.toString();
    }
    else {
      alert("Nem megfelelő szám")
    }
  })

  document.getElementById("kereses")!.addEventListener('input', () => {
    const keresettt = document.getElementById("keresett")
    const Inputkeres = document.getElementById("kereses") as HTMLInputElement;
    const keres = parseInt(Inputkeres.value);
    const asd = jegyek.filter(j => j.toString().includes(keres.toString()));
    keresettt!.textContent = asd!.toString();
  })
})  