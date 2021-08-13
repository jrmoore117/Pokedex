import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({
   label,
   variant,
   isSmall,
   isLoading,
   isDisabled,
   className,
   ...props
}) => {
   const buttonClasses = classNames(
      'button',
      className, {
      'button--small': isSmall,
      'button--disabled': isDisabled,
      [`button--${variant}`]: !isDisabled,
   });

   return (
      <button
         className={buttonClasses}
         disabled={isDisabled || isLoading}
         {...props}
      >
         {isLoading
            ? "Loading..."
            : label}
      </button>
   );
}

Button.defaultProps = {
   type: 'button',
   variant: 'default',
   className: '',
   isSmall: false,
   isLoading: false,
   isDisabled: false,
}

Button.propTypes = {
   type: PropTypes.oneOf(['button', 'submit', 'reset']),
   variant: PropTypes.string,
   label: PropTypes.string.isRequired,
   isDisabled: PropTypes.bool,
   isSmall: PropTypes.bool,
   isLoading: PropTypes.bool,
   className: PropTypes.string,
}
