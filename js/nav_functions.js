// imports
import {
  body,
  nav, nav_elements, nav_search_input,
  nav_search, nav_search_cancel,
  mobile_nav, mobile_nav_links, mobile_nav_input, nav_burger, nav_burger_spans
} from "./main_app.js"

// nav_animations
let delay = 30

function nav_elements_hide() {
  let index_reverse = nav_elements.length

  setTimeout(() => {
    nav_search_input.style.marginLeft = '0px'
    nav_search_input.style.visibility = 'visible'
  }, 200)

  nav_elements.forEach((element, index) => {
    setTimeout(() => {
      if (index_reverse >= 0) {
        index_reverse--
      } else { return }
      nav_elements[index_reverse].style.opacity = '0'
      nav_elements[index_reverse].style.visibility = 'hidden'
      nav_elements[index_reverse].style.transition = 'opacity .4s, visibility .4s'
    }, index * delay)
  })

  body.style.filter = 'brightness(70%)'
  body.style.transition = 'filter .4s'
  nav_search_input.style.filter = 'brightness(130%)'
}

function nav_elements_display() {
  nav_search_input.style.marginLeft = '100%'
  nav_search_input.style.visibility = 'hidden'

  nav_elements.forEach((element, index) => {
    setTimeout(() => {
      nav_elements[index].style.opacity = '.7'
      nav_elements[index].style.visibility = 'visible'
    }, index * delay + 200)
  })

  body.style.filter = 'none'
  nav_search_input.style.filter = 'none'
}

function nav_search_click_out() {
  window.onclick = e => {
    let target = e.target

    if (
      target !== nav_search_input.querySelector('.search') &&
      target !== nav_search_input.querySelector('.search-icon') &&
      target !== nav_search &&
      target !== nav_search_input
    ) {
      nav_elements_display()
      scroll_enable()
      nav_hover()
    }
  }
}

// nav_search_cancel_function
function nav_search_cancel_function() {
  nav_search_cancel.onclick = () => {
    nav_elements_display()
    scroll_enable()
    nav_hover()

    nav_search_input.querySelector('.search').blur()
  }
}

// mobile_nav_function
function mobile_nav_hover() {
  mobile_nav_links.forEach(link => {
    link.onmouseover = () => {
      link.style.opacity = '1'
    }
    link.onmouseout = () => {
      link.style.opacity = '.7'
    }
  })

}
// mobile_nav_tap_function
function mobile_nav_tap() {
  mobile_nav_links.forEach(link => {
    link.onclick = () => {
      link.style.opacity = '1'
    }
  })
}

// nav_burger_click_function
function nav_burger_click_function() {
  mobile_nav.classList.toggle('active')

  if (mobile_nav.classList.contains('active')) {
    nav_burger_spans[0].style.transform = 'rotate(135deg)'
    nav_burger_spans[0].style.top = '50%'
    nav_burger_spans[1].style.transform = 'rotate(-135deg)'
    nav_burger_spans[1].style.top = '50%'

    mobile_nav.style.height = '100vh'
    mobile_nav.style.padding = '20px 50px'
    mobile_nav.style.visibility = 'visible'

    mobile_nav_links.forEach(link => {
      link.style.borderBottom = '1px solid rgba(255, 255, 255, 0.3)'
      link.style.opacity = '.7'
    })
    mobile_nav_input.style.opacity = '1'
    scroll_lock()
    mobile_scroll_lock()

  } else {
    nav_burger_spans[0].style.transform = 'none'
    nav_burger_spans[0].style.top = '40%'
    nav_burger_spans[1].style.transform = 'none'
    nav_burger_spans[1].style.top = '60%'

    mobile_nav.style.height = '0vh'
    mobile_nav.style.padding = '0px 50px'
    mobile_nav.style.visibility = 'hidden'

    mobile_nav_links.forEach(link => {
      link.style.borderBottom = 'none'
      link.style.opacity = '0'
    })
    mobile_nav_input.style.opacity = '0'
    scroll_enable()
    mobile_scroll_enable()
  }
}

// nav_hover
function nav_hover() {
  nav_elements.forEach(element => {
    element.onmouseover = () => {
      element.style.opacity = '1'
    }
    element.onmouseout = () => {
      element.style.opacity = '.7'
    }
  })
}

// nav_hover_disable
function nav_hover_disable() {
  nav_elements.forEach(element => {
    element.onmouseover = () => { }
    element.onmouseout = () => { }
  })
}

// nav_tap
function nav_tap() {
  nav_elements.forEach(element => {
    element.onclick = () => {
      element.style.opacity = '1'
    }
  })
}

// nav_search_click_function
function nav_search_click_function() {
  nav_search.onclick = () => {
    nav_elements_hide()
    nav_search_click_out()
    scroll_lock()
    nav_hover_disable()

    setTimeout(() => {
      nav_search_input.querySelector('.search').focus()
    }, 400)
  }
}

// scroll_lock & scroll_enable
function scroll_lock() {
  window.onscroll = function () {
    window.scrollTo(0, 0)
  }
}
function scroll_enable() {
  window.onscroll = function () { }
}

function mobile_scroll_lock() {
  body.ontouchstart = (e) => {
    e.preventDefault()
  }
}
function mobile_scroll_enable() {
  body.ontouchstart = (e) => {}
}

// exports
export {
  nav_elements_hide, nav_elements_display, nav_search_click_out, nav_hover, nav_search_click_function, nav_search_cancel_function, scroll_lock, scroll_enable, mobile_nav_hover, nav_burger_click_function, nav_tap, mobile_nav_tap
}