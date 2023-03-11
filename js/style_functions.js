// nav_fixed
const nav_fixed = document.querySelector('.nav-fixed'),
      nav_fixed_model = nav_fixed.querySelector('.model'),
      nav_fixed_product = nav_fixed.querySelector('.product')

function nav_fixed_function() {
  nav_fixed.style.background = 'rgba(20, 20, 20, 0.666)'
  nav_fixed.style.borderBottom = '1px solid rgba(255, 255, 255, .2)'
  nav_fixed_model.style.color = '#c1c1c1'
  nav_fixed_product.style.color = 'white'
}

function nav_fixed_function_reverse() {
  nav_fixed.style.background = 'rgba(255, 255, 255, 0.666)'
  nav_fixed.style.borderBottom = '1px solid rgba(0, 0, 0, .2)'
  nav_fixed_model.style.color = '#4b4b4b'
  nav_fixed_product.style.color = 'black'
}

// placeholder_1
const placeholder_1 = document.querySelector('.placeholder:nth-child(1)')

      placeholder_1.style.backgroundPosition = '-200% 40%, 320% 60%'

const placeholder_1_feature_1 = placeholder_1.querySelector('.feature.one'),
      placeholder_1_feature_2 = placeholder_1.querySelector('.feature.two'),
      placeholder_1_feature_3 = placeholder_1.querySelector('.feature.three'),
      placeholder_1_feature_4 = placeholder_1.querySelector('.feature.four')

      placeholder_1_feature_1.style.left = '-100%'
      placeholder_1_feature_2.style.right = '-100%'
      placeholder_1_feature_3.style.left = '-100%'
      placeholder_1_feature_4.style.right = '-100%'

function placeholder_1_function() {
  placeholder_1.style.backgroundPosition = '-30% 40%, 130% 60%'
  placeholder_1_feature_1.style.left = '20%'
  placeholder_1_feature_1.style.transition = 'left .5s'
  placeholder_1_feature_2.style.right = '8%'
  placeholder_1_feature_2.style.transition = 'right .4s'
  placeholder_1_feature_3.style.left = '15%'
  placeholder_1_feature_3.style.transition = 'left .6s'
  placeholder_1_feature_4.style.right = '15%'
  placeholder_1_feature_4.style.transition = 'right .4s'
}

// placeholder_2
const placeholder_2 = document.querySelector('.placeholder:nth-child(2)'),
      placeholder_2_text = placeholder_2.querySelector('.text')

placeholder_2_text.style.opacity = '0'

function placeholder_2_function() {
  placeholder_2_text.style.opacity = '1'
  placeholder_2_text.style.transition = 'opacity .4s'
}

// placeholder_3
const placeholder_3 = document.querySelector('.placeholder:nth-child(3)'),
      placeholder_3_features = placeholder_3.querySelectorAll('.feature h1')

const placeholder_3_feature_1 = placeholder_3.querySelector('.feature.one h1'),
      placeholder_3_feature_2 = placeholder_3.querySelector('.feature.two h1'),
      placeholder_3_feature_3 = placeholder_3.querySelector('.feature.three h1'),
      placeholder_3_feature_4 = placeholder_3.querySelector('.feature.four h1'),
      placeholder_3_feature_5 = placeholder_3.querySelector('.feature.five h1')

placeholder_3_features.forEach(feature => {
  feature.style.transform = 'translateY(200px)'
})

function placeholder_3_function() {
  placeholder_3_features.forEach(feature => {
    feature.style.transform = 'none'
  })
  placeholder_3_feature_1.style.transition = 'transform .4s'
  placeholder_3_feature_2.style.transition = 'transform .5s'
  placeholder_3_feature_3.style.transition = 'transform .7s'
  placeholder_3_feature_4.style.transition = 'transform .6s'
  placeholder_3_feature_5.style.transition = 'transform .45s'
}

// placeholder_4
const placeholder_4 = document.querySelector('.placeholder:nth-child(4)'), 
      placeholder_4_text = placeholder_4.querySelector('.text')

placeholder_4_text.style.opacity = '0'

function placeholder_4_function() {
  placeholder_4_text.style.opacity = '1'
  placeholder_4_text.style.transition = 'opacity .4s'
}


// exports
export { 
  nav_fixed, nav_fixed_function, nav_fixed_function_reverse,
  placeholder_1, placeholder_1_function, 
  placeholder_2, placeholder_2_text, placeholder_2_function,
  placeholder_3, placeholder_3_function,
  placeholder_4, placeholder_4_text, placeholder_4_function
}