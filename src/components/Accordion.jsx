import data from '../data';

export default function Accordion({ selected, setSelected }) {
    const handleSingleSelection = (getCurrentId) => {
        // console.log(getCurrentId);
        setSelected(getCurrentId === selected ? null : getCurrentId);
    };

    return (
        <div className='wrapper'>
            {/* <button></button> */}
            <div className='accordion'>
                {data && data.length > 0
                    ? data.map((dataItem) => (
                          <div key={dataItem.id} className='item'>
                              <div
                                  className='title'
                                  onClick={(getCurrentId) =>
                                      handleSingleSelection(dataItem.id)
                                  }
                              >
                                  <h3>{dataItem.question}</h3>
                                  <span>
                                      {selected === dataItem.id ? '➖' : '➕'}
                                  </span>
                              </div>
                              <div className='answer'>
                                  {selected === dataItem.id ? (
                                      <div className='content'>
                                          {dataItem.answer}
                                      </div>
                                  ) : null}
                              </div>
                          </div>
                      ))
                    : 'No data found!'}
            </div>
        </div>
    );
}
