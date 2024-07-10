import "./globals.css";

export const metadata = {
  title: "INNOTECH",
  description: "Nos especializamos en el desarrollo de varios sistemas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
