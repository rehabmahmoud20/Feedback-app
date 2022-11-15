import PropTypes from 'prop-types';
 const Header = ({text,bgColor}) => { //destrucuring the props object from the parent component
    const headerStyles = {
        backgroundColor:bgColor,
        color:'white',  
    }
  return (
    <header style={headerStyles}  className="text-center fw-bold  py-2 h1 mb-5">
    <p style={{marginBottom:0,color:'#4B89AC'}}>{text}</p>
    </header>     
  )
}

export default Header;
// default props incase i didn't pass text prop from the parent
Header.defaultProps={
    text: 'FeedBack'
}
// validation of the props passed from the parent

Header.propTypes = {
    bgColor: PropTypes.string
  };


