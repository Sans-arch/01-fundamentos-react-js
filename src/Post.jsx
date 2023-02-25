export function Post(props) {
  return (
    <div>
      <h1>{props.author}</h1>
      <span>{props.content}</span>
    </div>
  )
}
