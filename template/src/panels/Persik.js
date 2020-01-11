import React from 'react';
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import './Persik.css';
import persik from '../img/persik.png';

const Persik = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home" />}>
      Persik
    </PanelHeader>
    <img className="Persik" src={persik} alt="Persik The Cat" />
  </Panel>
);

export default Persik;
