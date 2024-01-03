import DashboardBox from '@/components/DashboardBox';
import { useGetKpisQuery } from '@/state/api';
import React, { useMemo } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

type Props = {};

const Row1 = (props: Props) => {
  const { data } = useGetKpisQuery();

  const revenueExpenses = useMemo(() => {
    if (data && data[0])
      return data[0].monthlyData.map(
        ({
          month,
          revenue,
          expenses,
        }: {
          month: string;
          revenue: string;
          expenses: string;
        }) => {
          return {
            name: month.substring(0, 3),
            revenue,
            expenses,
          };
        }
      );
  }, [data]);

  return (
    <>
      <DashboardBox gridArea='a'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart
            width={730}
            height={250}
            data={revenueExpenses}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
              <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#82ca9d' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#82ca9d' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='revenue'
              stroke='#8884d8'
              fillOpacity={1}
              fill='url(#colorUv)'
            />
            <Area
              type='monotone'
              dataKey='expenses'
              stroke='#82ca9d'
              fillOpacity={1}
              fill='url(#colorPv)'
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea='b'></DashboardBox>
      <DashboardBox gridArea='c'></DashboardBox>
    </>
  );
};

export default Row1;
