import React from 'react'
import { YMaps, Map } from 'react-yandex-maps'
import "./MapComponent.scss"

function MapComponent() {
    return (
        <div className='maps'>
            <div className="map-title">
                <p>Xarita</p>
                <span>41.328751, 69.244203</span>
            </div>
            <YMaps>
                <div className='map-wrapper'>
                    <Map className='map' defaultState={{ center: [41.32, 69.24], zoom: 15 }} />
                </div>
            </YMaps>
        </div>
    )
}

export default MapComponent