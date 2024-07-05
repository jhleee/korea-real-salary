import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const label = {
  yearly: '연봉',
  grossSalary: '세전총액',
  netSalary: '세후실수령액',
  netTax: '공제액계',
  nationalPension: '국민연금',
  healthInsurance: '건강보험',
  employmentInsurance: '고용보험',
  incomeTax: '소득세',
  localIncomeTax: '지방소득세',
  longTermCareInsurance: '장기요양보험료',
};

const SalaryChart = ({ data }) => {
  const [visibleLines, setVisibleLines] = useState({
    yearly: false,
    grossSalary: true,
    netSalary: true,
    netTax: true,
    nationalPension: true,
    healthInsurance: true,
    employmentInsurance: true,
    incomeTax: true,
    localIncomeTax: true,
    longTermCareInsurance: true,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setVisibleLines((prevState) => ({ ...prevState, [name]: checked }));
  };

  return (
    <div>
      <div>
        {Object.keys(visibleLines).map((key) => (
          <label key={key}>
            <input
              type="checkbox"
              name={key}
              checked={visibleLines[key]}
              onChange={handleCheckboxChange}
            />
            {label[key]}
          </label>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          cx={0}
          cy={0}
        >
          <XAxis dataKey="연봉" />
          <YAxis />
          <Tooltip
            formatter={(value) => new Intl.NumberFormat('ko').format(value)}
          />
          <Legend />
          {visibleLines.yearly && (
            <Line
              type="monotone"
              dataKey="연봉"
              name="연봉"
              stroke="#8884d8"
              dot={false}
            />
          )}
          {visibleLines.grossSalary && (
            <Line
              type="monotone"
              dataKey="세전"
              name="세전총액"
              stroke="#8884d8"
              dot={false}
            />
          )}
          {visibleLines.netSalary && (
            <Line
              type="monotone"
              dataKey="실수령액"
              name="세후실수령액"
              stroke="#82ca9d"
              dot={false}
            />
          )}
          {visibleLines.netTax && (
            <Line
              type="monotone"
              dataKey="공제액계"
              name="공제액계"
              stroke="#82ca9d"
              dot={false}
            />
          )}
          {visibleLines.nationalPension && (
            <Line
              type="monotone"
              dataKey="국민연금"
              name="국민연금"
              stroke="#ffc658"
              dot={false}
            />
          )}
          {visibleLines.healthInsurance && (
            <Line
              type="monotone"
              dataKey="건강보험"
              name="건강보험"
              stroke="#ff8042"
              dot={false}
            />
          )}
          {visibleLines.employmentInsurance && (
            <Line
              type="monotone"
              dataKey="고용보험"
              name="고용보험"
              stroke="#8dd1e1"
              dot={false}
            />
          )}
          {visibleLines.incomeTax && (
            <Line
              type="monotone"
              dataKey="소득세"
              name="소득세"
              stroke="#d0ed57"
              dot={false}
            />
          )}
          {visibleLines.localIncomeTax && (
            <Line
              type="monotone"
              dataKey="지방소득세"
              name="지방소득세"
              stroke="#a4de6c"
              dot={false}
            />
          )}
          {visibleLines.longTermCareInsurance && (
            <Line
              type="monotone"
              dataKey="장기요양"
              name="장기요양보험료"
              stroke="#d0ed57"
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryChart;
