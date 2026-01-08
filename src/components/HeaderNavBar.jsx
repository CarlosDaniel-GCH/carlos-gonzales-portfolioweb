function HeaderNavBar({ title, icon, href }){
    return(
        <button className="hover:text-zinc-400 transition-colors">
            {icon}
            <a href={href}>{title}</a>
        </button>
    )
}

export default HeaderNavBar