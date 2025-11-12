import imgheader from "../assets/header2.jpg"
import headerStyle from "../CSS/header.module.css"

export function Header() {
    return <>
        <div className={headerStyle.header}>
            <img src={imgheader} alt="header" />
        </div>

    </>

}