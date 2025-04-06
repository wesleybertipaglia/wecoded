import {
  EnvelopeSimple,
  FacebookLogo,
  LinkedinLogo,
  TelegramLogo,
  WhatsappLogo,
  XLogo,
} from "@phosphor-icons/react";

interface ShareProps {
  title: string;
  description?: string;
}

const Share: React.FC<ShareProps> = ({ title, description }) => {
  const url = typeof window !== "undefined" ? window.location.href : "";

  const getText = (): string => {
    const truncated =
      description && description.length > 100
        ? `${description.slice(0, 100)}...`
        : description || "";

    return `Hey WECODED! 👋\nI'm reading "${title}" on Wesley's site — it's part of the #wecoded event! 🚀\n\n${truncated}\n\nCheck it out:`;
  };

  const encode = (text: string) => encodeURIComponent(text);

  const text = getText();

  const socialLinks = [
    {
      name: "X",
      url: `https://x.com/intent/tweet?url=${encode(url)}&text=${encode(text)}`,
      icon: <XLogo weight="bold" size={20} />,
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encode(
        url
      )}&t=${encode(title)}`,
      icon: <FacebookLogo weight="bold" size={20} />,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encode(
        url
      )}&title=${encode(title)}`,
      icon: <LinkedinLogo weight="bold" size={20} />,
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encode(`${text} ${url}`)}`,
      icon: <WhatsappLogo weight="bold" size={20} />,
    },
    {
      name: "Telegram",
      url: `https://t.me/share/url?url=${encode(url)}&text=${encode(text)}`,
      icon: <TelegramLogo weight="bold" size={20} />,
    },
    {
      name: "Email",
      url: `mailto:?subject=${encode(title)}&body=${encode(text)}`,
      icon: <EnvelopeSimple weight="bold" size={20} />,
    },
  ];

  return (
    <div className="flex items-center gap-2">
      <p className="">Share this post: </p>

      <div className="flex gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${social.name}`}
            className="hover:opacity-75 transition-opacity duration-200 text-blue-600"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Share;
