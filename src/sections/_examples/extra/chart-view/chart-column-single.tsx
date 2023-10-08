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

export default function ChartColumnSingle({ series }: Props) {

  const { t } = useLocales()

  const chartOptions = useChart({
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: [t('feb'), t('mar'), t('apr'), t('may'), t('jun'), t('jul'), t('aug'), t('sep'), t('oct')],
    },
    tooltip: {
      y: {
        formatter: (value: number) => `$ ${value} ${t('thousands')}`,
      },
    },
  });

  return <Chart dir="ltr" type="bar" series={series} options={chartOptions} height={320} />;
}
