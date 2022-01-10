function ReactHeader(props) {
  const { version = "16" } = props;
  return <h1>React {version} Documentation</h1>;
}

export default ReactHeader;
