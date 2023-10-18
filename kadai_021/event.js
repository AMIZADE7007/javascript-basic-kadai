const change = document.getElementById('btn');

setTimeout(() => {
    document.getElementById('text').innerHTML = 'ボタンがクリックされました';  
    change.addEventListener('click', ()=>{ 
    });
  }, 2000);
