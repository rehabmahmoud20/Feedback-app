import PropTypes from 'prop-types';

export const Card = ({children}) => {
  return (
    <div className="card text-center position-relative p-4">{children}</div>
  )
}
export default Card;


Card.prototype ={
    children:PropTypes.node.isRequired,
}
