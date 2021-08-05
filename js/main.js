import { photographers } from '../datas.json';
import List from './classes/List';
import './pages/profil.js';

const urlParams = new URLSearchParams(window.location.search);
const urlTag = urlParams.get('tag');

console.log(urlTag);

let list = new List();

list.build(photographers);
list.display(list.all);
list.collectTags();
list.displayTags();
list.listenForFiltering();
list.addUrlTag();