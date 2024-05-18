import { getSession } from "next-auth/react"
import SessionProvider from "@/components/SessionProvider";
import AuthCookie from "@/components/AuthCookie";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = getSession()
    return (
      <html lang="en">
        <body>
          <SessionProvider session={session}>
            <AuthCookie>
              {children}
            </AuthCookie>
          </SessionProvider>
        </body>
      </html>
    )
}
