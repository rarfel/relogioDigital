const base = document.querySelectorAll(".container")

let hour1 = [...base[0].childNodes]
let hour2 = [...base[1].childNodes]
let minute1 = [...base[2].childNodes]
let minute2 = [...base[3].childNodes]
let second1 = [...base[4].childNodes]
let second2 = [...base[5].childNodes]

let segundo1 = new Map()

segundo1.set(1,second1[1])
segundo1.set(2,second1[3])
segundo1.set(3,second1[5])
segundo1.set(4,second1[7])
segundo1.set(5,second1[9])
segundo1.set(6,second1[11])
segundo1.set(7,second1[13])

let segundo2 = new Map()

segundo2.set(1,second2[1])
segundo2.set(2,second2[3])
segundo2.set(3,second2[5])
segundo2.set(4,second2[7])
segundo2.set(5,second2[9])
segundo2.set(6,second2[11])
segundo2.set(7,second2[13])

let hora1 = new Map()

hora1.set(1,hour1[1])
hora1.set(2,hour1[3])
hora1.set(3,hour1[5])
hora1.set(4,hour1[7])
hora1.set(5,hour1[9])
hora1.set(6,hour1[11])
hora1.set(7,hour1[13])

let hora2 = new Map()

hora2.set(1,hour2[1])
hora2.set(2,hour2[3])
hora2.set(3,hour2[5])
hora2.set(4,hour2[7])
hora2.set(5,hour2[9])
hora2.set(6,hour2[11])
hora2.set(7,hour2[13])

let minuto1 = new Map()

minuto1.set(1,minute1[1])
minuto1.set(2,minute1[3])
minuto1.set(3,minute1[5])
minuto1.set(4,minute1[7])
minuto1.set(5,minute1[9])
minuto1.set(6,minute1[11])
minuto1.set(7,minute1[13])

let minuto2 = new Map()

minuto2.set(1,minute2[1])
minuto2.set(2,minute2[3])
minuto2.set(3,minute2[5])
minuto2.set(4,minute2[7])
minuto2.set(5,minute2[9])
minuto2.set(6,minute2[11])
minuto2.set(7,minute2[13])

setInterval(()=>{

    let data = new Date()
    let second = data.getSeconds().toString()
    let minute = data.getMinutes().toString()
    let hour = data.getHours().toString()

    medida(hora1 , hour.charAt(0))
    medida(hora2 , hour.charAt(1))

    medida(minuto1 , minute.charAt(0))
    medida(minuto2 , minute.charAt(1))

    medida(segundo1 , second.charAt(0))
    medida(segundo2 , second.charAt(1))
    console.log(segundo1);

},1000)

function medida(tempo, time){
    switch(time){
        case '1':
            tempo.get(1).dataset.pino = 'none'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'none'
            tempo.get(5).dataset.pino = 'none'
            tempo.get(6).dataset.pino = 'none'
            tempo.get(7).dataset.pino = 'none'
            break;
        case '2':
            tempo.get(1).dataset.pino = 'none'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'none'
            tempo.get(4).dataset.pino = 'on'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'on'
            tempo.get(7).dataset.pino = 'on'
            break;
        case '3':
            tempo.get(1).dataset.pino = 'none'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'none'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'on'
            tempo.get(7).dataset.pino = 'on'
            break;
        case '4':
            tempo.get(1).dataset.pino = 'on'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'none'
            tempo.get(5).dataset.pino = 'none'
            tempo.get(6).dataset.pino = 'on'
            tempo.get(7).dataset.pino = 'none'
            break;
        case '5':
            tempo.get(1).dataset.pino = 'on'
            tempo.get(2).dataset.pino = 'none'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'none'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'on'
            tempo.get(7).dataset.pino = 'on'
            break;
        case '6':
            tempo.get(1).dataset.pino = 'on'
            tempo.get(2).dataset.pino = 'none'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'on'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'on'
            tempo.get(7).dataset.pino = 'on'
            break;
        case '7':
            tempo.get(1).dataset.pino = 'none'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'none'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'none'
            tempo.get(7).dataset.pino = 'none'
            break;
        case '8':
            tempo.get(1).dataset.pino = 'on'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'on'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'on'
            tempo.get(7).dataset.pino = 'on'
            break;
        case '9':
            tempo.get(1).dataset.pino = 'on'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'none'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'on'
            tempo.get(7).dataset.pino = 'on'
            break;
        case '0':
            tempo.get(1).dataset.pino = 'on'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'on'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'none'
            tempo.get(7).dataset.pino = 'on'
            break;
        case '':
            tempo.get(1).dataset.pino = 'none'
            tempo.get(2).dataset.pino = 'none'
            tempo.get(3).dataset.pino = 'none'
            tempo.get(4).dataset.pino = 'none'
            tempo.get(5).dataset.pino = 'none'
            tempo.get(6).dataset.pino = 'none'
            tempo.get(7).dataset.pino = 'none'
            break;
        default:
            tempo.get(1).dataset.pino = 'on'
            tempo.get(2).dataset.pino = 'on'
            tempo.get(3).dataset.pino = 'on'
            tempo.get(4).dataset.pino = 'on'
            tempo.get(5).dataset.pino = 'on'
            tempo.get(6).dataset.pino = 'none'
            tempo.get(7).dataset.pino = 'on'
            break;
    }
}
