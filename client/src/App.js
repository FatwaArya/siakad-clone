import React from 'react'
import Utama from './pages/utama'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render(){
    return(
      <div> <hr />
        <Link to="/">Home</Link> |
        <Link to="/siswa">Siswa</Link> |
        <Link to="/petugas">Petugas</Link> |
        <Link to="/kelas">Kelas</Link> |
        <Link to="/spp">SPP</Link> |
        <Link to="/transaksi">Transaksi</Link> |
        <Link to="/histori">Histori</Link><hr />
        <p><Utama /></p>
      </div>
    );
  }
}


export default App;
