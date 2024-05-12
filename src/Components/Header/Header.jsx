export const Header = () => {
  return (
    <nav className="navbar shadow-sm bg-blue-400 dark:bg-blue-800">
      <div className="flex justify-between p-5">
        <a href="">Ignatius Alexander Hery</a>
        <div className="">
          <ul className="flex justify-evenly gap-4">
            <li className="active:">
              <a className="nav-link" href="#Home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
