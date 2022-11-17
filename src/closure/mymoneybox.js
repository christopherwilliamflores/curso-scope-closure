// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
      saveCoins += coins;
      console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
  }
  
  const myMoneyBox = moneyBox();
  myMoneyBox(5);
  myMoneyBox(5);
  myMoneyBox(15);
  
  const moneyBoxAna = moneyBox();
  moneyBoxAna(10);
  moneyBoxAna(20);
  moneyBoxAna(5);


  // let saveCoins = 0;

  // function moneyBox(coins) {
  // saveCoins += coins;
  // console.log(`MoneyBox: $${saveCoins}`)
  // }

  
  // const myMoneyBoxGa = moneyBox;
  // myMoneyBoxGa(5);
  // myMoneyBoxGa(5);
  // myMoneyBoxGa(15);
  

  function hola(){
    return function saluda(nombre){
          console.log("Hola " + nombre)
      }
  } 
  
  console.log(hola) // ⇒ Esta es una función
  
  //
  let saludador = hola() //funcion saludar por tener ()
  console.log(saludador)