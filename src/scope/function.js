function greeting() {
    var userName = 'Ana';
    console.log(userName);
    
    if(userName === 'Ana'){
      console.log( `Hello ${userName}!`)
       }
    }
    
    greeting();
    console.log(userName);// no esta asignada como global por eso no se muestra