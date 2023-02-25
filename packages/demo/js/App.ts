import { html } from './template';
import { MediaDevicesList } from './MediaDevicesList';
import { DisplayMedia } from './DisplayMedia';

export function App() {
  return html`
    <h1>Hello from Preact!</h1>
    <h2>Media devices</h2>
    <${MediaDevicesList} />
    <${DisplayMedia} />
  `;
}
