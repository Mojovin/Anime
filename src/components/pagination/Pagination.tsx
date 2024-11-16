import { IPaginationProps } from "./TPaginatinProps"
import styles from "./pagination.module.scss"

export default function Pagination({currentPage, totalItems, itemsPerPage, onPageChange}: IPaginationProps){
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const handlePageClick = (page:number) => {
        if(page <= totalPages){
            onPageChange(page)
        }
    }
    
    return(
        <div className={styles.pagination}>
            <button className={styles.pagination__button} onClick={() => handlePageClick(currentPage - 1)} disabled={currentPage === 1}>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            <span>{currentPage} из {totalPages}</span>
            <button className={styles.pagination__button} onClick={() => handlePageClick(currentPage + 1)} disabled={currentPage === totalPages}>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
        </div>
    )
}