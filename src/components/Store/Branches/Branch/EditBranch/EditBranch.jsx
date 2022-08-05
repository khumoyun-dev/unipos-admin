import React from 'react'
import SubNavbar from '../../../../Navbar/SubNavbar/SubNavbar'
import SaveIcon from '../../../../../assets/Svgs/SaveIcon'
import BackArrow from '../../../../../assets/Svgs/BackArrow'

import "./EditBranch.scss"
import SmallStarIcon from '../../../../../assets/Svgs/SmallStarIcon'
import FileUploadComponent from '../../../FileUploadComponent/FileUploadComponent'
import MapComponent from '../../../MapComponent/MapComponent'

function EditBranch() {
    return (
        <div className="edit-branch__wrapper">
            <SubNavbar title="Tahrirlash" link="/store/my/branch/save" buttonIcon={<SaveIcon />} buttonText="Saqlash" backIcon={<BackArrow className="bar-backArrow" />} />

            <div className="edit-branch__main">
                <div className="main-left">
                    <div className="branch-details">
                        <label className="label">
                            <p>Filial nomi <sup><SmallStarIcon /></sup></p>
                            <input type="text" defaultValue="M. Ulug’bek filiali" />
                        </label>
                        <label className="label">
                            <p>Hudud <sup><SmallStarIcon /></sup></p>
                            <select>
                                <option>Toshkent shahar</option>
                                <option>Toshkent shahar</option>
                            </select>
                        </label>
                        <label className="label">
                            <p>Tuman <sup><SmallStarIcon /></sup></p>
                            <select>
                                <option>Mirzo Ulugbek tumani</option>
                                <option>Toshkent shahar</option>
                            </select>
                        </label>
                        <label className="label">
                            <p>Do'kon manzili <sup><SmallStarIcon /></sup></p>
                            <input type="text" defaultValue="Sayram ko’chasi, 6-uy" />
                        </label>
                    </div>
                    <div className="working-times">
                        <div className="working-times__title">
                            <p>Do’kon ish vaqti</p>
                        </div>
                        <div className="working-times__main">
                            <label className="label">
                                <p>Hafta</p>
                                <select>
                                    <option>Dush / Se / Chor / Pa / Ju / Sha</option>
                                </select>
                            </label>
                            <label className="label">
                                <p>Ish vaqti</p>
                                <select>
                                    <option>9:00 - 19:00</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="main-right">
                    <FileUploadComponent title="Rasm" custom={false} />
                    <MapComponent />
                </div>
            </div>
        </div>
    )
}

export default EditBranch