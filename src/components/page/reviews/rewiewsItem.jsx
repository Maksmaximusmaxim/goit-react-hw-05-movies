import PropTypes from 'prop-types';
export function RewiewsItem({ name, content }) {
  return (
    <li>
      <h2>{name}</h2>
      <p>{content}</p>
    </li>
  );
}
RewiewsItem.propTypes = {
  name: PropTypes.string,
  conten: PropTypes.string,
};
