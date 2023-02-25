import { html } from './template';
import { useEffect, useState } from 'preact/hooks';

export function MediaDevicesList() {
  const [deviceList, setDeviceList] = useState([] as MediaDeviceInfo[]);

  useEffect(() => {
    (async () => {
      try {
        if (navigator?.mediaDevices) {
          const devices = await navigator.mediaDevices.enumerateDevices();
          console.log(devices);
          setDeviceList(devices);

          // const foo = await navigator.mediaDevices.getUserMedia({
          //   audio: true,
          //   video: true,
          // });
          // console.log(foo);
        }
      } catch (err) {
        console.warn(err);
      }
    })();
  }, []);

  return html`
    <table>
      <thead>
      <tr>
        <th>Class</th>
        <th>Group Id</th>
        <th>Device Id</th>
        <th>Kind</th>
        <th>Label</th>
      </tr>
      </thead>
      <tbody>
      ${deviceList.map((deviceInfo) => html`
        <tr>
          <td>${deviceInfo.constructor?.name}</td>
          <td>${deviceInfo.groupId}</td>
          <td>${deviceInfo.deviceId}</td>
          <td>${deviceInfo.kind}</td>
          <td>${deviceInfo.label}</td>
        </tr>
      `)}
      </tbody>
    </table>
  `;
}
