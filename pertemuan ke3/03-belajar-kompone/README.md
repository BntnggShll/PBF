**Praktek 1**
Langkah 1 :Buat Komponen Baru
![Step-1](img/1.png)

Langkah 2 : Import Komponen
![Step-2](img/7.png)


**Praktek 2**
Langkah 1 :Buat Komponen Baru
![Step-1](img/3.png)

Langkah 2 : Import Komponen
![Step-2](img/6.png)


**Praktek 3**
Langkah 1 :Buat Komponen Baru
![Step-1](img/p3g1.png)

Langkah 2 : Import Komponen
![Step-2](img/p3g2.png)

Langkah 3: Ubah ekspresi URL di src
![Step-3](img/p3g3.png)


**Praktek 4**
Langkah 1 :Buat Komponen Baru
![Step-1](img/p4g1.png)

Langkah 2: Buat fungsi getImageUrl
![Step-2](img/p4g2.png)

Langkah 3: Buat komponen baru
![Step-3.1](img/p4g3.png)
Tambahkan fungsi getImageUrlV2 seperti berikut di file yang sama yaitu utils.tsx
![Step-3.2](img/p4g31.png)


Langkah 4: Buat komponen baru MyProfileV2
![Step-4](img/p4g4.png)


**Soal**
Soal 1
![Soal-1](img/5.png)
memanggil gambar dengan menggunakan domain tertentu dalam aplikasi Next.js, Anda perlu mengonfigurasi domain tersebut di file next.config.mjs. Selain itu, penting juga untuk mengimpor komponen yang telah dibuat ke dalam halaman yang dituju, misalnya dengan menggunakan sintaks import Profile from "asal-components". Pada tahap sebelum konfigurasi domain, mungkin terjadi beberapa error yang dapat diatasi dengan menambahkan konfigurasi berikut di file next.config.mjs:

Soal 2
![Soal-2](img/8.png)
menggunakan komponen Gallery untuk menyederhanakan tampilan pada file page.tsx. Dengan memanfaatkan komponen tersebut, file page.tsx menjadi lebih bersih dan fokus pada pemanggilan komponen yang spesifik.

Soal 3
Error di kode disebabkan oleh penggunaan class sebagai atribut kelas dan kurangnya import React. Perubahan yang saya buat adalah praktik umum dalam pengembangan React. Penggunaan className dan import React adalah konvensi yang harus diikuti agar komponen React berfungsi dengan baik


Soal 5
![Soal-5](img/s5.png)
Modifikasi pada antarmuka melibatkan perubahan signifikan, seperti penggantian warna latar belakang menjadi hitam untuk memberikan nuansa yang berbeda. Selain itu, satu gambar tambahan telah dimasukkan ke dalam tata letak, dilengkapi dengan informasi nama dan deskripsi orang yang terdapat pada gambar tersebut, yang ditempatkan di bagian bawah dari tiga gambar sebelumnya. Untuk mempertegas perbedaan visual, saya juga menyisipkan elemen garis putih sebagai pemisah antar bagian.

Soal 6
![Soal-6](img/s6.png)
Hingga saat ini, terlihat adanya upaya penyederhanaan pada file `page.tsx` karena komponen-komponennya telah dipisahkan ke dalam direktori `../component`. Selain itu, terdapat modifikasi pada tampilan gambar di bagian bawah dengan melakukan perubahan ukuran, yang memberikan sentuhan penyegaran pada elemen visual tersebut.

Soal 7,8,9
![Soal-7-9](img/s789.png)
Keterhubungan yang baik antar berbagai bagian sangat penting agar komponen dapat dipanggil dan berinteraksi dengan optimal tanpa menghadapi kendala. Pada tampilan akhir ini, terdapat penambahan tiga foto ilmuwan beserta biodata mereka secara berurutan, yang ditempatkan dengan rapi di sudut kiri. Hal ini memberikan sentuhan lebih lanjut pada keberagaman visual dan menyediakan informasi yang relevan terkait ilmuwan tersebut.


