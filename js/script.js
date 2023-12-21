const menubtn = document.querySelector('.menu');
const crossbtn = document.querySelector('.cross-icon');
const navLinks = document.querySelector('.links');
menubtn.addEventListener('click', () => {
  navLinks.classList.add('active');

})
crossbtn.addEventListener('click', () => {
  navLinks.classList.remove('active');

})

// function animateValue(obj, start, end, duration) {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//       obj.innerHTML = Math.floor(progress * (end - start) + start);
//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   }

//   const obj = document.getElementById("value");
//   var limit = document.getElementsByName("value").value;
//   animateValue(obj, 0, 2, 1000);

//   const obj1 = document.getElementById("value1");
//   var limit = document.getElementsByName("value1").value;
//   animateValue(obj1, 0, 8514, 1000);

//   const obj2 = document.getElementById("value2");
//   var limit = document.getElementsByName("value2").value;
//   animateValue(obj2, 0, 5124, 1000);

//   const obj3 = document.getElementById("value3");
//   var limit = document.getElementsByName("value3").value;
//   animateValue(obj3, 0, 7 , 1000);


$(document).ready(function () {
  // Function to start the animation when the element is in the viewport
  function startCounterAnimation() {
    $('.value-counter').each(function () {
      $(this).animateNumber({
        number: $(this).text(),
        numberStep: function (now, tween) {
          var target = $(tween.elem);
          var value = Math.floor(now);
          target.text(value);
        }
      }, 2000);
    });
  }

  // Check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Check on scroll
  $(window).scroll(function () {
    $('.value-counter').each(function () {
      if (isElementInViewport(this)) {
        $(this).addClass('animate');
      }
    });
  });

  // Initial check
  $(window).scroll();

  // Start animation when the element is in the viewport
  $('.value-counter.animate').removeClass('animate');
  startCounterAnimation();
});
