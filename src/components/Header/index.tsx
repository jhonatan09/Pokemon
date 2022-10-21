import {Logo, HeaderCentralize, HeaderContent, HeaderContentNav} from '../../style/HeaderStyle'
import { useNavigate } from "react-router-dom";
import logo from '../../image/logo.jpg'

const Header = () => {

  
       const navigate = useNavigate();

    return (
        <HeaderCentralize>
            <Logo src={logo} alt="logo" />
            <HeaderContent>
              <HeaderContentNav onClick={() => {
                navigate("/Pokemon/")
            }}>
                Home Page
            </HeaderContentNav>
            <HeaderContentNav onClick={() => {
                navigate("/Pokemon/favorites")
            }}>
                Favorite Page
            </HeaderContentNav>
            
            </HeaderContent>
        </HeaderCentralize>
    )
}

export default Header