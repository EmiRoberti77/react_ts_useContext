import { AppContext, useMyContext } from './context';

const DisplayButton = () => {
  const context: AppContext = useMyContext();
  const { value, setValue } = context;
  const className = 'panel-' + value;
  return (
    <div>
      Display Button {value}
      <div>
        <input
          type="checkbox"
          checked={value === 'light'}
          onChange={(e) => setValue(value === 'light' ? 'dark' : 'light')}
        />
      </div>
    </div>
  );
};

export default DisplayButton;
