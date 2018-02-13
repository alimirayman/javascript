for (var i = 0; i < 3; i++) {
    setTimeout((i)=>{ 
      console.log( performance.now() + " " + i) 
    }, 3000, i)
}