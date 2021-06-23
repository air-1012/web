var colorHandler = {};
colorHandler.set_backgroundColor = function(color) {
  //var target = document.querySelector('body');
  //target.style.backgroundColor = color;
  $('body').css('backgroundColor', color);
}
colorHandler.set_articleColor = function(color) {
  //var target = document.querySelector('body');
  //target.style.color = color;
  $('body').css('color', color);
}
colorHandler.set_anchorColor = function(color) {
  // var i = 0;
  // var alist = document.querySelectorAll('a');
  // while(i < alist.length) {
  //   alist[i].style.color = color;
  //   i = i + 1;
  // }
  $('a').css('color', color);
}
function nightdayHandler(self) {
  if(self.value === 'night') {
    colorHandler.set_backgroundColor('black');
    colorHandler.set_articleColor('white');
    colorHandler.set_anchorColor('powderblue');
    self.value = 'day';
  }
  else {
    colorHandler.set_backgroundColor('white');
    colorHandler.set_articleColor('black');
    colorHandler.set_anchorColor('blue');
    self.value = 'night';
  }
}
