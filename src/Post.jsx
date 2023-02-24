export default function Post(props) {
  return (
    <>
      <h1>{props.author}</h1>
      <span>{props.content}</span>
    </>
  )
}
