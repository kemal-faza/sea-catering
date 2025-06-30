'use client';
import { links } from '@/app/lib/data';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = () => {
	const path = usePathname();
	return (
		<nav className="navbar bg-primary text-primary-content shadow-sm sticky top-0 z-10">
			<div className="navbar-start">
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							{' '}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{' '}
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
						{links.map((link, index) => {
							return (
								<li
									key={index}
									className={clsx('', {
										'font-bold': path == link.href,
									})}>
									<Link href={link.href}>{link.text}</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<a className="btn btn-ghost hover:text-secondary text-xl">
					SEA Catering
				</a>
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1">
					{links.map((link, index) => {
						return (
							<li
								key={index}
								className={clsx('', {
									'font-bold': path == link.href,
								})}>
								<Link href={link.href}>{link.text}</Link>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="navbar-end">
				<Link
					href={'/'}
					className="btn btn-secondary text-secondary-content">
					Login
				</Link>
			</div>
		</nav>
	);
};
export default Nav;
