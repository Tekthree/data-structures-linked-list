const LinkedList = require('../linkedList.js');

describe('#insertAtHead', ()=>{
  test('it adds the element to the beginning of the list', ()=>{
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);

  })
})

describe('#getByIndex', ()=>{
  describe('with index less than 0', ()=>{
    test('it returns null', ()=>{
      const ll = new LinkedList.fromValues('A','B','C');

      expect(ll.getByIndex(-1)).toBeNull();
    })
  })

  describe('with index greater length', ()=>{
    test('it returns null', ()=>{
      const ll = new LinkedList.fromValues('A','B','C');

      expect(ll.getByIndex(5)).toBeNull();
    })
  })

  describe('with index zero', ()=>{
    test('it returns the head', ()=>{
      const ll = LinkedList.fromValues('A','B','C');

      expect(ll.getByIndex(0).value).toBe('A');
    })
  })

  describe('with index in middle', ()=>{
    test('it returns the element at index', ()=>{
      const ll = LinkedList.fromValues('A','B','C','D');

      expect(ll.getByIndex(2).value).toBe('C');
    })
  })
})


describe('#insertAtIndex', ()=>{
  describe('with index less than 0', ()=>{
    test('does not insert if index is 0', ()=> {
      const ll = LinkedList.fromValues('A','B','C');
      ll.insertAtIndex(-1, 'D');

      expect(ll.length).toBe(3);

    })
  })

  describe('with index greater then length', ()=>{
    test('does not insert if index is 0', ()=> {
      const ll = LinkedList.fromValues('A','B','C');
      ll.insertAtIndex(5, 'D');

      expect(ll.length).toBe(3);

    })

  })

  describe('with index zero', ()=>{
    test('insert at head', ()=> {
      const ll = LinkedList.fromValues('A','B','C');
      ll.insertAtIndex(0, 'Z');

      expect(ll.head.value).toBe('Z');
      expect(ll.head.next.value).toBe('A');
      expect(ll.length).toBe(4)

    })

  })

  describe('with index in middle', ()=>{
    test('insert at provided index', ()=> {
      const ll = LinkedList.fromValues('A','B','C','D');
      ll.insertAtIndex(2, 'Z');
      const node = ll.getByIndex(2);

      expect(node.value).toBe('Z');
      expect(node.next.value).toBe('C');
      expect(ll.length).toBe(5)

    })

  })



})