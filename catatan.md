Catatan yang tak pelajarin selama aku ngoding ini

## pelajaran
1. env iku harus nek dir yang sama, lek ada di dir yang beda maka harus di ==require== terlebih dulu
2. app.use('/api/auth', require('.routes/auth')) alasan error karena routes kurang tanda /, coba diliat error yang di throw yaitu undefine module, pasti ada kesalahan di bagian require modulnya. 
3. app.use('/api/auth', require('./routes/auth'))
- seng pertama iki path pas awmu kate ngakses e, opo
-  bedane mbek routes dong?, function callback iki gunane digae opo
-  kenapa pas post baru muncul?
-  nyapo gak jipuk hasil export modul auth tapi malah di require?


## mematahkan asumsi
1. app.use([path,] callback [, callback...])

## pertanyaan
1. apa itu callback function

## error and resolve
Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent 
to the client
    at new NodeError (node:internal/errors:371:5)
    at ServerResponse.setHeader (node:_http_outgoing:576:11)
    at ServerResponse.header (D:\Kelas 11\#Produktif\Semester 2\siakad\api\node_modules\express\lib\response.js:776:10)
    at ServerResponse.send (D:\Kelas 11\#Produktif\Semester 2\siakad\api\node_modules\express\lib\response.js:170:12)
    at exports.register (D:\Kelas 11\#Produktif\Semester 2\siakad\api\controllers\auth.js:4:9)
    at Layer.handle [as handle_request] (D:\Kelas 11\#Produktif\Semester 2\siakad\api\node_modules\express\lib\router\layer.js:95:5)        
    at next (D:\Kelas 11\#Produktif\Semester 2\siakad\api\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (D:\Kelas 11\#Produktif\Semester 2\siakad\api\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (D:\Kelas 11\#Produktif\Semester 2\siakad\api\node_modules\express\lib\router\layer.js:95:5)        
    at D:\Kelas 11\#Produktif\Semester 2\siakad\api\node_modules\express\lib\router\index.js:281:22