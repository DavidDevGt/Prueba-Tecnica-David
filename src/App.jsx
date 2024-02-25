import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Cards from './components/Cards' // <---- tu componente Cards
import Footer from './components/Footer'

const dataHero = [
  {
    id: 0,
    img: 'https://s3-alpha-sig.figma.com/img/b85d/2881/06ceda07fc5a158189004275a07cca0d?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TPZkuo8WmBQyV0dyHFWOWmKgl95ASciMxTg82CNg9tsr59eEzZyGrxiYM0r-D-7f3jeM397g1byeVHX-hicY5ZfaFqwLkr1Lp9qjOHK3kO2RiuVBDKNAKYmSFPzBspUTMli9-YA~bQ4-Q-zqi~6-1738HbUYqSQgqAAPGagHbrNCGT14YMG8z5oADoZJDMAitctFYoHr0QDPy-mw1OOOeaFivWqlEosEyuaqalBNiu3of~Y3zi9EJqWU69yVmnjxF5EuASGO4T6GEYZ7lGDVpKU9GeFWEhVvEuladDz0LSG98HuptCmqhswYRIArVXDaLf0X1EZhY7u42JZpIfEsdg__',
    title: '',
  },
  // ... otros objetos
];

function App() {
  return (
    <>
      <Navbar />
      
      <section className='hero-section'>
        <Slider dataSlider={dataHero} />
      </section>

      {/* Cards Section */}
      <section className='cards-section'>
        <Cards />
      </section>

      <Footer />
    </>
  );
}

export default App;
