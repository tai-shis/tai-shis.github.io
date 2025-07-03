/* global __COMMIT_DATE__ */
function Footer() {
  return (
    <div>
      <footer className="bg-element-bg border-2 border-border rounded-global p-6 m-element shadow-test">
        <span className="text-default-subtext font-global text-l inline-block">
          © 2025 - Tai Shishiba
        </span>
        <span className="text-default-subtext font-global text-l float-right inline-block">
          Last Commit: {__COMMIT_DATE__.split('T')[0]}
        </span>
      </footer>
    </div>
  );
}

export default Footer;
