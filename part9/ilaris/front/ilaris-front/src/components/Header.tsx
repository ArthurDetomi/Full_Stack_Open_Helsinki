interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
  return <h1>{props.title}</h1>;
};

export default Header;
