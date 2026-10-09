function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M14 8.5V11h3.5l-.5 4h-3v6h-4v-6H7.5v-4H10V8.3C10 4.8 12 3 15.2 3H18v4h-2.1C14.5 7 14 7.6 14 8.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="social-icon-dot" cx="17.4" cy="6.7" r="1" />
    </svg>
  );
}

export function SocialLinks() {
  return (
    <div className="footer-social" aria-label="Social Media">
      <span className="social-pill" aria-label="Facebook – Link folgt">
        <FacebookIcon />
        Facebook
      </span>
      <span className="social-pill" aria-label="Instagram – Link folgt">
        <InstagramIcon />
        Instagram
      </span>
    </div>
  );
}
