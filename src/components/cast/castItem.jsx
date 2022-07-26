import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import css from 'components/cast/cast.module.css'
export function CastItem({ img, character, name }) {
  return (
    <ListItem alignItems="flex-start">
       <ListItemAvatar>
        <Avatar src={img} width="150px" alt="" />
       </ListItemAvatar>
      
      <h2>{name}</h2>
      <h3 className={css.name} >{character}</h3>
    </ListItem>
  );
}
CastItem.propTypes = {
  img: PropTypes.string,
  character: PropTypes.string,
  name: PropTypes.string,
};
