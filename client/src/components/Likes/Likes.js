import styles from './Likes.module.css'

export const  Likes=(prop)=>{
  return(
    <div className={styles.likes}>
          <img className={styles.hearts} src="/images/heart.png" alt='' />
          <span id="total-likes">Likes: {prop.likes} </span>
        </div>
   )
    
}