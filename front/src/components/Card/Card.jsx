//import { Link } from "react-router-dom";
import styles from './Card.module.css';


export default function Card({name, gender, onClose, species, image, id}) {// podemos hacer destructuring en lugar de Card(props) como sigue
   return ( 
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button onClick={onClose} className={styles.buttons}>X</button>
         </div>
         <div className={styles.imageContainer}>
            <img  src={image} alt={image} className={styles.image} />
            {/* <Link  to={`/detail/${id}`}></Link> */}
               <h2 className={styles.name}>{name}</h2>
            
         </div>
         <div className={styles.propsContainer}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
         
          
      </div>
   );
}
