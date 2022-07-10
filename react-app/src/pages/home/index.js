import { useState , useEffect} from 'react'

import EDIT from './component/edit'
import LIST from './component/list'

import './index.css'

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log('HERE')
    } , [data])

    return <div className='app'>
        <EDIT 
            AddData = {setData}>
        </EDIT>
        
        <LIST 
            ListData = {data} 
            DeleteData = {setData}>
        </LIST>
    </div>
}

export default Home