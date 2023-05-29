import styles from "./Edyoda.module.css";
import {BiSearch} from "react-icons/bi"
import Bottom from "../component/Bottom"
const Edyoda = () => {
  return (
    <div>
      
        <div className={styles.navbar}>
          <div className={styles.leftnavbar}>
            <h2>EDYODA</h2>
            <select>
              <option>Courses</option>
              <option>Html</option>
              <option>JavaScript</option>
            </select>
            <select>
              <option>Program</option>
              <option>Html</option>
              <option>JavaScript</option>
            </select>
          </div>
          <div className={styles.rightnavbar}>
            <BiSearch className={styles.searchicons}/>
            <button className={styles.loginbutton}>Log In</button>
            <button className={styles.joinbutton}>JOIN NOW</button>
          </div>
        </div>

      <Bottom/>
    </div>
  );
};
export default Edyoda;
