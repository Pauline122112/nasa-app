import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="home">
      <Link className="home-link" to="/nasaphoto" >See into the stars!</Link>
    </div>
  );
}




// const home = (props) => {
//     return (
//         <div>
//             <link to='/nasaphoto'>See into the stars!</link>

//         </div>
//     )
// }

// export default home