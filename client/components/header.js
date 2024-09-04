import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="navbar__list-item">
          <Link className="navbar__list-item-link" href={href}>
            {label}
          </Link>
        </li>
      );
    });

  return (
    <nav className="navigation">
      <Link className="navbar__brand" href="/"></Link>

      <div>
        <ul>{links}</ul>
      </div>
    </nav>
  );
};
