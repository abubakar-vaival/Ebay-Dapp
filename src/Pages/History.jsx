import React,{useContext} from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { EbayContext } from '../context/EbayContext'
import Transactions from '../components/Transactions'
const History = () => {
    const styles = {
        container: `h-full w-full flex bg-[#fff]`,
        main: `w-full h-full flex flex-col mt-[50px]`,
        tableContainer: `w-full h-full flex flex-col p-[100px] justify-center`,
        pageTitle: `text-2xl font-bold text-left mt-[50px] mb-[30px]`,
        transactions: `flex gap-[50px] flex-row flex-wrap`,
      }
      const { ownedItems } = useContext(EbayContext)
  return (
    <div className={styles.container}>
    <SideBar />

    <div className={styles.main}>
      <Header />
      <div className={styles.tableContainer}>
        {ownedItems ? (
          <div className={styles.pageTitle}>Purchase History</div>
        ) : (
          <div className={styles.pageTitle}>No Purchase History</div>
        )}
        <div className={styles.transactions}>
          {ownedItems.map((item, index) => {
            return <Transactions key={index} item={item} index={index} />
          })}
        </div>
      </div>
    </div>
  </div>
  )
}

export default History