var list = document.getElementById('progressbar'),
    next = document.getElementById('next'),
    prev = document.getElementById('prev'),
    clear = document.getElementById('clear'),
    children = list.children,
    completed = 0;

    // simulate activating a node
    // next.addEventListener('click', Next, false);
    // prev.addEventListener('click', Prev, false);

    // clear the activated state of the markers
    // clear.addEventListener('click', Clear, false);

    function Next(){
    // count the number of completed nodes
    completed = (completed === 0) ? 1 : completed + 2;
    if (completed > children.length) return;

    // Circle and line
    for (var i = 0; i < completed; i++) {
      children[i].classList.remove('return');
      children[i].classList.remove('grey');
      children[i].classList.add('active');

      // Get only circle
      if(i % 2 === 0){
        children[i].classList.remove('-return');
        children[i].classList.add('-active');
      }
      // Get container
      if (i % 2 === 0) {
        children[i].children[0].classList.add('-active');
      }
    }
    }

    function Prev(){
      //if completed is not 0 then proceed minus 2, else equal to 1
      completed = (completed  > 0) ? completed - 2 : 1 ;

      //get our completed children then decrement every click trigger
      for (var i = children.length; i > completed; i--) {
        //here we select the next element sibling of the current completed line in order to select the cirlce
        //try to run this in browser's javascript console -> console.table(circle)
        var circle = children[completed].nextElementSibling;
        //remove .circle container -active
        circle.firstElementChild.classList.remove('-active');

        //remove and add class in our .line class
        children[completed].classList.remove('active');
        children[completed].classList.add('return');
        
        //remove and add class in our .cirlce class
        circle.classList.remove('active');
        circle.classList.remove('-active');
        circle.classList.add('return');
        circle.classList.add('-return')
      }
    }

    function Clear(){
      var list = document.getElementById('progressbar'),
          children = list.children;
      for (var i = 0; i < children.length; i++) {
        children[i].children[0].classList.remove('-active');
        children[i].classList.remove('active');
        children[i].classList.remove('-active');
        children[i].classList.remove('return');
        children[i].classList.remove('-return');
        children[i].classList.add('grey');
      }
      completed = 0;
    }