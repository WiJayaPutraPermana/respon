import React from 'react';
import './Cards.css'
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Event Yang Akan Datang!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Muslim Fair'
              label='Jakarta'
              path='/event'
            />
            <CardItem
              src='images/img-21.jpeg'
              text='Bikers Muslim'
              label='Bandung'
              path='/event'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpeg'
              text='Pustaka Nusantara'
              label='Sumatra'
              path='/event'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='Muslim Creator'
              label='Bali'
              path='/event'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Jalan Halal'
              label='Jakarta'
              path='/event'
            />
          </ul>
        </div>
        <section class="home" id="home">
        <form action="#">
            <div class="search-box">
            <h1>Cari Event</h1>
                <p>Cari berdasarkan nama Event/ Kota</p>
                <select type="text" class="search-field">
            <option disabled selected>Select Event</option>
            <option value="Muslim Fair">Muslim Fair</option>
            <option value="Bikers Muslim">Bikers Muslim</option>
            <option value="Pustaka Nusantara">Pustaka Nusantara</option>
            <option value="Muslim Creator">Muslim Creator</option>
            <option value="Jalan Halal">Jalan Halal</option>
        </select>
                <select type="text" class="search-field">
            <option disabled selected>City</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Bandung">Bandung</option>
            <option value="Sumatra">Sumatra</option>
            <option value="Bali">Bali</option>
            <option value="Kalimantan">Kalimantan</option>
        </select>
                <button class="btn">Search</button>
            </div>
        </form>
    </section>
      </div>
    </div>
  );
}

export default Cards;