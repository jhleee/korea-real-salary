import { useEffect, useMemo, useState } from 'react';
import './App.css';
import SalaryChart from './components/SalaryChart';
import Slider from './components/Slider';

function App() {
  const [data, setData] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(15000);
  useEffect(() => {
    fetch(
      'https://gist.githubusercontent.com/jhleee/4830c91185c76323f06f191d336193f4/raw/fba917f9e441b36b0e827fe9824d2b25efdef74f/korea_2024_salary_data.json'
    )
      .then((res) => res.json())
      .then((data) => {
        setData(
          data.map((d) => ({
            ...d,
            연봉: d['연봉'] / 10000,
            세전: Math.round(d['연봉'] / 12),
          }))
        );
      });
  });

  const filterData = useMemo(() => {
    return data.filter((d) => min < d['연봉'] && d['연봉'] < max);
  }, [min, max, data]);

  return (
    <>
      <div className="App">
        <h1>연봉 별 실수령액 및 공제 항목</h1>
        <Slider
          min={0}
          max={15000}
          onValueChanged={([min, max]) => {
            setMin(min);
            setMax(max);
          }}
        />
        <SalaryChart data={filterData} />
      </div>
    </>
  );
}

export default App;
