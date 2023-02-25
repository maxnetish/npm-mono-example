import { html } from './template';
import { useState, useCallback, useRef } from 'preact/hooks';

export function DisplayMedia() {

  const [disallowDisplayMessage, setDisallowDisplayMessage] = useState<string | null>(null)
  const [stream, setStream] = useState<MediaStream | null>(null);
  const videoElmRef = useRef<HTMLVideoElement | null>(null);

  const handleButtonClick = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        audio: false,
        video: true,
      });
      setDisallowDisplayMessage(null);
      setStream(stream);
      if (videoElmRef.current) {
        videoElmRef.current.srcObject = stream;
      }
      console.log(stream);
    } catch (e: any) {
      if (e && e.name === 'NotAllowedError') {
        setStream(null);
        setDisallowDisplayMessage('Share display is not allowed.');
        return;
      }
      setDisallowDisplayMessage(String(e));
      throw e;
    }
  }, []);

  return html`
    <button type="button" onClick=${handleButtonClick}>Display media</button>
    ${disallowDisplayMessage
      ? html`
        <div class="warn">${disallowDisplayMessage}</div>
      `
      : null
    }
    <div>
      <video ref=${videoElmRef} controls/>
    </div>
  `;
}
