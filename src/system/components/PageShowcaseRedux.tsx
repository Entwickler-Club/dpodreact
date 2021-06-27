import '../styles/showcaseRedux.scss';
import {store} from './store';
import {} from '../../context/ShowContext'
import { NewNoteInput } from "./NewNoteInput";
import { useSelector, useDispatch } from "react-redux";
import { NotesState } from "./notesReducer";
import { addNote } from "../actions/actions";
import {Provider} from "react-redux"


function PageShowcaseRedux() {
	
	const notes = useSelector<NotesState, NotesState["notes"]>(
		(state) => state.notes
	  );
	  const dispatch = useDispatch();
	
	  const onAddNote = (note: string) => {
		dispatch(addNote(note));
	  };
	
	return (
		<Provider store={store}>
		<div className="page page_showcaseRedux">
			<h2 className="title">Showcase Redux</h2>
			<p className="description">An info page that displays showcase redux.</p>	
			<p className="message">Welcome to this page.</p>
			<NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
		</div>
		</Provider>
	)
}

export default PageShowcaseRedux;