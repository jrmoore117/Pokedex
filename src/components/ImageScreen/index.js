import PropTypes from 'prop-types';
import classNames from 'classnames';

export const ImageScreen = ({
   className,
   ...props
}) => {
   return (
      <div
         className="image-screen-container"
         {...props}
      >
         <div className="image-screen">
            <div className="image-screen-lights-container">
               <span className="image-screen-light"></span>
               <span className="image-screen-light"></span>
            </div>
            <div className="pokemon-image-container">
               <div className="pokemon-image">
                  {/* {children} */}
               </div>
            </div>
            <div className="image-screen-widgets-container">
               <div className="light-widget"></div>               
               <div className="pokemon-name-widget">charmander</div>
               <div className="pokemon-menu-widget">
                  <span className="pokemon-menu-widget-line"></span>
                  <span className="pokemon-menu-widget-line"></span>
                  <span className="pokemon-menu-widget-line"></span>
                  <span className="pokemon-menu-widget-line"></span>
               </div>
            </div>
         </div>
      </div>
   )
};

ImageScreen.defaultProps = {
   className: ''
}

ImageScreen.propTypes = {
   className: PropTypes.string
}