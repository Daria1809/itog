const list = [
    '2 шт яйцо',
    '1 уп греческого йогура',
    '2 зуб чеснока',
    '3 ломтика хлеба',
    '3 ст.л. оливкого масла',
    '2 ст.л. уксуса',
    '1 щепотка соли',
    'перец по вкусу'
];
const элементыСписка = list.map((фрукт) => `<li>${фрукт}</li>`);
document.getElementById('list').innerHTML = элементыСписка.join('');