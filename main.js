;(function(doc){
  
  var $ = function (selector) {
    return doc.querySelector(selector);
  }
  
  var s1 = $('button');
  

  var wrapper = $('.wrapper'),
      cloud = $('.cloud'),
      zhang = $('.zhang'),
      bluebar = $('.bluebar'),
      title = $('.title'),
      title_sub = $('.title-sub'),
      title_logo = $('.title-logo'),
      train = $('.train'),
      head = $('.head'),
      intro = $('.intro'),
      copyrights = $('.copyrights'),
      txtbox = $('.txt');
  
  cloud.addEventListener('webkitTransitionEnd', function () {
    zhang.classList.add('on');
  })
  zhang.addEventListener('webkitTransitionEnd', function () {
    bluebar.classList.add('on');
  })
  bluebar.addEventListener('webkitTransitionEnd', function () {
    title.classList.add('on');
  })
  title.addEventListener('webkitTransitionEnd', function () {
    title_sub.classList.add('on');
    title_sub.classList.add('pop');
  })
  title_sub.addEventListener('webkitAnimationEnd', function () {
    title_logo.classList.add('on');
  })
  title_logo.addEventListener('webkitTransitionEnd', function () {
    train.classList.add('on');
    head.classList.add('on');
  })
  head.addEventListener('webkitTransitionEnd', function () {
    train.classList.add('back');
    head.classList.add('back');
    title_logo.classList.add('jump');
  })
  train.addEventListener('webkitTransitionEnd', function () {
    intro.classList.add('on');
  })
  intro.addEventListener('webkitTransitionEnd', function () {
    copyrights.classList.add('on');
  })
  
  
  
  // start 
  setTimeout(function(){
    cloud.classList.add('on')
  },50)
//  cloud.addEventListener('webkitAnimationEnd', function () {
//    zhang.classList.add('on')
//  })
  
//  s1.addEventListener('click', function(){
//    wrapper.classList.toggle('result');
//  });
//  
//  var txt = '哥，本系统判断你不是俺们公司的人，你咋混进来的？';
//  if (sum < 100) {
//    txt = '你住的好近啊，着实令人羡慕，无法享受优惠'
//  } else if (sum < 150) {
//    txt = '其实你不是最远的亲，八折就够了亲'
//  } else if (sum < 400) {
//    txt = '可怜的亲，我们同病相怜，五折算是点小安慰吧'
//  }
//  
})(document);


function calc(single, days) {
  'use strict';

  var sum = 0,
      days = days || 21,
      price = parseInt(single, 10),
      discountFlag1 = false,
      discountFlag2 = false;

  for (var i=0; i < days; i++) {
    if (!discountFlag1 && sum > 100) {
      price = single * .8;
      discountFlag1 = true;
    } else if (!discountFlag2 && sum > 150) {
      price = single * .5;
      discountFlag2 = true;
    }
    sum += price * 2;
  }
  sum = Math.floor(sum);
//  console.log(sum);
  return sum;
}

calc(4);