import React from 'react';

// Chip para linguagem
const LangChip = ({ language, color }) => (
  <span
    style={{
      background: color || '#eee',
      color: '#222',
      borderRadius: 8,
      padding: '2px 8px',
      fontSize: 12,
      marginRight: 6,
      fontWeight: 600,
      display: 'inline-block',
    }}
  >
    {language}
  </span>
);

// Tooltip dinâmico puro, sem children obrigatório
const Tooltip = ({ languages = [], chipColors = {}, videoPath, children }) => {
  const [show, setShow] = React.useState(false);

  // Se não houver children, renderiza só o overlay (para uso como overlay puro)
  if (!children) {
    return (
      <div
        style={{ position: 'relative', display: 'inline-block', width: '100%' }}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {show && (
          <div style={{
            position: 'absolute',
            top: '110%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#222',
            color: '#fff',
            borderRadius: 10,
            padding: 16,
            minWidth: 220,
            zIndex: 100,
            boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          }}>
            <div style={{ marginBottom: 8 }}>
              {languages.map(lang => (
                <LangChip key={lang} language={lang} color={chipColors[lang]} />
              ))}
            </div>
            {videoPath && (
              <video src={videoPath} controls style={{ width: '100%', borderRadius: 8 }} />
            )}
          </div>
        )}
      </div>
    );
  }

  // Com children, funciona como antes
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div style={{
          position: 'absolute',
          top: '110%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: '#222',
          color: '#fff',
          borderRadius: 10,
          padding: 16,
          minWidth: 220,
          zIndex: 100,
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
        }}>
          <div style={{ marginBottom: 8 }}>
            {languages.map(lang => (
              <LangChip key={lang} language={lang} color={chipColors[lang]} />
            ))}
          </div>
          {videoPath && (
            <video src={videoPath} controls style={{ width: '100%', borderRadius: 8 }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
