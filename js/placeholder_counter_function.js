// placeholder_5
const placeholder_5 = document.querySelector('.placeholder:nth-child(5)'),
  placeholder_5_app_list = placeholder_5.querySelectorAll('.app-list .app'),
  placeholder_5_values = placeholder_5.querySelectorAll('.index .value')
const placeholder_5_lines = placeholder_5.querySelectorAll('.index .line'),
  placeholder_5_lines_width = getComputedStyle(placeholder_5_lines[0]).getPropertyValue('width')

placeholder_lines_default(placeholder_5_lines)

placeholder_5_values.forEach(value => {
  value.innerHTML = 0 + 'x'
})

const placeholder_5_apps = [
<<<<<<< HEAD
  { placeholder_5_xcode          : [3.7, 3.7, 2.1, 2.1] },
  { placeholder_5_logic_pro      : [3.0, 3.0, 1.7, 1.7] },
  { placeholder_5_affinity_photo : [2.4, 2.4, 1.7, 1.7] }
=======
  { placeholder_5_xcode: [3.7, 3.7, 2.1, 2.1] },
  { placeholder_5_logic_pro: [3.0, 3.0, 1.7, 1.7] },
  { placeholder_5_affinity_photo: [2.4, 2.4, 1.7, 1.7] }
>>>>>>> dev
]

let placeholder_5_current_values = [3.7, 3.7, 2.1, 2.1]

placeholder_5_app_list.forEach((app, index) => {
  app.onclick = () => {
    clear_active_function(placeholder_5_app_list)
    app.classList.add('active')

    if (app.classList.contains('active')) {
      placeholder_5_current_values = (Object.values(placeholder_5_apps[index]))[0]

      for (let i = 0; i < placeholder_5_values.length; i++) {
        counter(0, placeholder_5_current_values[i], i, placeholder_5_values, 30)
      }

      placeholder_lines_default(placeholder_5_lines)

      setTimeout(() => {
        placeholder_5_function()
      }, 400)
    }
  }
})

function placeholder_5_function() {
  placeholder_5_lines.forEach(line => {
    line.style.width = placeholder_5_lines_width
    line.style.transition = 'width .6s'
  })
}

// placeholder_6
<<<<<<< HEAD
const placeholder_6          = document.querySelector('.placeholder:nth-child(6)'),
      placeholder_6_app_list = placeholder_6.querySelectorAll('.app-list .app'),
      placeholder_6_values   = placeholder_6.querySelectorAll('.index .value')

const placeholder_6_lines             = placeholder_6.querySelectorAll('.index .line'),
      placeholder_6_long_lines_width  = getComputedStyle(placeholder_6_lines[0]).getPropertyValue('width'),
      placeholder_6_short_lines_width = getComputedStyle(placeholder_6_lines[1]).getPropertyValue('width')
=======
const placeholder_6 = document.querySelector('.placeholder:nth-child(6)'),
  placeholder_6_app_list = placeholder_6.querySelectorAll('.app-list .app'),
  placeholder_6_values = placeholder_6.querySelectorAll('.index .value')

const placeholder_6_lines = placeholder_6.querySelectorAll('.index .line'),
  placeholder_6_long_lines_width = getComputedStyle(placeholder_6_lines[0]).getPropertyValue('width'),
  placeholder_6_short_lines_width = getComputedStyle(placeholder_6_lines[1]).getPropertyValue('width')
>>>>>>> dev

placeholder_lines_default(placeholder_6_lines)

placeholder_6_values.forEach(value => {
  value.innerHTML = 0 + 'x'
})

let placeholder_6_current_values = [13.4, 9.4, 2.9, 1.7]

const placeholder_6_apps = [
<<<<<<< HEAD
  { placeholder_6_final_cut       : [13.4, 9.4, 2.9 , 1.7] },
  { placeholder_6_adobe_photoshop : [3.5, 3.3, 2.1, 2.0] },
  { placeholder_6_affinity_photo  : [8.5, 5.6, 4.5, 2.9] }
=======
  { placeholder_6_final_cut: [13.4, 9.4, 2.9, 1.7] },
  { placeholder_6_adobe_photoshop: [3.5, 3.3, 2.1, 2.0] },
  { placeholder_6_affinity_photo: [8.5, 5.6, 4.5, 2.9] }
>>>>>>> dev
]

placeholder_6_app_list.forEach((app, index) => {
  app.onclick = () => {
    clear_active_function(placeholder_6_app_list)
    app.classList.add('active')

    if (app.classList.contains('active')) {
      placeholder_6_current_values = (Object.values(placeholder_6_apps[index]))[0]

      for (let i = 0; i < placeholder_6_values.length; i++) {
        counter(0, placeholder_6_current_values[i], i, placeholder_6_values, 20)
      }

      placeholder_lines_default(placeholder_6_lines)

      setTimeout(() => {
        placeholder_6_function()
      }, 400)
    }
  }
})

function placeholder_6_function() {
  placeholder_6_lines.forEach((line, index) => {
    if (index === 1 || index === 3) {
      line.style.width = placeholder_6_short_lines_width
      line.style.transition = 'width .4s'
    } else {
      line.style.width = placeholder_6_long_lines_width
      line.style.transition = 'width .6s'
    }
  })
}

// counter_function
function counter(start, max_value, index, placeholder_of, delay) {
  let thisCounter = start
  let result
  setInterval(() => {
    thisCounter += 0.1
    result = parseFloat(thisCounter.toFixed(1))
    if (result <= max_value) {
      placeholder_of[index].innerHTML = result.toFixed(1).replace(/\./, ',') + 'x'
    }
  }, delay)
}

// placeholder_lines_default
function placeholder_lines_default(placeholder_with_line) {
  placeholder_with_line.forEach(line => {
    line.style.width = '10px'
  })
}

// clear_active_function
function clear_active_function(placeholder_with_list) {
  placeholder_with_list.forEach(app => {
    app.classList.remove('active')
  })
}

// exports
export {
  counter,
  placeholder_5, placeholder_5_values, placeholder_5_current_values, placeholder_5_function,
  placeholder_6, placeholder_6_values, placeholder_6_current_values, placeholder_6_function
}