import styles from './footer.module.css'
import {BsPersonFill,BsCartFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillHeart,AiFillHome} from 'react-icons/ai'



const Footer = () => {
  return (
    <div className={styles.container}>
        <AiFillHome size={35} />
        <BsCartFill size={35} />
        <MdEmail size={35}/>
        <AiFillHeart size={35} />
        <BsPersonFill size={35} />
    </div>
  )
}

export default Footer

/* BISolidHomeSmile */
/* MdEmail */
/* AiFillHeart */
/* BsCartFill */
/*BsPersonFill  */