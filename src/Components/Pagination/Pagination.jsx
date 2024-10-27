import { useState } from 'react';
import './Pagination.scss';
import React from 'react';

const Pagination = ({currentPage, setCurrentPage, totalPages}) => {
    const handleNextClick = () => 
    {
        if (currentPage + 1 <= totalPages)
        {
            setCurrentPage(prev => (prev + 1));
        }
    }
    const handlePrevClick = () => 
    {
        if (currentPage - 1 >= 1)
        {
            setCurrentPage(prev => prev - 1);
        }
    }
    return (
        <div className='pagination-container'>
            <div className="btn-container">
                {
                    (currentPage > 1) && 
                    (<div 
                    className="left-icon"
                    onClick={() => handlePrevClick()}
                    >
                    <svg className='left-nav-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
                    </div>)
                }
                {(currentPage - 3 > 0) && ( <button className='btn'>{currentPage - 3}</button>)}
                {(currentPage - 2 > 0) && ( <button className='btn'>{currentPage - 2}</button>)}
                {(currentPage - 1 > 0) && ( <button className='btn'>{currentPage - 1}</button>)}
                <button className='btn clicked'>{currentPage}</button>
                {(currentPage + 3 <= totalPages) && ( <button className='btn'>{currentPage + 3}</button>)}
                {(currentPage + 2 <= totalPages) && ( <button className='btn'>{currentPage + 2}</button>)}
                {(currentPage + 1 <= totalPages) && ( <button className='btn'>{currentPage + 1}</button>)}

                {
                    (currentPage < totalPages) && 
                    (
                        <div 
                        className="right-icon"
                        onClick={() => handleNextClick()}
                        >
                        <svg className='right-nav-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Pagination;

