import Link from 'next/link'
import GradientLink from '../components/GradientLink'

// @ts-expect-error
import Blockies from 'react-blockies'

export default function HomeCard({
  href,
  icon,
  title,
  children,
  linkText,
}: any) {
  return (
    <Link href={href} passHref>
      <div className="card bg-base-100 shadow-md transition ease-in-out hover:-translate-y-1 cursor-pointer">
        <div className="card-body items-stretch items-center ">
          {icon}
          <h2 className="card-title text-center font-medium">{title}</h2>
          
          <Blockies className="mask mask-circle" seed={Math.random().toString()} size={12} />

          {children}

          <GradientLink text={linkText} href={href}></GradientLink>
        </div>
      </div>
    </Link>
  )
}
