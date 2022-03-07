const hexNumber = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
      const color = document.querySelector(".color");
      
      function changeColor(){
        let hexColor = "#";
        for(let i = 0; i<6; i++) {
          hexColor += hexNumber[getRandomNumber()];
        }
        color.textContent = hexColor;
        const container =  document.querySelector(".container");
        container.style.backgroundColor = hexColor;
      }
      const getRandomNumber = () => {
        return Math.floor(Math.random() * hexNumber.length);
      }