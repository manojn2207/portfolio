"use client";
import "./styles/globals.css";
import Navbar from "./component/navbar";
import { Provider } from "react-redux";
import { store } from "./store";
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
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+PE:wght@100..400&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link></head>
        
        <body className="full-screen">
          <div className="full-screen flex flex-row p-3 bg-slate-800 text-slate-100">
            <Navbar />
            <div className="flex justify-center align-middle w-screen">
              <div className="bg-primary-mid rounded-xl mr-2">
                {children}
              </div>
            </div>
            
          </div>
        </body>
      </html>
    </Provider>
  );
}
