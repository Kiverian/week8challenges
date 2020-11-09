//Medium used a couple of different strategies for this excerise


// function number2month (argument1){
//     var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//         return monthName[argument1 - 1]
// }
// console.log(number2month(1));
// console.log(number2month(5)); //using a function to return the month

// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// const month = 6;
// console.log(monthName[month - 1]); //using an array to return the month


const month = '7'; //using a swtich method to return the month

switch (month) {
    case '1':
        console.log('Janurary');
        break;

    case '2':
        console.log('February');
        break;

    case '3':
        console.log('March');
        break;

    case '4':
        console.log('April');
        break;

    case '5':
        console.log('May');
        break;

    case '6':
        console.log('June')
        break;
    
    case '7':
        console.log('July');
        break;

    case '8':
        console.log('August');
        break;

    case '9':
        console.log('September');
        break;

    case '10':
        console.log('October');
        break;

    case '11':
        console.log('November');
        break;

    case '12':
        console.log(December);
        break;

    default: console.log('Not a month')

}
