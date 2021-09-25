import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>TOP 5 NAJBOLJIH TORTI</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpeg'
              text='Reform najbolja torta'
              label='Torta'
              path='#'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='Cheesecake najbolja torta'
              label='Torta'
              path='#'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='Baron torta najbolja torta'
              label='Torta'
              path='#'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lesnik torta najbolja torta'
              label='Torta'
              path='#'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Plazma torta najbolja torta'
              label='Torta'
              path='#'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
