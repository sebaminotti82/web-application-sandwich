
/*
PASSO UNO CREO UNA LISTA DI INGREDIENTI TRAMITE UN ARRAY
*/

let ingredients = [
    ['fassona','3'],['pollo','3'],['angus','5'],['salamella','5'],
    ['pomodoro','1'],['insalata','1'],['cipolla','1'],['peperoni','1'],
    ['crauti','1'],
    ['bacon','2'],['senape','1'],['maionese','1'],['ketchup','1'],
    ['agrodolce','1'],['cheddar','1.5'],['provolone','1.5'],['eddamer','1.5'],
    ['mozzarella','1.5'],

];

let sconti=[
    'c732907','c125476','c0982','c334455','c123456','c098765'
]
  

for(let i = 0; i < ingredients.length; i++){
  
    let container = document.querySelector('#ingredients')

    container.insertAdjacentHTML('beforeend',
    
    `
    <div class="boxIngredients">
       <label for="${ingredients[i][0]}">${ingredients[i][0]}</label>
       <input type="checkbox" name="${ingredients[i][0]}"  id="${ingredients[i][0]}" data-price="${ingredients[i][1]}">
        <span id="prezzo">€ ${ingredients[i][1]}</span>
    <div>
    `
    )
   
    
}

let bottone= document.querySelector('#calcola')

bottone.addEventListener('click',function(){

        bottone.style.background="orange";
        document.querySelector('#calcola > #text-button').style.color='black'
        let somma = null
        let check = document.querySelectorAll("input[type='checkbox']")
        paninoBase = 2

      

        for(let i = 0; i < check.length; i++){

            let ingrediente = check[i]
            i
            if(ingrediente.checked){

                somma += Number(ingrediente.getAttribute('data-price'))

                

            }
        }
      let totalePanino = paninoBase+somma 
        
        document.querySelector('#total').innerHTML=`il costo del tuo panino è di ${totalePanino} € `
            let sconto = somma / 100 * 40
            console.log(sconto);
             let scontato 
        for(let i = 0; i < sconti.length; i++){

            let coupon = document.querySelector('#coupon').value

            if(sconti.includes(coupon)){
                 
                   scontato = true
                
            }

           
            
        }
         let paninoScontato = totalePanino - sconto

         paninoScontato = paninoScontato.toFixed(2)

        if( scontato == true){
            document.querySelector('#sub').innerHTML=`hai utilizzato un coupon ed il totale del tuo panino è di ${paninoScontato} €`
        } else if (scontato != true) {


            document.querySelector('#sub').innerHTML=`HAI UTILIZZATO UN COUPON NON VALIDO ! NON VERRA' APPLICATO ALCUNO SCONTO`
        }

       
})
