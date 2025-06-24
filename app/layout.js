import './layout.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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