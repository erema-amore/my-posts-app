
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
  <li><Link to="/">Главная</Link></li>
  <li><Link to="/add-post">Добавить пост</Link></li>
  <li><Link to="/favorites">Избранное</Link></li>
  <li><Link to="/search">Поиск</Link></li>
</ul>

    </nav>
  );
}

export default NavBar