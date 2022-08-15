import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@100;400;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Memes World" />
        <meta property="og:type" content="image/jpeg" />
        <meta
          property="og:url"
          content="https://memes-world-next.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/memes-world-2aa4d.appspot.com/o/images%2FMemes%20World%20Social%20Media.png?alt=media&token=a928ca3b-67ce-489d-9d71-d49a18f70d9f"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
