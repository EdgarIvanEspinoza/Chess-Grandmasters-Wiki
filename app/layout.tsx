import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
