import React, { useEffect } from 'react'
import { useeffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import '../App.css'

function Beranda() {
    const [datas, setDatas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getDatas() {
            const request = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles'
            )
            const respons = await request.json()
            setDatas(respons)
            setLoading(false)
        }
        getDatas()
    }, [])
    return (
        <div>
            <div className='loading'>
                {loading && <ColorRing
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                />}

            </div>
            {datas.map((items) => {
                return (
                    <div className='container-card'>
                        <div key={items.id}>
                            <div class="card" style={{ width: "18rem" }}>
                                <img src={items.imageUrl} class="card-img-top" />
                                <div class="card-body">
                                    <h5 class="card-title">{items.title}</h5>
                                    <p class="card-text">{items.summary}</p>
                                    <Link to={`/beranda/${items.id}`} className='btn btn-primary'>Go</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Beranda