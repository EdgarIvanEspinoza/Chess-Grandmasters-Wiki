import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Chess Grandmasters',
  description: 'Wiki of Chess Grandmasters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
