import React from 'react'
import {Routes, Route} from 'react-router-dom';

import Login from './registrasi';
import Home from './home';
import Siswa from './siswa';
import Petugas from './petugas';
import Kelas from './kelas';
import Spp from './spp';
import Transaksi from './transaksi';
import Histori from './histori';

const Utama = () => (
    <Routes>
    <Route exact path = "/" element={<Home/>} />
    <Route path = "/registrasi" element={<Login/>} />
    <Route path = "/siswa" element={<Siswa/>} />
    <Route path = "/petugas" element={<Petugas/>} />
    <Route path = "/kelas" element={<Kelas/>} />
    <Route path = "/spp" element={<Spp/>} />
    <Route path = "/transaksi" element={<Transaksi/>} />
    <Route path = "/histori" element={<Histori/>} />
</Routes>
)

export default Utama;