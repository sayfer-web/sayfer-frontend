// components
import Chart, { useChart } from 'src/components/chart';
import { useLocales } from 'src/locales';

// ----------------------------------------------------------------------

type Props = {
  series: {
    name: string;
    data: number[];
  }[];
};

export default function ChartColumnMultiple({ series }: Props) {

  const { t } = useLocales()

  const chartOptions = useChart({
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [ t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep'), t('oct')],
    },
    tooltip: {
      y: {
        formatter: (value: number) => `$ ${value} ${t('thousands')}`,
      },
    },
    plotOptions: { bar: { columnWidth: '36%' } },
  });

  return <Chart dir="ltr" type="bar" series={series} options={chartOptions} height={320} />;
}
