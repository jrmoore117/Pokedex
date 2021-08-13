import PropTypes from 'prop-types';
import classNames from 'classnames';

export const PokedexFrame = ({
   children,
   className,
   ...props
}) => {
   return (
      <div
         className={className}
         {...props}
      >
         {children}
      </div>
   )
};

PokedexFrame.defaultProps = {
   className: ''
}

PokedexFrame.propTypes = {
   className: PropTypes.string
}
