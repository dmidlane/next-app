import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'

export default function Home() {
  return (
    <main>
      <Link className='text-xs' href="/users">Users</Link>
      <h1 className='text-`2xl'>Hello World</h1>
      <ProductCard />
    </main>
  )
}
