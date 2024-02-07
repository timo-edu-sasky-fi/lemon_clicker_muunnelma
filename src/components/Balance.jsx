import shortenNumber from '../utils/shortenNumber';

function Balance(props) {
  // Poimitaan komponentille välitetty total-arvo
  const total = shortenNumber(props.total);

  var level_up_text = 'Noviisi';

  if (total > 5) {
    level_up_text = 'Hyvä';
  }
  if (total > 10) {
    level_up_text = 'Kehittyvä';
  }
  if (total > 15) {
    level_up_text = 'Parempi jo';
  }
  if (total > 20) {
    level_up_text = 'Aika hyvä';
  }
  if (total > 25) {
    level_up_text = 'Alkaa olla hyvä';
  }
  if (total > 30) {
    level_up_text = 'Melkein mestari';
  }
  if (total > 35) {
    level_up_text = 'Nyt mestari!';
  }
  if (total > 40) {
    level_up_text = 'Supermestari!';
  }

  return (
    <div className='balance_container'>
      <div className='level_up_text'>
        {level_up_text}
      </div>
      <div className="balance">
        <div>lemons</div>
        <div className="balance_total">{total}</div>
      </div>
    </div>
  );
}

export default Balance;
