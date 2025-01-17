// @mui
import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
// utils
import { fDateTime } from 'src/utils/format-time';
// types
import { IOrderHistory } from 'src/types/order';
import { useLocales } from 'src/locales';
import { useState } from 'react';

// ----------------------------------------------------------------------

type Props = {
  history: IOrderHistory;
};

export default function TransactionsDetailsHistory({ history }: Props) {

  const { t } = useLocales()

  const [newHistory, setHistory] = useState({
    createdAt: new Date(history.orderTime),
    receivedAt: new Date(history.completionTime),
    timeline: [{ title: 'received', time: new Date() }, { title: 'created', time: new Date() }]
    
  })

  const renderSummary = (
    <Stack
      spacing={2}
      component={Paper}
      variant="outlined"
      sx={{
        p: 2.5,
        minWidth: 260,
        flexShrink: 0,
        borderRadius: 2,
        typography: 'body2',
        borderStyle: 'dashed',
      }}
    >
      {/* <Stack spacing={0.5}>
        <Box sx={{ color: 'text.disabled' }}>{t('order_time')}</Box>
        {fDateTime(history.orderTime)}
      </Stack>
      <Stack spacing={0.5}>
        <Box sx={{ color: 'text.disabled' }}>{t('payment_time')}</Box>
        {fDateTime(history.orderTime)}
      </Stack> */}
      <Stack spacing={0.5}>
        <Box sx={{ color: 'text.disabled' }}>{t('transaction_receivedAt')}</Box>
        {fDateTime(newHistory.receivedAt)}
      </Stack>
      <Stack spacing={0.5}>
        <Box sx={{ color: 'text.disabled' }}>{t('transaction_createdAt')}</Box>
        {fDateTime(newHistory.createdAt)}
      </Stack>
    </Stack>
  );

  const renderTimeline = (
    <Timeline
      sx={{
        p: 0,
        m: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {newHistory.timeline.map((item, index) => {
        const firstTimeline = index === 0;

        const lastTimeline = index === history.timeline.length - 1;

        return (
          <TimelineItem key={item.title}>
            <TimelineSeparator>
              <TimelineDot color={(firstTimeline && 'primary') || 'grey'} />
              {lastTimeline ? null : <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent>
              <Typography variant="subtitle2">
                {
                item.title === 'created' && t('transaction_createdAt') ||
                item.title === 'received' && t('transaction_receivedAt')
                }
              </Typography>

              <Box sx={{ color: 'text.disabled', typography: 'caption', mt: 0.5 }}>
                {fDateTime(item.time)}
              </Box>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );

  return (
    <Card>
      <CardHeader title={t('history')} />
      <Stack
        spacing={3}
        alignItems={{ md: 'flex-start' }}
        direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{ p: 3 }}
      >
        {renderTimeline}

        {renderSummary}
      </Stack>
    </Card>
  );
}
