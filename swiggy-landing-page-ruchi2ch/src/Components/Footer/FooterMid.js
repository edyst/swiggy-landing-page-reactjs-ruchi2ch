import React from 'react'
import './FooterMid.css'
import ACities from './Cities/CitiesA'
import DCities from './Cities/CitiesD'
import KCities from './Cities/CitiesK'
import PCities from './Cities/CitiesP'
import Places from './Places'


export default function FooterMid() {
    const citiesA = ACities.map(item => <Places key={item.id} name={item.name}/>)
    const citiesD = DCities.map(item => <Places key={item.id} name={item.name}/>)
    const citiesK = KCities.map(item => <Places key={item.id} name={item.name}/>)
    const citiesP = PCities.map(item => <Places key={item.id} name={item.name}/>)
    
    return (
        <div>
        <h2>We deliver to</h2>
        <div className="container">
            <ul>
            {citiesA}
            </ul>
            <ul>
            {citiesD}
            </ul>
            <ul>
            {citiesK}
            </ul>
            <ul>
            {citiesP}
            </ul>
        </div>
        </div>
    )
}
