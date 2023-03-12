// imports
import {
  nav_hover, nav_search_cancel_function, nav_search_click_function, nav_burger_click_function, mobile_nav_hover, nav_tap, mobile_nav_tap
} from "./nav_functions.js"

import {
  counter,
  placeholder_5, placeholder_5_values, placeholder_5_current_values, placeholder_5_function,
  placeholder_6, placeholder_6_values, placeholder_6_current_values, placeholder_6_function
} from "./placeholder_counter_function.js";

import {
  nav_fixed_function, nav_fixed, nav_fixed_function_reverse,
  placeholder_2, placeholder_2_text, placeholder_2_function,
  placeholder_1, placeholder_1_function, placeholder_3, placeholder_3_features_h1, placeholder_3_function,
  placeholder_4, placeholder_4_text, placeholder_4_function
} from './style_functions.js'

// general
const body = document.body,
  html = document.documentElement

function get_page_width() {
  return Math.max(
    body.scrollWidth,
    html.scrollWidth,
    body.offsetWidth,
    html.offsetWidth,
    html.clientWidth
  );
}

// nav
const nav = document.querySelector('.nav'),
  nav_elements = nav.querySelectorAll('.nav > *')

const nav_search = nav.querySelector('.search-icon'),
  nav_search_input = document.querySelector('.input'),
  nav_search_cancel = nav_search_input.querySelector('.cancel')

if (!isTouchDevice()) {
  nav_hover()
} else {
  nav_tap()
}
nav_search_click_function()
nav_search_cancel_function()

// mobile_nav
const mobile_nav = document.querySelector('.mobile-nav'),
  mobile_nav_links = mobile_nav.querySelectorAll('.link'), mobile_nav_input = mobile_nav.querySelector('.input')

const nav_burger = nav.querySelector('.burger'),
  nav_burger_spans = nav_burger.querySelectorAll('span')

if (!isTouchDevice()) {
  mobile_nav_hover()
} else {
  mobile_nav_tap()
}

nav_burger.onclick = () => {
  nav_burger_click_function()
}

// header
const header = document.querySelector('.header'),
  header_product = header.querySelector('.product')

header_product.style.opacity = '0'

setTimeout(() => {
  header_product.style.opacity = '1'
  header_product.style.transition = 'opacity .4s'
}, 1000)

// checking_device_type_function
function isTouchDevice() {
  return (('ontouchstart' in window) ||
    (navigator.maxTouchPoints > 0) ||
    (navigator.msMaxTouchPoints > 0));
}

// placeholder_3
let placeholder_3_activated = false

// scroll_function
let placeholder_5_activated = false
let placeholder_6_activated = false

window.onscroll = () => {
  // nav_fixed
  let nav_fixed_activation = placeholder_2.getBoundingClientRect().top - nav_fixed.getBoundingClientRect().height

  if (nav_fixed_activation <= 0) {
    nav_fixed_function()
  } else {
    nav_fixed_function_reverse()
  }

  // placeholder_1
  let placeholder_1_activation = placeholder_1.getBoundingClientRect().top - placeholder_1.getBoundingClientRect().height / 2

  if (placeholder_1_activation <= 0) {
    placeholder_1_function()
  }

  // placeholder_2
  let placeholder_2_activation = placeholder_2_text.getBoundingClientRect().top - placeholder_2.getBoundingClientRect().height / 2

  if (placeholder_2_activation <= 0) {
    placeholder_2_function()
  }

  // placeholder_3
  let placeholder_3_activation = placeholder_3.getBoundingClientRect().top - placeholder_3.getBoundingClientRect().height / 2

  // placeholder_3_mobile
  const placeholder_3_features = placeholder_3.querySelectorAll('.feature'),
    placeholder_3_feature_1 = placeholder_3.querySelector('.feature.one'),
    placeholder_3_feature_2 = placeholder_3.querySelector('.feature.two'),
    placeholder_3_feature_3 = placeholder_3.querySelector('.feature.three'),
    placeholder_3_feature_4 = placeholder_3.querySelector('.feature.four'),
    placeholder_3_feature_5 = placeholder_3.querySelector('.feature.five')

  function get_feature_activation(feature) {
    return feature.getBoundingClientRect().top - placeholder_3.getBoundingClientRect().height / 2
  }

  let placeholder_3_feature_1_activation = get_feature_activation(placeholder_3_feature_1)
  let placeholder_3_feature_2_activation = get_feature_activation(placeholder_3_feature_2)
  let placeholder_3_feature_3_activation = get_feature_activation(placeholder_3_feature_3)
  let placeholder_3_feature_4_activation = get_feature_activation(placeholder_3_feature_4)
  let placeholder_3_feature_5_activation = get_feature_activation(placeholder_3_feature_5)

  let placeholder_3_features_activation = [
    placeholder_3_feature_1_activation, placeholder_3_feature_2_activation, placeholder_3_feature_3_activation, placeholder_3_feature_4_activation, placeholder_3_feature_5_activation
  ]

  const placeholder_3_features_lines = placeholder_3.querySelectorAll('.feature .line')

  let placeholder_3_feature_height = parseInt(placeholder_3_feature_2.getBoundingClientRect().height) + parseInt(getComputedStyle(placeholder_3_feature_2).getPropertyValue('margin-bottom'))

  // placeholder_3_mobille_function
  if (get_page_width() < 850) {
    placeholder_3_features_h1.forEach((feature, index) => {
      if (!placeholder_3_features[index].classList.contains('active')) {
        feature.style.transform = 'translateY(200px)'
        feature.style.transition = 'transform .5s, opacity .5s'
  
        placeholder_3_features_lines[index].style.width = '0px'
        placeholder_3_features_lines[index].style.transition = 'width .4s'
      }
    })
  
    placeholder_3_features_activation.forEach((activation, index) => {
      if (activation < placeholder_3_feature_height * 2) {
        placeholder_3_features[index].style.opacity = '.2'
      }
      if (activation < placeholder_3_feature_height) {
        placeholder_3_features[index].style.opacity = '.5'
      }
      if (activation <= 0) {
        placeholder_3_features[index].style.opacity = '1'
        placeholder_3_features[index].style.transform = 'none'
        placeholder_3_features[index].transition = 'transform .4s'
  
        placeholder_3_features_h1[index].style.transform = 'none'
        placeholder_3_features_h1[index].transition = 'transform .4s'
  
        placeholder_3_features_lines[index].style.width = '30%'
  
        placeholder_3_features[index].classList.add('active')
      }
      if (activation < placeholder_3_feature_height * (-1)) {
        placeholder_3_features[index].style.opacity = '.5'
      }
      if (activation < placeholder_3_feature_height * (-2)) {
        placeholder_3_features[index].style.opacity = '.2'
      }
    })
  }
  
  if (get_page_width() > 850 && !placeholder_3_activated) {
    placeholder_3_features_h1.forEach(feature => {
      feature.style.transform = 'translateY(200px)'
      feature.style.transition = 'transform .5s, opacity .5s'
    })
    placeholder_3_features_lines.forEach(line => {
      line.style.width = '0px'
    })
    if (placeholder_3_activation <= 0) {
      placeholder_3_function()
      placeholder_3_activated = true
    }
  }

  // placeholder_4
  let placeholder_4_activation = placeholder_4_text.getBoundingClientRect().top - placeholder_4.getBoundingClientRect().height / 2

  if (placeholder_4_activation <= 0) {
    placeholder_4_function()
  }

  // placeholder_5
  let placeholder_5_activation = placeholder_5.getBoundingClientRect().top - placeholder_5.getBoundingClientRect().height / 2

  if (placeholder_5_activation <= 0 && !placeholder_5_activated) {
    for (let i = 0; i < placeholder_5_values.length; i++) {
      counter(0, placeholder_5_current_values[i], i, placeholder_5_values, 30)
    }
    placeholder_5_function()
    placeholder_5_activated = true
  }

  // placeholder_6
  let placeholder_6_activation = placeholder_6.getBoundingClientRect().top - placeholder_6.getBoundingClientRect().height / 2

  if (placeholder_6_activation <= 0 && !placeholder_6_activated) {
    for (let i = 0; i < placeholder_6_values.length; i++) {
      counter(0, placeholder_6_current_values[i], i, placeholder_6_values, 10)
    }
    placeholder_6_function()
    placeholder_6_activated = true
  }
}

// exports
export {
  body, html,
  nav, nav_elements, nav_search_cancel, nav_search_input, nav_search,
  mobile_nav, mobile_nav_links, nav_burger, mobile_nav_input, nav_burger_spans
}