
import React from "react";

export const scrollToElement = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    console.log(e.currentTarget.dataset.link);

    const link: string | undefined = e.currentTarget.dataset.link;

    if (link)
        document.getElementById(link)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

}