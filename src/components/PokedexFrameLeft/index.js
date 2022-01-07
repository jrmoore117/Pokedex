import PropTypes from 'prop-types';
import classNames from 'classnames';

export const PokedexFrameLeft = ({
   children,
   className,
   ...props
}) => {
   const pokedexFrameLeftClasses = classNames(
      'pokedex-frame-left',
      className
   );
   return (
      <div
         className={pokedexFrameLeftClasses}
         {...props}
      >
         {children}
      </div>
   )
};

PokedexFrameLeft.defaultProps = {
   className: ''
}

PokedexFrameLeft.propTypes = {
   className: PropTypes.string
}
