import Link from "next/link"
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/layout"
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>FirstPost</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <h1>First Post</h1>
      <Link href="/">⬅️ back to home</Link>
      <p>
        Ut minim aute proident pariatur est laboris est. Minim do qui cillum do. Ipsum eu ea velit velit voluptate anim reprehenderit cillum consequat qui ullamco.

Veniam ut exercitation exercitation sit. Dolor nostrud Lorem sit eiusmod non esse est ea proident elit adipisicing laboris consectetur. Consectetur proident elit esse esse qui esse ipsum sunt reprehenderit fugiat sunt. Excepteur sint velit ad et ullamco nulla consequat laborum ex enim dolor.

Laborum Lorem do cillum fugiat enim id nisi commodo qui aute. Cupidatat qui fugiat ipsum sunt laboris ullamco et. Enim pariatur cillum consequat culpa nostrud adipisicing enim.

Mollit proident aute minim laboris ullamco duis tempor cupidatat voluptate sit Lorem. Eu amet dolor veniam qui Lorem est cupidatat id velit. Laboris est ipsum anim incididunt ipsum est minim anim pariatur eu irure. Anim fugiat nulla reprehenderit aliquip eu aute. Quis tempor anim reprehenderit deserunt cillum nostrud qui eu ea. Nostrud est ipsum ex elit Lorem labore in irure aliquip non labore do. Est anim sint do sunt nostrud non ea qui nulla cillum amet aliqua elit proident.

Aliqua irure dolor anim pariatur laboris. Incididunt et in commodo consectetur exercitation veniam eu et minim sint laboris ullamco excepteur enim. Ea ipsum reprehenderit dolore aute occaecat ad occaecat. Occaecat nisi adipisicing ipsum id aliqua laboris ullamco officia ipsum anim consectetur. Sit id qui deserunt veniam deserunt.

Adipisicing et adipisicing anim adipisicing. Consectetur ipsum ipsum id labore ut et velit nulla veniam consequat incididunt. Ut ea qui aute irure eu veniam labore magna aliquip non nulla nostrud. Amet qui amet Lorem laboris ex dolore.

Culpa do eu Lorem ad fugiat occaecat aliqua dolor laborum commodo commodo sunt incididunt exercitation. Amet commodo officia nostrud exercitation ut dolor irure aliquip ullamco amet. Exercitation eu sunt quis consequat aute cillum incididunt. Laborum nisi cupidatat duis aliquip laboris mollit ipsum dolor nulla excepteur ea id in do.
      </p>
    </Layout>
  )
}
