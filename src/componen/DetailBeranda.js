import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'

function DetailBeranda() {
    const params = useParams()
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getDetail() {
            const request = await fetch(
                `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
            )
            const respons = await request.json()
            setDetail(respons)
            console.log(respons)
            setLoading(false)
        }
        getDetail()
    }, [params])
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
            <h1 className='title-detail'>{detail.title}</h1>
            <div className='container-img'>
                <img className='img-detail' src={detail.imageUrl} />
            </div>
            <time className='time-detail'>{new Date(detail.publishedAt).toLocaleTimeString()}</time>
            <p className='description-detail'>{detail.summary}</p>
            <p className='detail-articel'>
                source:{''}
                <a className='detail-articel-link' href={detail.url}>{detail.newsSite}</a>
            </p>
        </div>
    )
}

export default DetailBeranda