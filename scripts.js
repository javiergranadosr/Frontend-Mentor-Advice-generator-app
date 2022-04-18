document.addEventListener("DOMContentLoaded", function () {
  const urlApi = "https://api.adviceslip.com/advice";
  const mainContainer = document.querySelector("main");

  const addElements = (data) => {
    let elements = "";
    if (Object.keys(data).length > 0) {
      const { id, advice } = data.slip;
      elements = `
        <div class="card">
            <div class="card__header">
                Advice #<span>${id}</span>
            </div>
            <div class="card__body" id="carBody">
                <p>${advice}</p>
            </div>
            <div class="card__footer__desktop">         
                <img src="./images/pattern-divider-desktop.svg" alt="DIVIDER DESKTOP">
            </div>
            <div class="card__footer__movil">
                <img src="./images/pattern-divider-mobile.svg" alt="DIVIDER MOVIL">
            </div>
            <div class="icon">
                <img  src="./images/icon-dice.svg" alt="ICON" onclick = "setAdvice()" >
            </div>
        </div>
      `;
    } else {
      elements = `
        <div class="card">
            Sin resultados...
        </div>
      `;
    }

    mainContainer.innerHTML = elements;
  };

  const getAdvice = async () => {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  };

  setAdvice = async () => {
    const data = await getAdvice();
    addElements(data);
  };

  setAdvice();
});
