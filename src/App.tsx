import React, { useState } from 'react';
import './App.scss';
import currencyData from './components/Data/CurrecnyData';

const App = () => {
  const [checkedCurrency, setCheckedCurrency] = useState<string[]>([]);

  const getCurrency = (current:string) => {
    const newArray = [...checkedCurrency];
    const index = newArray.findIndex((element) => element === current);
    newArray.splice(index, 1);
    return newArray;
  };

  return (
    <div className=" container-fluid ">
      <div className="row center-xs">
        <div className="col-xs-5">
          <div className="currency__section">
            <div className="col-xs-12">
              <div className="checked__currency">
                {checkedCurrency.map((checkedCurr) => (
                  <div className="col-xs-4">
                    <div
                      className="currency__box-checked"
                      onClick={() => (!checkedCurrency.includes(checkedCurr)
                        ? setCheckedCurrency([...checkedCurrency, checkedCurr])
                        : setCheckedCurrency(getCurrency(checkedCurr))
                      )}
                    >
                      <div
                        className="checked__checkbox"
                      >
                        <span>X</span>
                      </div>
                      <span>{checkedCurr.toLowerCase()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {currencyData.map((currency) => (
              <div className="col-xs-4">
                <div
                  className={checkedCurrency.includes(currency) ? 'currency__box white' : 'currency__box'}
                  onClick={() => (!checkedCurrency.includes(currency)
                    ? setCheckedCurrency([...checkedCurrency, currency])
                    : setCheckedCurrency(getCurrency(currency)))}
                >
                  <div
                    className="currency__checkbox"
                  >
                    {checkedCurrency.includes(currency)
                      ? (<span style={{ color: '#F03024' }}>X</span>)
                      : (<span style={{ color: 'transparent' }}>X</span>)}
                  </div>
                  <span className="currency__name">{currency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
