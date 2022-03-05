# SIAKAD CLONE - Explain

Halo ini adalah penjelasan baris kode yang ada di SIAKAD CLONE berdasarkan pemahamanku. Karena baris kode yang aku dapatkan ini berdasarkan [tutorial youtube](https://youtu.be/YocRq-KesCM), maka kemungkinan besar penjelasan tidak akurat. Selain menjelaskan, aku akan memberikan referensi-referensi tambahan sebagai further reading.

## Set - Up
- nanti nyoba nyari gmna
- ya download-download atau mungkin cuma npm start? node, mongo (pake docker aja)

## Folder Structure
- nnti nyoba nyari gimana yang ala-ala gtu

## API

### config
Folder config berfungsi untuk melakukan konfigurasi dengan hal yang luar. Contohnya adalah konfigurasi ke database

#### db.js

mari kita lihat apa yang terjadi di db.js

```
const mongoose = require('mongoose')
```
hal pertama yang dilakukan ade dalah membuat variabel yang memiliki nilai modul mongoose. [fungsi require()](https://nodejs.org/en/knowledge/getting-started/what-is-require/) memiliki kegunaan untuk meng-include module yang berada di file yang berbeda. untuk kasus ini, modul berada di file ==node_module==. mongoose perlu disertakan karena agar bisa digunakan di dalam file ```db.js```. Ingat-ingat bahwa node js adalah [unopinionated](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#is_express_opinionated) sehingga setiap ingin menggunakan sebuah module harus kita includenya terlebih dahulu.

```
const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('mongodb connected') 
}
```
selanjutnya adalah membuat koneksi ke MongoDB. kenapa kita [menggunakan mongoose](https://stackoverflow.com/questions/18531696/why-do-we-need-what-advantages-to-use-mongoose)? mongoose memiliki beberapa keunggulan yang bisa membantu untuk bekerja dengan dynamic collection dan [masih banyak lagi](wait).

untuk mengkoneksi ke mongoDB digunakan [async-await function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function). Kenapa menggunakan asynchronous di sini? ==jujur gwe kagak tau karena di docsnya gitu kwkwkw ==





