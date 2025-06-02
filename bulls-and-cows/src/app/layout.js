import "../styles/globals.css";

export const metadata = {
  title: "Bulls and Cows",
  description: "Jogo de adivinhação de números com estilo moderno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
