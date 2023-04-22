import PropTypes from "prop-types";
import {FeedbackOptionsStyled, FeedbackOptionsBtnStyled,} from './FeedbackOptionStyled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <FeedbackOptionsStyled>
        {options.map(option => {
            return (
                <li key={option}>
                    <FeedbackOptionsBtnStyled
                        onClick={() => {
                            onLeaveFeedback(option);
                        }}
                    >
                        {option}
                    </FeedbackOptionsBtnStyled>
                </li>
            );
        })}
    </FeedbackOptionsStyled>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};