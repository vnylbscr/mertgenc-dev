import { GithubIcon, LinkedinIcon, MastodonIcon, ResumeIcon, StackOverFlowIcon } from '../components/icons';

const WEB_LINKS = [
   {
      text: 'github',
      href: 'https://github.com/vnylbscr',
      colorScheme: undefined,
      icon: GithubIcon,
   },
   {
      text: 'linkedin',
      href: 'https://www.linkedin.com/in/gencmert/',
      colorScheme: 'linkedin',
      icon: LinkedinIcon,
   },
   {
      text: 'stackoverflow',
      href: 'https://stackoverflow.com/users/9338972/mert',
      colorScheme: 'yellow',
      icon: StackOverFlowIcon,
   },
   {
      text: 'mastodon',
      href: 'https://mastodon.social/@mertgenc',
      colorScheme: 'pink',
      icon: MastodonIcon,
   },
   {
      text: 'resume',
      href: '/myNewResume.pdf',
      colorScheme: 'green',
      icon: ResumeIcon,
   },
];

export default WEB_LINKS;
