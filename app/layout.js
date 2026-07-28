import './layout.css';
import Navbar from './navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-layout">
          <Navbar />
          <div className="layout-container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
