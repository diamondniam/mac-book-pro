// imports
import { 
  nav_hover, nav_search_cancel_function, nav_search_click_function
} from "./nav_functions.js"

import { 
  counter,
  placeholder_5, placeholder_5_values, placeholder_5_current_values, placeholder_5_function,
  placeholder_6, placeholder_6_values, placeholder_6_current_values, placeholder_6_function 
} from "./placeholder_counter_function.js";

import { 
  nav_fixed_function, nav_fixed, nav_fixed_function_reverse, 
  placeholder_2, placeholder_2_text, placeholder_2_function,
  placeholder_1, placeholder_1_function, placeholder_3, placeholder_3_function,
  placeholder_4, placeholder_4_text, placeholder_4_function
} from './style_functions.js'

// general
const body = document.body,
      html = document.documentElement

// nav
const nav = document.querySelector('.nav'),
      nav_elements = nav.querySelectorAll('.nav > *')

const nav_search = nav.querySelector('.search-icon'),
      nav_search_input = document.querySelector('.input'),
      nav_search_cancel = nav_search_input.querySelector('.cancel')

nav_hover()
nav_search_click_function()
nav_search_cancel_function()

// header
const header = document.querySelector('.header'),
      header_product = header.querySelector('.product')

header_product.style.opacity = '0'

setTimeout(() => {
  header_product.style.opacity = '1'
  header_product.style.transition = 'opacity .4s'
}, 1000)

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

  if (placeholder_3_activation <= 0) {
    placeholder_3_function()
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
  nav, nav_elements, nav_search_cancel, nav_search_input, nav_search
}