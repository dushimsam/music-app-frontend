import Router from "next/router";
import { openInNewTabWinBrowser} from "./functions";

const moveTo = (path, link) => {
    openInNewTabWinBrowser(path + "?subject=" + link);
}

const moveToAddition = (path, link, addition) => {
    openInNewTabWinBrowser(path + "?subject=" + doubleEncryption(link) + "&addition=" +
        addition
    );
}


export const handleGoTo = (notification) => {

    switch (notification.type) {
        case 'DIRECT_PURCHASE':
            moveTo("/shared/direct-purchases", notification.link);
            break;
        case 'SUPPLY_MADE':
            moveTo("/shared/supply/supplies", notification.link);
            break;
        default:
            console.log("invalid type ", notification.type)
    }
}
