import './index.css'

const Login = props => {
  const {onClick} = props
  console.log(onClick)
  console.log(`Login Button `)
  return (
    <button onClick={onClick} className="button" type="button">
      Login
    </button>
  )
}

export default Login
