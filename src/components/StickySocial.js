import React from 'react'
import { IconBrandInstagram, IconBrandGithub, IconBrandTwitter, IconBrandLinkedin, IconBrandTelegram } from "@tabler/icons";

export const StickySocial = () => {

    return (
        <div className="sticky-left">
            <ul>
                <li>
                    <a href='https://twitter.com/lemonhayds' target="_blank">
                        <IconBrandTwitter />
                    </a>
                </li>
                <li>
                    <a href='https://github.com/LemonHayds' target="_blank">
                        <IconBrandGithub />
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/hayden.sherwood/' target="_blank">
                        <IconBrandInstagram />
                    </a>
                </li>
                <li>
                    <a href='https://www.linkedin.com/in/hayden-sherwood-363749185/' target="_blank">
                        <IconBrandLinkedin />
                    </a>
                </li>
                <li>
                    <a href='https://t.me/haydensherwood' target="_blank">
                        <IconBrandTelegram />
                    </a>
                </li>
            </ul>
        </div>
    )
}

