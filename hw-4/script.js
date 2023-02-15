function quest() {
    const currentYear = new Date().getFullYear();
    const yearOfBirth = prompt('Який рік Вашого народження?');
    const city = prompt('В якому місті Ви проживаєте?');
    const sport = prompt('Який у Вас олюблений вид спорту?');

    let ageMessage = '';
    let cityMessage = '';
    let sportMessage = '';

    if (yearOfBirth === null) {
        ageMessage = 'Шкода, Ви не захотіли ввести рік народження.';
    } else {
        const age = currentYear - +yearOfBirth;
        ageMessage = 'Вам ' + age + ' років!';
    }

    switch (city) {
        case 'Київ':
            cityMessage = 'Ви живете у столиці України!';
            break;
        case 'Вашингтон':
            cityMessage = 'Ви живете у столиці Америки';
            break;
        case 'Лондон':
            cityMessage = 'Ви живете у столиці Англії';
            break;
        case null:
            cityMessage = 'Шкода, Ви не захотіли ввести місто свого проживання.';
            break;
        case '':
            cityMessage = 'Шкода, Ви не захотіли ввести місто свого проживання.';
            break;
        default:
            cityMessage = 'Ви живете у м.' + city + '!';
    }

    switch (sport) {
        case 'Бокс':
            sportMessage = 'Круто! Хочеш стати як Олександр Усик?';
            break;
        case 'Велоспорт':
            sportMessage = 'Круто! Хочеш бути як Бред Рітер?';
            break;
        case 'Формула 1':
            sportMessage = 'Круто! Хочеш бути як Міхаель Шумахєр?';
            break;
        case null:
            sportMessage = 'Шкода, Ви не захотіли ввести назву свого олюбленого спорту.';
            break;
        case '':
            sportMessage = 'Шкода, Ви не захотіли ввести назву свого олюбленого спорту.';
            break;
        default:
            sportMessage = 'Ви полюбляєте ' + sport;
    }

    alert(ageMessage + '\n' + cityMessage + '\n' + sportMessage);
}