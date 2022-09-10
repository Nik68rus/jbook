import { useState, useEffect, useRef } from 'react';
import MDEditor from '@uiw/react-md-editor';
import './text-editor.scss';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface TextEditorProps {
  cell: Cell;
}

const TextEditor: React.FC<TextEditorProps> = ({cell}) => {
  const [editing, setEditing] = useState(false);
  const editorRef = useRef<HTMLDivElement | null>(null);
  const {updateCell} = useActions();

  useEffect(() => {
    const listener = (evt: MouseEvent) => {
      if (
        editorRef.current &&
        evt.target &&
        editorRef.current.contains(evt.target as Node)
      ) {
        return;
      }
      setEditing(false);
    };

    document.addEventListener('click', listener, { capture: true });

    return () => {
      document.removeEventListener('click', listener, { capture: true });
    };
  }, []);

  if (editing) {
    return (
      <div ref={editorRef} className="text-editor">
        <MDEditor value={cell.content} onChange={(v) => updateCell(cell.id, v || '')} />
      </div>
    );
  }
  return (
    <div className="text-editor card" onClick={() => setEditing(true)}>
      <div className="card-content">
        <MDEditor.Markdown source={cell.content || 'Click to edit'} />
      </div>
    </div>
  );
};

export default TextEditor;
