import Collapse from '../components/Collapse/Collapse';
import CallbackChat from '../components/CallbackChat/CallbackChat';
import Liker from '../components/Liker/Liker';

// Если в качесте параметра в конструктор передать селектор или элемент,
// то виджет по умолчанию будет добавлен в конец этого элемента через append.
// Если виджет нужно добавить не в конец элемента, то можно это сделать вручную,
// используя свойство виджета element.

const contentEl = document.querySelector('.content');
const widgetCollapse1 = new Collapse();
contentEl.prepend(widgetCollapse1.element);

const widgetCollapse2 = new Collapse({ parent: '.content' });
widgetCollapse2.setText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae inventore mollitia nesciunt non quos! Accusantium aperiam assumenda eaque impedit, in laborum libero nobis recusandae rem sunt totam, vel, vitae voluptate!');

// Callback-Chat

// eslint-disable-next-line no-unused-vars
const callbackChat = new CallbackChat();

// Liker

// eslint-disable-next-line no-unused-vars
const liker = new Liker(contentEl);
