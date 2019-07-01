import { HungryBear } from './../src/hungrybear.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let bearFeed = (bear) => {
  if (bear.food > 0) {
    bear.feed();
    $(".foodOutput").text(`Food: ${bear.food}`);
  } else {
    $(".foodOutput").text(`Food: You ran out of food dummy!`);
  }
}

let displayInfo = (bear) => {
  $('.ranOutput').text(`You have ran ${bear.distanceRan}/${Math.floor(bear.distanceSafety * bear.level)} feet`);
  $(".foodOutput").text(`Food: ${bear.food}`);
}

let bearRun = (bear, timer) => {
  bear.ran();
  $('.ranOutput').text(`You have ran ${bear.distanceRan}/${Math.floor(bear.distanceSafety * bear.level)} feet`);
  if (bear.distanceRan >= bear.distanceSafety * bear.level) {
    $('.output').text('You safe sucka');
    $('#levelUp').show();
    displayInfo(bear);
    clearInterval(timer);
    bear.level += .1;
    bear.foodLevel = 10;
    bear.food = 3;
    bear.distanceRan = 0;
  }
}

let nextLevel = (bear, timer) => {
    $('#levelUp').hide();

  timer = setInterval(() => {
    if (!bear.didYouGetEaten()) {
      $('.output').text(bear.foodLevel);
    } else {
      clearInterval(timer);
      $('.output').text('You dead son.');
    }
  }, 1000);
}

$(document).ready(function() {
  const smokeyTheBear = new HungryBear("Smokey The Bear");
  smokeyTheBear.setHunger();
  displayInfo(smokeyTheBear);
  let timer = setInterval(() => {
    if (!smokeyTheBear.didYouGetEaten()) {
      $('.output').text(smokeyTheBear.foodLevel);
    } else {
      clearInterval(timer);
      $('.output').text('You dead son.');
    }
  }, 1000);



  $('#feedBear').click(function(){
    bearFeed(smokeyTheBear);
  });
  $('#runAway').click(function(){
    bearRun(smokeyTheBear, timer);
  })
  $('#levelUp').click(function(){
    nextLevel(smokeyTheBear, timer);
  })
});
