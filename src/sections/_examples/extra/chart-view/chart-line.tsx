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

export default function ChartLine({ series }: Props) {

  const { t } = useLocales()

  const chartOptions = useChart({
    xaxis: {
      categories: [
        t('jan'), 
        t('feb'), 
        t('mar'),
        t('apr'),
        t('may'),
        t('jun'),
        t('jul'),
        t('aug'),
        t('sep'),
      ]
    },
    tooltip: {
      x: {
        show: false,
      },
      marker: { show: false },
    },
  });

  return <Chart dir="ltr" type="line" series={series} options={chartOptions} height={320} />;
}
