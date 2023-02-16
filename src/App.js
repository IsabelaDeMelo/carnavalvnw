import React, {Component} from 'react';
import './App.css'
import bruxa from './imgs/bruxa.png'
import fada from './imgs/fada.png'
import fantasma from './imgs/fantasma.png'
import pirata from './imgs/pirata.png'
import vampiro from './imgs/vampiro.png'
import zumbi from './imgs/zumbi.png'

class carnavalVnW extends Component {

    state = {
        cards: [
            {imagem: `${bruxa}`, titulo: 'Bruxa'},
            {imagem: `${fantasma}`, titulo: 'Fantasma'},
            {imagem: `${vampiro}`, titulo: 'Vampiro'},
            {imagem: `${zumbi}`, titulo: 'Zumbi'},
            {imagem: `${fada}`, titulo: 'Fada'},
            {imagem: `${pirata}`, titulo: 'Pirata'},
        ]
    }

    render() {
        return (
            <div className='carnaContainer'>
                 <h1>Carnaval VnW</h1>
                <section className='carnaSection'>
                    {this.state.cards.map((item)=>(
                        <div className='card'>
                        <img src={item.imagem} alt={item.titulo}/>
                        <h2>{item.titulo}</h2>
                        </div>
                    ))}
                </section>
            </div>
        )
    }
}

export default carnavalVnW;

