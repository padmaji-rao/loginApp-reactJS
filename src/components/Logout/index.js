import './index.css'

const Logout = props => {
  const {onClick} = props
  console.log(`Logout Button`)
  return (
    <button onClick={onClick} className="button" type="button">
      Logout
    </button>
  )
}

export default Logout
