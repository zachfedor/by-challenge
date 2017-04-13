import React from 'react';
import CheckBox from './CheckBox';
import './Settings.css';


const Settings = ({ settings, update }) => (
  <article className="Settings">
    <h1>Settings</h1>

    {/* TODO: map over settings object.keys() instead of hard coding these */}
    <CheckBox
      label="Newsletter"
      checked={settings.newsletters === 1}
      onChange={update}
    />

    <CheckBox
      label="Alerts"
      checked={settings.alerts === 1}
      onChange={update}
    />

    <CheckBox
      label="Private"
      checked={settings.private === 1}
      onChange={update}
    />
  </article>
);

export default Settings;
