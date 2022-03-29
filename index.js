/*Mostrar todos los numeros impares que hay entre dos numeros.
impares (2,10)  //3,5,7,9
*/
let resultado = []

function impares(num1,num2){
    for( i = num1 ; i<= num2; i++){
        if(i%2 == 1){
            resultado.push(i)
        }
    }

    console.log(resultado)
}
impares(2,10)
