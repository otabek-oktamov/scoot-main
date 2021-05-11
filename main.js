  document.querySelector('.burger-btn').addEventListener('click',()=>{
      document.querySelector('.burger-btn').classList.toggle('is-open')
      document.querySelector('.site-nav__list-mobile').classList.toggle('active')
      document.querySelector('.scootin-btn').classList.toggle('active')
      document.querySelector('.site-body').classList.toggle('none')
  })