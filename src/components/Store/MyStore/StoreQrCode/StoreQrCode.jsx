import React from 'react'

import "./StoreQrCode.scss"

function StoreQrCode() {
    return (
        <div className="qr-code">
            <div className="qr-code__card">
                <div className="qr-code__title">
                    Maxsus kodlar
                </div>
                <div className="qr-code__section">
                    <div className="qr-code__wrapper">
                        <div className="qr-code__details">
                            <p>QR kod</p>
                            <div className="qr-code__img">
                                
                            </div>
                        </div>
                        <div className="qr-code__details">
                            <p>Maxsus raqamli kod</p>
                            <div className="qr-code__number">
                                995 226 356
                            </div>
                        </div>
                    </div>
                    <p className="qr-code__comment">
                        Kod orqali siz xodimlaringizga do’kon ma’lumotlari va do’konda ishlari uchun huquqni berasiz.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StoreQrCode