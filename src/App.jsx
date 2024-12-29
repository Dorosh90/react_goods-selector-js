import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import classNames from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [good, setGood] = useState('Jam');
  const [message, setMessage] = useState('Jam is selected');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {message}

        {good && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => {
              setGood('');
              setMessage('No goods selected');
            }}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(goodName => (
            <tr
              data-cy="Good"
              key={goodName}
              className={classNames({
                'has-background-success-light': goodName === good,
              })}
            >
              <td>
                <button
                  data-cy={goodName === good ? 'RemoveButton' : 'AddButton'}
                  type="button"
                  className={classNames('button', {
                    'is-info': good === goodName,
                  })}
                  onClick={() => {
                    if (good !== goodName) {
                      setGood(goodName);
                      setMessage(`${goodName} is selected`);
                    } else {
                      setGood('');
                      setMessage('No goods selected');
                    }
                  }}
                >
                  {good === goodName ? '-' : '+'}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {goodName}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
