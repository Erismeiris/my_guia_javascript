


const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]


console.log(dias.length)


for (let index = 0; index < dias.length; index++) {

    let day = new Date().getDay()
    const element = dias[index];
    if(  index === day){
        console.log( " Today is ", element)
    }
     
}
const dia = new Date().getDay()
const today = () => console.log(dias[dia])

today()