const list = [
    '4 шт филе лосося',
    '200 мл сливок',
    '1 уп. шпината',
    '1 зуб. чеснока',
    '1 штл. лука',
    '8 шт. черри',
    '2 ст.л. оливкого масла',
    'соль, перец по вкусу'
];
const listElem = list.map((фрукт) => `<li>${фрукт}</li>`);
document.getElementById('list').innerHTML = listElem.join('');