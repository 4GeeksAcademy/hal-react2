
export const Alert = () => {
  // 3.- Codigo JS
  const alertInfo = {
    text: 'Soy el alert mas alertoso',
    background: 'warning',
    visible: false
  }

  // 4.- Retorno un solo elemento HTML
  return (
    <div className={`container ${alertInfo.visible ? '' : 'd-none'}`}>
      <div className={`alert alert-${alertInfo.background}`} role="alert">
        {alertInfo.text}
      </div>
    </div>
  )
}



