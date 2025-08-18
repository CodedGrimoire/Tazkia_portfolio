import './layout.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>
        <div className="app-layout">
          <div className="layout-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}