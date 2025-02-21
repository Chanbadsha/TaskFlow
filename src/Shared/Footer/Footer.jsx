export default function Footer() {
  return (
    <footer className="bg-secondary">
      {" "}
      <div className="footer container mx-auto flex flex-col sm:flex-row flex-wrap justify-between items-center text-base-content p-8 sm:p-10">
        {/* Services Section */}
        <nav className="w-full sm:w-auto text-center sm:text-left mb-6 sm:mb-0">
          <h6 className="footer-title font-semibold text-lg">Services</h6>
          <a className="link link-hover block">Task Management</a>
          <a className="link link-hover block">Collaboration</a>
          <a className="link link-hover block">Workflow Automation</a>
          <a className="link link-hover block">Productivity Insights</a>
        </nav>

        {/* Company Section */}
        <nav className="w-full sm:w-auto text-center sm:text-left mb-6 sm:mb-0">
          <h6 className="footer-title font-semibold text-lg">Company</h6>
          <a className="link link-hover block">About Us</a>
          <a className="link link-hover block">Contact</a>
          <a className="link link-hover block">Careers</a>
          <a className="link link-hover block">Blog</a>
        </nav>

        {/* Legal Section */}
        <nav className="w-full sm:w-auto text-center sm:text-left mb-6 sm:mb-0">
          <h6 className="footer-title font-semibold text-lg">Legal</h6>
          <a className="link link-hover block">Terms of Service</a>
          <a className="link link-hover block">Privacy Policy</a>
          <a className="link link-hover block">Cookie Policy</a>
        </nav>

        {/* Newsletter Section */}
        <form className="w-full sm:w-auto text-center sm:text-left">
          <h6 className="footer-title font-semibold text-lg">Stay Updated</h6>
          <p className="text-sm mb-2">
            Subscribe for the latest updates and tips.
          </p>
          <div className="join flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered join-item w-full sm:w-64 p-3 rounded-lg"
            />
            <button className="btn btn-primary join-item mt-2 sm:mt-0 sm:ml-2 w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </footer>
  );
}
