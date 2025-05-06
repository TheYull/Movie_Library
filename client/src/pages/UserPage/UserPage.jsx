import React from 'react'
import s from "./UserPage.module.scss"
export const UserPage = () => {
  return (
    <div className='container media'>
        <div className={s.font_container}>

                <div className={s.avatar}>U</div>
                <div className={s.text_container}>
                    <h1>User Name</h1>
                    <p><i>✨ You're just space ✨</i></p>
                    <div className={s.text_state}>
                        <a href='#'>Want</a>
                        <a href='#'>Watched</a>
                        <a href='#'>Series</a>
                        <a href="#">Favorite</a>
                    </div>
            </div>
        </div>
        <div className='subheader'>
        <p className={s.text_subheader}><span>Your list is empty!</span></p>
        </div>
    </div>
  )
}
