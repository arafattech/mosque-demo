import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Error - THEMosque",
  description: "Page not found.",
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="404 Error"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Pages", href: "#" },
          { label: "404 Error", active: true },
        ]}
      />
      <div className="container-fluid py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">
                We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try
                to use a search?
              </p>
              <a className="btn btn-primary py-3 px-4" href="/">
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
