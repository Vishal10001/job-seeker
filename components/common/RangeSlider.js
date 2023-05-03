import {useState} from "react";
import InputRange from "react-input-range";

const RangeSlider = (props) => {
    const {className} = props;
    const [destination, setDestination] = useState(0);

    return (
        <div className={`range-slider-one ${className}`}>
            <InputRange
                maxValue={100}
                formatLabel={() => ''}
                minValue={0}
                minLabel={'0'}
                maxLabel={'100'}
                value={destination}
                onChange={(value) => setDestination(value)}
                onChangeComplete={value => console.log(value)}
            />
            <div className="input-outer">
                <div className="amount-outer">
                    <span className="area-amount">{destination}</span>
                    %
                </div>
            </div>
        </div>
    );
};

export default RangeSlider;
