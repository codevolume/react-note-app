import Search from "../Search-component/search.component";
import NoteList from '../Notes-component/notes.component';

const SideBar = () => {
  return (
    <div className="SideBar">
      <Search />
      <NoteList />
    </div>
  );
};

export default SideBar;