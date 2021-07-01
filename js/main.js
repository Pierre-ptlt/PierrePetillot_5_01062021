import { photographers } from '../datas.json';
import List from './classes/List';

let list = new List();

list.build(photographers);
list.display(list.all);
list.collectTags();
list.displayTags();