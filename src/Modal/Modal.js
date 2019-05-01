import React from 'react'
import './Modal.css'

export default function Modal(props) {
    return (
        <dialog open className='modal'>
            <section className="modal-main">
                {props.children}
            </section>
        </dialog>
    )
}