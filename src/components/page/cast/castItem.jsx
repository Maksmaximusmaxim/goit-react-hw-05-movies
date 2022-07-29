import PropTypes from 'prop-types';
export function CastItem({ img, character, name }) {
  return (
    <li>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>{character}</h3>
    </li>
  );
}
CastItem.propTypes = {
  img: PropTypes.string,
  character: PropTypes.string,
  name: PropTypes.string,
};
