// ЕСЛИ ДОКУМЕНТ ПОЛНОСТЬЮ ЗАГРУЖЕН АНАЛОГ $(document).ready
document.addEventListener("DOMContentLoaded",(event) => {
// ПЕРЕКЛЮЧАТЕЛЬ ДЛЯ СВАЙПЕР МЕНЮ НАЧАЛО
  let activeSliderMenu = document.querySelector('.active-slider-menu')
  let activeSliderMenuContact = document.querySelector('.active-slider-menu-contact')
  let ulWrap = document.querySelector('.menu-slided-ul-acc-wrap')
  let menuSlidedContacts = document.querySelector('.menu-slided-contacts')
  if(activeSliderMenu && activeSliderMenuContact)
  {
    activeSliderMenu.addEventListener('click', () => {
      activeSliderMenu.classList.add('active-slider-menu-active')
      activeSliderMenuContact.classList.remove('active-slider-menu-active')
      ulWrap.style.display = 'flex'
      menuSlidedContacts.style.display = 'none'
    })
    activeSliderMenuContact.addEventListener('click', () => {
      activeSliderMenuContact.classList.add('active-slider-menu-active')
      activeSliderMenu.classList.remove('active-slider-menu-active')
      ulWrap.style.display = 'none'
      menuSlidedContacts.style.display = 'flex'
    })
  }
// ПЕРЕКЛЮЧАТЕЛЬ ДЛЯ СВАЙПЕР МЕНЮ КОНЕЦ

// ФОРМАТИРОВАНИЕ ЦЕНЫ НАЧАЛО
  let prices = document.querySelectorAll('.price-number')
  prices.forEach(item => {
    item.innerHTML = '<span>' + item.innerText.split('').reverse().join('') .match(/\d{0,3}/g).join(' ').split('').reverse().join('') + '</span>'
  });
// ФОРМАТИРОВАНИЕ ЦЕНЫ КОНЕЦ

let header = document.querySelector('.header-main')
let now = window.scrollY
document.addEventListener('scroll',() => {
	if(this.scrollY > now && this.scrollY > 250)
	{
		header.classList.add('header-main-hidden')
		now = this.scrollY
	}
	else
	{
		header.classList.remove('header-main-hidden')
		now = this.scrollY
	}
})

// СВАЙПЕРЫ НАЧАЛО
document.querySelectorAll('.card-swiper-wrap').forEach(n => {
  const slider = new Swiper(n.querySelector('.item-swiper'), {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
	  cssMode: true,
    // slidesPerGroup: 1,
    pagination: {
        el: n.querySelector('.swiper-pagination'),
        type: "progressbar",
      },
    loop: false,
    navigation: {
      nextEl: n.querySelector('.swiper-button-next'),
      prevEl: n.querySelector('.swiper-button-prev'),
    },
    breakpoints: {
   640: {
	   cssMode: false,
      slidesPerView: "auto",
     spaceBetween: 20,
     centeredSlides: false,
   },
 }
  });
});

let bestswiper = new Swiper(".best-swiper", {
  slidesPerView: 'auto',
  spaceBetween: 12,
  slidesPerGroup: 1,
  loop: false,
  freeMode:true,
	cssMode: true,
  loopFillGroupWithBlank: true,
  pagination: {
     el: ".best-swiper-pagination",
   },
  breakpoints: {
  1014: {
	  cssMode: false,
    slidesPerView: 'auto',
    spaceBetween: 12,
    freeMode:true,
  },
  840: {
	cssMode: false,
    loopFillGroupWithBlank: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode:false,

  },
}
})
let itemCardImgs = new Swiper(".item-card-img-wrap", {
  slidesPerView: 'auto',
  spaceBetween: 12,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
	cssMode: true,
  pagination: {
     el: ".item-card-swiper-pagination",
     clickable: true,
   },
  breakpoints: {
  840: {
	  cssMode: false,
    slidesPerView: 'auto',
    spaceBetween: 12,
  },
}
})
let mainBannerswiper = new Swiper(".main-banner-swiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
	cssMode: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
      },
	  breakpoints: {
  840: {
	  cssMode: false,
  },
}
})

let catalogtypes = new Swiper(".type-swiper", {
  slidesPerView: 'auto',
  spaceBetween: 55,
  slidesPerGroup: 1,
  loop: false,
  freeMode:true,
	cssMode: true,
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  breakpoints: {
  640: {
	  cssMode: false,
    slidesPerView: 'auto',
    spaceBetween: 55,
    freeMode:true,
  },
}
})
// СВАЙПЕРЫ КОНЕЦ

// МЕНЮ МОБИЛЬНАЯ ВЕРСИЯ НАЧАЛО
let firstmenus = document.querySelectorAll('.first-level-name')
firstmenus.forEach((item, i) => {
  item.addEventListener("click",()=>{
        item.nextElementSibling.style.left = 0
    })
});
let menuslided = document.querySelector('.menu-slided')
let secondlevel = document.querySelectorAll('.second-level')
let closemenu = document.querySelectorAll('.menu-close')
let openmenu = document.querySelectorAll('.menu-link')
let backtofirst = document.querySelectorAll('.back-to-first')
backtofirst.forEach((item, i) => {
item.addEventListener("click",()=>{
  let parent = item.parentElement
  let grandparent = parent.parentElement
      grandparent.style.left = "100vw"
  })
});

for (let open of openmenu) {
  open.addEventListener("click",()=>{
    menuslided.style.left = 0
  })
}
for (let close of closemenu) {
  close.addEventListener("click",()=>{
    menuslided.style.left = "100vw"
    secondlevel.forEach((item, i) => {
      item.style.left = "100vw"
    });
  })

}
// МЕНЮ МОБИЛЬНАЯ ВЕРСИЯ КОНЕЦ

// АККАРДИОН НАЧАЛО
let accords = document.querySelectorAll('.accord')
console.log(accords)
accords.forEach(item => {
  console.log(item)
  let inside = item.querySelector('.accord-inside')
  let outside = item.querySelector('.accord-outside')
  let arrow = item.querySelector('.accord-arrow')
  outside.addEventListener('click',() => {
    inside.classList.toggle('accord-inside-active')
    arrow.classList.toggle('accord-arrow-active')
  })
})
// АККАРДИОН КОНЕЦ

// ФИЛЬТР ДЛЯ КАТАЛОГА НАЧАЛО
let filterBtn = document.querySelector('.filters-filter')
let filterClose = document.querySelector('.filter-menu-close')
let filterMenu = document.querySelector('.filter-menu')
if(filterBtn)
{
  filterBtn.addEventListener('click',() => {
    filterMenu.classList.toggle('filter-menu-open')
  })
  filterClose.addEventListener('click',() => {
    filterMenu.classList.remove('filter-menu-open')
  })
  let styleBtn = document.querySelector('.filters-styles')
  let styleClose = document.querySelector('.style-menu-close')
  let styleMenu = document.querySelector('.style-menu')
  styleBtn.addEventListener('click',() => {
    styleMenu.classList.toggle('style-menu-open')
  })
  styleClose.addEventListener('click',() => {
    styleMenu.classList.remove('style-menu-open')
  })

}
// ФИЛЬТР ДЛЯ КАТАЛОГА КОНЕЦ



// ПЕРЕКЛЮЧАТЕЛЬ ДЛЯ СПОСОБА ДОСТАВКИ НАЧАЛО
  let radio = document.querySelectorAll('input[name=deliverysposob]')
  let delivery = document.querySelector('.cart-user-infos-radios-delivery')
  let samovyvoz = document.querySelector('.cart-user-infos-radios-samovyvoz')
  console.log('asdasdda')
  radio.forEach(item => {
    item.addEventListener('change',() => {
      switch(item.value)
      {
              case 'delivery':
                    delivery.style.display = 'flex'
                    samovyvoz.style.display = 'none'
                    break;
              case 'samovyvoz':
                    samovyvoz.style.display = 'flex'
                    delivery.style.display = 'none'
                    break;
          }
    })
  });
// ПЕРЕКЛЮЧАТЕЛЬ ДЛЯ СПОСОБА ДОСТАВКИ КОНЕЦ

// ДВОЙНОЙ РАНДЖЕ НАЧАЛО
  let filterMenuRange = document.querySelectorAll('.filter-menu-filter')
   // lowerview = document.querySelector('#lowerview'),
   // upperSlider = document.querySelector('#upper'),
   // lowerVal = parseInt(lowerSlider.value);
   // upperVal = parseInt(upperSlider.value);

   filterMenuRange.forEach(item => {
     let lowerSlider = item.querySelector('.lower'),
     upperSlider = item.querySelector('.upper'),
     lowerInput = item.querySelector('.lower-input'),
     upperInput = item.querySelector('.upper-input'),
     lowerVal = parseInt(lowerSlider.value);
     upperVal = parseInt(upperSlider.value);

     function updateSlider()
     {
       lowerVal = parseInt(lowerSlider.value);
       upperVal = parseInt(upperSlider.value);
       lowerInput.value = lowerVal
       upperInput.value = upperVal
     }
     function updateInput()
     {
       lowerVal = parseInt(lowerInput.value);
       upperVal = parseInt(upperInput.value);
       lowerSlider.value = lowerVal
       upperSlider.value = upperVal
     }
     upperSlider.oninput = function() {
        updateSlider()
      //   if (upperVal < lowerVal + 4) {
      // lowerSlider.value = upperVal - 4;
      //
      // if (lowerVal == lowerSlider.min) {
      //    upperSlider.value = 4;
      // }
   // }
     };
     lowerSlider.oninput = function(){
       updateSlider()
      //  if (lowerVal > upperVal - 4) {
      // upperSlider.value = lowerVal + 4;
      //
      // if (upperVal == upperSlider.max) {
      //    lowerSlider.value = parseInt(upperSlider.max) - 4;
      // }
   //
   // }
     }
     lowerInput.oninput = function(){
      updateInput()
     //  if (lowerVal > upperVal - 4) {
     // upperSlider.value = lowerVal + 4;
     // upperInput.value = lowerVal + 4;
     // if (upperVal >= upperInput.max) {
     //    lowerInput.value = parseInt(upperInput.max) - 4;
     // }
     // }
   }
     upperInput.oninput = function(){
       updateInput()
     //   if (upperVal < lowerVal + 4) {
     // lowerInput.value = upperVal - 4;
     // lowerInput.value = upperVal - 4;
     // if (lowerVal <= lowerInput.min) {
     //    upperInput.value = 4;
     // }
     // }
   }
   });


// lowerview.oninput = function(){
//    if(parseInt(lowerview.value) >= parseInt(lowerview.max))
//       {
//          lowerview.value = parseInt(lowerview.max)
//       }
//    lowerSlider.value = lowerview.value
//    lowerSliderUpdate()
// }
// ДВОЙНОЙ РАНДЖЕ КОНЕЦ

// МОДАЛКИ НАЧАЛО
const myModal = new HystModal({
    linkAttributeName: "data-hystmodal",
    // настройки (не обязательно), см. API
});
// МОДАЛКИ КОНЕЦ

})
