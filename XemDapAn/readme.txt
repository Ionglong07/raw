run on devtool
code:
fetch('https://ionglong07.github.io/raw/XemDapAn/showDanap.js')
  .then(r=>r.text())
  .then(code=>{
    eval(code);
    showDapAn();
})
