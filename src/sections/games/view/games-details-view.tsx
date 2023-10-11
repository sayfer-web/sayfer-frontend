import { useState, useCallback } from 'react';
// @mui
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Container from '@mui/material/Container';
// routes
import { paths } from 'src/routes/paths';
// _mock
import { _games, GAMES_PUBLISH_OPTIONS, GAMES_DETAILS_TABS } from 'src/_mock';
// components
import Label from 'src/components/label';
import { useSettingsContext } from 'src/components/settings';
//
import GameDetailsToolbar from '../games-details-toolbar';
import GameDetailsContent from '../games-details-content';
import GameDetailsBookers from '../games-details-bookers';

// ----------------------------------------------------------------------

type Props = {
  id: string;
};

export default function GamesDetailsView({ id }: Props) {
  const settings = useSettingsContext();

  console.log(id)

  // const currentGame = _games()[+id-1];
  const gamesList = _games()
  const currentGame = gamesList.filter((game: any) => game.id === +id)[0];

  console.log(currentGame)

  const [publish, setPublish] = useState(currentGame?.publish);

  const [currentTab, setCurrentTab] = useState('content');

  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  const handleChangePublish = useCallback((newValue: string) => {
    setPublish(newValue);
  }, []);

  const renderTabs = (
    <Tabs
      value={currentTab}
      onChange={handleChangeTab}
      sx={{
        mb: { xs: 3, md: 5 },
      }}
    >
      {GAMES_DETAILS_TABS().map((tab) => (
        <Tab
          key={tab.value}
          iconPosition="end"
          value={tab.value}
          label={tab.label}
          icon={
            tab.value === 'bookers' ? (
              <Label variant="filled">{currentGame?.bookers.length}</Label>
            ) : (
              ''
            )
          }
        />
      ))}
    </Tabs>
  );

  return (
    <Container maxWidth={settings.themeStretch ? false : 'lg'}>
      <GameDetailsToolbar
        backLink={paths.dashboard.games.root}
        editLink={paths.dashboard.games.edit(`${currentGame?.id}`)}
        liveLink="#"
        publish={publish || ''}
        onChangePublish={handleChangePublish}
        publishOptions={GAMES_PUBLISH_OPTIONS()}
      />
      {renderTabs}

      {/* @ts-ignore */}
      {currentTab === 'content' && <GameDetailsContent games={currentGame} />}

      {currentTab === 'bookers' && <GameDetailsBookers bookers={currentGame?.bookers} />}
    </Container>
  );
}


