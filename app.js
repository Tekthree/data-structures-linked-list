'use strict';

const LinkedList = require('./linkedList.js');

const linkL = LinkedList.fromValues('A','B','C','D');
linkL.print();
console.log(linkL.getByIndex(2).value);