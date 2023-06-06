import styles from './footer.module.css'
import {BsPersonFill,BsCartFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiFillHeart,AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div className={styles.container}>
       <Link to='/'>
        <AiFillHome size={35} />
       </Link>
       <Link to='cart'>
         <BsCartFill size={35} />
       </Link>
       <Link to='message'>
         <MdEmail size={35}/>
       </Link>
       <Link to='favorite'>
        <AiFillHeart size={35} />
        </Link>
        <Link to='profile'>
        <BsPersonFill size={35} />
        </Link>
    </div>
  )
}

export default Footer

