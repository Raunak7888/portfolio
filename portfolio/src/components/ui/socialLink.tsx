'use client';

import { GithubSvg, XSvg, LinkedInSvg, GmailSvg } from '@/util/icons';

const iconWrapperStyles =
  'w-[8vh] h-[8vh] rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-300';

const SocialIcons = () => (
  <div className="flex gap-1 sm:gap-5 border border-[var(--foreground)]/20 rounded-full px-4 py-2 shadow-sm backdrop-blur-sm">
    <a
      href="https://github.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      className={iconWrapperStyles}
    >
      <GithubSvg />
    </a>
    <a
      href="https://x.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Twitter / X"
      className={iconWrapperStyles}
    >
      <XSvg />  
    </a>
    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      className={iconWrapperStyles}
    >
      <LinkedInSvg />
    </a>
    <a
      href="mailto:you@example.com"
      aria-label="Email"
      className={iconWrapperStyles}
    >
      <GmailSvg />
    </a>
  </div>
);

export default SocialIcons;
