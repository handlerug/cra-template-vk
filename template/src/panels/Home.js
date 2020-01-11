import React from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  Cell,
  Avatar,
  Div,
  Button
} from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Example</PanelHeader>
    {fetchedUser && (
      <Group title="User Data Fetched with VK Connect">
        <Cell
          before={
            fetchedUser.photo_200 ? (
              <Avatar src={fetchedUser.photo_200} />
            ) : null
          }
          description={
            fetchedUser.city && fetchedUser.city.title
              ? fetchedUser.city.title
              : ''
          }
        >
          {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
        </Cell>
      </Group>
    )}

    <Group title="Navigation Example">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="persik">
          Show me the Persik, please
        </Button>
      </Div>
    </Group>
  </Panel>
);

export default Home;
