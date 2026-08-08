import './globals.css';
import './reference.css';

export const metadata = { title: 'Accredian', description: 'Next-gen expertise for your enterprise.' };
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
