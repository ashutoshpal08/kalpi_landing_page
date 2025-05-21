import './globals.css';

export const metadata = {
  title: 'Kalpi Capital',
  description: 'India\'s first systematic quant investing platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}