
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

// Trees

import {Tree} from 'tree/tree';
import {TreeNode} from 'tree/tree';

var root = new TreeNode(null, null, "100");
var fifty = new TreeNode(null, null, "50");
var onefifty = new TreeNode(null, null, "150");
var twfive = new TreeNode(null, null, "25");
var sevfive = new TreeNode(null, null, "75");
var onetwofive = new TreeNode(null, null, "125");
var onesevfive = new TreeNode(null, null, "175");
var oneten = new TreeNode(null, null, "110");

fifty.left = twfive;
fifty.right = sevfive;
onetwofive.left = oneten;
onefifty.left = onetwofive;
onefifty.right = onesevfive;
root.left = fifty;
root.right = onefifty;

var tree = new Tree(root);

console.log('Pre Order Traversal');
tree.preOrderTraversal();


console.log('In Order Traversal');
tree.inOrderTraversal();



console.log('Post Order Traversal');
tree.postOrderTraversal();








