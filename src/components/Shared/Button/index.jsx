import PropTypes from 'prop-types';

const Button = ({isDisabled,children,version,type}) => {
  return (
    <button disabled={isDisabled} type={type} className={` btn-${version}`}>
        {children}
    </button>
  )
}


Button.defaultProps ={
    isDisabled:false,
    version:'main',
    type:'button'

}

Button.prototype = {
    isDisabled: PropTypes.bool,
    version:PropTypes.string,
    type:PropTypes.string,
    children:PropTypes.node.isRequired,
}
export default Button;
