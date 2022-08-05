import React, { useRef } from 'react'
import CloudUploadIcon from '../../../assets/Svgs/CloudUploadIcon'
import ErrRectangleIcon from '../../../assets/Svgs/ErrRectangleIcon'

function FileUploadComponent({ title, custom }) {

    const inputFileRef = useRef();

    const onFileChangeCapture = (e) => {
        console.log(e.target.files);
    };

    const FileInputClick = () => {
        inputFileRef.current.click();
    }

    return (
        <div className="logo-upload__card">
            <div className="logo-upload__title">
                {title}
            </div>
            <div className="logo-upload__section">
                <div className="logo-upload">
                    <CloudUploadIcon />
                    <div className="upload-text">
                        <p>Rasmni shu yerga tashlang</p>
                        <p>Yoki</p>
                    </div>
                    <input ref={inputFileRef} onChangeCapture={onFileChangeCapture} type="file" id="file-input" className='visually-hidden' />
                    <button id='file-button' onClick={FileInputClick}>Faylni tanlang</button>
                </div>
            </div>
            {
                custom ?
                    <div className="uploaded-logos">
                        <ul className="logos__list">
                            <li className="logos__item">
                                <div className="x-icon">
                                    <ErrRectangleIcon />
                                </div>
                            </li>
                        </ul>
                    </div>
                    :
                    null
            }
        </div>
    )
}

export default FileUploadComponent