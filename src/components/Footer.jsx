import discordBlack from "../assets/discord.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/reshot-icon-linkedin-G7YJ8FXBKT.svg";
import gmail from "../assets/image.png";


function Footer() {
    const socials = [
        {
            id: "0",
            title: "Gmail",
            iconUrl: gmail,
            url: "mailto:harishkumar.expert@gmail.com",
        },
        {
            id: "1",
            title: "LinkedIn",
            iconUrl: linkedin,
            url: "https://www.linkedin.com/in/harishkumarsenthil495",
        },
        {
            id: "2",
            title: "Twitter",
            iconUrl: twitter,
            url: "https://x.com/hksenthil97875",
        },
        {
            id: "3",
            title: "Instagram",
            iconUrl: instagram,
            url: "https://www.instagram.com/harikutty_495",
        },
        {
            id: "4",
            title: "Discord",
            iconUrl: discordBlack,
            url: "https://discord.com/hps143",
        },
];

  return (
      <section  className="px-10 pt-10 pb-3  text-center">
        <hr className="p-3"/>
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href={item.url}
              key={item.id}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} alt={item.title} height={16} width={16} />
            </a>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Footer