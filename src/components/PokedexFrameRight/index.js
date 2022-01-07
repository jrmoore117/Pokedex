import PropTypes from 'prop-types';
import classNames from 'classnames';

export const PokedexFrameRight = ({
   children,
   className,
   ...props
}) => {
   const pokedexFrameLeftClasses = classNames(
      'pokedex-frame-right',
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

PokedexFrameRight.defaultProps = {
   className: ''
}

PokedexFrameRight.propTypes = {
   className: PropTypes.string
}
