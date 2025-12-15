import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumb: { label: string; href?: string; active?: boolean }[];
}

export default function PageHeader({ title, breadcrumb }: PageHeaderProps) {
  return (
    <div className="container-fluid hero-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-header-inner animated zoomIn">
              <h1 className="display-1 text-dark">{title}</h1>
              <ol className="breadcrumb mb-0">
                {breadcrumb.map((item, index) => (
                  <li key={index} className={`breadcrumb-item ${item.active ? 'text-dark' : ''}`} aria-current={item.active ? 'page' : undefined}>
                    {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
