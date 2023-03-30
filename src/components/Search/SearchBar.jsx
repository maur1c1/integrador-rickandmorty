import { useState } from "react";
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {

   const [character, setCharacter] = useState('')
   const handleChange = (event) =>{
      setCharacter(event.target.value)
   }
   return (
      <div className={styles.searchContainer}>
         <input type='search' value={character} onChange={handleChange} className={styles.inputContainer}/>
      <button className={styles.buton} onClick={()=> onSearch(character)}>Agregar</button> 
      </div>
   );
}
