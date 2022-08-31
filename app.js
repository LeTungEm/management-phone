




const ObjPhone = {
    key: '1',
    fullname: 'Ếch Chiên Giòn',
    address: 'quán bún',
    phone: '0583538873'
}


const listPhone = [
    {
        key: '1',
        fullname: 'Ếch Chiên Giòn',
        address: 'quán bún',
        phone: '0583538873'
    }, {
        key: '2',
        fullname: 'Cá Basa Chiên Giòn',
        address: 'quán bún',
        phone: '0583538873'
    }
]


console.log('listPhone :>> ', listPhone);


//  find là method thư viện




const x = listPhone.find((value) => value.key === "1")

console.log('x :>> ', x);



const getName = (name, age = 18, address = '') => {
    console.log('name :>> ', name);
    console.log('age :>> ', age);
    console.log('address :>> ', address);
}

const ke = 'huyi'
getName(ke,  22, 'quán bún')




// function & arrow function


// arrow function
const calcX = (a , b) =>  a + b 
const ewfe = (c) => c*2

const calc = calcX(2, 4)
console.log('ewfe :>> ', ewfe(6));


console.log('calc :>> ', calc);


// function

function namex(params) {
    return '1'
}

console.log('namex :>> ', namex());