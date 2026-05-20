
// REVEAL

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }

  });

},{
  threshold:.12
});

reveals.forEach(section=>{
  observer.observe(section);
});

// TOP BUTTON

const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll',()=>{

  if(window.scrollY > 500){
    topBtn.classList.add('show');
  }else{
    topBtn.classList.remove('show');
  }

});

topBtn.addEventListener('click',()=>{

  window.scrollTo({
    top:0,
    behavior:'smooth'
  });

});