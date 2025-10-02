import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";
import { ArrowRightToLine, FilePen, House,  } from "lucide-react";


const Navbar = ({ isAuth }) => {
    return (
    <nav>
        <Link to="/">
          <House size={24} strokeWidth={2} />
          ホーム
        </Link>
        {!isAuth ? ( 
          <Link to="/login">
          <ArrowRightToLine size={24} strokeWidth={2}/>
          ログイン
        </Link>
       ) : (
        <>
          <Link to="/createpost">
            <FilePen size={24} strokeWidth={2}/>
            記事投稿
          </Link>
          <Link to="/logout">
            <ArrowRightToLine size={24} strokeWidth={2}/>
              ログアウト
          </Link> 
        </>
      )}
    </nav>
   );
};

export default Navbar;