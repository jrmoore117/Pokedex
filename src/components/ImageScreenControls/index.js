import PropTypes from 'prop-types';

export const ImageScreenControls = ({
   className,
   ...props
}) => {
   return (
      <div
         className="image-screen-controls-container"
         {...props}
      >
          <div className="play-button-control"></div>               
          <div className="select-button-control"></div>
          <div className="start-button-control"></div>
          <div className="directional-pad-controls">
            <span className="directional-pad-up"></span>
            <span className="directional-pad-right"></span>
            <span className="directional-pad-down"></span>
            <span className="directional-pad-left"></span>
          </div>
      </div>
   )
};

ImageScreenControls.defaultProps = {
   className: ''
}

ImageScreenControls.propTypes = {
   className: PropTypes.string
}
