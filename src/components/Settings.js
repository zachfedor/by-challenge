import React from 'react';
import CheckBox from './CheckBox';
import './Settings.css';


const Settings = ({ settings, update }) => (
  <article className="Settings">
    <h2>Settings</h2>

    {/* TODO: map over settings object.keys() instead of hard coding these */}
    <CheckBox
      label="newsletters"
      checked={settings.newsletters === 1}
      onChange={update}
    />

    <CheckBox
      label="alerts"
      checked={settings.alerts === 1}
      onChange={update}
    />

    <CheckBox
      label="private"
      checked={settings.private === 1}
      onChange={update}
    />
  </article>
);

export default Settings;
