const list = [
    '100 гр пшеничной муки',
    '7 шт спелой хурмы',
    '70 гр геркулеса',
    '100 гр сливочного масла',
    '100 гр сахара',
    'щепотка соли',
    'молотая корица по вкусу',
    'молотый кардомон по вкусу',
    'гвоздика по вкусу'
];
const listElem = list.map((фрукт) => `<li>${фрукт}</li>`);
document.getElementById('list').innerHTML = listElem.join('');
