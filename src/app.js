
import {LinkedList} from 'linked-list/linked-list';

var ll = new LinkedList();

ll.add("One");
ll.add("Two");
ll.add("Three");

console.log(ll.size());

var head = ll.remove();

console.log(head);

console.log(ll.size());

ll.clear();

console.log(ll.size());









