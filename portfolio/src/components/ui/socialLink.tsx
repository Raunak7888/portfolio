'use client';

import { GithubSvg, XSvg, LinkedInSvg, GmailSvg } from '@/util/icons';

const iconWrapperStyles =
  'w-[10vh] h-[10vh] rounded-2xl flex items-center justify-center';

const SocialIcons = () => (
  <div className="flex">
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
