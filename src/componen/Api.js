import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Api(){
    const [datas, setDatas] = useState([])

    useEffect(() =>{
        async function getDatas(){
            const request = await fetch(
                'https://api.spaceflightnewsapi.net/v3/articles'
            )
            const respons = await request.json()
            setDatas(respons)
            console.log(respons)
        }
        getDatas()
    }, [])
    return(
        <div>
            {datas.map((items) =>{
                return <li><Link key={items.id}>{items.title}</Link></li>
            })}
        </div>
    )
}

export default Api