import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';
import { Container } from './Container';

export interface NavItem {
  to: string;
  label: string;
  end?: boolean;
  children?: { to: string; label: string }[];
}

interface SiteHeaderProps {
  site: 'pure' | 'wings';
  logo: React.ReactNode;
  homeTo: string;
  homeLabel: string;
  nav: NavItem[];
  cta: { label: string; onClick: () => void };
  phone: string;
  email: string;
  menuLabel: string;
}

const GROUP_SITES = [
  { site: 'pure', to: '/', label: 'Pure Enterprise Ltd.' },
  { site: 'wings', to: '/wings', label: 'Wings Consultants BD' }
] as const;

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `relative px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
    isActive ? 'text-brand after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-accent' : 'text-slate-700 hover:text-brand'
  }`;

export const SiteHeader: React.FC<SiteHeaderProps> = ({ site, logo, homeTo, homeLabel, nav, cta, phone, email, menuLabel }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
      {/* Group bar: switch between the companies of the group, plus quick contact */}
      <div className="bg-brand-dark text-slate-300 text-xs">
        <Container className="flex items-center justify-between gap-3 py-2">
          <div className="flex items-center gap-1">
            <span className="hidden sm:inline text-slate-400 mr-1">Pure Enterprise Group:</span>
            {GROUP_SITES.map((g) => (
              <Link
                key={g.site}
                to={g.to}
                className={`px-2 py-0.5 rounded transition-colors ${
                  g.site === site ? 'bg-white/10 text-white font-semibold' : 'hover:text-white'
                }`}
              >
                {g.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-1.5 hover:text-white">
              <Phone className="w-3.5 h-3.5 text-accent" aria-hidden />
              <span>{phone}</span>
            </a>
            <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="w-3.5 h-3.5 text-accent" aria-hidden />
              <span>{email}</span>
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between gap-4 py-3">
        <Link to={homeTo} aria-label={homeLabel} className="shrink-0">
          {logo}
        </Link>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-0.5">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.to)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center">
                  <NavLink to={item.to} end={item.end} className={linkClass}>
                    {item.label}
                  </NavLink>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === item.to ? null : item.to)}
                    aria-expanded={openDropdown === item.to}
                    aria-label={`${item.label} submenu`}
                    className="-ml-2 p-1 text-slate-400 hover:text-brand cursor-pointer"
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                </div>
                {openDropdown === item.to && (
                  <div className="absolute left-0 top-full pt-2 w-80">
                    <ul className="bg-white rounded-xl border border-slate-200 shadow-card p-2">
                      {item.children.map((child) => (
                        <li key={child.to}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) =>
                              `block px-3 py-2 rounded-lg text-sm ${
                                isActive ? 'bg-brand-soft text-brand font-semibold' : 'text-slate-700 hover:bg-slate-50 hover:text-brand'
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={cta.onClick}
            className="hidden sm:inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-bold bg-brand text-white hover:bg-brand-dark shadow-sm transition-colors cursor-pointer"
          >
            {cta.label}
          </button>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label={menuLabel}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {mobileOpen && (
        <nav aria-label="Mobile" className="lg:hidden border-t border-slate-200 bg-white max-h-[75vh] overflow-y-auto">
          <Container className="py-3 space-y-1">
            {nav.map((item) => (
              <div key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg font-semibold ${isActive ? 'bg-brand-soft text-brand' : 'text-slate-800 hover:bg-slate-50'}`
                  }
                >
                  {item.label}
                </NavLink>
                {item.children && (
                  <div className="ml-3 border-l border-slate-200 pl-3">
                    {item.children.map((child) => (
                      <NavLink key={child.to} to={child.to} className="block px-3 py-1.5 text-sm text-slate-600 hover:text-brand">
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setMobileOpen(false);
                cta.onClick();
              }}
              className="w-full mt-2 py-3 rounded-lg font-bold text-sm bg-brand text-white cursor-pointer"
            >
              {cta.label}
            </button>
          </Container>
        </nav>
      )}
    </header>
  );
};
