import React from 'react'
import { TbContainer } from 'react-icons/tb'

export const Banner = () => {
    return (
        <section className='banner' id='home'>
            <div>
                <div>
                    <div>
                        <span className='tagline'>Welcome to my Website</span>
                        <h1>{`Hi I'm ABDALLAH ATGUIRI`} <span className='wrap'> Allo Chef</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore in doloremque, aperiam soluta numquam laboriosam distinctio illum, temporibus quaerat autem excepturi tempora ab rem sed molestias atque velit debitis eum.</p>
                        <button onClick={() => { console.log('hello world') }}></button>
                    </div>
                    <div>
                        <img src='' alt='Headder Img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

