
export default function Home() {
    const classs = "p-1 bg-zinc-400 rounded-sm m-2"
    const routes = [
        {
            id : '1',
            name : "Home",
            path : "/home",
            style : classs
        },
        {
            id : '2',
            name : "About",
            path : "/about",
            style : classs
        },
        {
            id :'3',
            name : "SignIn",
            path : "/sign-in",
            style : classs
        },
        {
            id : '4',
            name : "Sign-out",
            path : "/sign-out",
            style : classs
        },
    ]

    const mapedRouters = routes.map((x) => {
        return <a href={x.path} className={`${x.style} `} key={x.id}>{x.name}</a>
    })

  return (
    <div className="flex gap-4 ">
        {mapedRouters}
    </div>
  )
}
