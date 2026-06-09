const {createServer} = require('http');
const {readFileSync,existsSync,statSync} = require('fs');
const path = require('path');
const mime = {'html':'text/html','js':'text/javascript','css':'text/css','svg':'image/svg+xml','png':'image/png','ico':'image/x-icon','json':'application/json'};
const s=createServer((req,res)=>{
  let url = req.url.replace(/\?.*/,'');
  if (url === '/') url = '/index.html';
  let f = path.join('out', url);
  try { if (statSync(f).isDirectory()) f = path.join(f, 'index.html'); } catch(e) {}
  try{
    if(!existsSync(f)){res.writeHead(404);res.end('Not found');return}
    const d=readFileSync(f);
    const ext=path.extname(f).slice(1);
    res.writeHead(200,{'Content-Type':mime[ext]||'text/plain'});
    res.end(d)
  }catch(e){res.writeHead(500);res.end('Error: '+e.message)}
});
s.listen(4001,()=>console.log('Server on :4001'))
