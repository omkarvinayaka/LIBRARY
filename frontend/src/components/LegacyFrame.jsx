import { useEffect } from 'react';

function LegacyFrame({ title, src }) {
  useEffect(() => {
    const API_BASE =
  import.meta.env.VITE_API_BASE ||
  (window.location.hostname === 'localhost'
    ? 'http://localhost:4000'
    : 'https://library-back-v33y.onrender.com');

    window.VEMU_SERVER_API_BASE = API_BASE;
    window.VEMU_SMS_API_BASE = API_BASE;
    localStorage.setItem('vemu_sms_api_base', API_BASE);
  }, []);

  return (
    <iframe
      title={title}
      src={src}
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        display: 'block',
      }}
    />
  );
}

export default LegacyFrame;
