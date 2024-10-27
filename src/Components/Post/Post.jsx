import React, {useState, useEffect} from 'react';
import './Post.scss';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

function Post() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => 
    {   
        setLoading(true);
        const fetchData = async() => {
            const arr = await axios.get(`https://picsum.photos/v2/list?page=${currentPage}&limit=5`);
            setData(arr.data);
            setLoading(false);
        }
        fetchData();
    }, [currentPage])

    return (
        <div className='container'>
            <div className="image-container">
                {
                    loading ? <div className="loading">Loading...</div>
                    : (
                        data.map((item, index) => 
                        {
                            return (
                                <img 
                                src={item.download_url} 
                                key={item.id}
                                alt=''
                                >
                                </img>
                            )
                        })
                    )
                }
            </div>
            <Pagination 
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={10}
            />
        </div>
    )
}

export default Post;
