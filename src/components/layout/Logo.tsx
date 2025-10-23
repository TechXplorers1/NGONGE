import Image from 'next/image';

export function Logo(props: { className?: string }) {
  return (
    <Image
      src="https://github.com/Humer-tx/NGO-NGE/blob/main/NGO_LOGO.png?raw=true"
      alt="NGONGE LLC Logo"
      width={48}
      height={48}
      className={props.className}
      priority
    />
  );
}
