(function () {
  var info = document.querySelectorAll('.thumbInfo img'),
  modelName = document.querySelector('.modelName'),
  priceInfo = document.querySelector('.priceInfo'),
  modelDetails = document.querySelector('modelDetails');

  function changeElements() {

    let carIndex = carData[this.id];

  }

  info.forEach(function(car) {


      car.addEventListener('click',changeElements, false);


    });
    modelName.firstChild.nodeValue = carIndex.modelT;
    modelDetails.firstChild.nodeValue = carIndex.text;
    appliedClass = this.id;

    modelName.classList.add(this.id);
//modelName.classList.add(this.id);

  })();
