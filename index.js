const boton1 = document.getElementById('boton1')
const titulo = document.getElementById('color')
const contenedor1 = document.getElementById('contenedor1')
const aleatorrio =(numero)=>{
    return Math.floor(Math.random(numero) * (numero + 1));
}
const generarColorHexa = ()=>{
    let digitos = '0123456789ABCDEF'
    let coloHexa = '#'
    for(let i = 0;i<6 ;i++){
        let indiceAleatorio = Math.floor(Math.random() * 16)
        coloHexa += digitos[indiceAleatorio] 
    }
    return coloHexa
}
boton1.addEventListener('click',()=>{
    /*let color = `rgb(${aleatorrio(255)},${aleatorrio(255)},${aleatorrio(255)})`
    document.body.style.backgroundColor = color
    titulo.innerText=color
    contenedor1.style.backgroundColor = color
    boton1.style.backgroundColor = color*/
    let colorAleatorio = generarColorHexa();
    document.body.style.backgroundColor = colorAleatorio
    titulo.textContent = colorAleatorio
})