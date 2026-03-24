import { Providers } from '@/components/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'


export default function MyPages({Component, pageProps}) {
    return (
        <>
            <Providers>
                <div className="flex w-full">
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </div>
            </Providers>
        </>
    )
}
