import { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { HiOutlineCursorArrowRipple } from 'react-icons/hi2';

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <h4>Monthly Stats</h4>
      <div className="icon-text">
        <button type="button" onClick={() => setBarChart(!barChart)}>
          <HiOutlineCursorArrowRipple />
          {barChart ? <span>Area Chart</span> : <span>Bar Chart</span>}
        </button>
      </div>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
