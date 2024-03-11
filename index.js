const Button = props => {
  const {buttonText, className} = props
  return <button className={`button ${className}`}>{buttonText} </button>
}

const element = (
  <div className='bg-container'>
    <div className='button-container'>
      <h1 className='main-heading'>Social Buttons</h1>
      <div className='buttons-container'>
        <Button buttonText='Like' className='like-btn' />
        <Button buttonText='Comment' className='cmnt-btn' />
        <Button buttonText='Share' className='share-btn' />
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
