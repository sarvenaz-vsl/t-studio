import Document, { Head, Html, Main, NextScript } from "next/document";

class MyCustomDocument extends Document {
  render() {
    return (
      <Html dir="rtl" lang="fa">
        <Head />
        <body dir="rtl">
          <Main />
          <div id="overlay" className="font-Vazirmatn text-white" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyCustomDocument;
