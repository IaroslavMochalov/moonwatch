const timeline = gsap.timeline({defaults: {duration:0.75}});

       timeline
       .from('.logo, nav ul li, .search, .menu', { x:'-100%', ease: 'power2.out', opacity: 0})
       .from('.line-one', { y:'-100%', ease: 'power2.out'})
       .from('.line-two', { y:'-100%', ease: 'power2.out'})
       .from('.img',{y:'-100%', ease:'power2.out'})
       .from('.title',{y:'-100%', ease:'power2.out',opacity: 0})  
       .from('.btn',{y:'-100%', ease:'power2.out', opacity:0})
       .from('.media ul > *', { ease:'power2.out', opacity: 0}) 