"use client";
import "./styles/globals.css";
import Navbar from "./component/navbar";
import { Provider } from "react-redux";
import { store } from "./store";
import { AboutMe } from "./component/home";
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      
      <html lang="en">
        <head>
          <title>Manoj Nandakumar</title>
          <meta name="description" content="Manoj Nandakumar's porfolio website"></meta>
          <meta name="keywords" content="Manoj, Nandakumar, porfolio"></meta>
          <meta name="author" content="Manoj Nandakumar"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+PE:wght@100..400&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        </head>
        
        <body className="full-screen flex justify-center align-middle">
          <div className="h-full width-1200 flex flex-col" >
           <div>
            <Navbar />
           </div>
           <div className="rounded-xl flex flex-col">
            {children}
           </div>
          </div>
       
        </body>
      </html>
    </Provider>
  );
}
