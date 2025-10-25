import Image from 'next/image';

export function Logo(props: { className?: string }) {
  return (
    <Image
      src="/images/NGO_LOGO.png"
      alt="NGONGE LLC Logo"
      width={48}
      height={48}
      className={props.className}
      priority
    />
  );
}
