const list = [
    '250 гр фетучинни',
    '200 мл сливки 20%',
    '100 гр пармезана',
    '1 зуб. чеснока',
    '1 шт. яйцо',
    '10 гр сливочного масла',
    '1 щепотка соли',
    '1 щепотка молотого перца'
];
const listElem = list.map((фрукт) => `<li>${фрукт}</li>`);
document.getElementById('list').innerHTML = listElem.join('');
