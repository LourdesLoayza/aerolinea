// declarar un array que represente los asientos del avión
var airlineSeats = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
];

// se declara un contador que rastree los asientos ocupados
var busySeats=0;

var paintSeats = function(array){
    var containerSeats = document.getElementById('seats');
    for ( var i = 0; i < array.length; i++){
        var seat = document.createElement('div');
        seat.className='seats'

        if (i < 4){
            seat.style.background='purple'
        } else {
            seat.style.background='yellow'
        }      
    containerSeats.appendChild(seat)
    }
}

var reserve = function(){
    var btn = document.getElementById('btn');
    btn.addEventListener('click', chooseZone);
};

var chooseZone = function(){
    var choice = prompt(
        'Seleccionar la zona que se desea reservar \n 1. Primera clase \n 2. Clase económica \n \n Por favor seleccione una opción'
    );
    if (choice == 1){
        checkFirstClassZone();
    } else if (choice == 2){
        checkEconomicZone();
    } else {
        alert ('Por favor indicar la zona a reservar')
    }
};

var checkFirstClassZone = function(){
    var zone = 'Primera clase';

    for (var index = 0; index < 4 ; index++){
        if (airlineSeats[index] == false){
            airlineSeats[index] = true;
            reserveSeat(index);
            paintTicket(index, zone);
            busySeats++
            break
        } else if ((index == 3) && (airlineSeats[index] = true)){
            reasignEconomicZone(zone);
        }
    }
};

var checkEconomicZone = function(){
    var zone = 'Clase económica';

    for (var index = 4; index < 10; index++){
        if (airlineSeats[index]==false){
            airlineSeats[index]=true;
            reserveSeat(index);
            paintTicket(index, zone);
            busySeats++
            break
        } else if ((index == 9) && (airlineSeats[index] = true)){
            reasignFirstClassZone(zone);
        }
    }
};

var reserveSeat = function (indexToPaint){
    var seat = document.getElementsByClassName('seats');
    seat[indexToPaint].textContent = 'Ocupado';
};

var reasignEconomicZone = function(zone){
    if (busySeats==10){
      noSeats();
      checkNextFlight()
    } else {
        var reasign = confirm ('Ya no quedan asientos disponibles en '+ zone + '\n ¿Deseas reservar en clase económica?');
        if (reasign == true){
            checkEconomicZone();
        } else {
            checkNextFlight();
        }
    } 
};

var reasignFirstClassZone = function(zone){
    if (busySeats==10){
      noSeats();
      checkNextFlight()
    } else {
        var reasign = confirm ('Ya no quedan asientos disponibles en '+ zone + '\n ¿Deseas reservar en primera clase?');
        if (reasign == true){
            checkFirstClassZone();
        } else {
            checkNextFlight();
        }
    }
};

var checkNextFlight = function(){
    alert('Nuestro próximo vuelo sale en 3 horas')
}

var paintTicket = function (index,zone){
    var containerTickets = document.getElementById('tickets')
    var ticket = document.createElement('div');
    ticket.className = 'print-ticket'
    var title = document.createElement('p');
    title.textContent = ' Ticket de embarque';
    var reserveSeating = document.createElement('p');
    reserveSeating.textContent = 'N° asiento '+(index+1);
    var zoneClass = document.createElement('p');
    zoneClass.textContent = zone;
    ticket.appendChild(title);
    ticket.appendChild(reserveSeating);
    ticket.appendChild(zoneClass);
    containerTickets.appendChild(ticket)
};

var noSeats = function(){
  alert ('Ya no quedan asientos disponibles')
}

paintSeats(airlineSeats);
reserve();