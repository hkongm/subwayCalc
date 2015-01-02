// 去掉setTimeout!!!
;(function(doc){
  
  var $ = function (selector) {
    return doc.querySelector(selector);
  }
  
  var wrapper = $('.wrapper'),
      cloud = $('.cloud'),
      zhang = $('.zhang'),
      bluebar = $('.bluebar'),
      title = $('.title'),
      title_sub = $('.title-sub'),
      title_logo = $('.title-logo'),
      title_logo2 = $('.result .title-logo'),
      train = $('.train'),
      head = $('.head'),
      intro = $('.intro'),
      copyrights = $('.copyrights'),
      go = $('#go'),
      ptsbox = $('.pts'),
      txtbox = $('.txt'),
      avatar = $('.avatar'),
      btnShare = $('.share'),
      btnReset = $('.reset'),
      evAniEnd = 'webkitAnimationEnd',
      evTraEnd = 'webkitTransitionEnd';
  
  // 封面动画集
  bindEv(cloud, function () {
    zhang.classList.add('on');
  }, evTraEnd)
  bindEv(zhang, function () {
    bluebar.classList.add('on');
  }, evTraEnd)
  bindEv(bluebar, function () {
    title.classList.add('on');
  }, evTraEnd)
  bindEv(title, function () {
    title_sub.classList.add('on');
    title_sub.classList.add('pop');
  }, evTraEnd)
  bindEv(title_sub, function () {
    title_logo.classList.add('on');
  }, evAniEnd)
  bindEv(title_logo, function () {
    train.classList.add('on');
    head.classList.add('on');
  }, evTraEnd)
  bindEv(head, function () {
    train.classList.add('back');
    head.classList.add('back');
    title_logo.classList.add('jump');
  }, evTraEnd)
  bindEv(train, function () {
    intro.classList.add('on');
  }, evTraEnd)
  bindEv(intro, function () {
    copyrights.classList.add('on');
  }, evTraEnd)
  
  $('.result').addEventListener(evTraEnd, function () {
    avatar.classList.add('on');
    title_logo2.classList.add('jump2');
  })


  // 提交表单
  bindEv(go, function(){
    var single = $('#single').value,
        days = $('#days').value;
    if (single<3 || single >20) {
      alert('价格输入有误，请检查是否填写正确');
      return;
    }
    if (days < 1 || single > 31) {
      alert('天数输入有误，请检查是否填写正确');
      return;
    }
    wrapper.classList.toggle('result');
    var sum = calc(single, days);
    var txt = '哥<br>本系统判断你不是俺们公司的人<br>你咋混进来的？',
          avt = 4;
    if (sum < 100) {
      txt = '你住的好近啊<br>着实令人羡慕<br>无法享受优惠';
      avt = 1;
    } else if (sum < 150) {
      txt = '其实你不是最远的亲<br>八折就够了亲';
      avt = 2;
    } else if (sum < 400) {
      txt = '可怜的亲<br>我们同病相怜<br>五折算是点小安慰吧';
      avt = 3;
    }
    ptsbox.innerHTML = sum;
    txtbox.innerHTML = txt;
    avatar.class = "avatar";
    avatar.classList.remove('a1');
    avatar.classList.remove('a2');
    avatar.classList.remove('a3');
    avatar.classList.remove('a4');
    avatar.classList.add('a' + avt);
  })

  // 重新计算
  bindEv(btnReset, function () {
//    location.reload();
    wrapper.classList.toggle('result')
  })
  
  // 分享
  bindEv(btnShare, function () {
    alert('分享')
  })
  
  // start 
  setTimeout(function(){
    cloud.classList.add('on')
  },50)
  
})(document);

function bindEv (el, callback, type) {
  type = type || 'click';
  if (type.indexOf('webkit') > -1) {
    el.addEventListener(type.substr(6,type.length).toLowerCase(), callback, false);
  }
  el.addEventListener(type, callback, false);
  
}

function calc(single, days) {
  'use strict';

  var sum = 0,
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
  return sum;
}
