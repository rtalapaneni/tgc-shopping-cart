import { useEffect } from "react";
import { useNavigate } from "react-router";

const Protected = ({ children }) => {
    const  isAuthenticated  = true;

    const navvigate = useNavigate();

    useEffect(() => {
        if(!isAuthenticated) {
            navvigate("/");
        }
    }, []);

  

  return (
    <div className="protected"> {children}</div>
  )
}

export default Protected;