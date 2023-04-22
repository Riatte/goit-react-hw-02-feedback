import PropTypes from 'prop-types';
import { StatisticStyled } from './StatisticStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage
}) => (
  <StatisticStyled>
    <div>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive feedback: <span>{positivePercentage}%</span>
      </p>
    </div>
  </StatisticStyled>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};