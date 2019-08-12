import Facebook from "./images/facebook.png";
import Twitter from "./images/twitter.png";
import Whatsapp from "./images/whatsapp.png";
import Telegram from "./images/telegram.png";
import Meetup from "./images/meetup.png";
import LinkedIn from "./images/linkedIn.png";
import Youtube from "./images/youtube.png";

const config = {
    description: "קהילת המפתחים החרדים ושומרי התורה מאגדת ומחברת את כלל האנשים בתעשייה ומספקת להם את הצרכים שהמפתח צריך בסביבה הנוחה לאורח חיים שומר תורה",
    targets: ["היכרות עם כל מה שקורה בתעשייה בארץ ובעולם.", "טרנדים טכנולוגים חדשים.", "כנסים טכנולוגים והאקטונים.", "קורסים טכנולוגים."],
    networks: [
        {
            url: "https://chat.whatsapp.com/LkhoVLUg8gAGw9vTdHtHJc",
            icon: Whatsapp,
            displayName: 'גברים'
        },
        {
            url: "https://chat.whatsapp.com/LHD5e3egpIRC9subf5HYUK",
            icon: Whatsapp,
            displayName: 'נשים'
        },
        {
            url: "https://www.facebook.com/groups/265568917670650/",
            icon: Facebook
        },
        {
            url: "https://twitter.com/DDoSDevelopers",
            icon: Twitter
        },
        {
            url: "https://t.me/DDosDevelopersGroup",
            icon: Telegram
        },
        {
            url: "https://www.meetup.com/DDOS-DEVELOPERS-IL/",
            icon: Meetup
        },
        {
            url: "https://www.linkedin.com/groups/8772672",
            icon: LinkedIn
        },
        {
            url: "https://www.youtube.com/channel/UCgVv3AFwYIBYxX_Dm_hAvtA",
            icon: Youtube
        },
    ]
};

export default config;