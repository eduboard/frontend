import helpers from './helpers.js';

const mock = {};

mock.users = [
  {
    email: 'best@test.com',
    name: 'Franz',
    surname: 'Boiler',
    id: '5b2e9a35382d33000158aa28'
  }, {
    email: 'habadaba@test.com',
    name: 'Mark',
    surname: 'Sichler',
    id: '5b2e9a35382d33000158aa29'
  }, {
    email: 'tennis@test.com',
    name: 'Tennis',
    surname: 'Arm',
    id: '5b2e9a35382d33000158aa30'
  }, {
    email: 'never@test.com',
    name: 'Never',
    surname: 'GonnaGiveYouUp',
    id: '5b2e9a35382d33000158aa31'
  },
];

mock.forums = [
  {
    id: '501',
    title: 'Teilnehmerforum',
    entries: []
  }, {
    id: '501',
    title: 'Tennisforum',
    entries: []
  }, {
    id: '551',
    title: 'Adminforum',
    entries: []
  },
];

mock.meetings = [
  'Besprechung,Montag,14-16,MA 700,Dmitry Chevko',
  'Seminar,Mittwoch,08-12,HA 105,Dmitry Chevko',
  'Prokrastinieren,Dienstag,16-22,FH 301,Terminator',
  'Nichtstun,Donnerstag,08-10,EN 345,Arnold',
  'Früh aufstehen,Freitag,08-10,TEL 102,Ein Geist',
  'Party machen,Freitag,20-22,Zuhause,Deine Freunde',
];

mock.entries = [
  {
    id: '21',
    pictures: ['https://picsum.﻿photos/500/900', 'https://picsum.﻿photos/800/300', 'https://picsum.﻿photos/400/400'],
    message: 'В профессиональной сфере часто случается так, что личные или корпоративные клиенты заказывают, чтобы публикация была сделана и представлена еще тогда, когда фактическое содержание все еще не готово. Вспомните новостные блоги, где информация публикуется каждый час в живом порядке. Тем не менее, читатели склонны к тому, чтобы быть отвлеченными доступным контентом, скажем, любым текстом, который был скопирован из газеты или интернета. Они предпочитают сконцентрироваться на тексте, пренебрегая разметкой и ее элементами. К тому же, случайный текст подвергается риску быть неумышленно смешным или оскорбительным, что является неприемлемым риском в корпоративной среде. Lorem ipsum, а также ее многие варианты были использованы в работе начиная с 1960-ых, и очень даже похоже, что еще с 16-го века.',
    files: ['Большая часть.pdf', 'хочет заполучить.pdf'],
    date: Date.now() - 1000 * 3600 * 24 * 20,
  }, {
    id: '22',
    pictures: ['https://picsum.﻿photos/950/700', 'https://picsum.﻿photos/600/200'],
    message: 'лать ударение не на содержание, а на элементы дизайна. Такой текст также называется как заполнитель. Это очень удобный инструмент для моделей (макетов). Он помогает выделить визуальные элементы в документе или презентации, например текст, шрифт или разметка. Lorem ipsum по большей части является элементом латинского текста классического автора и философа Цицерона. Слова и буквы были заменены добавлением или сокращением элементов, поэтому будет совсем неразумно пытаться передать содержание; это не гениально, не правильно, используется даже не понятный латинский. Хотя Lorem ipsum напоминает классический латинский, вы не найдете никакого смысла в сказанном. Поскольку текст Цицерона не содержит буквы K, W, или Z, что чуждо для латинского, эти буквы, а также многие другие часто вставлены в случайном порядке, чтобы скопировать тексты различных Европейских языков, поскольку диграфы не встречаются в оригинальных текстах.',
    files: ['на элементы.pdf'],
    date: Date.now() - 1000 * 3600 * 24 * 20,
  }, {
    id: '23',
    pictures: ['https://picsum.﻿photos/900/350', 'https://picsum.﻿photos/700/550'],
    message: 'человечеству версией («Больше нет никого из тех, кто любит скорбь, поскольку это горе и поэтому хочет заполучить это»). Находка присваивается Ричарду МакКлинтоку (Richard McClintock), филологу, руководителю публикаций в колледже Хампден-Сидней, что в Вирджинии; он искал «citings consectetur» в классической латинской литературе, термин, который встречается удивительно редко в том литературном тексте.',
    files: ['Большая часть.pdf', 'хочет заполучить.pdf'],
    date: Date.now() - 1000 * 3600 * 24 * 20,
  },

  {
    id: '11',
    date: Date.now(),
    message: 'Diese Woche üben wir uns in Prokrastination in dem wir schöne Bilder anschauen. Anbei findet Ihr zwei sehr ablenkende Bilder. Eure Aufgabe für diese Woche ist es, damit mindestens zwei Tage lang Zeit zu schinden. Das dafür benötigte Zusatzmaterial und die genaue Hausaufgabenangabe findet Ihr ebenfalls im Anhang. Ich wünsche weiterhin frohes Prokrastinieren. Erinnert euch daran ja nicht zu viel zu tun.',
    pictures: ['https://picsum.﻿photos/450/125', 'https://picsum.﻿photos/600/500'],
    files: ['Hausaufgabe1.pdf', 'Zusatzmaterial.docx'],
  }, {
    id: '12',
    date: Date.now() - 1000 * 3600 * 24 * 9,
    message: 'Dieses mal habe ich für euch nur zwei kleine Leseausschnitte die ihr dafür verwenden könnt, euch möglichst wenig weiterzubilden. Bitte achtet darauf die Abschnitte nur zu überfliegen und so wenig wir möglich Information aufzunehmen.',
    files: ['Leseausschnitt1.pdf', 'Leseausschnitt2.pdf'],
  }, {
    id: '13',
    pictures: ['https://picsum.﻿photos/200/300', 'https://picsum.﻿photos/300/200'],
    message: 'In der ersten Lektion werden wir über die Bilder und Textanhänge gehen. Dies ist wichtig damit ihr einen Einblick die unfassbare Leere kriegt, die ihr bereits sein müsst einzugehen. Wenn es euch zu Langweilig ist, macht Ihr es genau richtig.',
    files: ['Wörterbuch', 'VokabularListe.pdf'],
    date: Date.now() - 1000 * 3600 * 24 * 20,
  },

  {
    id: '31',
    date: Date.now(),
    message: 'Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben. Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine Bestätigung ihrer neuen Träume und guten Absichten, als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen Körper dehnte. »Es ist ein eigentümlicher Apparat«, sagte der Offizier zu dem Forschungsreisenden und überblickte mit einem gewissermaßen bewundernden Blick den ihm doch wohlbekannten Apparat. Sie hätten noch ins Boot springen können, aber der Reisende hob ein schweres, geknotetes Tau vom Boden, drohte ihnen damit und hielt sie dadurch von dem Sprunge ab.',
    pictures: ['https://picsum.﻿photos/450/125', 'https://picsum.﻿photos/600/500'],
    files: ['HasteNichtGesehn.epub'],
  }, {
    id: '32',
    date: Date.now() - 1000 * 3600 * 24 * 9,
    message: ' In den letzten Jahrzehnten ist das Interesse an Hungerkünstlern sehr zurückgegangen. Aber sie überwanden sich, umdrängten den Käfig und wollten sich gar nicht fortrühren.Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben. Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich',
    files: [],
  }, {
    id: '33',
    pictures: ['https://picsum.﻿photos/200/300', 'https://picsum.﻿photos/300/200'],
    message: 'Als Gregor Samsa eines Morgens aus unruhigen Träumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt. Und es war ihnen wie eine Bestätigung ihrer neuen Träume und guten Absichten, als am Ziele ihrer Fahrt die Tochter als erste sich erhob und ihren jungen Körper dehnte. »Es ist ein eigentümlicher Apparat«, sagte der Offizier zu dem Forschungsreisenden und überblickte mit einem gewissermaßen bewundernden Blick den ihm doch wohlbekannten Apparat. Sie hätten noch ins Boot springen können, aber der Reisende hob ein schweres, geknotetes Tau vom Boden, drohte ihnen damit und hielt sie dadurch von dem Sprunge ab. In den letzten Jahrzehnten ist das Interesse an Hungerkünstlern sehr zurückgegangen. Aber sie überwanden sich, umdrängten den Käfig und wollten sich gar nicht fortrühren.Jemand musste Josef K. verleumdet haben, denn ohne dass er etwas Böses getan hätte, wurde er eines Morgens verhaftet. »Wie ein Hund!« sagte er, es war, als sollte die Scham ihn überleben.',
    files: [],
    date: Date.now() - 1000 * 3600 * 24 * 20,
  },
];

mock.courses = [
  {
    id: '661',
    title: 'Мне нравится есть хлеб',
    description: 'В этом курсе мы обсудим разные типы русского хлеба. Лорем ипсум долор сит амет, ехерци номинави еу вел, цум волумус перципит дефинитионес еу. Еос неморе цопиосае детерруиссет ид. Мовет детрахит молестиае ан хис, ут алиа еффициантур инструцтиор вим. Цум дебет тритани еа. Не пробо сусципит диссентиас сед, магна ассентиор но мел, меа елигенди цонтентионес интерпретарис ет. Не либер толлит импедит хис, ферри иусто волуптариа иус ут.',
    members: [mock.users[0], mock.users[1]],
    meetings: mock.meetings.slice(0, 2).map(m => helpers.parseCalendarString(m)),
    entries: mock.entries.slice(0, 3)
  }, {
    id: '662',
    title: 'Prokrastinieren für Fortschgeschrittene',
    description: 'Dies ist ein Kurs für Fortschgeschrittene. Anfänger besuchen bitte die Kurse Prokrastination für Anfänger 1 & 2. Hier lernen Sie nicht nur zu prokrastinieren, sonder auch wie sie absolut gar nichts machen, aber sich trotzdem einreden Sie hätten was sinnvolles gemacht. Diese Fähigkeit ist für jeden Menschen absolut unabdingbar. Vertrauen Sie mir.',
    members: [mock.users[2], mock.users[3]],
    meetings: mock.meetings.slice(2, 4).map(m => helpers.parseCalendarString(m)),
    entries: mock.entries.slice(3, 6)
  }, {
    id: '663',
    title: 'A1 Gutes Deutsch',
    description: 'Eyy digga hier lernsta wie du mal so rischtich Deutsch sprischt. Musst du nur gucken und lernen von mir, ich masch dich da fix flot in de Kenntnisse die du wissen musst, ey.',
    members: mock.users,
    meetings: mock.meetings.slice(4, 6).map(m => helpers.parseCalendarString(m)),
    entries: mock.entries.slice(6, 9)
  },
];

export default mock;
