import React, { useEffect, useState } from 'react';
import { Range, getTrackBackground } from 'react-range';

const Slider = ({ onValueChanged, min = 1000, max = 15000, step = 100 }) => {
  const STEP = step;
  const MIN = min;
  const MAX = max;

  const [values, setValues] = useState([min, max]);

  useEffect(() => {
    onValueChanged?.(values);
  }, [onValueChanged, values]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '2em',
      }}
    >
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              background: getTrackBackground({
                values,
                colors: ['#ccc', '#548BF4', '#ccc'],
                min: MIN,
                max: MAX,
              }),
              alignSelf: 'center',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ index, props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '24px',
              width: '24px',
              borderRadius: '12px',
              backgroundColor: '#548BF4',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0px 2px 6px #AAA',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-28px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                fontFamily: 'Arial,Helvetica,sans-serif',
                padding: '4px',
                borderRadius: '4px',
                backgroundColor: '#548BF4',
              }}
            >
              {values[index]}
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default Slider;
